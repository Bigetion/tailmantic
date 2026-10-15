import { register } from 'tailmantic/collector';

register('tm-drawer', {
  base: {
    tw: 'fixed z-50 flex h-dvh w-[min(20rem,85vw)] flex-col overflow-auto bg-[var(--surface,#fff)] p-4 text-[var(--text,#20242b)] shadow-[0_8px_32px_rgba(0,0,0,.2)]',
  },
  modifiers: {
    'anchor-left': { tw: 'inset-y-0 left-0' },
    'anchor-right': { tw: 'inset-y-0 right-0' },
    'anchor-top': { tw: 'inset-x-0 top-0 h-auto w-full' },
    'anchor-bottom': { tw: 'inset-x-0 bottom-0 h-auto w-full' },
  },
});

register.all('tm-drawer', {
  'root': 'contents',
  'backdrop': 'fixed inset-0 z-40 cursor-default border-0 bg-black/40 p-0',
  'permanent': 'contents',
  'persistent': 'contents',
  'temporary': 'contents',
  'open': 'visible',
  '& [hidden]': 'hidden',
});

register.all('tm-drawer-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-4',
  'shell': 'relative min-h-[300px] overflow-hidden rounded-xl border border-[#293548] bg-[#0e141e]',
  'topbar': 'flex h-12 items-center gap-3 border-b border-[#293342] bg-[#151c27] px-4 [&_strong]:text-xs [&_strong]:font-semibold [&_strong]:text-[#d3dce8]',
  'mark': 'inline-flex size-7 items-center justify-center rounded-lg bg-[#293a53] text-xs font-bold text-[#bfd1f5]',
  'spacer': 'flex-1',
  'trigger': 'inline-flex cursor-pointer items-center gap-2 rounded-md border border-[#40516b] bg-[#1b2738] px-3 py-2 text-xs font-medium text-[#c0d2f2] transition-colors hover:bg-[#24344a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a9c4ff]',
  'content': 'flex min-h-[245px] flex-col items-start justify-center gap-3 px-7 py-6 max-sm:px-4',
  'eyebrow': 'text-[10px] font-semibold tracking-[.14em] text-[#8290a5]',
  'title': 'text-xl font-semibold text-[#e4ebf5]',
  'description': 'max-w-md text-sm leading-relaxed text-[#9ba9bc]',
  'footer': 'flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--muted)] [&_strong]:font-semibold [&_strong]:text-[var(--text)]',
  'panel': '!z-[80] !w-[min(320px,86vw)] !border-r !border-[#303a49] !bg-[#121925] !p-5 !text-[#e4ebf5] !shadow-[16px_0_48px_rgba(0,0,0,.4)]',
  'panel-header': 'flex items-center justify-between border-b border-[#293342] pb-4',
  'brand': 'flex min-w-0 items-center gap-3 [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:text-[#e4ebf5] [&_small]:text-xs [&_small]:text-[#9ba9bc]',
  '&brand > span:last-child': 'flex min-w-0 flex-col gap-1',
  'brand-mark': 'inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-[#34465f] bg-[#25354b] text-[#b6cdf7]',
  'close': 'inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent p-0 text-[#9ba7b8] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  'nav': 'mt-6 flex flex-col gap-1',
  'section-list': 'mt-6 flex flex-col gap-6',
  'section': 'flex flex-col gap-1',
  'section-heading': 'mb-2 px-3 text-[10px] font-semibold tracking-[.14em] text-[#77869b]',
  'nav-item': 'flex min-h-10 w-full cursor-pointer items-center gap-3 rounded-lg border-0 bg-transparent px-3 text-left text-sm text-[#a6b1c0] transition-colors hover:bg-white/[.04] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff] [&_span]:min-w-0 [&_span]:flex-1',
  'nav-item-active': 'bg-[#223149] text-[#c6d7f6] hover:bg-[#223149] hover:text-white',
  '&nav-item small': 'rounded-full bg-[#29374a] px-2 py-0.5 text-[10px] text-[#b7c7e2]',
  'account': 'mt-auto flex items-center gap-3 border-t border-[#293342] pt-4 [&_strong]:text-xs [&_strong]:font-medium [&_strong]:text-[#e4ebf5] [&_small]:text-[10px] [&_small]:text-[#9ba9bc]',
  'account-avatar': 'inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-[#47566c] bg-[#29394f] text-xs font-semibold text-[#d7e3f5]',
  'account-info': 'flex min-w-0 flex-1 flex-col gap-1 [&_strong]:truncate [&_small]:truncate',
  'permanent-shell': 'grid min-h-[330px] w-full grid-cols-[240px_minmax(0,1fr)] overflow-hidden rounded-xl border border-[#293548] bg-[#0e141e] max-sm:grid-cols-[190px_minmax(0,1fr)]',
  'permanent-panel': '!relative !inset-auto !z-auto !h-auto !w-full !min-w-0 !overflow-auto !border-r !border-[#303a49] !bg-[#121925] !p-4 !shadow-none',
  'permanent-content': 'flex min-w-0 flex-col items-start justify-center gap-3 p-6 max-sm:p-4',
  '&permanent-content > p': 'm-0 max-w-md text-sm leading-relaxed text-[#9ba9bc]',
  'permanent-topline': 'mb-3 flex w-full items-center justify-between border-b border-[#293342] pb-3 text-xs text-[#98a5b6]',
  '&permanent-topline button': 'inline-flex size-7 cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent p-0 text-[#9ba7b8] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  'permanent-status': 'mt-2 inline-flex items-center gap-2 rounded-full border border-[#285b43] bg-[#172b23] px-3 py-1.5 text-xs text-[#9edab7] [&_i]:size-2 [&_i]:rounded-full [&_i]:bg-[#78c99e]',
});

register.all('component-showcase-drawer', {
  '& .demo-content': 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
  '& .tm-drawer-backdrop': '!z-[70] !bg-[rgba(3,6,10,.68)] !backdrop-blur-[1px]',
});
