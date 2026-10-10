# Tailmantic UI Components — Register Demo

A component showcase organized like `register-component-demo`: all 47 component groups from `@tailmantic/ui-components` are represented, and each demo has a React implementation in `src/components` with a matching Tailmantic registration in `src/tailmantics`.

The components and interactions are implemented locally and do not import `@tailmantic/ui-components`. Their dark theme follows the visual language of that package, while all component and app-shell utility styles are registered locally. `@popperjs/core` powers the anchored autocomplete, menu, popover, tooltip, and popper examples, including placement, flipping, overflow prevention, and offset controls.

The demos cover the same kinds of practical states shown in `examples/ui-components`: selectable and disabled states, alternate layouts and sizes, keyboard and dismissal behavior, loading and error feedback, accessibility preferences, and data-selection workflows. Controls are interactive so each state can be explored without editing the source.

```sh
npm install
npm run dev
```

The Vite plugin loads the Tailmantic manifest from `src/tailmantics/index.js`. Each component's JSX file owns its markup and interactions; the correspondingly named file in `src/tailmantics` registers that component's styles.
