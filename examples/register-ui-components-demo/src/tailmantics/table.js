import { register } from 'tailmantic/collector';

register('demo-table-wrap', {
  base: { tw: 'w-full overflow-x-auto rounded-lg border border-[var(--border)]' },
});
register('demo-table', {
  base: { tw: 'w-full border-collapse text-left text-sm text-[var(--text)]' },
});
register('demo-table th', {
  base: { tw: 'bg-[var(--surface)] px-4 py-3 text-xs font-semibold text-[var(--muted)]' },
});
register('demo-table td', { base: { tw: 'border-t border-[var(--border)] px-4 py-3' } });
register.all({
  'demo-table-dense th': { tw: 'px-2 py-1.5' },
  'demo-table-dense td': { tw: 'px-2 py-1.5' },
  'demo-table-control': { tw: 'inline-flex items-center gap-2 text-xs text-[var(--text-muted)]' },
  'demo-table-control-button': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-xs text-[var(--text)] hover:border-[var(--rgi-blue)] disabled:opacity-40',
  },
  'demo-table-sort': {
    tw: 'cursor-pointer border-0 bg-transparent p-0 text-left text-xs font-semibold text-[var(--muted)] hover:text-[var(--text)]',
  },
  'demo-table-row-selected': { tw: 'bg-[var(--rgi-blue-soft)]' },
});
