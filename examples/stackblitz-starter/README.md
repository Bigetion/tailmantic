# tailmantic starter

Minimal starter template for [tailmantic](https://github.com/Bigetion/tailmantic) — React + Vite.

## What's included

- `src/tailmantics/button.js` — Button with variants and sizes
- `src/tailmantics/badge.js` — Badge with color variants
- `src/tailmantics/card.js` — Card group slots (header, body, footer)
- `src/tailmantics/input.js` — Input field with error state
- `src/tailmantics/index.js` — Manifest entry (add more files here)

## Run locally

```sh
npm install
npm run dev
```

## How to add a new component

1. Create `src/tailmantics/your-component.js`
2. Import it in `src/tailmantics/index.js`
3. Use the class names in your JSX: `<div className="your-component">`

## Learn more

- [Full documentation](https://github.com/Bigetion/tailmantic/tree/master/docs)
- [API reference](https://github.com/Bigetion/tailmantic/blob/master/docs/API.md)
- [Component demo](https://github.com/Bigetion/tailmantic/tree/master/examples/register-component-demo)
