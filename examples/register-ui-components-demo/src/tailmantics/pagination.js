import { register } from 'tailmantic/collector';

register('demo-pagination', { base: { tw: 'flex flex-wrap items-center gap-1.5' } });
register('demo-page-button', {
  base: {
    tw: 'inline-flex size-9 cursor-pointer items-center justify-center rounded-md border border-[var(--border)] bg-[var(--panel)] text-sm text-[var(--text)] hover:bg-[var(--panel-raised)] disabled:cursor-not-allowed disabled:opacity-40',
  },
});
register('demo-page-active', {
  base: { tw: 'border-[#607db9] bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]' },
});
register.all({
  'demo-pagination-small .demo-page-button': { tw: 'size-7 text-xs' },
  'demo-pagination-large .demo-page-button': { tw: 'size-11 text-base' },
  'demo-pagination-control': {
    tw: 'flex w-fit items-center gap-2 text-xs text-[var(--text-muted)]',
  },
  'demo-pagination-control select': {
    tw: 'rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 py-1 text-xs text-[var(--text)]',
  },
  'demo-pagination-table': {
    tw: 'max-h-36 w-full max-w-[360px] overflow-y-auto rounded-md border border-[var(--border)] bg-[var(--panel)] text-xs text-[var(--text-muted)] [&>div]:border-b [&>div]:border-[var(--border)] [&>div]:px-3 [&>div]:py-2',
  },
});
