// Path: src/lib/useStyleSource.js
// The glob path is relative to THIS file, which lives at src/lib/.
// tailmantics/demo/ is at src/tailmantics/demo/, so the relative path is:
const styleSources = import.meta.glob('../tailmantics/demo/*.js', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const STYLE_NOTES = {
  checkbox: 'Base component styles are provided by @tailmantic/ui-components/checkbox.',
};

export function getStyleSource(slug) {
  const key = `../tailmantics/demo/${slug}.js`;
  return styleSources[key] ?? STYLE_NOTES[slug] ?? '';
}
