# Tailmantic UI documentation

The documentation site is the usage guide for `@tailmantic/ui-components`. It covers installation, Tailmantic style registration, themes, and component APIs with interactive examples.

## Run locally

Requires Node.js 20 or newer.

```sh
npm install
npm run dev
```

Build the site for production with:

```sh
npm run build
```

## Documentation structure

- `/` introduces the library and provides a quick start.
- `/getting-started/installation` covers package installation and Vite/Tailmantic setup.
- `/getting-started/usage` explains package imports and controlled component usage.
- `/customization/theming` documents theme tokens and selective component styles.
- `/components` lists components by category.
- `/components/:slug` provides component usage, interactive examples, and a link to its public TypeScript API.

The library package and component base styles live in `packages/ui-components`. This app contains documentation pages and example-only styles; application-specific styles are not required to consume the package.
