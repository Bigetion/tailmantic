import { register } from 'tailmantic/collector';

register('ui-avatar', {
  base: {
    tw: 'inline-flex size-10 items-center justify-center rounded-full bg-[var(--panel-raised)] text-xs font-semibold text-[var(--text)]',
  },
  modifiers: {
    primary: { tw: 'bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]' },
    success: { tw: 'bg-[var(--rgi-success-bg)] text-[var(--rgi-success)]' },
    warning: { tw: 'bg-[var(--rgi-warning-bg)] text-[var(--rgi-warning)]' },
    large: { tw: 'size-14 text-sm' },
  },
});
register.all({
  'ui-avatar-xs': { tw: 'size-6 text-[9px]' },
  'ui-avatar-small': { tw: 'size-8 text-[10px]' },
  'ui-avatar-medium': { tw: 'size-10 text-xs' },
  'ui-avatar-xl': { tw: 'size-16 text-base' },
  'ui-avatar img': { tw: 'size-full rounded-full object-cover' },
});
