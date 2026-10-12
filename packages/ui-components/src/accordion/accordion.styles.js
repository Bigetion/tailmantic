import { register } from 'tailmantic/collector';

register('tm-accordion', {
  base: {
    tw: 'w-full max-w-[620px] overflow-hidden rounded-lg border border-[var(--border,#273142)] bg-[#111720] text-[var(--text,#edf2fb)]',
  },
});

register('tm-accordion-item', {
  base: { tw: 'border-b border-[var(--border,#273142)] last:border-b-0' },
});

register('tm-accordion-heading', {
  base: { tw: 'm-0' },
});

register('tm-accordion-trigger', {
  base: {
    tw: 'flex min-h-12 w-full cursor-pointer appearance-none items-center gap-3 border-0 bg-transparent px-4 py-3 text-left text-[10px] text-current shadow-none transition-colors hover:bg-white/[0.025] focus-visible:outline-2 focus-visible:outline-[#8baeff] disabled:cursor-not-allowed',
  },
});

register('tm-accordion-index', {
  base: { tw: 'w-5 shrink-0 font-mono text-[8px] text-[#78869a]' },
});

register('tm-accordion-title', {
  base: { tw: 'min-w-0 flex-1 font-medium' },
});

register('tm-accordion-chevron', {
  base: { tw: 'shrink-0 text-[#8592a5] transition-transform duration-200' },
});

register('tm-accordion-item-expanded .tm-accordion-chevron', {
  base: { tw: 'rotate-180 text-[#a9c4ff]' },
});

register('tm-accordion-panel', {
  base: { tw: 'px-12 pb-4 pt-2 pr-8 text-[9px] leading-relaxed text-[var(--muted,#a3aec0)]' },
});

register('tm-accordion-panel[hidden]', {
  base: { tw: 'hidden' },
});

register('tm-accordion-item-expanded', {
  base: { tw: 'bg-[#ffffff04]' },
});

register('tm-accordion-item-disabled .tm-accordion-trigger', {
  base: { tw: 'text-[#707b8b] hover:bg-transparent' },
});

register('tm-accordion-unavailable', {
  base: {
    tw: 'rounded-full border border-[#38404c] px-2 py-1 text-[7px] font-medium text-[#8893a2]',
  },
});

register('tm-accordion-toolbar', {
  base: {
    tw: 'flex items-center justify-between border-b border-[var(--border,#273142)] bg-[#151c27] px-4 py-2.5 text-[9px] font-semibold text-[var(--text,#edf2fb)]',
  },
});

register('tm-accordion-toolbar button', {
  base: {
    tw: 'cursor-pointer border-0 bg-transparent p-0 text-[8px] font-medium text-[#a9c4ff] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8baeff]',
  },
});

register('tm-accordion-helper', {
  base: { tw: 'block px-4 py-2.5 text-[8px] text-[var(--muted,#a3aec0)]' },
});
