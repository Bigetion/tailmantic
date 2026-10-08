import { register } from 'tailmantic/collector';

register('rgi-tabs', {
  base: { tw: 'flex min-w-0 flex-col text-[var(--text,#20242b)]' },
  modifiers: { vertical: { tw: 'flex-row' } },
});
register('rgi-tabs-list', {
  base: { tw: 'flex min-w-0 overflow-x-auto border-b border-[var(--border,#d5d9e0)]' },
});
register('rgi-tabs-vertical .rgi-tabs-list', {
  base: { tw: 'flex-col overflow-y-auto overflow-x-hidden border-b-0 border-r' },
});
register('rgi-tab', {
  base: {
    tw: 'relative inline-flex min-h-12 shrink-0 cursor-pointer items-center justify-center gap-2 border-0 border-b-2 border-transparent bg-transparent px-4 text-sm font-medium text-[var(--muted,#626a75)] hover:bg-[var(--surface-hover,#f0f2f5)] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--accent,#315fc4)] disabled:cursor-not-allowed disabled:opacity-45',
  },
});
register('rgi-tab-selected', {
  base: { tw: 'border-b-[var(--accent,#315fc4)] text-[var(--accent,#315fc4)]' },
});
register('rgi-tabs-vertical .rgi-tab', { base: { tw: 'justify-start border-b-0 border-r-2' } });
register('rgi-tabs-vertical .rgi-tab-selected', {
  base: { tw: 'border-r-[var(--accent,#315fc4)]' },
});
register('rgi-tab-icon', { base: { tw: 'inline-flex' } });
register('rgi-tab-panel', {
  base: { tw: 'min-w-0 p-4 focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)]' },
});
register('rgi-tabs [hidden]', { base: { tw: 'hidden' } });

// Improvement 1 — variant
register('rgi-tabs-list-scrollable', { base: { tw: 'justify-start' } });
register('rgi-tabs-list-centered', { base: { tw: 'justify-center' } });
register('rgi-tabs-list-fullwidth', { base: { tw: '[&_.rgi-tab]:flex-1' } });

// Improvement 2 — animated indicator
register('rgi-tab-indicator', {
  base: { tw: 'absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[var(--accent,#315fc4)]' },
});
register('rgi-tabs-vertical .rgi-tab-indicator', {
  base: { tw: 'bottom-2 left-auto right-0 top-2 h-auto w-0.5' },
});

// Improvement 3 — badge
register('rgi-tab-badge', {
  base: { tw: 'inline-flex min-w-4 items-center justify-center rounded-full bg-[var(--surface-hover,#e8edf5)] px-1 py-0.5 text-[10px] text-[var(--muted,#626a75)]' },
});

// Improvement 4 — rgi-tab-content wrapper
register('rgi-tab-content', {
  base: { tw: 'inline-flex items-center gap-1.5' },
});

// Improvement 5 — size overrides
register('rgi-tabs-sm .rgi-tab', {
  base: { tw: 'min-h-8 px-3 text-xs' },
});
register('rgi-tabs-lg .rgi-tab', {
  base: { tw: 'min-h-14 px-5 text-base' },
});

// Improvement 6 — scroll buttons
register('rgi-tabs-scroll-btn', {
  base: { tw: 'inline-flex shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent px-1.5 text-[var(--muted,#626a75)] hover:text-[var(--text,#20242b)] disabled:pointer-events-none disabled:opacity-30' },
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
