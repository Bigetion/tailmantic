/// <reference path="./virtual.d.ts" />

import type { InlineConfig, Plugin } from 'vite';
import type { CompileOptions } from './compile.js';

export interface TailmanticViteOptions extends CompileOptions {
  entry?: string;
  /** Vite SSR options used while loading the manifest entry. */
  ssr?: InlineConfig['ssr'];
  /** Optional disk copy of generated CSS; by default, use the virtual stylesheet module. */
  outFile?: string;
  /** Force physical file output even when virtual module would work. Useful for online IDEs like CodeSandbox. */
  forceOutFile?: boolean;
  watch?: string;
  /**
   * @deprecated Use `optimize: true` instead. Will be removed in a future version.
   */
  minify?: boolean;
}

export declare function tailmantic(options?: TailmanticViteOptions): Plugin;
export default tailmantic;
