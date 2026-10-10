import { register } from 'tailmantic/collector';

register('demo-avatar', {
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
  'demo-avatar-xs': { tw: 'size-6 text-[9px]' },
  'demo-avatar-small': { tw: 'size-8 text-[10px]' },
  'demo-avatar-medium': { tw: 'size-10 text-xs' },
  'demo-avatar-xl': { tw: 'size-16 text-base' },
  'demo-avatar img': { tw: 'size-full rounded-full object-cover' },
  'demo-avatar-group': {
    tw: 'm-0 flex items-center border-0 p-0 pl-3 [&>.demo-avatar]:-ml-3 [&>.demo-avatar]:ring-2 [&>.demo-avatar]:ring-[var(--panel)]',
  },
  'demo-avatar-control': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
});
