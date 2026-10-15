import { register } from 'tailmantic/collector';

register('tm-avatar', {
  base: {
    tw: 'inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--tm-avatar-bg,var(--panel-raised,#273142))] text-sm font-medium text-[var(--tm-avatar-color,var(--text,#edf2fb))] align-middle',
  },
  modifiers: {
    xs: { tw: '!size-6 text-[8px] [&_svg]:size-3' },
    sm: { tw: '!size-8 text-[10px] [&_svg]:size-3.5' },
    small: { tw: 'size-8 text-xs' },
    lg: { tw: 'size-12 text-sm [&_svg]:size-5' },
    large: { tw: 'size-14 text-lg' },
    xl: { tw: 'size-14 text-base [&_svg]:size-6' },
    primary: { tw: '[--tm-avatar-bg:var(--tm-blue-dark,#547be8)] [--tm-avatar-color:white]' },
    success: { tw: '[--tm-avatar-bg:#276b53] [--tm-avatar-color:white]' },
    warning: { tw: '[--tm-avatar-bg:#a75c1b] [--tm-avatar-color:white]' },
    indigo: { tw: '[--tm-avatar-bg:#334a72] [--tm-avatar-color:#e6eeff]' },
    teal: { tw: '[--tm-avatar-bg:#21594f] [--tm-avatar-color:#c9f2e7]' },
    amber: { tw: '[--tm-avatar-bg:#65472d] [--tm-avatar-color:#ffe1bd]' },
    violet: { tw: '[--tm-avatar-bg:#514276] [--tm-avatar-color:#e5dcff]' },
    neutral: { tw: '[--tm-avatar-bg:#303844] [--tm-avatar-color:#c0cad8]' },
  },
});

register.all('tm-avatar', {
  '& img': 'size-full object-cover',
  'group': 'inline-flex items-center [&_.tm-avatar]:border-2 [&_.tm-avatar]:border-[var(--panel,#10151e)]',
  'group-stacked': '-space-x-2',
  'overflow': 'relative z-0 size-10 shrink-0 border-[#111720] bg-[#252f40] text-[10px] font-semibold text-[#c0ccdf]',
  'size-list': 'flex flex-wrap items-end gap-4',
  'size-item': 'flex flex-col items-center gap-2',
  'size-label': 'font-mono text-[9px] text-[#8491a5]',
});
