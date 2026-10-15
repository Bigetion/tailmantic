# Style Authoring Guide

This guide covers all supported writing styles for `register()` and `register.all()` in the collector. Every form produces identical output — pick whichever fits your component's complexity.

---

## `register()` — Single Class

### 1. String (most compact)

Best for short, single-purpose classes.

```js
import { register } from 'tailmantic/collector';

register('tm-badge', 'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium');
```

### 2. String Array (readable long lists)

Best when a class has many utilities. Split by concern: layout, spacing, color, state.

```js
register('tm-button', [
  'inline-flex items-center justify-center gap-2',
  'h-9 px-4 rounded border border-transparent',
  'text-[13px] font-medium uppercase tracking-wide',
  'cursor-pointer transition-colors duration-150',
  'hover:opacity-90',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8baeff]',
  'disabled:cursor-not-allowed disabled:opacity-40',
]);
```

### 3. Flat `{ tw }` Object

Useful when you want the object form without the `base` wrapper.

```js
register('tm-card', { tw: 'rounded-xl border border-[#303a49] bg-[#111720] p-4' });

// also accepts an array
register('tm-card', { tw: ['rounded-xl border border-[#303a49]', 'bg-[#111720] p-4'] });
```

### 4. Canonical `{ base }` Object

The explicit form. Use it when you also need `modifiers`.

```js
register('tm-alert', {
  base: { tw: 'flex items-start gap-3 rounded-lg border p-4' },
});
```

### 5. Full Form with Modifiers

Use when a component has named state variants.

```js
register('tm-button', {
  base: { tw: 'inline-flex h-9 items-center rounded px-4 font-medium transition-colors' },
  modifiers: {
    contained: { tw: 'bg-[#547be8] text-white hover:bg-[#6689ed]' },
    outlined:  { tw: 'border border-[#607db9] text-[#9bbcff] hover:bg-[rgba(125,159,255,.12)]' },
    text:      { tw: 'bg-transparent text-[#9bbcff] hover:bg-[rgba(125,159,255,.12)]' },
  },
});
```

Modifiers auto-generate sibling classes: `tm-button-contained`, `tm-button-outlined`, `tm-button-text`.

---

## `register.all()` — Multiple Classes

### 6. Flat Map (classic)

Register multiple unrelated classes in one call.

```js
register.all({
  'tm-badge':   'inline-flex items-center rounded-full px-2 py-0.5 text-xs',
  'tm-divider': 'h-px w-full bg-[var(--border,#273142)]',
  'tm-overlay': 'fixed inset-0 bg-black/50',
});
```

Accepts all value forms (string, array, `{ tw }`, `{ base }`, full object) per entry.

### 7. Prefixed Map (no repeated prefix)

Best for a single component with many sub-elements. The first argument is the shared prefix; keys are suffixes.

```js
register.all('tm-accordion', {
  // root — empty string key
  '': [
    'w-full max-w-[620px] overflow-hidden rounded-lg',
    'border border-[var(--border,#273142)]',
    'bg-[#111720] text-[var(--text,#edf2fb)]',
  ],

  // simple suffix  →  'tm-accordion-item'
  'item':    'border-b border-[var(--border,#273142)] last:border-b-0',
  'heading': 'm-0',

  'trigger': [
    'flex min-h-12 w-full appearance-none',
    'items-center gap-3 px-4 py-3',
    'border-0 bg-transparent text-left text-[10px] text-current',
    'cursor-pointer shadow-none transition-colors',
    'hover:bg-white/[0.025]',
    'focus-visible:outline-2 focus-visible:outline-[#8baeff]',
    'disabled:cursor-not-allowed',
  ],

  // compound selector — prefix '&' to keep the full suffix as-is after prepending prefix
  // '&item-expanded .tm-accordion-chevron'  →  'tm-accordion-item-expanded .tm-accordion-chevron'
  '&item-expanded .tm-accordion-chevron': 'rotate-180 text-[#a9c4ff]',
  '&item-expanded':                        'bg-[#ffffff04]',
  '&item-disabled .tm-accordion-trigger': 'text-[#707b8b] hover:bg-transparent',

  // attribute selector suffix
  '&panel[hidden]': 'hidden',

  // root descendant selector — keep a space after '&'
  '& [hidden]': 'hidden',

  // descendant element selector
  '&toolbar button': [
    'cursor-pointer border-0 bg-transparent p-0',
    'text-[8px] font-medium text-[#a9c4ff]',
    'hover:text-white',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8baeff]',
  ],
});
```

#### Key resolution rules for prefixed map

| Key pattern | Example | Resolved selector |
|---|---|---|
| `''` (empty) | `''` | `tm-accordion` |
| Plain suffix | `'item'` | `tm-accordion-item` |
| `&` + suffix | `'&panel[hidden]'` | `tm-accordion-panel[hidden]` |
| `&` + compound | `'&item-expanded .tm-accordion-chevron'` | `tm-accordion-item-expanded .tm-accordion-chevron` |
| `&` + descendant | `'&toolbar button'` | `tm-accordion-toolbar button` |
| `& ` + descendant from root | `'& [hidden]'` | `tm-accordion [hidden]` |

`&` is a Tailmantic prefix-map marker, not CSS nesting syntax. Without a space, its suffix is joined to the prefix with `-`; with a space, it denotes a descendant selector under the root.

---

## Choosing a Style

| Situation | Recommended form |
|---|---|
| One class, short utilities | String (`'...'`) |
| One class, many utilities | String array (`[...]`) |
| Many unrelated classes | `register.all({ flat map })` |
| One component with a root, variants, and sub-elements | `register.all('prefix', { ... })` |
| One class needing modifiers without sub-elements | Full `{ base, modifiers }` |

For reusable components, prefer the prefixed map to keep the root, named variants, and sub-elements together with direct string or array values. All forms remain supported and can be mixed when useful.

---

## Complete Example

```js
import { register } from 'tailmantic/collector';

// shared utility used by multiple components
register('tm-focus-ring', 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8baeff]');

// component with modifiers
register('tm-button', {
  base: { tw: ['inline-flex h-9 items-center gap-2 rounded px-4', 'text-[13px] font-medium transition-colors'] },
  modifiers: {
    contained: { tw: 'bg-[#547be8] text-white hover:bg-[#6689ed]' },
    outlined:  { tw: 'border border-[#607db9] text-[#9bbcff]' },
  },
});

// component with many sub-elements
register.all('tm-card', {
  '':       ['rounded-xl border border-[#303a49] bg-[#111720]', 'overflow-hidden shadow-md'],
  'header': 'flex items-center justify-between px-5 py-4 border-b border-[#303a49]',
  'body':   'px-5 py-4',
  'footer': 'flex items-center gap-2 px-5 py-3 border-t border-[#303a49]',
});
```
