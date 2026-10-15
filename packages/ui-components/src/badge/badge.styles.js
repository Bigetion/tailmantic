import { register } from 'tailmantic/collector';

register.all('tm-badge', {
  '': 'absolute z-[1] inline-flex min-w-[18px] h-[18px] items-center justify-center rounded-full border-2 border-[var(--tm-badge-outline,var(--surface,#101722))] px-1 text-[10px] leading-none font-semibold text-white',
  primary: 'bg-[var(--tm-blue-dark,#547be8)]',
  success: 'bg-[#276b53]',
  warning: 'bg-[#a75c1b]',
  danger: 'bg-[#a94650]',
  default: 'bg-[var(--muted,#53627a)]',
  standard: 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
  dot: 'size-2 min-w-0 border-0 p-0 top-0 right-0 translate-x-1/2 -translate-y-1/2',
  'overlap-circular': 'right-[12%]',
  'overlap-rectangular': 'right-0',
});

register.all('tm-badge', {
  root: 'relative inline-flex align-middle',
});
