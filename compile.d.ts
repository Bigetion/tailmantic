import type { Registration } from './index.js';

export interface TailmanticManifest {
  classes?: Record<string, Registration | string>;
  groups?: Record<string, Record<string, Registration>>;
}

export interface CompileOptions {
  inputCss?: string;
  baseDir?: string;
  /**
   * Enable full production optimization: merges duplicate selectors, deduplicates rules, and minifies output.
   * Recommended for production builds.
   */
  optimize?: boolean;
  /**
   * Merge duplicate selectors without minifying. Useful for readable optimized output during development.
   */
  deduplicate?: boolean;
  /**
   * @deprecated Use `optimize: true` instead. Will be removed in a future version.
   */
  minify?: boolean;
  /** Enable debug logging (default: false) */
  debug?: boolean;
}

export declare function compile(
  manifest?: TailmanticManifest,
  options?: CompileOptions,
): Promise<string>;
export declare function compileToFile(
  manifest: TailmanticManifest,
  outputPath: string,
  options?: CompileOptions,
): Promise<string>;
export default compile;
