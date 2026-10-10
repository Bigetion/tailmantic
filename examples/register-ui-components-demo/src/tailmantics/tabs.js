import { register } from 'tailmantic/collector';

register('demo-tabs', { base: { tw: 'w-full max-w-[700px]' } });
register('demo-tab-list', { base: { tw: 'flex border-b border-[var(--border)]' } });
register('demo-tab', {
  base: {
    tw: 'cursor-pointer border-0 border-b-2 border-transparent bg-transparent px-4 py-3 text-sm text-[var(--muted)] hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]',
  },
});
register('demo-tab-active', {
  base: { tw: 'border-b-[var(--rgi-blue)] font-semibold text-[var(--rgi-blue)]' },
});
register('demo-tab-panel', { base: { tw: 'py-5 text-sm leading-relaxed text-[var(--text)]' } });
register.all({
  'demo-tabs-control': { tw: 'flex w-fit items-center gap-2 text-xs text-[var(--text-muted)]' },
  'demo-tabs-control select': {
    tw: 'rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 py-1 text-xs text-[var(--text)]',
  },
  'demo-tab-list-centered': { tw: 'justify-center' },
  'demo-tab-list-scrollable': { tw: 'overflow-x-auto whitespace-nowrap' },
});
