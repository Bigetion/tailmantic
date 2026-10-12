import { register } from 'tailmantic/collector';

register('tm-avatar', {
  base: {
    tw: 'inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--tm-avatar-bg,var(--panel-raised,#273142))] text-sm font-medium text-[var(--tm-avatar-color,var(--text,#edf2fb))] align-middle',
  },
  modifiers: {
    small: { tw: 'size-8 text-xs' },
    large: { tw: 'size-14 text-lg' },
    primary: { tw: '[--tm-avatar-bg:var(--tm-blue-dark,#547be8)] [--tm-avatar-color:white]' },
    success: { tw: '[--tm-avatar-bg:#276b53] [--tm-avatar-color:white]' },
    warning: { tw: '[--tm-avatar-bg:#a75c1b] [--tm-avatar-color:white]' },
  },
});

register('tm-avatar img', {
  base: { tw: 'size-full object-cover' },
});
