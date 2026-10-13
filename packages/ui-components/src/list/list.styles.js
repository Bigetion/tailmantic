import { register } from 'tailmantic/collector';

register('rgi-list', {
  base: { tw: 'm-0 flex list-none flex-col p-2 text-[var(--text,#edf2fb)]' },
  modifiers: {
    dense: { tw: 'py-1' },
    'no-padding': { tw: 'p-0' },
  },
});

register('rgi-list-item', {
  base: { tw: 'flex min-h-12 items-center gap-3 px-4 py-2 text-sm' },
  modifiers: {
    divider: { tw: 'border-b border-[var(--border,#273142)] last:border-b-0' },
    'no-gutters': { tw: 'px-0' },
  },
});

register('rgi-list-item-text', {
  base: { tw: 'flex min-w-0 flex-col gap-1' },
});

register('rgi-list-primary', {
  base: { tw: 'font-medium' },
});

register('rgi-list-secondary', {
  base: { tw: 'text-xs text-[var(--muted,#9aa8bd)]' },
});

register('rgi-list-example', {
  base: { tw: 'w-full max-w-[500px] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel)] !p-0' },
});

register('rgi-list-example-navigation-item', {
  base: { tw: 'min-h-0 p-0' },
});

register('rgi-list-example-navigation-button', {
  base: { tw: 'flex min-h-[66px] w-full cursor-pointer items-center gap-3 border-0 bg-transparent px-3 py-3 text-left text-[var(--muted)] transition-colors hover:bg-[#ffffff08] [&_.rgi-list-item-text]:flex-1 [&_.rgi-list-primary]:truncate [&_.rgi-list-primary]:text-xs [&_.rgi-list-primary]:font-medium [&_.rgi-list-primary]:text-[var(--text)] [&_.rgi-list-secondary]:truncate [&_.rgi-list-secondary]:text-[10px] [&_.rgi-list-secondary]:text-[var(--subtle)]' },
});

register('rgi-list-example-navigation-button-active', {
  base: { tw: 'bg-[#19253a] hover:bg-[#1d2b43] [&_.rgi-list-example-icon]:bg-[#253c63] [&_.rgi-list-example-icon]:text-[#b8cbff]' },
});

register('rgi-list-example-icon', {
  base: { tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--panel-raised)] text-[var(--muted)]' },
});

register('rgi-list-example-trailing', {
  base: { tw: 'shrink-0 text-[var(--subtle)]' },
});

register('rgi-list-example-messages', {
  base: { tw: 'max-w-[500px]' },
});

register('rgi-list-example-message-item', {
  base: { tw: 'min-h-[70px] px-3 py-3' },
});

register('rgi-list-example-message-item .rgi-list-item-text', {
  base: { tw: 'flex-1' },
});

register('rgi-list-example-message-item .rgi-list-primary', {
  base: { tw: 'truncate text-xs font-medium text-[var(--text)]' },
});

register('rgi-list-example-message-item .rgi-list-secondary', {
  base: { tw: 'truncate text-[10px] text-[var(--subtle)]' },
});

register('rgi-list-example-avatar', {
  base: { tw: 'inline-flex size-9 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold' },
});

register('rgi-list-example-avatar-blue', {
  base: { tw: 'bg-[#243e68] text-[#c7d8ff]' },
});

register('rgi-list-example-avatar-violet', {
  base: { tw: 'bg-[#3c315f] text-[#ddd2ff]' },
});

register('rgi-list-example-avatar-green', {
  base: { tw: 'bg-[#214b3f] text-[#c5f0dd]' },
});

register('rgi-list-example-time', {
  base: { tw: 'shrink-0 self-start pt-0.5 text-[9px] tabular-nums text-[var(--subtle)]' },
});

register('rgi-list-example-footer', {
  base: { tw: 'flex items-center gap-2 px-3 py-2.5 text-[9px] text-[var(--subtle)]' },
});

register('rgi-list-example-setting-item', {
  base: { tw: 'min-h-0 p-0' },
});

register('rgi-list-example-setting-button', {
  base: { tw: 'flex min-h-[64px] w-full cursor-pointer items-center gap-3 border-0 bg-transparent px-3 py-3 text-left hover:bg-[#ffffff08] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--rgi-blue)] [&_.rgi-list-item-text]:flex-1 [&_.rgi-list-primary]:truncate [&_.rgi-list-primary]:text-xs [&_.rgi-list-primary]:font-medium [&_.rgi-list-primary]:text-[var(--text)] [&_.rgi-list-secondary]:truncate [&_.rgi-list-secondary]:text-[10px] [&_.rgi-list-secondary]:text-[var(--subtle)]' },
});

register('rgi-list-example-switch', {
  base: { tw: 'inline-flex h-[18px] w-8 shrink-0 items-center rounded-full bg-[#394557] p-0.5 transition-colors' },
});

register('rgi-list-example-switch i', {
  base: { tw: 'size-3.5 rounded-full bg-[#aab5c5] transition-transform' },
});

register('rgi-list-example-switch-on', {
  base: { tw: 'bg-[#456cc4] [&_i]:translate-x-3 [&_i]:bg-white' },
});
