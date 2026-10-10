import { register } from 'tailmantic/collector';

register.all({
  'demo-bottom-navigation': {
    tw: 'flex w-full max-w-[420px] items-center justify-around rounded-xl border border-[var(--border)] bg-[var(--panel)] p-2',
  },
  'demo-bottom-nav-item': {
    tw: 'relative flex min-w-20 cursor-pointer flex-col items-center gap-1 rounded-lg border-0 bg-transparent px-4 py-2 text-[11px] text-[var(--muted)] transition-colors',
  },
  'demo-bottom-nav-item-active': {
    tw: 'bg-[var(--rgi-blue-soft)] font-semibold text-[var(--rgi-blue)]',
  },
  'demo-bottom-nav-item-compact': { tw: 'min-w-12 px-2' },
  'demo-bottom-nav-badge': {
    tw: 'absolute right-4 top-1 rounded-full bg-[var(--rgi-error)] px-1 text-[9px] leading-4 text-white',
  },
  'demo-bottom-nav-control': {
    tw: 'w-fit cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
});
