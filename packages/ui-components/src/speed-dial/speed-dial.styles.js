import { register } from 'tailmantic/collector';

register('rgi-speed-dial', {
  base: { tw: 'relative inline-flex flex-col items-center gap-2' },
  modifiers: {
    up: { tw: 'flex-col-reverse' },
    left: { tw: 'flex-row-reverse' },
    right: { tw: 'flex-row' },
    down: { tw: 'flex-col' },
  },
});
register('rgi-speed-dial-actions', {
  base: { tw: 'm-0 flex min-w-0 flex-col gap-2 border-0 p-0' },
});
register('rgi-speed-dial-action', {
  base: {
    tw: 'flex size-10 cursor-pointer items-center justify-center rounded-full border border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] text-[var(--text,#20242b)] shadow-md hover:bg-[var(--surface-hover,#f0f2f5)] focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)] disabled:cursor-not-allowed disabled:opacity-45',
  },
});
register('rgi-speed-dial-trigger', {
  base: {
    tw: 'flex size-14 cursor-pointer items-center justify-center rounded-full border-0 bg-[var(--accent,#315fc4)] text-xl text-white shadow-lg transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent,#315fc4)]',
  },
});
register('rgi-speed-dial-open .rgi-speed-dial-trigger', { base: { tw: 'rotate-45' } });
register('rgi-speed-dial [hidden]', { base: { tw: 'hidden' } });

register('rgi-speed-dial-example', {
  base: { tw: 'flex w-full max-w-[760px] flex-col gap-4' },
});
register('rgi-speed-dial-example-stage', {
  base: {
    tw: 'flex min-h-[230px] items-center justify-between gap-6 rounded-xl border border-[#303a49] bg-[radial-gradient(ellipse_at_top_right,#20304a_0%,#111720_58%)] p-6 max-sm:gap-4 max-sm:p-4',
  },
});
register('rgi-speed-dial-example-copy', {
  base: {
    tw: 'flex max-w-[280px] flex-col gap-2 [&_strong]:text-base [&_strong]:font-semibold [&_span:last-child]:text-sm [&_span:last-child]:text-[#9ba9bc]',
  },
});
register('rgi-speed-dial-example-kicker', {
  base: { tw: 'text-[10px] font-semibold tracking-[.14em] text-[#90a8cd]' },
});
register('rgi-speed-dial-example .rgi-speed-dial-trigger', {
  base: {
    tw: '!size-12 !shrink-0 !border !border-[#9ab8f2] !bg-[#8baeff] !text-[#101827] !shadow-[0_8px_20px_#0008] hover:!bg-[#a3beff] focus-visible:!outline-[#c5d7ff]',
  },
});
register('rgi-speed-dial-example .rgi-speed-dial-action', {
  base: {
    tw: '!size-10 !shrink-0 !border-[#354154] !bg-[#202b3a] !text-[#d3dceb] !shadow-lg hover:!border-[#536985] hover:!bg-[#2a3a51] focus-visible:!outline-[#8baeff]',
  },
});
register('rgi-speed-dial-example .rgi-speed-dial-actions', {
  base: { tw: 'gap-2' },
});
register('rgi-speed-dial-example .rgi-speed-dial-right .rgi-speed-dial-actions', {
  base: { tw: 'flex-row' },
});
register('rgi-speed-dial-example .rgi-speed-dial-left .rgi-speed-dial-actions', {
  base: { tw: 'flex-row' },
});
register('rgi-speed-dial-example-status', {
  base: { tw: 'min-h-5 text-xs text-[#9ba9bc]' },
});
register('rgi-speed-dial-example-directions', {
  base: { tw: 'm-0 flex min-w-0 flex-wrap gap-2 border-0 p-0' },
});
register('rgi-speed-dial-example-direction', {
  base: {
    tw: 'inline-flex min-h-9 min-w-16 cursor-pointer items-center justify-center rounded-lg border border-[#354154] bg-[#111720] px-3 text-xs capitalize text-[#9ba9bc] hover:border-[#536985] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff] aria-pressed:border-[#789fe8] aria-pressed:bg-[#20304a] aria-pressed:text-[#c5d7ff]',
  },
});
register('rgi-speed-dial-example-direction-stage', {
  base: {
    tw: 'flex min-h-[220px] flex-wrap items-center justify-center gap-8 rounded-xl border border-dashed border-[#303a49] bg-[#0d121b] p-6 max-sm:gap-4 max-sm:p-4',
  },
});
register('rgi-speed-dial-example-direction-note', {
  base: { tw: 'max-w-48 text-center text-xs text-[#9ba9bc]' },
});
register('rgi-speed-dial-example-share-card', {
  base: {
    tw: 'flex min-h-24 w-full flex-wrap items-center gap-4 rounded-xl border border-[#293548] bg-[#111925] p-4',
  },
});
register('rgi-speed-dial-example-share-icon', {
  base: {
    tw: 'inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#364760] bg-[#24344a] text-[#adc6fa]',
  },
});
register('rgi-speed-dial-example-share-copy', {
  base: {
    tw: 'flex min-w-[160px] flex-1 flex-col gap-1 [&_strong]:text-sm [&_strong]:font-semibold [&_span]:text-xs [&_span]:text-[#9ba9bc]',
  },
});
register('rgi-speed-dial-example-share-card .rgi-speed-dial', {
  base: { tw: 'flex-row' },
});
register('rgi-speed-dial-example-share-card .rgi-speed-dial-actions', {
  base: { tw: 'flex-row' },
});
register('component-showcase-speed-dial .demo-content', {
  base: {
    tw: 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
  },
});
