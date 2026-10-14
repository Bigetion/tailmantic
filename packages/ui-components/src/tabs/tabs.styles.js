import { register } from 'tailmantic/collector';

register('rgi-tabs', {
  base: { tw: 'flex min-w-0 flex-col text-[var(--text,#20242b)]' },
  modifiers: { vertical: { tw: 'flex-row' } },
});
register('rgi-tabs-list', {
  base: {
    tw: 'flex min-w-0 overflow-x-auto border-b border-[var(--border,#d5d9e0)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
  },
});
register('rgi-tabs-vertical .rgi-tabs-list', {
  base: {
    tw: 'flex-col overflow-y-auto overflow-x-hidden border-b-0 border-r [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
  },
});
register('rgi-tab', {
  base: {
    // No border-bottom here — indicator span handles the active underline
    tw: 'relative inline-flex min-h-12 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-t-md border-0 bg-transparent px-4 pb-px text-sm font-medium text-[var(--muted,#626a75)] hover:bg-[var(--surface-hover,rgba(99,120,150,0.15))] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--accent,#315fc4)] disabled:cursor-not-allowed disabled:opacity-45',
  },
});
register('rgi-tab-selected', {
  base: { tw: 'font-semibold text-[var(--accent,#8baeff)]' },
});
register('rgi-tabs-vertical .rgi-tab', {
  base: { tw: 'justify-start rounded-t-none rounded-l-md' },
});
register('rgi-tabs-vertical .rgi-tab-selected', {
  base: {},
});
register('rgi-tab-icon', { base: { tw: 'inline-flex' } });
register('rgi-tab-panel', {
  base: { tw: 'min-w-0 p-4 focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)]' },
});
register('rgi-tabs [hidden]', { base: { tw: 'hidden' } });

// variant
register('rgi-tabs-list-scrollable', { base: { tw: 'justify-start' } });
register('rgi-tabs-list-centered', { base: { tw: 'justify-center' } });
register('rgi-tabs-list-fullwidth', { base: { tw: '[&_.rgi-tab]:flex-1' } });

// animated indicator — only the span handles the colored underline
register('rgi-tab-indicator', {
  base: {
    tw: 'absolute bottom-[-1px] left-2 right-2 h-0.5 rounded-full bg-[var(--accent,#8baeff)]',
  },
});
register('rgi-tabs-vertical .rgi-tab-indicator', {
  base: { tw: 'bottom-2 left-auto right-[-1px] top-2 h-auto w-0.5' },
});

// badge
register('rgi-tab-badge', {
  base: {
    tw: 'inline-flex min-w-[1rem] items-center justify-center rounded-full bg-[var(--panel-raised,#1e2a3a)] px-1 py-0.5 text-[10px] leading-none text-[var(--muted,#626a75)]',
  },
});

// tab-content wrapper
register('rgi-tab-content', {
  base: { tw: 'inline-flex items-center gap-1.5' },
});

// size overrides
register('rgi-tabs-sm .rgi-tab', {
  base: { tw: 'min-h-8 px-3 text-xs' },
});
register('rgi-tabs-lg .rgi-tab', {
  base: { tw: 'min-h-14 px-5 text-base' },
});

// scroll buttons
register('rgi-tabs-scroll-btn', {
  base: {
    tw: 'inline-flex shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent px-1.5 text-[var(--muted,#626a75)] hover:text-[var(--text,#e0eaff)] disabled:pointer-events-none disabled:opacity-30',
  },
});
register('rgi-tabs-scrollable-container', {
  base: { tw: 'flex min-w-0 items-stretch border-b border-[var(--border,#d5d9e0)]' },
});
register('rgi-tabs-vertical .rgi-tabs-scrollable-container', {
  base: { tw: 'flex-col border-b-0 border-r' },
});
register('rgi-tabs-scrollable-container .rgi-tabs-list', {
  base: { tw: 'border-b-0 border-r-0' },
});

