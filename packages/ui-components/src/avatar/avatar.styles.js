import { register } from 'tailmantic/collector';

register.all('tm-avatar', {
  '': 'inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--tm-avatar-bg,var(--panel-raised,#273142))] text-sm font-medium text-[var(--tm-avatar-color,var(--text,#edf2fb))] align-middle',
  xs: '!size-6 text-[8px] [&_svg]:size-3',
  sm: '!size-8 text-[10px] [&_svg]:size-3.5',
  small: 'size-8 text-xs',
  lg: 'size-12 text-sm [&_svg]:size-5',
  large: 'size-14 text-lg',
  xl: 'size-14 text-base [&_svg]:size-6',
  primary: '[--tm-avatar-bg:var(--tm-blue-dark,#547be8)] [--tm-avatar-color:white]',
  success: '[--tm-avatar-bg:#276b53] [--tm-avatar-color:white]',
  warning: '[--tm-avatar-bg:#a75c1b] [--tm-avatar-color:white]',
  indigo: '[--tm-avatar-bg:#334a72] [--tm-avatar-color:#e6eeff]',
  teal: '[--tm-avatar-bg:#21594f] [--tm-avatar-color:#c9f2e7]',
  amber: '[--tm-avatar-bg:#65472d] [--tm-avatar-color:#ffe1bd]',
  violet: '[--tm-avatar-bg:#514276] [--tm-avatar-color:#e5dcff]',
  neutral: '[--tm-avatar-bg:#303844] [--tm-avatar-color:#c0cad8]',
});

register.all('tm-avatar', {
  '& img': 'size-full object-cover',
  group:
    'inline-flex items-center [&_.tm-avatar]:border-2 [&_.tm-avatar]:border-[var(--panel,#10151e)]',
  'group-stacked': '-space-x-2',
  overflow:
    'relative z-0 size-10 shrink-0 border-[#111720] bg-[#252f40] text-[10px] font-semibold text-[#c0ccdf]',
});
