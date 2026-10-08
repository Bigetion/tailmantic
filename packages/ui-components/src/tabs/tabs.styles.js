import { register } from 'tailmantic/collector';

register('rgi-tabs', {
  base: { tw: 'flex min-w-0 flex-col text-[var(--text,#20242b)]' },
  modifiers: { vertical: { tw: 'flex-row' } },
});
register('rgi-tabs-list', {
  base: { tw: 'flex min-w-0 overflow-x-auto border-b border-[var(--border,#d5d9e0)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden' },
});
register('rgi-tabs-vertical .rgi-tabs-list', {
  base: { tw: 'flex-col overflow-y-auto overflow-x-hidden border-b-0 border-r [scrollbar-width:none] [&::-webkit-scrollbar]:hidden' },
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
register('rgi-tabs-vertical .rgi-tab', { base: { tw: 'justify-start rounded-t-none rounded-l-md' } });
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
  base: { tw: 'absolute bottom-[-1px] left-2 right-2 h-0.5 rounded-full bg-[var(--accent,#8baeff)]' },
});
register('rgi-tabs-vertical .rgi-tab-indicator', {
  base: { tw: 'bottom-2 left-auto right-[-1px] top-2 h-auto w-0.5' },
});

// badge
register('rgi-tab-badge', {
  base: { tw: 'inline-flex min-w-[1rem] items-center justify-center rounded-full bg-[var(--panel-raised,#1e2a3a)] px-1 py-0.5 text-[10px] leading-none text-[var(--muted,#626a75)]' },
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
  base: { tw: 'inline-flex shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent px-1.5 text-[var(--muted,#626a75)] hover:text-[var(--text,#e0eaff)] disabled:pointer-events-none disabled:opacity-30' },
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
