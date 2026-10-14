import { register } from 'tailmantic/collector';

register('rgi-popper', { base: { tw: 'z-50 max-w-[calc(100vw-1rem)]' } });

register('rgi-popper-example', {
  base: { tw: 'flex w-full max-w-[680px] flex-col gap-2.5' },
});

register('rgi-popper-example-stage', {
  base: {
    tw: 'flex min-h-[180px] flex-wrap items-center justify-between gap-4 rounded-lg border border-dashed border-[#303a49] bg-[#0d121b] p-5',
  },
});

register('rgi-popper-example-copy', {
  base: {
    tw: 'flex min-w-[220px] flex-1 flex-col gap-1.5 [&_strong]:text-[10px] [&_strong]:font-semibold [&_span:last-child]:max-w-[340px] [&_span:last-child]:text-[8px] [&_span:last-child]:leading-relaxed [&_span:last-child]:text-[var(--muted)]',
  },
});

register('rgi-popper-example-eyebrow', {
  base: { tw: 'text-[7px] font-semibold tracking-[.12em] text-[#8baeff]' },
});

register('rgi-popper-example-status', {
  base: { tw: 'min-h-5 text-[8px] text-[var(--muted)]' },
});

register('rgi-popper-example-surface', {
  base: {
    tw: 'z-50 w-[min(250px,calc(100vw-24px))] overflow-hidden rounded-lg border border-[#354154] bg-[#171f2c] text-[var(--text)] shadow-[0_16px_38px_rgba(0,0,0,.48)]',
  },
});

register('rgi-popper-example-content', {
  base: {
    tw: 'grid grid-cols-[auto_1fr_auto] items-center gap-2.5 p-3 [&_div]:flex [&_div]:min-w-0 [&_div]:flex-col [&_div]:gap-1 [&_strong]:text-[9px] [&_strong]:font-semibold [&_span:not(.rgi-popper-example-icon)]:text-[8px] [&_span:not(.rgi-popper-example-icon)]:text-[var(--muted)] [&_p]:col-span-3 [&_p]:m-0 [&_p]:border-t [&_p]:border-[#303a49] [&_p]:pt-2.5 [&_p]:text-[8px] [&_p]:leading-relaxed [&_p]:text-[var(--muted)]',
  },
});

register('rgi-popper-example-icon', {
  base: {
    tw: 'inline-flex size-7 items-center justify-center rounded-md border border-[#364760] bg-[#24344a] text-[#adc6fa]',
  },
});

register('rgi-popper-placement-controls', {
  base: { tw: 'm-0 flex min-w-0 flex-wrap gap-1 border-0 p-0' },
});

register('rgi-popper-placement-controls legend', {
  base: { tw: 'mb-2 block text-[8px] font-semibold text-[#c2ccda]' },
});

register('rgi-popper-placement-option', {
  base: {
    tw: 'inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border)] bg-transparent px-2.5 text-[8px] capitalize text-[var(--muted)] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  },
});

register('rgi-popper-placement-option-active', {
  base: {
    tw: 'border-[#536985] bg-[#20304a] text-[#c5d7ff] hover:bg-[#20304a]',
  },
});

register('rgi-popper-placement-stage', {
  base: {
    tw: 'flex min-h-[180px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[#303a49] bg-[#0d121b] p-5',
  },
});

register('rgi-popper-placement-stage .rgi-popper-example-status', {
  base: { tw: 'text-center' },
});

register('rgi-popper-placement-surface', {
  base: { tw: 'w-[190px]' },
});

register('rgi-popper-placement-content', {
  base: {
    tw: 'flex flex-col gap-1.5 p-3 [&_strong]:text-[9px] [&_strong]:capitalize [&_strong]:text-[#c5d7ff] [&_span]:text-[8px] [&_span]:text-[var(--muted)]',
  },
});

register('rgi-popper-placement-content .rgi-button', {
  base: { tw: 'mt-1 self-start' },
});

register('rgi-popper-example-action', {
  base: {
    tw: 'h-6 min-h-0 px-2 py-1 text-[8px] leading-none normal-case tracking-normal',
  },
});

register('rgi-popper-offset-controls', {
  base: {
    tw: 'grid grid-cols-2 gap-3 rounded-lg border border-[#303a49] bg-[#111720] p-3 max-sm:grid-cols-1',
  },
});

register('rgi-popper-range-control', {
  base: {
    tw: 'flex min-w-0 flex-col gap-2 [&_span]:flex [&_span]:items-center [&_span]:justify-between [&_strong]:text-[8px] [&_output]:text-[8px] [&_output]:text-[#c5d7ff] [&_input]:w-full [&_input]:accent-[#8baeff] [&_small]:text-[7px] [&_small]:text-[var(--muted)]',
  },
});

register('rgi-popper-offset-stage', {
  base: {
    tw: 'flex min-h-[160px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[#303a49] bg-[#0d121b] p-5',
  },
});

register('rgi-popper-offset-surface', {
  base: { tw: 'w-[210px]' },
});

register('rgi-popper-offset-content', {
  base: {
    tw: 'flex items-center gap-2.5 p-3 [&_div]:flex [&_div]:flex-col [&_div]:gap-1 [&_strong]:text-[9px] [&_span]:text-[8px] [&_span]:text-[var(--muted)]',
  },
});
