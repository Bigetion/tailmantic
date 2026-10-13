import { register } from 'tailmantic/collector';

register('rgi-link', {
  base: {
    tw: 'cursor-pointer text-[var(--accent,#315fc4)] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent,#315fc4)]',
  },
  modifiers: {
    'underline-always': { tw: 'underline' },
    'underline-hover': { tw: 'no-underline hover:underline' },
    'underline-none': { tw: 'no-underline' },
    'color-inherit': { tw: 'text-inherit' },
    'color-secondary': { tw: 'text-[var(--muted,#626a75)]' },
  },
});

register('rgi-link-example', {
  base: { tw: 'flex w-full max-w-[760px] flex-col gap-4' },
});
register('rgi-link-example-card', {
  base: {
    tw: 'flex w-full items-start gap-4 rounded-xl border border-[#293548] bg-[#111925] p-5 max-sm:p-4',
  },
});
register('rgi-link-example-icon', {
  base: {
    tw: 'inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#34465f] bg-[#25354b] text-[#b6cdf7]',
  },
});
register('rgi-link-example-copy', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-3' },
});
register('rgi-link-example-copy > strong', {
  base: { tw: 'text-sm font-semibold text-[#e4ebf5]' },
});
register('rgi-link-example-copy p', {
  base: { tw: 'm-0 max-w-xl text-sm leading-relaxed text-[#9ba9bc]' },
});
register('rgi-link-example-inline-row', {
  base: { tw: 'flex flex-wrap items-center gap-3 text-sm' },
});
register('rgi-link-example-divider', {
  base: { tw: 'h-4 w-px bg-[#394557]' },
});
register('rgi-link-example-variants', {
  base: {
    tw: 'flex w-full flex-col overflow-hidden rounded-xl border border-[#293548] bg-[#111925]',
  },
});
register('rgi-link-example-variant-row', {
  base: {
    tw: 'flex min-h-14 flex-wrap items-center justify-between gap-3 border-b border-[#293342] px-5 py-3 last:border-b-0 [&>span:first-child]:text-xs [&>span:first-child]:font-medium [&>span:first-child]:text-[#9ba9bc]',
  },
});
register('rgi-link-example .rgi-link-example-external', {
  base: { tw: 'text-[#87d4c2]' },
});
register('rgi-link-example-accessibility-row', {
  base: { tw: 'flex flex-wrap items-center gap-x-5 gap-y-3' },
});
register('rgi-link-example .rgi-link-example-disabled', {
  base: {
    tw: 'cursor-not-allowed text-[#6f7b8d] no-underline hover:text-[#6f7b8d] hover:no-underline',
  },
});
register('rgi-link-example-footer', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-3' },
});
register('rgi-link-example-toggle', {
  base: {
    tw: 'cursor-pointer rounded-md border border-[#40516b] bg-[#1b2738] px-3 py-2 text-xs font-medium text-[#c0d2f2] transition-colors hover:bg-[#24344a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a9c4ff]',
  },
});
register('rgi-link-example-status', {
  base: { tw: 'text-xs text-[var(--muted)]' },
});

register('component-showcase-link .demo-content', {
  base: {
    tw: 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
  },
});
