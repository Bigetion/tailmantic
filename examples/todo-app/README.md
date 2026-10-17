# Daymark Todo

A responsive todo app built with the local `@tailmantic/ui-components` package. Buttons, fields, selection controls, chips, task lists, and feedback components all come from the component package. App-specific layout and theme styles are registered through Tailmantic, and tasks are saved in local storage on this device.

```sh
npm install
npm run dev
```

Use the sidebar to switch between all, today, upcoming, and completed tasks. Add tasks with the package DatePicker for due dates and the package Select for priority, search the list with `/`, and complete or remove items inline. Component styles are registered by the package and app-specific styles are compiled from `src/tailmantics` through the Tailmantic Vite plugin. This example does not use a separate Tailwind CSS/PostCSS pipeline.

```sh
npm run build
```