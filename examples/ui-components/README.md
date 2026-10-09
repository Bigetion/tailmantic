# Tailmantic UI Components

A component explorer for the Tailmantic UI library, built with React, React Router, Popper.js, and Vite. Every component has its own addressable page, live examples, usage snippet, and implementation source map. Component styles are registered as semantic classes and compiled by Tailmantic's Vite plugin.

Requires Node.js 20 or newer.

```sh
npm install
npm run dev
```

Run `npm run build` to verify the production bundle. Styles are defined in `src/tailmantics` and collected from `src/tailmantics/index.js`; the app loads the generated stylesheet through `virtual:tailmantic.css`.

Reusable React APIs and their base styles for all 47 components live in the standalone `@tailmantic/ui-components` package under `packages/ui-components`; showcase pages and interactive demo data remain in this application. The app's Tailmantic manifest imports the package style manifest so component base rules are included in the generated stylesheet. Accordion and Autocomplete examples use their package components directly; their appearance and interactions are implemented by the package rather than demo styles.

Each component page retains its own demo and source context:

```text
src/pages/components/button/Page.jsx
src/components/ui/button/Button.jsx
src/tailmantics/components/button.js
```

Component metadata, groups, and descriptions are defined in `src/data/components.js`; each page route is resolved to its own page module. Shared page layout, code panels, and interaction primitives stay reusable. Component-specific demo styles are imported by `src/tailmantics/demo/index.js`; Accordion has no demo stylesheet. Floating menus, tooltips, autocomplete/select examples, and popovers share a portal-based Popper implementation with flip and overflow handling, outside-click dismissal, and Escape-key support.
