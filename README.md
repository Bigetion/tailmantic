# tailmantic

[![npm version](https://img.shields.io/npm/v/tailmantic.svg)](https://www.npmjs.com/package/tailmantic)
[![npm downloads](https://img.shields.io/npm/dm/tailmantic.svg)](https://www.npmjs.com/package/tailmantic)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/github/Bigetion/tailmantic/tree/main/examples/stackblitz-starter)

Build your own semantic design system on Tailwind CSS v4. Register the utility styles your app uses, then compile them into reusable classes with Tailmantic's Vite plugin or compiler.

Tailmantic is a styling toolkit, not a ready-made component library: you define the styles and components that fit your product. It compiles only registered Tailwind utilities, and also offers a CSS-only runtime for plain declarations.

> **ESM only.** This package requires Node.js 18+ and a bundler that supports ES Modules (Vite, webpack 5, Rollup, esbuild). CommonJS `require()` is not supported.

See [CHANGELOG](./docs/CHANGELOG.md) for version history.

## Try It Online

**[▶ Open in StackBlitz](https://stackblitz.com/github/Bigetion/tailmantic/tree/main/examples/stackblitz-starter)** — no install needed, runs in your browser.

## Features

- Build semantic classes and component styles owned by your app
- Compile Tailwind utilities onto semantic selectors such as `.action-button` and `.action-button-primary`
- Compile only explicitly registered utilities instead of scanning JSX or HTML
- Register component slots with `register.group()`
- Use utility arrays and grouped prefixes such as `max-sm:(w-full flex-col)`
- Compose conditional class names with `cx()` or generate variant registrations with `tailmantic/variants`
- Choose a Vite plugin, a manual compiler step, or the CSS-only runtime
- Extract runtime CSS for server-side rendering

## Install

```sh
npm install tailmantic
```

## How It Works

For a React app, the Vite plugin is the shortest path:

```text
registration files -> Vite collects styles -> Tailwind v4 compiles utilities -> virtual CSS -> semantic classes in JSX
```

You write `register()` calls in JavaScript modules. The plugin collects them from `src/tailmantics/index.js` and exposes compiled CSS as `virtual:tailmantic.css`. You do not create a manifest by hand. Tailmantic compiles only registered utilities; it does not scan JSX or HTML for class names, and its stylesheet does not include Tailwind Preflight.

For apps without Vite, use `compileToFile()` in a build script. If you do not need Tailwind, use the CSS-only runtime API instead.

## Quick Start: React + Vite

Create a React app if you do not already have one:

```sh
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm install tailmantic
npm install -D @tailwindcss/postcss postcss postcss-selector-parser
```

Vite's React template already includes Vite and `@vitejs/plugin-react`. Add the Tailmantic plugin to `vite.config.js`:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tailmantic } from 'tailmantic/vite';

export default defineConfig({
  plugins: [react(), tailmantic()],
});
```

Create `src/tailmantics/button.js` and register a component style:

```js
import { register } from 'tailmantic/collector';

register('action-button', {
  base: {
    tw: [
      'inline-flex items-center rounded-md',
      'px-4 py-2 font-medium',
    ],
  },
  modifiers: {
    primary: { tw: 'bg-blue-600 text-white hover:bg-blue-700' },
    secondary: { tw: 'bg-gray-100 text-gray-900' },
  },
});
```

Create `src/tailmantics/index.js` to collect the styles. The Vite plugin uses this entry by default:

```js
import { getManifest } from 'tailmantic/collector';
import './button.js';

export default getManifest();
```

Import the virtual stylesheet once in `src/main.jsx`:

```js
import 'virtual:tailmantic.css';
```

Then use the semantic class in your React component:

```jsx
import { cx } from 'tailmantic';

export function Button({ variant = 'primary', className, ...props }) {
  return (
    <button
      className={cx('action-button', `action-button-${variant}`, className)}
      {...props}
    />
  );
}
```

Run the app as usual:

```sh
npm run dev
```

The CSS flow is handled by Vite: it watches `src/tailmantics`, recompiles when a registration changes, and emits CSS during `npm run build`. The component demo in [`examples/register-component-demo`](./examples/register-component-demo/README.md) shows the complete setup.

## Writing Utilities

A `tw` value can be a string or an array of strings. Use a string for a short set of utilities and an array to keep longer sets readable:

```js
register('action-button', {
  tw: [
    'inline-flex items-center rounded-md',
    'bg-blue-600 px-4 py-2 font-medium text-white',
    'hover:(bg-blue-700 text-white)',
  ],
});
```

Grouped prefixes expand at compile time:

```text
max-sm:(w-full flex-col) -> max-sm:w-full max-sm:flex-col
border-(2 red-500)       -> border-2 border-red-500
```

Native Tailwind v4 single-value shorthand such as `bg-(--brand)` is passed through unchanged. Use Tailwind v4 slash notation for color alpha, for example `bg-red-500/50`.

## Other Build Setups

For bundlers without a Tailmantic plugin, compile a manifest in a Node build script and import the generated CSS through your app's normal CSS pipeline:

```js
// scripts/build-styles.mjs
import { compileToFile } from 'tailmantic/compile';

const manifest = {
  classes: {
    'action-button': {
      tw: 'inline-flex rounded-md bg-blue-600 px-4 py-2 text-white',
    },
  },
};

await compileToFile(manifest, 'src/tailmantic.css');
```

Run `node scripts/build-styles.mjs` before your framework's build command, then import `src/tailmantic.css` from your app entry. If you use a custom Tailwind theme or CSS-first plugins, pass an `inputCss` option that references your app stylesheet:

```js
await compileToFile(manifest, 'src/tailmantic.css', {
  inputCss: '@reference "./src/app.css"; @import "tailwindcss/utilities.css";',
  baseDir: process.cwd(),
});
```

See the [integration guide](./docs/INTEGRATIONS.md) for more build and server-rendering options.

## CSS-Only Runtime

For plain CSS declarations without Tailwind, import `register()` from the package root:

```js
import { register } from 'tailmantic';

register('notice', {
  padding: '0.75rem 1rem',
  color: '#1e3a8a',
  backgroundColor: '#eff6ff',
});
```

In the browser, the runtime injects a style tag. In Node.js, call `register.extractCSS()` after importing registration modules to get the registered CSS for server-side extraction. The runtime API does not compile `tw` utilities.

## API and Guides

- [Documentation guide](./docs/README.md) — choose a workflow and find the right guide
- [API reference](./docs/API.md) — runtime, collector, compiler, and Vite APIs
- [Integrations](./docs/INTEGRATIONS.md) — Vite, other bundlers, and runtime CSS extraction
- [CodeSandbox & Online IDEs](./docs/CODESANDBOX.md) — setup for browser-based development
- [Advanced guide](./docs/ADVANCED.md) — themes, variants, CSS layers, and container queries
- [Troubleshooting](./docs/TROUBLESHOOTING.md) — common compiler, CSS, and Vite issues
- [Migration guide](./docs/MIGRATION.md) — upgrade from v1 to v2
- [Changelog](./docs/CHANGELOG.md) — release history
- [Examples](./examples/) — component library and todo app

## Why Tailmantic

Most approaches make you choose: **Tailwind's power** *or* **clean class names in HTML**. Tailmantic gives you both.

```html
<!-- ❌ CVA + Tailwind — utility strings sprawl in every JSX file -->
<button class="inline-flex items-center justify-center gap-2 font-medium rounded-md
               bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-2
               focus-visible:outline-blue-600 px-4 py-2 text-sm transition-colors">

<!-- ✅ tailmantic — semantic names, Tailwind compiled underneath -->
<button class="btn btn-primary btn-md">
```

| | tailmantic | CVA + Tailwind | twin.macro | vanilla-extract |
|---|---|---|---|---|
| Semantic class names in HTML | ✅ `.btn .btn-primary` | ❌ utility strings | ❌ hashed | ❌ hashed |
| Tailwind v4 support | ✅ native | ✅ | ❌ | ❌ |
| Zero JS runtime | ✅ | ⚠️ +2 KB CVA | ❌ +8–13 KB | ✅ |
| Extend / inheritance | ✅ built-in | ❌ | ❌ | ❌ |
| CSS output (22 components) | **~7 KB gzip** | ~10–15 KB | N/A | ~8–12 KB |
| Active in 2025 | ✅ | ✅ | ⚠️ stale | ✅ |

## Bundle Size

The [component demo](./examples/register-component-demo) — 22 full UI components — produces:

| | Raw | Gzip |
|---|---|---|
| Tailwind v4 base layer (fixed overhead) | 27.4 KB | ~5.5 KB |
| Tailmantic semantic classes (200+ rules) | 9.8 KB | ~1.9 KB |
| Keyframes + CSS variables | 1.7 KB | ~0.7 KB |
| **Total** | **38.9 KB** | **7.3 KB** |

Zero KB of JavaScript runtime overhead. The base layer overhead is fixed — adding more components costs only ~0.09 KB gzip each.

## When to Use Tailmantic

Tailmantic is for projects that want Tailwind v4 utilities compiled onto semantic class names from an explicit set of registrations. It is especially useful when component markup should stay independent of the utilities that style it. Choose the CSS-only runtime when you only need plain declarations.

## Support This Project

If Tailmantic helps your project, consider buying me a coffee! Your support helps maintain and improve the library.

<a href="https://buymeacoffee.com/bigetion" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="200" /></a>

## Contributing

Contributions are welcome. Report bugs and feature requests through [GitHub Issues](https://github.com/Bigetion/tailmantic/issues/new).

## License

MIT
