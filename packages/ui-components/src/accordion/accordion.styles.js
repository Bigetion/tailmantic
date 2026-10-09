import { register } from 'tailmantic/collector';

register('rgi-accordion', {
  base: {
    tw: 'overflow-hidden rounded-lg border border-[var(--border,#273142)] bg-[var(--panel,#111824)] text-[var(--text,#edf2fb)]',
  },
});
register('rgi-accordion-group', {
  base: {
    tw: 'w-full max-w-[620px] overflow-hidden rounded-lg border border-[var(--border,#273142)] bg-[#111720] text-[var(--text,#edf2fb)]',
  },
});
register('rgi-accordion-group .rgi-accordion', {
  base: { tw: 'overflow-hidden rounded-none border-0 border-b border-[var(--border,#273142)] bg-transparent text-current shadow-none' },
});
register('rgi-accordion-group .rgi-accordion:last-child', {
  base: { tw: 'border-b-0' },
});
register('rgi-accordion-group .rgi-accordion-expanded', {
  base: { tw: 'bg-[#ffffff04]' },
});
register('rgi-accordion-disabled .rgi-accordion-trigger', {
  base: { tw: 'text-[#707b8b] hover:bg-transparent' },
});
register('rgi-accordion-group-toolbar', {
  base: { tw: 'flex items-center justify-between border-b border-[var(--border)] bg-[#151c27] px-4 py-2.5 text-[9px] font-semibold text-[var(--text)]' },
});
register('rgi-accordion-group-label', { base: { tw: 'min-w-0' } });
register('rgi-accordion-group-toggle', {
  base: { tw: 'cursor-pointer border-0 bg-transparent p-0 text-[8px] font-medium text-[var(--rgi-blue,#9bbcff)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rgi-blue,#9bbcff)]' },
});
register('rgi-accordion-heading', { base: { tw: 'm-0' } });
register('rgi-accordion-trigger', {
  base: {
    tw: 'flex min-h-12 w-full cursor-pointer appearance-none items-center gap-3 border-0 bg-transparent px-4 py-3 text-left text-[10px] text-[var(--text)] shadow-none transition-colors hover:bg-white/[.025] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--rgi-blue,#9bbcff)] disabled:cursor-not-allowed disabled:opacity-50',
  },
});
register('rgi-accordion-index', {
  base: { tw: 'w-5 shrink-0 font-mono text-[8px] text-[#78869a]' },
});
register('rgi-accordion-title', { base: { tw: 'min-w-0 flex-1 font-medium' } });
register('rgi-accordion-icon', {
  base: { tw: 'shrink-0 text-[#8592a5] transition-transform duration-200' },
});
register('rgi-accordion-expanded .rgi-accordion-icon', {
  base: { tw: 'rotate-180 text-[#a9c4ff]' },
});
register('rgi-accordion-panel[hidden]', { base: { tw: 'hidden' } });
register('rgi-accordion-content', {
  base: { tw: 'px-12 pb-4 pr-8 pt-2 text-[9px] leading-relaxed text-[var(--muted)]' },
});
register('rgi-accordion-content p', { base: { tw: 'm-0 max-w-[500px]' } });
register('rgi-accordion-unavailable', {
  base: { tw: 'rounded-full border border-[#38404c] px-2 py-1 text-[7px] font-medium text-[#8893a2]' },
});
register('rgi-accordion-group-helper', {
  base: { tw: 'block px-4 py-2.5 text-[8px] text-[var(--muted)]' },
});
