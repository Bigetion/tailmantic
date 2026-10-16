import { register } from 'tailmantic/collector';

register.all('tm-accordion', {
  '': [
    'box-border w-full max-w-[620px] overflow-hidden rounded-lg',
    'border border-[var(--border,#273142)]',
    'bg-[#111720] text-[var(--text,#edf2fb)]',
  ],

  item: 'border-b border-[var(--border,#273142)] last:border-b-0',
  heading: 'm-0',

  trigger: [
    'box-border flex min-h-12 w-full appearance-none',
    'items-center gap-3 px-4 py-3',
    'border-0 bg-transparent text-left text-[10px] text-current',
    'cursor-pointer shadow-none transition-colors',
    'hover:bg-white/[0.025]',
    'focus-visible:outline-2 focus-visible:outline-[#8baeff]',
    'disabled:cursor-not-allowed',
  ],

  index: 'w-5 shrink-0 font-mono text-[8px] text-[#78869a]',
  title: 'min-w-0 flex-1 font-medium',
  chevron: 'shrink-0 text-[#8592a5] transition-transform duration-200',

  '&item-expanded .tm-accordion-chevron': 'rotate-180 text-[#a9c4ff]',
  '&item-expanded': 'bg-[#ffffff04]',
  '&item-disabled .tm-accordion-trigger': 'text-[#707b8b] hover:bg-transparent',

  panel: ['px-12 pb-4 pt-2 pr-8', 'text-[9px] leading-relaxed text-[var(--muted,#a3aec0)]'],
  '&panel[hidden]': 'hidden',

  unavailable: [
    'rounded-full border border-[#38404c]',
    'px-2 py-1 text-[7px] font-medium text-[#8893a2]',
  ],

  toolbar: [
    'flex items-center justify-between',
    'border-b border-[var(--border,#273142)] bg-[#151c27]',
    'px-4 py-2.5 text-[9px] font-semibold text-[var(--text,#edf2fb)]',
  ],

  '&toolbar button': [
    'cursor-pointer border-0 bg-transparent p-0',
    'text-[8px] font-medium text-[#a9c4ff]',
    'hover:text-white',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8baeff]',
  ],

  helper: 'block px-4 py-2.5 text-[8px] text-[var(--muted,#a3aec0)]',
});
