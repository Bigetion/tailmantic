import { register } from 'tailmantic/collector';

// App-specific global resets and base styles.
// CSS variable tokens are provided by @tailmantic/ui-components/tokens/dark
// (imported via index.js) — only app-level overrides belong here.
register.all({
  '*': {
    'box-sizing': 'border-box',
    margin: '0',
    padding: '0',
  },
  body: {
    tw: 'min-h-screen bg-[var(--page)] font-[DM_Sans,sans-serif] text-sm text-[var(--text)] antialiased',
  },
  '::selection': {
    color: '#fff',
    'background-color': 'var(--rgi-blue-dark)',
  },
});
