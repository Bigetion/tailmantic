import { register } from 'tailmantic/collector';

register('rgi-bottom-navigation', {
  base: {
    tw: 'fixed inset-x-0 bottom-0 z-40 flex min-h-14 items-stretch justify-around border-t border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] px-2 pb-[env(safe-area-inset-bottom)] text-[var(--text,#20242b)] shadow-[0_-2px_8px_rgba(0,0,0,.08)]',
  },
});
register('rgi-bottom-navigation-item', {
  base: {
    tw: 'flex min-w-0 flex-1 cursor-pointer flex-col items-center justify-center gap-1 border-0 bg-transparent px-2 py-2 text-xs text-[var(--muted,#626a75)] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--accent,#315fc4)]',
  },
  modifiers: { selected: { tw: 'font-semibold text-[var(--accent,#315fc4)]' } },
});
register('rgi-bottom-navigation-icon', {
  base: { tw: 'flex h-6 items-center justify-center text-lg leading-none' },
});
register('rgi-bottom-navigation-label', { base: { tw: 'truncate' } });

register('rgi-bottom-navigation-example', {
  base: { tw: 'flex w-full max-w-[760px] flex-col gap-4' },
});

register('rgi-bottom-navigation-example-device', {
  base: {
    tw: 'w-full overflow-hidden rounded-2xl border border-[#344050] bg-[#0e141e] shadow-[0_14px_40px_rgba(0,0,0,.25)]',
  },
});

register('rgi-bottom-navigation-example-device-top', {
  base: {
    tw: 'flex h-10 items-center justify-between border-b border-white/[.05] px-5 text-xs font-medium text-[#aeb8c7] [&_span]:inline-flex [&_span]:items-center [&_span]:gap-2 [&_i]:size-2 [&_i]:rounded-full [&_i]:bg-[#79c9a1] [&_time]:tabular-nums [&_time]:text-[#8d99ab]',
  },
});

register('rgi-bottom-navigation-example-content', {
  base: { tw: 'flex min-h-[150px] items-center gap-4 px-6 py-5 max-sm:min-h-[130px] max-sm:px-4' },
});

register('rgi-bottom-navigation-example-content-icon', {
  base: {
    tw: 'inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#34445c] bg-[#202d40] text-[#adc6fa]',
  },
});

register('rgi-bottom-navigation-example-content-copy', {
  base: {
    tw: 'flex min-w-0 flex-1 flex-col gap-1 [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:text-[var(--text)] [&_small]:text-xs [&_small]:leading-relaxed [&_small]:text-[var(--muted)]',
  },
});

register('rgi-bottom-navigation-example-unread', {
  base: {
    tw: 'inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#24344a] px-2.5 py-1.5 text-xs font-medium text-[#c1d3f4]',
  },
});

register('rgi-bottom-navigation-example-bar', {
  base: {
    tw: '!relative !inset-auto !z-auto !min-h-16 !justify-around !border-0 !border-t !border-[#283446] !bg-[#141c28] !px-2 !pb-0 !text-[#edf2fb] !shadow-[0_-2px_12px_rgba(0,0,0,.18)]',
  },
});

register('rgi-bottom-navigation-example-item', {
  base: {
    tw: '!relative !min-w-0 !gap-1.5 !rounded-lg !px-2 !py-2 !text-[#8491a4] hover:!bg-white/[.035] focus-visible:!outline-offset-[-2px]',
  },
});

register('rgi-bottom-navigation-example-item.rgi-bottom-navigation-item-selected', {
  base: { tw: '!bg-transparent hover:!bg-transparent !text-[#c9d9f8]' },
});

register('rgi-bottom-navigation-example-item .rgi-bottom-navigation-icon', {
  base: { tw: '!flex !size-8 !items-center !justify-center !rounded-full !text-current' },
});

register(
  'rgi-bottom-navigation-example-item.rgi-bottom-navigation-item-selected .rgi-bottom-navigation-icon',
  {
    base: { tw: '!bg-[#293952]' },
  },
);

register('rgi-bottom-navigation-example-item .rgi-bottom-navigation-label', {
  base: { tw: '!text-[10px] !font-medium !leading-none' },
});

register(
  'rgi-bottom-navigation-example-item.rgi-bottom-navigation-item-selected .rgi-bottom-navigation-label',
  {
    base: { tw: '!font-semibold !text-[#d9e5fb]' },
  },
);

register(
  'rgi-bottom-navigation-example-compact .rgi-bottom-navigation-example-compact-item:not(.rgi-bottom-navigation-item-selected) .rgi-bottom-navigation-label',
  {
    base: { tw: '!hidden' },
  },
);

register(
  'rgi-bottom-navigation-example-icons-only .rgi-bottom-navigation-example-icon-item .rgi-bottom-navigation-label',
  {
    base: { tw: '!sr-only' },
  },
);

register(
  'rgi-bottom-navigation-example-icons-only .rgi-bottom-navigation-example-icon-item .rgi-bottom-navigation-icon',
  {
    base: { tw: '!size-10' },
  },
);

register('rgi-bottom-navigation-example-badge', {
  base: {
    tw: 'absolute right-1 top-0 inline-flex min-w-4 items-center justify-center rounded-full border border-[#141c28] bg-[#e5747d] px-1 py-0.5 text-[9px] font-semibold leading-none text-white',
  },
});

register('rgi-bottom-navigation-example-home-indicator', {
  base: {
    tw: 'flex h-5 items-center justify-center bg-[#141c28] [&_span]:h-1 [&_span]:w-12 [&_span]:rounded-full [&_span]:bg-[#697588]',
  },
});

register('rgi-bottom-navigation-example-footer', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-2' },
});

register('rgi-bottom-navigation-example-status', {
  base: {
    tw: 'text-xs text-[var(--muted)] [&_strong]:font-semibold [&_strong]:text-[var(--text)]',
  },
});

register('rgi-bottom-navigation-example-hint', {
  base: { tw: 'inline-flex items-center gap-1.5 text-xs text-[var(--muted)]' },
});

register('component-showcase-bottom-navigation .demo-content', {
  base: {
    tw: 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
  },
});

register('component-showcase-bottom-navigation .demo-canvas', {
  base: { tw: 'items-stretch' },
});
