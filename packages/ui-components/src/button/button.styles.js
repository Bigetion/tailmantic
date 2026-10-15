import { register } from 'tailmantic/collector';

register.all('tm-button', {
  '': 'inline-flex h-9 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded border border-transparent px-4 text-[13px] font-medium uppercase tracking-[.02em] transition-[background-color,border-color,color,box-shadow,transform] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--tm-blue,#9bbcff)] enabled:active:translate-y-px disabled:cursor-not-allowed disabled:opacity-40',
  contained:
    'bg-[var(--tm-blue-dark,#547be8)] text-white shadow-[0_2px_4px_rgba(72,111,216,.24)] enabled:hover:bg-[#6689ed] enabled:hover:shadow-[0_4px_12px_rgba(72,111,216,.3)]',
  outlined:
    'border border-[#607db9] bg-transparent text-[var(--tm-blue,#9bbcff)] enabled:hover:border-[var(--tm-blue,#9bbcff)] enabled:hover:bg-[var(--tm-blue-soft,rgba(125,159,255,.12))]',
  text: 'bg-transparent text-[var(--tm-blue,#9bbcff)] enabled:hover:bg-[var(--tm-blue-soft,rgba(125,159,255,.12))]',
  small: '!h-8 gap-1.5 !px-3 !text-[11px]',
  large: 'h-11 gap-2.5 px-5 text-sm',
  'color-success':
    '!bg-[#276b53] text-white !shadow-[0_2px_4px_rgba(39,107,83,.22)] enabled:hover:!bg-[#328468]',
  'color-warning':
    '!bg-[#a75c1b] text-white !shadow-[0_2px_4px_rgba(167,92,27,.2)] enabled:hover:!bg-[#c5752a]',
  'color-danger':
    '!bg-[#a94650] text-white !shadow-[0_2px_4px_rgba(169,70,80,.2)] enabled:hover:!bg-[#c45b66]',
});
register.all('spin', {
  '': 'animate-spin',
});
