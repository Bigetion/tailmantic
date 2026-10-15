import { register } from 'tailmantic/collector';

register.all('tm-bottom-navigation', {
  '': 'fixed inset-x-0 bottom-0 z-40 flex min-h-14 items-stretch justify-around border-t border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] px-2 pb-[env(safe-area-inset-bottom)] text-[var(--text,#20242b)] shadow-[0_-2px_8px_rgba(0,0,0,.08)]',
  'icon': 'flex h-6 items-center justify-center text-lg leading-none',
  'label': 'truncate',
});

register('tm-bottom-navigation-item', {
  base: {
    tw: 'flex min-w-0 flex-1 cursor-pointer flex-col items-center justify-center gap-1 border-0 bg-transparent px-2 py-2 text-xs text-[var(--muted,#626a75)] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--accent,#315fc4)]',
  },
  modifiers: { selected: { tw: 'font-semibold text-[var(--accent,#315fc4)]' } },
});

register.all('tm-bottom-navigation-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-4',
  'device': 'w-full overflow-hidden rounded-2xl border border-[#344050] bg-[#0e141e] shadow-[0_14px_40px_rgba(0,0,0,.25)]',
  'device-top': 'flex h-10 items-center justify-between border-b border-white/[.05] px-5 text-xs font-medium text-[#aeb8c7] [&_span]:inline-flex [&_span]:items-center [&_span]:gap-2 [&_i]:size-2 [&_i]:rounded-full [&_i]:bg-[#79c9a1] [&_time]:tabular-nums [&_time]:text-[#8d99ab]',
  'content': 'flex min-h-[150px] items-center gap-4 px-6 py-5 max-sm:min-h-[130px] max-sm:px-4',
  'content-icon': 'inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#34445c] bg-[#202d40] text-[#adc6fa]',
  'content-copy': 'flex min-w-0 flex-1 flex-col gap-1 [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:text-[var(--text)] [&_small]:text-xs [&_small]:leading-relaxed [&_small]:text-[var(--muted)]',
  'unread': 'inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#24344a] px-2.5 py-1.5 text-xs font-medium text-[#c1d3f4]',
  'bar': '!relative !inset-auto !z-auto !min-h-16 !justify-around !border-0 !border-t !border-[#283446] !bg-[#141c28] !px-2 !pb-0 !text-[#edf2fb] !shadow-[0_-2px_12px_rgba(0,0,0,.18)]',
  'item': '!relative !min-w-0 !gap-1.5 !rounded-lg !px-2 !py-2 !text-[#8491a4] hover:!bg-white/[.035] focus-visible:!outline-offset-[-2px]',
  '&item.tm-bottom-navigation-item-selected': '!bg-transparent hover:!bg-transparent !text-[#c9d9f8]',
  '&item .tm-bottom-navigation-icon': '!flex !size-8 !items-center !justify-center !rounded-full !text-current',
  '&item.tm-bottom-navigation-item-selected .tm-bottom-navigation-icon': '!bg-[#293952]',
  '&item .tm-bottom-navigation-label': '!text-[10px] !font-medium !leading-none',
  '&item.tm-bottom-navigation-item-selected .tm-bottom-navigation-label': '!font-semibold !text-[#d9e5fb]',
  'badge': 'absolute right-1 top-0 inline-flex min-w-4 items-center justify-center rounded-full border border-[#141c28] bg-[#e5747d] px-1 py-0.5 text-[9px] font-semibold leading-none text-white',
  '&compact .tm-bottom-navigation-example-compact-item:not(.tm-bottom-navigation-item-selected) .tm-bottom-navigation-label': '!hidden',
  '&icons-only .tm-bottom-navigation-example-icon-item .tm-bottom-navigation-label': '!sr-only',
  '&icons-only .tm-bottom-navigation-example-icon-item .tm-bottom-navigation-icon': '!size-10',
  'home-indicator': 'flex h-5 items-center justify-center bg-[#141c28] [&_span]:h-1 [&_span]:w-12 [&_span]:rounded-full [&_span]:bg-[#697588]',
  'footer': 'flex flex-wrap items-center justify-between gap-2',
  'status': 'text-xs text-[var(--muted)] [&_strong]:font-semibold [&_strong]:text-[var(--text)]',
  'hint': 'inline-flex items-center gap-1.5 text-xs text-[var(--muted)]',
});

register.all('component-showcase-bottom-navigation', {
  '& .demo-content': 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
  '& .demo-canvas': 'items-stretch',
});
