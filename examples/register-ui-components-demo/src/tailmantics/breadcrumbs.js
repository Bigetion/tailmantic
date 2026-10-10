import { register } from 'tailmantic/collector';

register('demo-breadcrumbs', {
  base: { tw: 'flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]' },
});
register('demo-breadcrumb-link', {
  base: { tw: 'text-[var(--rgi-blue)] no-underline hover:underline' },
});
register('demo-breadcrumb-current', { base: { tw: 'font-medium text-[var(--text)]' } });
register.all({
  'demo-breadcrumb-expand': {
    tw: 'cursor-pointer border-0 bg-transparent p-0 text-[var(--rgi-blue)] hover:underline',
  },
  'demo-breadcrumb-control': {
    tw: 'flex w-fit items-center gap-2 text-xs text-[var(--text-muted)]',
  },
  'demo-breadcrumb-control select': {
    tw: 'rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 py-1 text-xs text-[var(--text)]',
  },
});
