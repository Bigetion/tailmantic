import { register } from 'tailmantic/collector';

register('ui-chip', {
  base: {
    tw: 'inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-[var(--border)] px-3 text-xs font-medium text-[var(--text)] transition-colors',
  },
  modifiers: {
    filled: { tw: 'border-transparent bg-[var(--panel-raised)]' },
    outlined: { tw: 'bg-transparent' },
    primary: { tw: 'border-transparent bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]' },
    success: { tw: 'border-transparent bg-[var(--rgi-success-bg)] text-[var(--rgi-success)]' },
    warning: { tw: 'border-transparent bg-[var(--rgi-warning-bg)] text-[var(--rgi-warning)]' },
    small: { tw: '!h-6 px-2 text-[10px]' },
    interactive: {
      tw: 'cursor-pointer hover:border-[var(--rgi-blue)] hover:bg-[var(--panel-raised)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rgi-blue)]',
    },
    selected: { tw: 'border-transparent bg-[var(--rgi-blue-dark)] text-white' },
    disabled: { tw: 'cursor-not-allowed opacity-45' },
  },
});
register.all({
  'ui-chip-icon': { tw: 'inline-flex shrink-0 items-center justify-center' },
  'ui-chip button': {
    tw: 'ml-1 inline-flex cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-current opacity-70 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current disabled:cursor-not-allowed',
  },
});
