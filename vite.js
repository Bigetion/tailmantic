import { createRequire } from 'node:module';
import { resolve, relative, dirname, sep } from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { compile } from './compile.js';

const VIRTUAL_STYLESHEET_ID = 'virtual:tailmantic.css';
const RESOLVED_STYLESHEET_ID = `\0${VIRTUAL_STYLESHEET_ID}`;

function asViteModuleId(root, file) {
	return `/${relative(root, file).split(sep).join('/')}`;
}

export function tailmantic(options = {}) {
	const entry = options.entry || 'src/tailmantics/index.js';
	const outFile = options.outFile;
	const inputCss = options.inputCss || '@reference "tailwindcss"; @import "tailwindcss/utilities.css" source(none);';
	const debug = options.debug || false;
	const forceOutFile = options.forceOutFile ?? false; // Force physical file for environments like CodeSandbox
	
	let root = process.cwd();
	let outputPath;
	let entryPath;
	let watchPath;
	let compiledCss = null;
	
	let compilationCount = 0;

	// Persistent SSR server — created lazily on first compile, reused for all
	// subsequent compiles, and closed in the closeBundle/buildEnd hook.
	let ssrServer = null;
	
	// Auto-detect problematic environments
	const isCodeSandbox = process.env.CODESANDBOX_SSE || process.env.SANDBOX_ID || process.env.CODESANDBOX;
	const isStackBlitz = process.env.SHELL?.includes('webcontainer');
	const needsPhysicalFile = forceOutFile || isCodeSandbox || isStackBlitz;

	async function getOrCreateSsrServer() {
		if (ssrServer) return ssrServer;

		// Try direct import first (works in most environments including CodeSandbox)
		let viteModule;
		try {
			viteModule = await import('vite');
		} catch (_directImportError) {
			// Fallback to dynamic resolution for special environments
			try {
				const requireFromProject = createRequire(resolve(root, 'package.json'));
				const viteUrl = pathToFileURL(requireFromProject.resolve('vite')).href;
				viteModule = await import(viteUrl);
			} catch (fallbackError) {
				throw new Error('tailmantic/vite: Failed to import Vite. Make sure vite is installed as a dependency.', {
					cause: fallbackError,
				});
			}
		}

		const { createServer } = viteModule;
		if (typeof createServer !== 'function') {
			throw new TypeError('tailmantic/vite: createServer is not a function. Check your Vite installation.');
		}

		ssrServer = await createServer({
			configFile: false,
			root,
			server: { middlewareMode: true },
			appType: 'custom',
			logLevel: 'error',
			optimizeDeps: { noDiscovery: true, include: [] },
		});

		return ssrServer;
	}

	async function closeSsrServer() {
		if (ssrServer) {
			await ssrServer.close();
			ssrServer = null;
		}
	}

	async function compileStyles() {
		const startTime = Date.now();
		compilationCount++;
		
		const server = await getOrCreateSsrServer();

		// Invalidate all cached modules so re-imports pick up file changes.
		server.moduleGraph.invalidateAll();

		const collector = await server.ssrLoadModule('tailmantic/collector');
		collector.resetManifest();
		const module = await server.ssrLoadModule(asViteModuleId(root, entryPath));
		const manifest = module.default || module.manifest;
		if (!manifest || typeof manifest !== 'object') {
			throw new TypeError(`tailmantic/vite: ${entry} must export a manifest as default`);
		}
		
		// Pass through optimization options; compilation preserves CSS by default.
		compiledCss = await compile(manifest, {
			baseDir: root, 
			inputCss,
			minify: options.minify,
			optimize: options.optimize,
			deduplicate: options.deduplicate,
			debug,
		});
		
		// Write to disk if outFile is configured OR if we're in a problematic environment
		const actualOutputPath = outputPath || (needsPhysicalFile ? resolve(root, 'src/tailmantic.generated.css') : null);
		if (actualOutputPath) {
			await mkdir(dirname(actualOutputPath), { recursive: true });
			await writeFile(actualOutputPath, compiledCss);
			if (debug || needsPhysicalFile) {
				const envInfo = isCodeSandbox ? ' (CodeSandbox detected)' : isStackBlitz ? ' (StackBlitz detected)' : '';
				console.log(`[tailmantic] CSS written to ${actualOutputPath}${envInfo}`);
			}
		}
		
		if (debug) {
			const duration = Date.now() - startTime;
			console.log(`[tailmantic] Compiled in ${duration}ms (compilation #${compilationCount})`);
		}
		
		return manifest;
	}

	return {
		name: 'tailmantic:vite',
		enforce: 'pre',
		resolveId(id) {
			if (id === VIRTUAL_STYLESHEET_ID) return RESOLVED_STYLESHEET_ID;
		},
		load(id) {
			if (id === RESOLVED_STYLESHEET_ID) return compiledCss ?? '';
		},
		configResolved(config) {
			root = config.root;
			entryPath = resolve(root, entry);
			watchPath = resolve(root, options.watch || dirname(entry));
			
			// Determine output path
			if (outFile) {
				outputPath = resolve(root, outFile);
			} else if (needsPhysicalFile) {
				outputPath = resolve(root, 'src/tailmantic.generated.css');
				if (debug) {
					console.log('[tailmantic] Environment requires physical CSS file, using:', outputPath);
				}
			}
		},
		async buildStart() {
			await compileStyles();
		},
		async closeBundle() {
			await closeSsrServer();
		},
		async buildEnd(error) {
			// closeBundle does not fire on failed builds, so we close the SSR
			// server here too to avoid leaving it open when the build errors out.
			if (error) {
				await closeSsrServer();
			}
		},
		async configureServer(server) {
			await compileStyles();
			server.watcher.add(watchPath);

			let timer;
			let compiling = false;
			let pending = false;
			const rebuild = async () => {
				if (compiling) {
					pending = true;
					return;
				}
				compiling = true;
				try {
					await compileStyles();
					const stylesheetModule = server.moduleGraph.getModuleById(RESOLVED_STYLESHEET_ID);
					if (stylesheetModule) server.moduleGraph.invalidateModule(stylesheetModule);
					server.ws.send({ type: 'full-reload' });
				} catch (error) {
					server.config.logger.error(error instanceof Error ? error.message : String(error));
				} finally {
					compiling = false;
					if (pending) {
						pending = false;
					void rebuild();
					}
				}
			};
			const onChange = (file) => {
				if (file === outputPath || !/\.[cm]?[jt]sx?$/.test(file)) return;
				clearTimeout(timer);
				timer = setTimeout(() => void rebuild(), 60);
			};
			server.watcher.on('change', onChange);
			server.watcher.on('add', onChange);
			server.watcher.on('unlink', onChange);
			server.httpServer?.once('close', async () => {
				clearTimeout(timer);
				server.watcher.off('change', onChange);
				server.watcher.off('add', onChange);
				server.watcher.off('unlink', onChange);
				await closeSsrServer();
			});
		},
	};
}

export default tailmantic;