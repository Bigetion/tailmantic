import { register } from 'tailmantic/collector';

register('rgi-menu-positioner', { base: { tw: 'z-50' } });
register('rgi-menu', {
  base: {
    tw: 'max-h-[min(24rem,80vh)] min-w-48 overflow-auto rounded-md border border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] p-1 text-[var(--text,#20242b)] shadow-[0_8px_24px_rgba(0,0,0,.16)]',
  },
});
register('rgi-menu-item', {
  base: {
    tw: 'flex w-full cursor-pointer items-center rounded border-0 bg-transparent px-3 py-2 text-left text-sm text-inherit focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)] hover:bg-[var(--surface-hover,#f0f2f5)]',
  },
});
register('rgi-menu-item-disabled', { base: { tw: 'cursor-not-allowed opacity-45' } });
register('rgi-menu-item[aria-checked="true"]', {
  base: { tw: 'bg-[var(--surface-hover,#f0f2f5)] text-[var(--text,#20242b)]' },
});

register('rgi-menu-example', {
  base: { tw: 'flex w-full max-w-[760px] flex-col gap-4' },
});
register('rgi-menu-example-context-open', {
  base: { tw: 'min-h-[390px]' },
});
register('rgi-menu-example-card', {
  base: {
    tw: 'flex min-w-0 items-center gap-4 rounded-xl border border-[#293548] bg-[#111925] px-5 py-4 max-sm:px-4',
  },
});
register('rgi-menu-example-icon', {
  base: {
    tw: 'inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#364760] bg-[#24344a] text-[#adc6fa]',
  },
});
register('rgi-menu-example-copy', {
  base: {
    tw: 'flex min-w-0 flex-1 flex-col gap-1 [&_strong]:truncate [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:text-[#e4ebf5] [&_span]:truncate [&_span]:text-xs [&_span]:text-[#9ba9bc]',
  },
});
register('rgi-menu-example-trigger', {
  base: {
    tw: 'inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-transparent text-[#9ba9bc] hover:border-[#354154] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  },
});
register('rgi-menu-example-note', {
  base: {
    tw: 'min-h-10 border-t border-[#303a49] px-4 py-3 text-xs text-[#9ba9bc]',
  },
});
register('rgi-menu-example-menu', {
  base: {
    tw: '!z-[60] !w-[min(260px,calc(100vw-24px))] !rounded-xl !border-[#354154] !bg-[#171f2c] !p-1.5 !text-[#e4ebf5] !shadow-[0_16px_38px_rgba(0,0,0,.48)]',
  },
});
register('rgi-menu-example-menu .rgi-menu-item', {
  base: {
    tw: '!min-h-10 !gap-3 !rounded-lg !px-3 !py-2.5 !text-sm !text-[#c5cfdf] hover:!bg-white/[.06] focus-visible:!outline-[#8baeff] [&_span:first-of-type]:flex-1 [&_svg:last-child]:ml-auto',
  },
});
register('rgi-menu-example-menu .rgi-menu-item-danger', {
  base: { tw: '!text-[#f09a9a] hover:!bg-[#4a252c] hover:!text-[#ffb4b4] [&_svg]:!text-[#e78d96]' },
});
register('rgi-menu-example-menu .rgi-menu-item[aria-checked="true"]', {
  base: { tw: '!bg-[#20304a] !text-[#d9e5ff] [&_svg]:!text-[#9edab7]' },
});
register('rgi-menu-example-footer', {
  base: { tw: 'text-xs text-[var(--muted)]' },
});
register('rgi-menu-example-controls', {
  base: {
    tw: 'm-0 flex min-w-0 w-full flex-wrap gap-1 rounded-xl border border-[#293548] bg-[#111925] p-1.5',
  },
});
register('rgi-menu-example-placement-option', {
  base: {
    tw: 'inline-flex min-h-8 cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent px-3 text-xs capitalize text-[#9ba9bc] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  },
});
register('rgi-menu-example-placement-option-active', {
  base: { tw: '!bg-[#20304a] !text-[#c5d7ff] hover:!bg-[#20304a]' },
});
register('rgi-menu-example-stage', {
  base: {
    tw: 'relative flex min-h-[222px] flex-col items-center justify-start gap-3 rounded-xl border border-dashed border-[#303a49] bg-[#0d121b] p-6 pt-8',
  },
});
register('rgi-menu-example-status', {
  base: {
    tw: 'absolute left-4 top-3 min-h-5 rounded-md bg-[#0d121b] px-2 py-1 text-xs text-[#9ba9bc]',
  },
});
register('rgi-menu-example-selection-card', {
  base: {
    tw: 'flex w-full flex-wrap items-center gap-3 rounded-xl border border-[#293548] bg-[#111925] p-4',
  },
});
register('rgi-menu-example-selection-copy', {
  base: {
    tw: 'flex min-w-[160px] flex-1 flex-col gap-1 [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:text-[#e4ebf5] [&_small]:text-xs [&_small]:text-[#9ba9bc]',
  },
});
register('rgi-menu-example-sort-trigger', {
  base: {
    tw: 'inline-flex min-h-9 cursor-pointer items-center justify-between gap-3 rounded-lg border border-[#354154] bg-[#171f2c] px-3 text-xs text-[#d3dceb] hover:border-[#536985] focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  },
});

register('component-showcase-menu .demo-content', {
  base: {
    tw: 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
  },
});
