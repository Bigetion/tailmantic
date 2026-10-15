import { register } from 'tailmantic/collector';

register('tm-list', {
  base: { tw: 'm-0 flex list-none flex-col p-2 text-[var(--text,#edf2fb)]' },
  modifiers: {
    dense: { tw: 'py-1' },
    'no-padding': { tw: 'p-0' },
  },
});

register('tm-list-item', {
  base: { tw: 'flex min-h-12 items-center gap-3 px-4 py-2 text-sm' },
  modifiers: {
    divider: { tw: 'border-b border-[var(--border,#273142)] last:border-b-0' },
    'no-gutters': { tw: 'px-0' },
  },
});

register.all('tm-list', {
  'item-text': 'flex min-w-0 flex-col gap-1',
  'primary': 'font-medium',
  'secondary': 'text-xs text-[var(--muted,#9aa8bd)]',
});

register.all('tm-list-example', {
  '': 'w-full max-w-[500px] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel)] !p-0',
  'navigation-item': '!min-h-0 !p-0',
  'navigation-button': 'flex min-h-[66px] w-full cursor-pointer items-center gap-3 border-0 bg-transparent px-3 py-3 text-left text-[var(--muted)] transition-colors hover:bg-[#ffffff08] [&_.tm-list-item-text]:flex-1 [&_.tm-list-primary]:truncate [&_.tm-list-primary]:text-xs [&_.tm-list-primary]:font-medium [&_.tm-list-primary]:text-[var(--text)] [&_.tm-list-secondary]:truncate [&_.tm-list-secondary]:text-[10px] [&_.tm-list-secondary]:text-[var(--subtle)]',
  'navigation-button-active': 'bg-[#19253a] hover:bg-[#1d2b43] [&_.tm-list-example-icon]:bg-[#253c63] [&_.tm-list-example-icon]:text-[#b8cbff]',
  'icon': 'inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--panel-raised)] text-[var(--muted)]',
  'trailing': 'shrink-0 text-[var(--subtle)]',
  'messages': 'max-w-[500px]',
  'message-item': 'min-h-[70px] px-3 py-3',
  '&message-item .tm-list-item-text': 'flex-1',
  '&message-item .tm-list-primary': 'truncate text-xs font-medium text-[var(--text)]',
  '&message-item .tm-list-secondary': 'truncate text-[10px] text-[var(--subtle)]',
  'avatar': 'inline-flex size-9 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold',
  'avatar-blue': 'bg-[#243e68] text-[#c7d8ff]',
  'avatar-violet': 'bg-[#3c315f] text-[#ddd2ff]',
  'avatar-green': 'bg-[#214b3f] text-[#c5f0dd]',
  'time': 'shrink-0 self-start pt-0.5 text-[9px] tabular-nums text-[var(--subtle)]',
  'footer': 'flex items-center gap-2 px-3 py-2.5 text-[9px] text-[var(--subtle)]',
  'setting-item': '!min-h-0 !p-0',
  'setting-button': 'flex min-h-[64px] w-full cursor-pointer items-center gap-3 border-0 bg-transparent px-3 py-3 text-left hover:bg-[#ffffff08] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--tm-blue)] [&_.tm-list-item-text]:flex-1 [&_.tm-list-primary]:truncate [&_.tm-list-primary]:text-xs [&_.tm-list-primary]:font-medium [&_.tm-list-primary]:text-[var(--text)] [&_.tm-list-secondary]:truncate [&_.tm-list-secondary]:text-[10px] [&_.tm-list-secondary]:text-[var(--subtle)]',
  'switch': 'inline-flex h-[18px] w-8 shrink-0 items-center rounded-full bg-[#394557] p-0.5 transition-colors',
  '&switch i': 'size-3.5 rounded-full bg-[#aab5c5] transition-transform',
  'switch-on': 'bg-[#456cc4] [&_i]:translate-x-3 [&_i]:bg-white',
});
