import { register } from 'tailmantic/collector';

register('rgi-breadcrumbs', { base: { tw: 'text-sm text-[var(--muted,#626a75)]' } });
register('rgi-breadcrumbs-list', {
  base: { tw: 'm-0 flex list-none flex-wrap items-center gap-2 p-0' },
});
register('rgi-breadcrumbs-item', { base: { tw: 'inline-flex min-w-0 items-center gap-2' } });
register('rgi-breadcrumbs-separator', { base: { tw: 'select-none text-[var(--muted,#626a75)]' } });
register('rgi-breadcrumbs-ellipsis', { base: { tw: 'select-none' } });
register('rgi-breadcrumbs a', {
  base: {
    tw: 'truncate text-[var(--accent,#315fc4)] underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)]',
  },
});
register('rgi-breadcrumbs [aria-current="page"]', {
  base: { tw: 'font-medium text-[var(--text,#20242b)] no-underline' },
});

register('rgi-breadcrumbs-example', {
  base: { tw: 'flex w-full max-w-[760px] flex-col gap-4' },
});
register('rgi-breadcrumbs-example-panel', {
  base: {
    tw: 'flex min-h-[176px] flex-col justify-between gap-6 rounded-xl border border-[#293548] bg-[#111925] p-6 max-sm:p-4',
  },
});
register('rgi-breadcrumbs-example-context', {
  base: { tw: 'flex flex-col gap-2 border-b border-[#263246] pb-4' },
});
register('rgi-breadcrumbs-example-eyebrow', {
  base: { tw: 'text-[10px] font-semibold uppercase tracking-[.14em] text-[#8292a9]' },
});
register('rgi-breadcrumbs-example-title', {
  base: { tw: 'text-lg font-semibold text-[#e4ebf5]' },
});
register('rgi-breadcrumbs-example-description', {
  base: { tw: 'text-sm leading-relaxed text-[#9ba9bc]' },
});
register('rgi-breadcrumbs-example-status', {
  base: { tw: 'text-xs text-[#9ba9bc] [&_strong]:font-semibold [&_strong]:text-[#e4ebf5]' },
});
register('rgi-breadcrumbs-example-separators', {
  base: { tw: 'grid w-full gap-3' },
});
register('rgi-breadcrumbs-example-separator-row', {
  base: {
    tw: 'flex flex-col gap-2 rounded-lg border border-[#293548] bg-[#111925] px-4 py-3 [&_svg]:size-3.5',
  },
});
register('rgi-breadcrumbs-example-separator-label', {
  base: { tw: 'text-[10px] font-semibold uppercase tracking-[.12em] text-[#8292a9]' },
});
register('rgi-breadcrumbs-example-collapse-controls', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-3' },
});
register('rgi-breadcrumbs-example-collapse-button', {
  base: {
    tw: 'cursor-pointer rounded-md border border-[#40516b] bg-[#1b2738] px-3 py-2 text-xs font-medium text-[#c0d2f2] transition-colors hover:bg-[#24344a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a9c4ff]',
  },
});

register('component-showcase-breadcrumbs .demo-content', {
  base: {
    tw: 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
  },
});
