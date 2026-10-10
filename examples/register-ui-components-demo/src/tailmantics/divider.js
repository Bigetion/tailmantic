import { register } from 'tailmantic/collector';

register('demo-divider', { base: { tw: 'my-1 h-px w-full border-0 bg-[var(--border)]' } });
register('demo-typography', {
  base: { tw: 'm-0 text-sm leading-relaxed text-[var(--text)]' },
  modifiers: {
    heading: { tw: 'text-xl font-semibold tracking-tight' },
    secondary: { tw: 'text-[var(--muted)]' },
  },
});
register.all({
  'demo-divider-vertical': { tw: 'mx-1 my-0 h-5 w-px shrink-0' },
  'demo-divider-inset': { tw: 'ml-5 w-[calc(100%-1.25rem)]' },
  'demo-divider-row': {
    tw: 'flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4 text-xs text-[var(--text-muted)]',
  },
});