register('rgi-tabs-example', {
  base: {
    tw: 'flex w-full max-w-[760px] flex-col gap-3 rounded-xl border border-[#303a49] bg-[#111720] p-4 sm:gap-4 sm:p-5',
  },
});
register('rgi-tabs-example .rgi-tabs', {
  base: { tw: 'min-w-0' },
});
register('rgi-tabs-example .rgi-tabs-list', {
  base: { tw: 'border-[#303a49]' },
});
register('rgi-tabs-example .rgi-tab', {
  base: {
    tw: 'text-[#9ba9bc] hover:bg-white/[.035] hover:text-white focus-visible:outline-[#8baeff]',
  },
});
register('rgi-tabs-example .rgi-tab-selected', {
  base: { tw: 'text-[#c5d7ff]' },
});
register('rgi-tabs-example .rgi-tab-indicator', {
  base: { tw: 'bg-[#8baeff]' },
});
register('rgi-tabs-example .rgi-tab-panel', {
  base: { tw: 'px-0 pb-0 pt-4' },
});
register('rgi-tabs-example .rgi-tabs-scrollable-container', {
  base: { tw: 'border-[#303a49]' },
});
register('rgi-tabs-example .rgi-tabs-scroll-btn', {
  base: {
    tw: 'min-w-8 text-[#9ba9bc] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  },
});
register('rgi-tabs-example .rgi-tab-badge', {
  base: { tw: 'bg-[#263954] text-[#c5d7ff]' },
});
register('rgi-tabs-example-card', {
  base: {
    tw: 'flex min-h-[84px] flex-wrap items-center gap-3 rounded-lg border border-[#2c3746] bg-[#151d28] p-3 sm:gap-4 sm:p-4',
  },
});
register('rgi-tabs-example-icon', {
  base: { tw: 'inline-flex size-9 shrink-0 items-center justify-center rounded-lg' },
});
register('rgi-tabs-example-icon-blue', {
  base: { tw: 'border border-[#364760] bg-[#24344a] text-[#adc6fa]' },
});
register('rgi-tabs-example-icon-green', {
  base: { tw: 'border border-[#315244] bg-[#1d382e] text-[#a6e2c0]' },
});
register('rgi-tabs-example-icon-purple', {
  base: { tw: 'border border-[#463d61] bg-[#302944] text-[#c8b8f2]' },
});
register('rgi-tabs-example-copy', {
  base: {
    tw: 'flex min-w-[140px] flex-1 flex-col gap-1 [&_strong]:text-[10px] [&_strong]:font-semibold [&_span]:text-[9px] [&_span]:leading-relaxed [&_span]:text-[#9ba9bc]',
  },
});
register('rgi-tabs-example-metric', {
  base: {
    tw: 'ml-auto flex flex-col items-end gap-1 [&_strong]:text-[9px] [&_strong]:font-medium [&_strong]:text-[#d0d9e7] [&_span]:text-[8px] [&_span]:text-[#9edab7]',
  },
});
register('rgi-tabs-example-filter', {
  base: {
    tw: 'flex min-h-[72px] items-center gap-3 rounded-lg border border-[#2c3746] bg-[#151d28] px-3 py-2.5 sm:px-4',
  },
});
register('rgi-tabs-example-count', {
  base: {
    tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#263954] text-xs font-semibold text-[#bfd2f6]',
  },
});
register('rgi-tabs-example-centered .rgi-tabs-list', {
  base: { tw: 'justify-center' },
});
register('rgi-tabs-example-settings', {
  base: {
    tw: 'flex min-h-[152px] flex-col items-center justify-center gap-2 rounded-lg border border-[#2c3746] bg-[#151d28] px-4 py-5 text-center [&_strong]:text-[10px] [&_strong]:font-semibold [&_p]:m-0 [&_p]:max-w-[320px] [&_p]:text-[9px] [&_p]:leading-relaxed [&_p]:text-[#9ba9bc]',
  },
});
register('rgi-tabs-example-settings .rgi-tabs-example-icon', {
  base: { tw: 'mb-1' },
});
register('rgi-tabs-example-status', {
  base: { tw: 'min-h-4 text-[9px] text-[#9ba9bc]' },
});
register('component-showcase-tabs .demo-content', {
  base: {
    tw: 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
  },
});
