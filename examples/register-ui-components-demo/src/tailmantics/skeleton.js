import { register } from 'tailmantic/collector';

register('demo-skeleton', {
  base: { tw: 'block h-3 animate-pulse rounded bg-[#303b4c]' },
  modifiers: {
    circular: { tw: 'size-11 rounded-full' },
    rectangular: { tw: 'h-16 rounded-md' },
  },
});
register.all({
  'demo-skeleton-static': { tw: 'animate-none' },
  'demo-skeleton-control': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-[var(--text)] hover:border-[var(--rgi-blue)]',
  },
  'demo-skeleton-toggle': { tw: 'inline-flex items-center gap-2 text-xs text-[var(--text-muted)]' },
  'demo-skeleton-loaded': {
    tw: 'flex min-h-24 w-full max-w-[420px] flex-col justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4 text-sm text-[var(--text)] [&>span]:text-xs [&>span]:text-[var(--muted)]',
  },
});
