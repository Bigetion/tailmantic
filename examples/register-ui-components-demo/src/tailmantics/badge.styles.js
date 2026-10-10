import { register } from 'tailmantic/collector';

register('ui-badge', {
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
  'ui-badge-root': { tw: 'relative inline-flex' },
  'ui-badge-standard': {
    tw: 'absolute -right-2 -top-2 z-10 h-5 min-w-5 justify-center !px-1.5 !py-0 text-[10px] leading-4 shadow-sm',
  },
  'ui-badge-dot': {
    tw: 'absolute -right-1 -top-1 z-10 !size-2.5 min-w-0 rounded-full border-2 border-[var(--panel)] !p-0',
  },
  'ui-badge-overlap-circular': { tw: '-right-1 -top-1' },
  'ui-badge-overlap-rectangular': { tw: '-right-2 -top-2' },
});
