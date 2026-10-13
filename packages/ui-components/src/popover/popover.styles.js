import { register } from 'tailmantic/collector';

register('rgi-popover', {
  base: {
    tw: 'z-[1100] max-w-[min(24rem,calc(100vw-2rem))] rounded-lg border border-[var(--border,#354257)] bg-[var(--panel-raised,#171f2c)] p-3 text-sm text-[var(--text,#edf2fb)] shadow-[0_12px_36px_rgba(0,0,0,.3)] outline-none',
  },
});

register('rgi-popover-example', {
  base: { tw: 'flex w-full max-w-[760px] flex-col gap-5' },
});

register('rgi-popover-example-placement-picker', {
  base: { tw: 'flex flex-wrap items-center gap-3' },
});

register('rgi-popover-example-placement-picker > span', {
  base: { tw: 'text-xs font-medium text-[var(--muted)]' },
});

register('rgi-popover-example-placement-options', {
  base: { tw: 'flex flex-wrap gap-1 rounded-xl border border-[var(--border)] bg-[#111720] p-1' },
});

register('rgi-popover-example-placement-option', {
  base: {
    tw: 'inline-flex h-9 cursor-pointer appearance-none items-center justify-center rounded-lg border-0 bg-transparent px-3 text-xs font-medium capitalize text-[var(--muted)] shadow-none transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8baeff]',
  },
});

register('rgi-popover-example-placement-option.is-active', {
  base: { tw: 'bg-[#263a57] text-[#d6e4ff] hover:bg-[#263a57]' },
});

register('rgi-popover-example-stage', {
  base: {
    tw: 'flex min-h-[220px] w-full items-center justify-center rounded-xl border border-dashed border-[#303a49] bg-[radial-gradient(ellipse_at_center,rgba(93,125,181,.1),transparent_72%),#0d121b] p-6',
  },
});

register('rgi-popover-example-trigger', {
  base: { tw: '!h-10 !gap-2 !rounded-lg !px-4 !text-xs !normal-case !tracking-normal' },
});

register('rgi-popover-example-surface', {
  base: {
    tw: '!w-[min(340px,calc(100vw-2rem))] !max-w-none !overflow-hidden !rounded-xl !p-0 !shadow-[0_20px_56px_rgba(0,0,0,.5)]',
  },
});

register('rgi-popover-example-content', {
  base: { tw: 'p-5' },
});

register('rgi-popover-example-heading', {
  base: { tw: 'flex items-center gap-3' },
});

register('rgi-popover-example-heading-icon', {
  base: {
    tw: 'inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#364760] bg-[#24344a] text-[#adc6fa]',
  },
});

register('rgi-popover-example-heading-copy', {
  base: {
    tw: 'flex min-w-0 flex-1 flex-col gap-1 [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:text-[var(--text)] [&_small]:text-xs [&_small]:text-[var(--muted)]',
  },
});

register('rgi-popover-example-close', {
  base: {
    tw: 'inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent p-0 text-[#909daf] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8baeff]',
  },
});

register('rgi-popover-example-description', {
  base: { tw: 'mb-4 mt-4 text-sm leading-relaxed text-[var(--muted)]' },
});

register('rgi-popover-example-project-meta', {
  base: {
    tw: 'flex items-center justify-between border-y border-[#303a49] py-3 text-xs text-[#a6b1c0] [&_span:first-child]:inline-flex [&_span:first-child]:items-center [&_span:first-child]:gap-2 [&_i]:size-2 [&_i]:rounded-full [&_i]:bg-[#e3b85f]',
  },
});

register('rgi-popover-example-open-project', {
  base: {
    tw: 'mt-4 inline-flex cursor-pointer items-center gap-2 rounded border-0 bg-transparent p-0 text-xs font-semibold text-[#b5ccff] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8baeff]',
  },
});

register('rgi-popover-example-color-list', {
  base: { tw: 'm-0 mt-4 flex min-w-0 flex-col gap-1 border-0 p-0' },
});

register('rgi-popover-example-color-list legend', {
  base: { tw: 'mb-2 text-xs font-medium text-[var(--muted)]' },
});

register('rgi-popover-example-color-option', {
  base: {
    tw: 'flex h-10 cursor-pointer items-center gap-3 rounded-lg border-0 bg-transparent px-3 text-left text-sm text-[#c1cad7] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8baeff] [&_i]:size-3 [&_i]:rounded-full [&_svg]:ml-auto [&_svg]:text-[#9edab7]',
  },
});

register('rgi-popover-example-note', {
  base: { tw: 'mb-0 mt-4 text-xs leading-relaxed text-[var(--muted)]' },
});

register('rgi-popover-example-footer', {
  base: { tw: 'flex min-h-6 flex-wrap items-center justify-between gap-2' },
});

register('rgi-popover-example-status', {
  base: { tw: 'text-xs text-[var(--muted)]' },
});

register('rgi-popover-example-color-preview', {
  base: {
    tw: 'inline-flex items-center gap-2 text-xs capitalize text-[var(--muted)] [&_i]:size-2.5 [&_i]:rounded-full',
  },
});

register('component-showcase-popover .demo-content', {
  base: {
    tw: 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
  },
});

register('component-showcase-popover .demo-canvas', {
  base: { tw: 'items-stretch' },
});
