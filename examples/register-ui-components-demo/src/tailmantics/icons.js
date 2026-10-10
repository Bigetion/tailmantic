import { register } from 'tailmantic/collector';

register.all({
  'demo-icons-grid': {
    tw: 'grid w-full max-w-[600px] grid-cols-2 gap-3 sm:grid-cols-4',
  },
  'demo-icons-item': {
    tw: 'flex cursor-pointer items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-3 text-left text-xs text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-icons-symbol': {
    tw: 'inline-flex size-8 items-center justify-center rounded-md bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]',
  },
  'demo-icons-item-selected': { tw: 'ring-1 ring-[var(--rgi-blue)]' },
  'demo-icons-symbol-search': { tw: 'bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]' },
  'demo-icons-symbol-settings': { tw: 'bg-[var(--rgi-warning-bg)] text-[var(--rgi-warning)]' },
  'demo-icons-symbol-alerts': { tw: 'bg-[var(--rgi-error-bg)] text-[var(--rgi-error)]' },
  'demo-icons-symbol-done': { tw: 'bg-[var(--rgi-success-bg)] text-[var(--rgi-success)]' },
});
