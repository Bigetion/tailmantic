import { register } from 'tailmantic/collector';

register.all('tm-chip', {
  '': 'inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-[var(--border,#273142)] px-3 text-xs font-medium text-[var(--text,#edf2fb)] transition-colors',
  outlined: 'bg-transparent',
  filled: 'border-transparent bg-[var(--panel-raised,#171e2a)]',
  primary: 'border-transparent !bg-[var(--tm-blue-dark,#547be8)] !text-white',
  success: 'border-transparent !bg-[#1b5e20] text-[#c8e6c9]',
  warning: 'border-transparent !bg-[#684b28] !text-[#ffe0ae]',
  small: '!h-6 px-2 text-[10px]',
  interactive:
    'cursor-pointer hover:border-[var(--tm-blue,#9bbcff)] hover:bg-[var(--panel-raised,#171e2a)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--tm-blue,#9bbcff)]',
  selected: 'border-transparent !bg-[var(--tm-blue-dark,#547be8)] !text-white',
  disabled: 'cursor-not-allowed opacity-45',
});

register.all('tm-chip', {
  '& button':
    'inline-flex cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-current opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current disabled:cursor-not-allowed',
});
