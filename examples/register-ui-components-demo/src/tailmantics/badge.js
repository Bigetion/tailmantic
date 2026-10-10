import { register } from 'tailmantic/collector';

register('demo-badge', {
  base: {
    tw: 'inline-flex items-center rounded-full border border-transparent px-2.5 py-1 text-[11px] font-medium',
  },
  modifiers: {
    primary: { tw: 'bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]' },
    success: { tw: 'bg-[var(--rgi-success-bg)] text-[var(--rgi-success)]' },
    warning: { tw: 'bg-[var(--rgi-warning-bg)] text-[var(--rgi-warning)]' },
    danger: { tw: 'bg-[var(--rgi-error-bg)] text-[var(--rgi-error)]' },
  },
});
register.all({
  'demo-badge-anchor': {
    tw: 'relative inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-[var(--text-muted)]',
  },
  'demo-badge-anchor .demo-badge': {
    tw: 'absolute -right-2 -top-2',
  },
  'demo-badge-dot': {
    tw: 'absolute -right-1 -top-1 size-2.5 rounded-full border-2 border-[var(--panel)] bg-[var(--rgi-error)]',
  },
  'demo-badge-control': {
    tw: 'w-fit cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
});
