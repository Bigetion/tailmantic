import { cx, register, type Registration } from 'tailmantic';
import 'virtual:tailmantic.css';
import { getManifest, register as collect } from 'tailmantic/collector';
import { compile, type TailmanticManifest } from 'tailmantic/compile';
import { tailmantic, type TailmanticViteOptions } from 'tailmantic/vite';
import { compound, createVariants, mergeVariants } from 'tailmantic/variants';
import type { Plugin } from 'vite';

const button: Registration = {
	base: { display: 'inline-flex', tw: ['items-center', 'gap-2'] },
	modifiers: { primary: { color: 'white' } },
	extend: ['control', 'focusable'],
};

register('button', button);
register.group('card', { root: { borderRadius: '8px' } });
const className: string = cx.with('button')('button-primary', { disabled: false });

collect('button', button);
const manifest: TailmanticManifest = getManifest();
const compiledCss: Promise<string> = compile(manifest, { baseDir: '.' });
const variantClasses: string[] = createVariants({
	variants: { size: { sm: { padding: '4px' } } },
}).compose({ size: 'sm' }, 'button');
const mergedVariants = mergeVariants(
	{ base: { display: 'inline-flex' } },
	{ compoundVariants: [compound({ size: 'sm' }, { padding: '4px' })] },
);

const options: TailmanticViteOptions = { entry: 'src/tailmantics/index.ts', outFile: '.tailmantic/style.css' };
// @ts-expect-error removed in v2
const obsoleteOptions: TailmanticViteOptions = { cache: true };
const plugin: Plugin = tailmantic(options);

void className;
void compiledCss;
void variantClasses;
void mergedVariants;
void obsoleteOptions;
void plugin;