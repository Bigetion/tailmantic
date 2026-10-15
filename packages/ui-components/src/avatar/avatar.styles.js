import { register } from 'tailmantic/collector';

register('rgi-avatar', {
  base: {
    tw: 'inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--rgi-avatar-bg,var(--panel-raised,#273142))] text-sm font-medium text-[var(--rgi-avatar-color,var(--text,#edf2fb))] align-middle',
  },
  modifiers: {
    xs: { tw: '!size-6 text-[8px] [&_svg]:size-3' },
    sm: { tw: '!size-8 text-[10px] [&_svg]:size-3.5' },
    small: { tw: 'size-8 text-xs' },
    lg: { tw: 'size-12 text-sm [&_svg]:size-5' },
    large: { tw: 'size-14 text-lg' },
    xl: { tw: 'size-14 text-base [&_svg]:size-6' },
    primary: { tw: '[--rgi-avatar-bg:var(--rgi-blue-dark,#547be8)] [--rgi-avatar-color:white]' },
    success: { tw: '[--rgi-avatar-bg:#276b53] [--rgi-avatar-color:white]' },
    warning: { tw: '[--rgi-avatar-bg:#a75c1b] [--rgi-avatar-color:white]' },
    indigo: { tw: '[--rgi-avatar-bg:#334a72] [--rgi-avatar-color:#e6eeff]' },
    teal: { tw: '[--rgi-avatar-bg:#21594f] [--rgi-avatar-color:#c9f2e7]' },
    amber: { tw: '[--rgi-avatar-bg:#65472d] [--rgi-avatar-color:#ffe1bd]' },
    violet: { tw: '[--rgi-avatar-bg:#514276] [--rgi-avatar-color:#e5dcff]' },
    neutral: { tw: '[--rgi-avatar-bg:#303844] [--rgi-avatar-color:#c0cad8]' },
  },
});

register.all('rgi-avatar', {
  '& img': 'size-full object-cover',
  'group': 'inline-flex items-center [&_.rgi-avatar]:border-2 [&_.rgi-avatar]:border-[var(--panel,#10151e)]',
  'group-stacked': '-space-x-2',
  'overflow': 'relative z-0 size-10 shrink-0 border-[#111720] bg-[#252f40] text-[10px] font-semibold text-[#c0ccdf]',
  'size-list': 'flex flex-wrap items-end gap-4',
  'size-item': 'flex flex-col items-center gap-2',
  'size-label': 'font-mono text-[9px] text-[#8491a5]',
});
