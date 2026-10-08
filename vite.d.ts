/// <reference path="./virtual.d.ts" />

import type { Plugin } from 'vite';
import type { CompileOptions } from './compile.js';

export interface TailmanticViteOptions extends CompileOptions {
  entry?: string;
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
