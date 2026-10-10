import { register } from 'tailmantic/collector';

register.all({
  'ui-icon-button': {
    tw: 'flex cursor-pointer items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-3 text-left text-xs text-[var(--text-muted)] hover:border-[var(--rgi-blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rgi-blue)]',
  },
  'ui-icon-button-symbol': {
    tw: 'inline-flex size-8 items-center justify-center rounded-md bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]',
  },
  'ui-icon-button-selected': { tw: 'ring-1 ring-[var(--rgi-blue)]' },
  'ui-icon-button-symbol-warning': {
    tw: 'bg-[var(--rgi-warning-bg)] text-[var(--rgi-warning)]',
  },
  'ui-icon-button-symbol-danger': { tw: 'bg-[var(--rgi-error-bg)] text-[var(--rgi-error)]' },
  'ui-icon-button-symbol-success': { tw: 'bg-[var(--rgi-success-bg)] text-[var(--rgi-success)]' },
});
