import { register } from 'tailmantic/collector';

register.all('tm-app-bar-example', {
  '': 'flex w-full max-w-[720px] flex-col gap-2',
  preview: 'overflow-hidden rounded-lg border border-[var(--border)] bg-[#0e141e]',
  header:
    'relative z-10 min-h-14 gap-3 border-b border-[var(--border)] bg-[#151c27] px-4 py-2 max-sm:gap-2 max-sm:px-3',
  brand: 'flex shrink-0 items-center gap-2',
  'brand-mark':
    'inline-flex size-7 items-center justify-center rounded-lg bg-[#263650] text-xs font-bold text-[#b5ccff]',
  'brand-copy': 'flex flex-col gap-0.5',
  '&brand-copy strong': 'whitespace-nowrap text-[9px] font-semibold text-[var(--text)]',
  '&brand-copy small': 'whitespace-nowrap text-[7px] text-[var(--muted)]',
  nav: 'ml-3 flex h-14 shrink-0 items-center gap-1 max-sm:hidden',
  'nav-link':
    '!h-8 !border-0 !px-2.5 !text-[8px] !font-medium !normal-case !tracking-normal !text-[#9aa6b8] hover:!bg-white/5 hover:!text-white',
  'nav-link-active': '!bg-[#202c3d] !text-[#d9e4f6] hover:!bg-[#202c3d]',
  spacer: 'min-w-0 flex-1',
  'icon-button':
    '!relative !size-8 !shrink-0 !border-0 !p-0 !text-[#b7c1cf] hover:!bg-white/5 hover:!text-white',
  'icon-button-muted': '!text-[#737f91]',
  'notification-dot':
    'absolute right-1.5 top-1.5 size-1.5 rounded-full bg-[#f08a75] ring-2 ring-[#151c27]',
  settings:
    '!h-8 !shrink-0 !gap-1.5 !border-[#303a49] !px-2.5 !text-[8px] !font-medium !normal-case !tracking-normal !text-[#c2cad5] hover:!bg-white/5 [&_svg]:max-sm:hidden',
  account:
    '!h-auto !shrink-0 !gap-1.5 !border-0 !p-0 !text-[9px] !text-[#9ba7b7] hover:!bg-transparent hover:!text-white',
  avatar:
    'inline-flex size-7 items-center justify-center rounded-full border border-[#45536a] bg-[#28374d] text-[8px] font-semibold text-[#d7e2f5]',
  content:
    'flex min-h-[145px] flex-col items-start justify-center gap-2 px-6 py-5 max-sm:min-h-[120px] max-sm:px-4',
  eyebrow: 'text-[7px] font-semibold tracking-[.16em] text-[#8190a5]',
  '&content strong': 'text-sm font-semibold tracking-tight text-[var(--text)]',
  '&content span:last-child': 'text-[9px] text-[var(--muted)]',
  footer: 'flex flex-wrap items-center justify-between gap-2 px-1',
  search:
    'relative ml-1 flex h-8 min-w-0 w-[170px] items-center gap-2 rounded-md border border-[#303a49] bg-[#0d131d] px-2.5 text-[#8390a2] [&_input]:min-w-0 [&_input]:flex-1 [&_input]:border-0 [&_input]:bg-transparent [&_input]:text-[8px] [&_input]:text-[var(--text)] [&_input]:outline-none [&_input]:placeholder:text-[#778397] [&_kbd]:inline-flex [&_kbd]:items-center [&_kbd]:gap-0.5 [&_kbd]:rounded [&_kbd]:border [&_kbd]:border-[#303a49] [&_kbd]:px-1 [&_kbd]:py-0.5 [&_kbd]:text-[7px] max-sm:w-[120px]',
  'search-open': 'border-[#526e9b]',
  'search-results':
    'absolute left-0 right-0 top-[calc(100%+6px)] z-20 flex flex-col overflow-hidden rounded-md border border-[#354154] bg-[#171f2c] p-1 shadow-xl [&_span]:px-2 [&_span]:py-2 [&_span]:text-[8px] [&_span]:text-[var(--muted)]',
  'search-result':
    '!h-auto !min-h-8 !justify-start !gap-2 !rounded !border-0 !bg-transparent !px-2 !py-2 !text-left !text-[8px] !normal-case !tracking-normal !text-[#c3ccda] hover:!bg-white/5',
  'breakpoint-note': 'text-[8px] text-[var(--muted)]',
  'mobile-menu': '!hidden !size-8 !shrink-0 !border-0 !p-0 !text-[#b7c1cf] max-sm:!inline-flex',
  'mobile-panel':
    'hidden max-sm:flex max-sm:flex-col max-sm:border-b max-sm:border-[var(--border)] max-sm:bg-[#151c27] max-sm:p-2',
  'mobile-link':
    '!flex !min-h-9 !w-full !cursor-pointer !items-center !justify-between !rounded !border-0 !bg-transparent !px-3 !text-left !text-[9px] !normal-case !tracking-normal !text-[#b7c1cf] hover:!bg-white/5',
  'mobile-link-active': '!bg-[#202c3d] !text-white',
});

register.all('tm-bottom-navigation-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-4',
  device:
    'w-full overflow-hidden rounded-2xl border border-[#344050] bg-[#0e141e] shadow-[0_14px_40px_rgba(0,0,0,.25)]',
  'device-top':
    'flex h-10 items-center justify-between border-b border-white/[.05] px-5 text-xs font-medium text-[#aeb8c7] [&_span]:inline-flex [&_span]:items-center [&_span]:gap-2 [&_i]:size-2 [&_i]:rounded-full [&_i]:bg-[#79c9a1] [&_time]:tabular-nums [&_time]:text-[#8d99ab]',
  content: 'flex min-h-[150px] items-center gap-4 px-6 py-5 max-sm:min-h-[130px] max-sm:px-4',
  'content-icon':
    'inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#34445c] bg-[#202d40] text-[#adc6fa]',
  'content-copy':
    'flex min-w-0 flex-1 flex-col gap-1 [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:text-[var(--text)] [&_small]:text-xs [&_small]:leading-relaxed [&_small]:text-[var(--muted)]',
  unread:
    'inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#24344a] px-2.5 py-1.5 text-xs font-medium text-[#c1d3f4]',
  bar: '!relative !inset-auto !z-auto !min-h-16 !justify-around !border-0 !border-t !border-[#283446] !bg-[#141c28] !px-2 !pb-0 !text-[#edf2fb] !shadow-[0_-2px_12px_rgba(0,0,0,.18)]',
  item: '!relative !min-w-0 !gap-1.5 !rounded-lg !px-2 !py-2 !text-[#8491a4] hover:!bg-white/[.035] focus-visible:!outline-offset-[-2px]',
  '&item.tm-bottom-navigation-item-selected':
    '!bg-transparent hover:!bg-transparent !text-[#c9d9f8]',
  '&item .tm-bottom-navigation-icon':
    '!flex !size-8 !items-center !justify-center !rounded-full !text-current',
  '&item.tm-bottom-navigation-item-selected .tm-bottom-navigation-icon': '!bg-[#293952]',
  '&item .tm-bottom-navigation-label': '!text-[10px] !font-medium !leading-none',
  '&item.tm-bottom-navigation-item-selected .tm-bottom-navigation-label':
    '!font-semibold !text-[#d9e5fb]',
  badge:
    'absolute right-1 top-0 inline-flex min-w-4 items-center justify-center rounded-full border border-[#141c28] bg-[#e5747d] px-1 py-0.5 text-[9px] font-semibold leading-none text-white',
  '&compact .tm-bottom-navigation-example-compact-item:not(.tm-bottom-navigation-item-selected) .tm-bottom-navigation-label':
    '!hidden',
  '&icons-only .tm-bottom-navigation-example-icon-item .tm-bottom-navigation-label': '!sr-only',
  '&icons-only .tm-bottom-navigation-example-icon-item .tm-bottom-navigation-icon': '!size-10',
  'home-indicator':
    'flex h-5 items-center justify-center bg-[#141c28] [&_span]:h-1 [&_span]:w-12 [&_span]:rounded-full [&_span]:bg-[#697588]',
  footer: 'flex flex-wrap items-center justify-between gap-2',
  status: 'text-xs text-[var(--muted)] [&_strong]:font-semibold [&_strong]:text-[var(--text)]',
  hint: 'inline-flex items-center gap-1.5 text-xs text-[var(--muted)]',
});

register.all('component-showcase-bottom-navigation', {
  '& .demo-content':
    'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
  '& .demo-canvas': 'items-stretch',
});

register.all('tm-breadcrumbs-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-4',
  panel:
    'flex min-h-[176px] flex-col justify-between gap-6 rounded-xl border border-[#293548] bg-[#111925] p-6 max-sm:p-4',
  context: 'flex flex-col gap-2 border-b border-[#263246] pb-4',
  eyebrow: 'text-[10px] font-semibold uppercase tracking-[.14em] text-[#8292a9]',
  title: 'text-lg font-semibold text-[#e4ebf5]',
  description: 'text-sm leading-relaxed text-[#9ba9bc]',
  status: 'text-xs text-[#9ba9bc] [&_strong]:font-semibold [&_strong]:text-[#e4ebf5]',
  separators: 'grid w-full gap-3',
  'separator-row':
    'flex flex-col gap-2 rounded-lg border border-[#293548] bg-[#111925] px-4 py-3 [&_svg]:size-3.5',
  'separator-label': 'text-[10px] font-semibold uppercase tracking-[.12em] text-[#8292a9]',
  'collapse-controls': 'flex flex-wrap items-center justify-between gap-3',
  'collapse-button':
    'cursor-pointer rounded-md border border-[#40516b] bg-[#1b2738] px-3 py-2 text-xs font-medium text-[#c0d2f2] transition-colors hover:bg-[#24344a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a9c4ff]',
});

register.all('component-showcase-breadcrumbs', {
  '& .demo-content':
    'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
});

register.all('tm-click-away-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-3',
  stage:
    'relative flex min-h-[250px] flex-col items-start gap-3 rounded-xl border border-dashed border-[#303a49] bg-[#0d121b] p-4 sm:min-h-[270px] sm:p-5',
  copy: 'mb-1 flex max-w-[460px] flex-col gap-1.5 [&_strong]:text-[11px] [&_strong]:font-semibold [&_span:last-child]:text-[9px] [&_span:last-child]:leading-relaxed [&_span:last-child]:text-[#9ba9bc]',
  eyebrow: 'text-[8px] font-semibold tracking-[.13em] text-[#90a8cd]',
  trigger:
    'inline-flex min-h-9 cursor-pointer items-center gap-2 rounded-md border border-[#526b94] bg-[#1c2a3e] px-3 text-xs font-medium text-[#c5d7ff] hover:bg-[#263954] focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  outside:
    'mt-auto inline-flex min-h-9 cursor-pointer items-center rounded-md border border-dashed border-[#3b4657] bg-transparent px-3 text-[10px] text-[#9ba9bc] hover:border-[#7185a3] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  panel:
    'z-10 w-[min(300px,100%)] rounded-lg border border-[#354154] bg-[#171f2c] p-3 shadow-[0_10px_24px_#0008]',
  portal:
    'fixed bottom-5 right-5 z-[100] w-[min(300px,calc(100vw-40px))] rounded-lg border border-[#526b94] bg-[#171f2c] p-3 text-[#edf2fb] shadow-[0_14px_36px_#000c]',
  'panel-heading':
    'flex items-center gap-2 [&_span:last-child]:flex [&_span:last-child]:flex-col [&_span:last-child]:gap-1 [&_strong]:text-[10px] [&_strong]:font-semibold [&_small]:text-[9px] [&_small]:text-[#9ba9bc]',
  'panel-icon':
    'inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-[#364760] bg-[#24344a] text-[#adc6fa]',
  'inside-action':
    'mt-3 inline-flex min-h-9 w-full cursor-pointer items-center gap-2 rounded-md border border-[#303a49] bg-[#111720] px-2.5 text-left text-[10px] text-[#c1cad7] hover:border-[#536985] hover:bg-[#1c2737] focus-visible:outline-2 focus-visible:outline-[#8baeff] [&_svg]:text-[#9edab7] [&_span]:ml-auto [&_span]:text-[#9ba9bc]',
  feedback: 'flex min-h-6 items-center gap-2 text-[9px] text-[#9ba9bc]',
  dot: 'size-1.5 shrink-0 rounded-full bg-[#697789]',
  'dot-open': 'bg-[#e8bd69] shadow-[0_0_7px_#e8bd6970]',
});

register.all('component-showcase-click-away-listener', {
  '& .demo-content':
    'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
});

register.all('tm-dialog-example', {
  surface:
    '!max-h-[min(90vh,48rem)] !max-w-[420px] !gap-0 !rounded-xl !border-[#303b50] !bg-[#121925] !p-5 !shadow-[0_24px_80px_rgba(0,0,0,.65)] max-sm:!rounded-xl',
  'surface-danger': '!border-[#51363c]',
  'surface-fullscreen': '!max-w-[620px]',
  '&surface .tm-dialog-header': 'items-start gap-3',
  '&surface .tm-dialog-title': 'flex items-center gap-3 text-sm font-semibold',
  '&surface .tm-dialog-description': 'mt-1.5 text-[10px] leading-relaxed',
  '&surface .tm-dialog-content': 'mt-4 text-[10px]',
  '&surface .tm-dialog-content:empty': '!hidden',
  '&surface .tm-dialog-actions': 'mt-5 gap-2',
  '&surface .tm-button': '!h-8 !px-3 !text-[10px] !normal-case !tracking-normal',
  'trigger-area': 'flex min-h-[164px] w-full flex-col items-start justify-center gap-3',
  trigger: '!h-8 !px-3 !text-[10px] !normal-case !tracking-normal',
  'heading-icon':
    '!mb-0 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#243653] text-[#a9c4ff]',
  '&surface-danger .tm-dialog-example-heading-icon': 'bg-[#48252b] text-[#ff9aa5]',
  form: 'flex flex-col gap-4',
  field: 'flex flex-col gap-1.5 text-[9px] font-medium text-[#c4cede]',
  '&field input':
    'h-9 rounded-md border border-[#303b50] bg-[#0d131d] px-3 text-[10px] text-[var(--text)] outline-none placeholder:text-[#66748a] focus:border-[#6c8fe1] focus:ring-2 focus:ring-[#547be8]/15',
  '&field textarea':
    'min-h-[110px] resize-y rounded-md border border-[#303b50] bg-[#0d131d] px-3 py-2.5 text-[10px] leading-relaxed text-[var(--text)] outline-none placeholder:text-[#66748a] focus:border-[#6c8fe1] focus:ring-2 focus:ring-[#547be8]/15',
  audience: 'flex flex-wrap items-center gap-1.5 text-[9px] text-[var(--muted)]',
  '&audience span': 'size-1.5 rounded-full bg-[#7bd6b0]',
  '&audience strong': 'font-medium text-[var(--text)]',
});

register.all('tm-drawer-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-4',
  shell: 'relative min-h-[300px] overflow-hidden rounded-xl border border-[#293548] bg-[#0e141e]',
  topbar:
    'flex h-12 items-center gap-3 border-b border-[#293342] bg-[#151c27] px-4 [&_strong]:text-xs [&_strong]:font-semibold [&_strong]:text-[#d3dce8]',
  mark: 'inline-flex size-7 items-center justify-center rounded-lg bg-[#293a53] text-xs font-bold text-[#bfd1f5]',
  spacer: 'flex-1',
  trigger:
    'inline-flex cursor-pointer items-center gap-2 rounded-md border border-[#40516b] bg-[#1b2738] px-3 py-2 text-xs font-medium text-[#c0d2f2] transition-colors hover:bg-[#24344a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a9c4ff]',
  content: 'flex min-h-[245px] flex-col items-start justify-center gap-3 px-7 py-6 max-sm:px-4',
  eyebrow: 'text-[10px] font-semibold tracking-[.14em] text-[#8290a5]',
  title: 'text-xl font-semibold text-[#e4ebf5]',
  description: 'max-w-md text-sm leading-relaxed text-[#9ba9bc]',
  footer:
    'flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--muted)] [&_strong]:font-semibold [&_strong]:text-[var(--text)]',
  panel:
    '!z-[80] !w-[min(320px,86vw)] !border-r !border-[#303a49] !bg-[#121925] !p-5 !text-[#e4ebf5] !shadow-[16px_0_48px_rgba(0,0,0,.4)]',
  'panel-header': 'flex items-center justify-between border-b border-[#293342] pb-4',
  brand:
    'flex min-w-0 items-center gap-3 [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:text-[#e4ebf5] [&_small]:text-xs [&_small]:text-[#9ba9bc]',
  '&brand > span:last-child': 'flex min-w-0 flex-col gap-1',
  'brand-mark':
    'inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-[#34465f] bg-[#25354b] text-[#b6cdf7]',
  close:
    'inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent p-0 text-[#9ba7b8] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  nav: 'mt-6 flex flex-col gap-1',
  'section-list': 'mt-6 flex flex-col gap-6',
  section: 'flex flex-col gap-1',
  'section-heading': 'mb-2 px-3 text-[10px] font-semibold tracking-[.14em] text-[#77869b]',
  'nav-item':
    'flex min-h-10 w-full cursor-pointer items-center gap-3 rounded-lg border-0 bg-transparent px-3 text-left text-sm text-[#a6b1c0] transition-colors hover:bg-white/[.04] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff] [&_span]:min-w-0 [&_span]:flex-1',
  'nav-item-active': 'bg-[#223149] text-[#c6d7f6] hover:bg-[#223149] hover:text-white',
  '&nav-item small': 'rounded-full bg-[#29374a] px-2 py-0.5 text-[10px] text-[#b7c7e2]',
  account:
    'mt-auto flex items-center gap-3 border-t border-[#293342] pt-4 [&_strong]:text-xs [&_strong]:font-medium [&_strong]:text-[#e4ebf5] [&_small]:text-[10px] [&_small]:text-[#9ba9bc]',
  'account-avatar':
    'inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-[#47566c] bg-[#29394f] text-xs font-semibold text-[#d7e3f5]',
  'account-info': 'flex min-w-0 flex-1 flex-col gap-1 [&_strong]:truncate [&_small]:truncate',
  'permanent-shell':
    'grid min-h-[330px] w-full grid-cols-[240px_minmax(0,1fr)] overflow-hidden rounded-xl border border-[#293548] bg-[#0e141e] max-sm:grid-cols-[190px_minmax(0,1fr)]',
  'permanent-panel':
    '!relative !inset-auto !z-auto !h-auto !w-full !min-w-0 !overflow-auto !border-r !border-[#303a49] !bg-[#121925] !p-4 !shadow-none',
  'permanent-content': 'flex min-w-0 flex-col items-start justify-center gap-3 p-6 max-sm:p-4',
  '&permanent-content > p': 'm-0 max-w-md text-sm leading-relaxed text-[#9ba9bc]',
  'permanent-topline':
    'mb-3 flex w-full items-center justify-between border-b border-[#293342] pb-3 text-xs text-[#98a5b6]',
  '&permanent-topline button':
    'inline-flex size-7 cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent p-0 text-[#9ba7b8] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  'permanent-status':
    'mt-2 inline-flex items-center gap-2 rounded-full border border-[#285b43] bg-[#172b23] px-3 py-1.5 text-xs text-[#9edab7] [&_i]:size-2 [&_i]:rounded-full [&_i]:bg-[#78c99e]',
});

register.all('component-showcase-drawer', {
  '& .demo-content':
    'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
  '& .tm-drawer-backdrop': '!z-[70] !bg-[rgba(3,6,10,.68)] !backdrop-blur-[1px]',
});

register.all('tm-link-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-4',
  card: 'flex w-full items-start gap-4 rounded-xl border border-[#293548] bg-[#111925] p-5 max-sm:p-4',
  icon: 'inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#34465f] bg-[#25354b] text-[#b6cdf7]',
  copy: 'flex min-w-0 flex-1 flex-col gap-3',
  '&copy > strong': 'text-sm font-semibold text-[#e4ebf5]',
  '&copy p': 'm-0 max-w-xl text-sm leading-relaxed text-[#9ba9bc]',
  'inline-row': 'flex flex-wrap items-center gap-3 text-sm',
  divider: 'h-4 w-px bg-[#394557]',
  variants: 'flex w-full flex-col overflow-hidden rounded-xl border border-[#293548] bg-[#111925]',
  'variant-row':
    'flex min-h-14 flex-wrap items-center justify-between gap-3 border-b border-[#293342] px-5 py-3 last:border-b-0 [&>span:first-child]:text-xs [&>span:first-child]:font-medium [&>span:first-child]:text-[#9ba9bc]',
  '& .tm-link-example-external': 'text-[#87d4c2]',
  'accessibility-row': 'flex flex-wrap items-center gap-x-5 gap-y-3',
  '& .tm-link-example-disabled':
    'cursor-not-allowed text-[#6f7b8d] no-underline hover:text-[#6f7b8d] hover:no-underline',
  footer: 'flex flex-wrap items-center justify-between gap-3',
  toggle:
    'cursor-pointer rounded-md border border-[#40516b] bg-[#1b2738] px-3 py-2 text-xs font-medium text-[#c0d2f2] transition-colors hover:bg-[#24344a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a9c4ff]',
  status: 'text-xs text-[var(--muted)]',
});

register.all('component-showcase-link', {
  '& .demo-content':
    'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
});

register.all('tm-list-example', {
  '': 'w-full max-w-[500px] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel)] !p-0',
  'navigation-item': '!min-h-0 !p-0',
  'navigation-button':
    'flex min-h-[66px] w-full cursor-pointer items-center gap-3 border-0 bg-transparent px-3 py-3 text-left text-[var(--muted)] transition-colors hover:bg-[#ffffff08] [&_.tm-list-item-text]:flex-1 [&_.tm-list-primary]:truncate [&_.tm-list-primary]:text-xs [&_.tm-list-primary]:font-medium [&_.tm-list-primary]:text-[var(--text)] [&_.tm-list-secondary]:truncate [&_.tm-list-secondary]:text-[10px] [&_.tm-list-secondary]:text-[var(--subtle)]',
  'navigation-button-active':
    'bg-[#19253a] hover:bg-[#1d2b43] [&_.tm-list-example-icon]:bg-[#253c63] [&_.tm-list-example-icon]:text-[#b8cbff]',
  icon: 'inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--panel-raised)] text-[var(--muted)]',
  trailing: 'shrink-0 text-[var(--subtle)]',
  messages: 'max-w-[500px]',
  'message-item': 'min-h-[70px] px-3 py-3',
  '&message-item .tm-list-item-text': 'flex-1',
  '&message-item .tm-list-primary': 'truncate text-xs font-medium text-[var(--text)]',
  '&message-item .tm-list-secondary': 'truncate text-[10px] text-[var(--subtle)]',
  avatar:
    'inline-flex size-9 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold',
  'avatar-blue': 'bg-[#243e68] text-[#c7d8ff]',
  'avatar-violet': 'bg-[#3c315f] text-[#ddd2ff]',
  'avatar-green': 'bg-[#214b3f] text-[#c5f0dd]',
  time: 'shrink-0 self-start pt-0.5 text-[9px] tabular-nums text-[var(--subtle)]',
  footer: 'flex items-center gap-2 px-3 py-2.5 text-[9px] text-[var(--subtle)]',
  'setting-item': '!min-h-0 !p-0',
  'setting-button':
    'flex min-h-[64px] w-full cursor-pointer items-center gap-3 border-0 bg-transparent px-3 py-3 text-left hover:bg-[#ffffff08] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--tm-blue)] [&_.tm-list-item-text]:flex-1 [&_.tm-list-primary]:truncate [&_.tm-list-primary]:text-xs [&_.tm-list-primary]:font-medium [&_.tm-list-primary]:text-[var(--text)] [&_.tm-list-secondary]:truncate [&_.tm-list-secondary]:text-[10px] [&_.tm-list-secondary]:text-[var(--subtle)]',
  switch:
    'inline-flex h-[18px] w-8 shrink-0 items-center rounded-full bg-[#394557] p-0.5 transition-colors',
  '&switch i': 'size-3.5 rounded-full bg-[#aab5c5] transition-transform',
  'switch-on': 'bg-[#456cc4] [&_i]:translate-x-3 [&_i]:bg-white',
});

register.all('tm-pagination-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-4',
  heading:
    'flex flex-wrap items-center justify-between gap-2 [&_strong]:text-sm [&_strong]:font-semibold [&_span]:text-xs [&_span]:text-[#9ba9bc]',
  '& .tm-pagination': 'justify-start',
  '& .tm-pagination-list': 'flex-wrap gap-1.5',
  '& .tm-pagination-button':
    '!size-9 !rounded-lg !border-transparent !bg-transparent !text-sm !font-medium !text-[#aeb9c9] hover:!bg-white/5 hover:!text-white focus-visible:!outline-[#8baeff] disabled:!opacity-40',
  '& .tm-pagination-button.tm-pagination-current':
    '!border-transparent !bg-[#263954] !text-[#d2e0ff] hover:!bg-[#263954] hover:!text-white',
  status: 'text-xs text-[#9ba9bc]',
  'table-card': 'flex w-full flex-col gap-4 rounded-xl border border-[#293548] bg-[#111925] p-4',
  'table-header': 'flex flex-wrap items-end justify-between gap-3',
  'size-control': 'inline-flex items-center gap-2 text-xs text-[#9ba9bc]',
  '&size-control select':
    'h-9 cursor-pointer rounded-lg border border-[#354154] bg-[#171f2c] px-3 text-xs text-[#d3dceb] focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  'table-wrap': 'w-full overflow-x-auto rounded-lg border border-[#303a49] bg-[#0d121b]',
  table:
    'w-full border-collapse text-left text-xs [&_th]:whitespace-nowrap [&_th]:border-b [&_th]:border-[#303a49] [&_th]:px-3 [&_th]:py-3 [&_th]:font-medium [&_th]:text-[#9ba9bc] [&_td]:whitespace-nowrap [&_td]:border-b [&_td]:border-[#28313f] [&_td]:px-3 [&_td]:py-3 [&_tbody_tr:last-child_td]:border-0 [&_td]:text-[#c5cfdf]',
  '&table td:first-child':
    '[&_strong]:block [&_strong]:font-medium [&_strong]:text-[#e4ebf5] [&_small]:mt-1 [&_small]:block [&_small]:text-[10px] [&_small]:text-[#9ba9bc]',
  'status-pill': 'inline-flex rounded-full bg-[#2d3540] px-2.5 py-1 text-[10px] text-[#c0cad8]',
  'status-pill-in-progress': 'bg-[#4a3a24] text-[#e8c47d]',
  'status-pill-in-review': 'bg-[#263954] text-[#b8d0ff]',
  'status-pill-complete': 'bg-[#203b32] text-[#9edab7]',
  'table-footer': 'flex flex-wrap items-center justify-between gap-3',
  '&outlined .tm-pagination-button:not(.tm-pagination-current)':
    '!border-[#354154] !bg-[#171f2c] hover:!border-[#536985] hover:!bg-[#202b3a]',
  '&outlined .tm-pagination-button.tm-pagination-current[aria-current="page"]':
    '!border-[#789fe8] !bg-[#263954] !text-[#d2e0ff] hover:!border-[#789fe8] hover:!bg-[#263954]',
  '&outlined .tm-pagination-button:disabled': '!border-[#2d3643] !bg-[#141a23]',
});

register.all('component-showcase-pagination', {
  '& .demo-content':
    'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
});

register.all('paper', {
  demo: 'flex w-full max-w-[760px] flex-col gap-5',
  'elevation-grid': 'grid w-full grid-cols-3 gap-4 max-md:grid-cols-1',
  'elevation-example':
    'flex min-w-0 flex-col gap-3 rounded-xl border border-[var(--border)] bg-[#111720]/70 p-4',
  'example-overline': 'text-[10px] font-semibold tracking-[.14em] text-[#8fa1ba]',
  'elevation-stage':
    'flex min-h-[140px] items-center justify-center rounded-lg border border-white/[.04] p-4',
  'elevation-stage-0': 'bg-[#0c1119]',
  'elevation-stage-2': 'bg-[#101925]',
  'elevation-stage-5': 'bg-[#172235]',
  'elevation-sample': 'w-full max-w-[280px] rounded-xl border border-white/[.08] p-4',
  'elevation-sample-0': 'bg-[#141b26]',
  'elevation-sample-2': 'bg-[#1b2635]',
  'elevation-sample-5': 'bg-[#24344a]',
  'example-description': 'text-xs leading-relaxed text-[var(--muted)]',
  'demo-hint': 'm-0 flex items-center gap-2 text-xs leading-relaxed text-[var(--muted)]',
  content: 'flex min-w-0 items-center gap-3',
  'content-icon':
    'inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#24344a] text-[#a9c4ff]',
  '&content > span:last-child':
    'flex min-w-0 flex-col gap-1 [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:text-[var(--text)] [&_small]:text-xs [&_small]:text-[var(--muted)]',
  'scale-controls':
    'flex w-fit max-w-full flex-wrap items-center gap-1 rounded-xl border border-[var(--border)] bg-[#111720] p-1.5',
  '&scale-controls legend': 'px-1.5 text-xs font-medium text-[var(--muted)]',
  'level-button':
    'inline-flex size-10 cursor-pointer appearance-none items-center justify-center rounded-lg border-0 bg-transparent p-0 text-sm font-medium tabular-nums text-[var(--muted)] shadow-none transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8baeff]',
  'level-button-active': 'bg-[#263a57] text-[#d6e4ff] hover:bg-[#263a57]',
  'scale-stage':
    'relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-xl border border-[#303a49] bg-[radial-gradient(ellipse_at_center,rgba(93,125,181,.12),transparent_72%),#0d121b] p-8 max-sm:min-h-[190px] max-sm:p-5',
  'selected-elevation':
    'relative flex w-full max-w-[420px] flex-col gap-4 rounded-xl border border-[#52627a]/70 bg-[#1a2432] p-5 transition-[box-shadow,transform] duration-300',
  'selected-description': 'text-xs text-[var(--muted)]',
  'level-indicator': 'size-2 rounded-full bg-[#8eafff] shadow-[0_0_10px_rgba(142,175,255,.7)]',
  'variants-grid': 'grid w-full grid-cols-2 items-stretch gap-4 max-sm:grid-cols-1',
  'variant-label': 'text-[10px] font-semibold tracking-[.14em] text-[#91a3bc]',
  contained: 'flex flex-col gap-4 rounded-xl border border-[#344358] bg-[#18212e] p-5',
  outlined: 'flex flex-col gap-4 rounded-xl border-2 border-[#52627a] bg-transparent p-5',
  nested: 'col-span-2 flex flex-col gap-4 rounded-xl border border-[#344358] p-5 max-sm:col-span-1',
  'nested-inner': '!rounded-lg border border-[#3b4c65] bg-[#111923] p-3',
  'variant-description': 'm-0 text-xs leading-relaxed text-[var(--muted)]',
  'section-list':
    'flex flex-col divide-y divide-[#303a49] [&>div:first-child]:pt-0 [&>div:last-child]:pb-0',
  'section-row': 'flex items-center gap-2.5 py-2.5 text-xs text-[#cbd5e3] [&_svg]:text-[#8eaef0]',
  'add-button':
    'inline-flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-[#354358] bg-[#172235] px-3 py-2 text-xs font-medium text-[#c4d4f2] hover:bg-[#20304a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8baeff] [&_span]:rounded-full [&_span]:bg-[#26354a] [&_span]:px-2 [&_span]:py-1 [&_span]:text-[10px]',
});

register.all('component-showcase-paper', {
  '& .demo-content':
    'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
  '& .demo-canvas': 'items-stretch',
});

register.all('tm-popper', {
  example: 'flex w-full max-w-[680px] flex-col gap-2.5',
  'example-stage':
    'flex min-h-[180px] flex-wrap items-center justify-between gap-4 rounded-lg border border-dashed border-[#303a49] bg-[#0d121b] p-5',
  'example-copy':
    'flex min-w-[220px] flex-1 flex-col gap-1.5 [&_strong]:text-[10px] [&_strong]:font-semibold [&_span:last-child]:max-w-[340px] [&_span:last-child]:text-[8px] [&_span:last-child]:leading-relaxed [&_span:last-child]:text-[var(--muted)]',
  'example-eyebrow': 'text-[7px] font-semibold tracking-[.12em] text-[#8baeff]',
  'example-status': 'min-h-5 text-[8px] text-[var(--muted)]',
  'example-surface':
    'z-50 w-[min(250px,calc(100vw-24px))] overflow-hidden rounded-lg border border-[#354154] bg-[#171f2c] text-[var(--text)] shadow-[0_16px_38px_rgba(0,0,0,.48)]',
  'example-content':
    'grid grid-cols-[auto_1fr_auto] items-center gap-2.5 p-3 [&_div]:flex [&_div]:min-w-0 [&_div]:flex-col [&_div]:gap-1 [&_strong]:text-[9px] [&_strong]:font-semibold [&_span:not(.tm-popper-example-icon)]:text-[8px] [&_span:not(.tm-popper-example-icon)]:text-[var(--muted)] [&_p]:col-span-3 [&_p]:m-0 [&_p]:border-t [&_p]:border-[#303a49] [&_p]:pt-2.5 [&_p]:text-[8px] [&_p]:leading-relaxed [&_p]:text-[var(--muted)]',
  'example-icon':
    'inline-flex size-7 items-center justify-center rounded-md border border-[#364760] bg-[#24344a] text-[#adc6fa]',
  'placement-controls': 'm-0 flex min-w-0 flex-wrap gap-1 border-0 p-0',
  '&placement-controls legend': 'mb-2 block text-[8px] font-semibold text-[#c2ccda]',
  'placement-option':
    'inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border)] bg-transparent px-2.5 text-[8px] capitalize text-[var(--muted)] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  'placement-option-active': 'border-[#536985] bg-[#20304a] text-[#c5d7ff] hover:bg-[#20304a]',
  'placement-stage':
    'flex min-h-[180px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[#303a49] bg-[#0d121b] p-5',
  '&placement-stage .tm-popper-example-status': 'text-center',
  'placement-surface': 'w-[190px]',
  'placement-content':
    'flex flex-col gap-1.5 p-3 [&_strong]:text-[9px] [&_strong]:capitalize [&_strong]:text-[#c5d7ff] [&_span]:text-[8px] [&_span]:text-[var(--muted)]',
  '&placement-content .tm-button': 'mt-1 self-start',
  'offset-controls':
    'grid grid-cols-2 gap-3 rounded-lg border border-[#303a49] bg-[#111720] p-3 max-sm:grid-cols-1',
  'range-control':
    'flex min-w-0 flex-col gap-2 [&_span]:flex [&_span]:items-center [&_span]:justify-between [&_strong]:text-[8px] [&_output]:text-[8px] [&_output]:text-[#c5d7ff] [&_input]:w-full [&_input]:accent-[#8baeff] [&_small]:text-[7px] [&_small]:text-[var(--muted)]',
  'offset-stage':
    'flex min-h-[160px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[#303a49] bg-[#0d121b] p-5',
  'offset-surface': 'w-[210px]',
  'offset-content':
    'flex items-center gap-2.5 p-3 [&_div]:flex [&_div]:flex-col [&_div]:gap-1 [&_strong]:text-[9px] [&_span]:text-[8px] [&_span]:text-[var(--muted)]',
  'example-action': 'h-6 min-h-0 px-2 py-1 text-[8px] leading-none normal-case tracking-normal',
});

register.all('tm-portal', {
  example: 'flex min-h-[175px] w-full max-w-[650px] flex-col justify-center gap-3',
  'example-stage':
    'flex min-h-[140px] flex-wrap items-center justify-between gap-4 rounded-lg border border-dashed border-[#303a49] bg-[#0d121b] p-4 sm:p-5',
  'example-copy':
    'flex min-w-[210px] flex-1 flex-col gap-1.5 [&_strong]:text-[10px] [&_strong]:font-semibold [&_span:last-child]:max-w-[360px] [&_span:last-child]:text-[8px] [&_span:last-child]:leading-relaxed [&_span:last-child]:text-[var(--muted)]',
  'example-eyebrow': 'text-[7px] font-semibold tracking-[.12em] text-[#8baeff]',
  'example-feedback': 'min-h-4 text-[8px] text-[var(--muted)]',
  'example-icon':
    'inline-flex size-7 shrink-0 items-center justify-center rounded-md border border-[#364760] bg-[#24344a] text-[#adc6fa]',
  'body-notice':
    'fixed right-5 top-5 z-[90] flex w-[min(290px,calc(100vw-24px))] items-center gap-2.5 rounded-lg border border-[#354154] bg-[#171f2c] p-3 text-[var(--text)] shadow-[0_16px_38px_rgba(0,0,0,.48)] max-sm:right-3 max-sm:top-3 [&_span:nth-child(2)]:flex [&_span:nth-child(2)]:min-w-0 [&_span:nth-child(2)]:flex-1 [&_span:nth-child(2)]:flex-col [&_span:nth-child(2)]:gap-1 [&_strong]:text-[9px] [&_strong]:font-semibold [&_small]:text-[8px] [&_small]:text-[var(--muted)]',
  '&body-notice .tm-button':
    'inline-flex size-6 min-h-0 shrink-0 items-center justify-center rounded border-0 bg-transparent p-0 text-[var(--muted)] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  'custom-stage': 'items-start',
  'custom-target':
    'flex min-h-[64px] w-full items-center justify-center gap-2 rounded-md border border-dashed border-[#536985] bg-[#111a27] p-2 sm:max-w-[255px]',
  'target-label': 'text-[7px] font-medium uppercase tracking-[.1em] text-[#8092aa]',
  'target-content':
    'flex w-full items-center gap-2 rounded-md border border-[#354154] bg-[#192435] p-2 text-[#adc6fa] [&>span]:flex [&>span]:min-w-0 [&>span]:flex-1 [&>span]:flex-col [&>span]:gap-1 [&_strong]:text-[8px] [&_strong]:font-semibold [&_small]:text-[7px] [&_small]:text-[var(--muted)]',
  '&target-content .tm-button':
    'inline-flex size-5 min-h-0 shrink-0 items-center justify-center rounded border-0 bg-transparent p-0 text-[var(--muted)] hover:bg-white/5 hover:text-white',
  'clipping-frame':
    'flex min-h-[145px] flex-col items-start justify-center gap-2 overflow-hidden rounded-lg border border-dashed border-[#536985] bg-[#111a27] p-4',
  '&clipping-frame p': 'm-0 max-w-[340px] text-[8px] leading-relaxed text-[var(--muted)]',
  'escaped-layer':
    'fixed bottom-5 right-5 z-[90] flex w-[min(232px,calc(100vw-24px))] items-center gap-2 rounded-lg border border-[#455b82] bg-[#192435] p-2.5 text-[#adc6fa] shadow-[0_18px_48px_rgba(0,0,0,.55)] max-sm:bottom-3 max-sm:right-3 [&>span:nth-child(2)]:flex [&>span:nth-child(2)]:min-w-0 [&>span:nth-child(2)]:flex-1 [&>span:nth-child(2)]:flex-col [&>span:nth-child(2)]:gap-1 [&_strong]:text-[8px] [&_strong]:font-semibold [&_small]:text-[7px] [&_small]:text-[var(--muted)]',
  '&escaped-layer .tm-button':
    'inline-flex size-5 min-h-0 shrink-0 items-center justify-center rounded border-0 bg-transparent p-0 text-[var(--muted)] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
});

register.all('tm-snackbar-example', {
  stack: 'flex w-full max-w-[620px] flex-col gap-3',
  stage:
    'flex min-h-[92px] w-full items-center justify-center rounded-lg border border-[var(--border)] bg-[#0d121b] p-3',
  'stage-start': 'justify-start',
  'stage-center': 'justify-center',
  'stage-end': 'justify-end',
  '&stage .tm-snackbar': 'max-w-full',
  placeholder: 'text-[9px] text-[var(--muted)]',
  controls: 'flex flex-wrap items-center gap-2.5',
  '&controls .tm-button': '!h-7 !px-2.5 !text-[9px] normal-case tracking-normal',
  action: '!h-7 !gap-1.5 !px-2 !text-[9px] !normal-case !tracking-normal',
  'position-controls':
    'flex w-fit flex-wrap items-center gap-1 rounded-lg border border-[var(--border)] bg-[#111720] p-1',
  'position-label': 'px-1.5 text-[9px] font-medium text-[var(--muted)]',
  'position-option': '!h-7 !px-3 !text-[9px] !normal-case !tracking-normal',
});

register.all('tm-speed-dial-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-4',
  stage:
    'flex min-h-[230px] items-center justify-between gap-6 rounded-xl border border-[#303a49] bg-[radial-gradient(ellipse_at_top_right,#20304a_0%,#111720_58%)] p-6 max-sm:gap-4 max-sm:p-4',
  copy: 'flex max-w-[280px] flex-col gap-2 [&_strong]:text-base [&_strong]:font-semibold [&_span:last-child]:text-sm [&_span:last-child]:text-[#9ba9bc]',
  kicker: 'text-[10px] font-semibold tracking-[.14em] text-[#90a8cd]',
  '& .tm-speed-dial-trigger':
    '!size-12 !shrink-0 !border !border-[#9ab8f2] !bg-[#8baeff] !text-[#101827] !shadow-[0_8px_20px_#0008] hover:!bg-[#a3beff] focus-visible:!outline-[#c5d7ff]',
  '& .tm-speed-dial-action':
    '!size-10 !shrink-0 !border-[#354154] !bg-[#202b3a] !text-[#d3dceb] !shadow-lg hover:!border-[#536985] hover:!bg-[#2a3a51] focus-visible:!outline-[#8baeff]',
  '& .tm-speed-dial-actions': 'gap-2',
  '& .tm-speed-dial-right .tm-speed-dial-actions': 'flex-row',
  '& .tm-speed-dial-left .tm-speed-dial-actions': 'flex-row',
  status: 'min-h-5 text-xs text-[#9ba9bc]',
  directions: 'm-0 flex min-w-0 flex-wrap gap-2 border-0 p-0',
  direction:
    'inline-flex min-h-9 min-w-16 cursor-pointer items-center justify-center rounded-lg border border-[#354154] bg-[#111720] px-3 text-xs capitalize text-[#9ba9bc] hover:border-[#536985] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff] aria-pressed:border-[#789fe8] aria-pressed:bg-[#20304a] aria-pressed:text-[#c5d7ff]',
  'direction-stage':
    'flex min-h-[220px] flex-wrap items-center justify-center gap-8 rounded-xl border border-dashed border-[#303a49] bg-[#0d121b] p-6 max-sm:gap-4 max-sm:p-4',
  'direction-note': 'max-w-48 text-center text-xs text-[#9ba9bc]',
  'share-card':
    'flex min-h-24 w-full flex-wrap items-center gap-4 rounded-xl border border-[#293548] bg-[#111925] p-4',
  'share-icon':
    'inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#364760] bg-[#24344a] text-[#adc6fa]',
  'share-copy':
    'flex min-w-[160px] flex-1 flex-col gap-1 [&_strong]:text-sm [&_strong]:font-semibold [&_span]:text-xs [&_span]:text-[#9ba9bc]',
  '&share-card .tm-speed-dial': 'flex-row',
  '&share-card .tm-speed-dial-actions': 'flex-row',
});

register.all('component-showcase-speed-dial', {
  '& .demo-content':
    'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
});

register.all('tm-table-example', {
  wrap: 'w-full overflow-auto overscroll-contain rounded-lg border border-[var(--border)] [scrollbar-width:thin] [scrollbar-color:#354156_#111824] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#111824] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#354156] [&::-webkit-scrollbar-thumb:hover]:bg-[#52627c]',
  '': 'min-w-[760px] !text-left !text-[10px] [&_th]:!px-3 [&_th]:!py-2.5 [&_th]:!font-medium [&_th]:!text-[var(--subtle)] [&_td]:!px-3 [&_td]:!py-3 [&_td]:!text-[var(--muted)] [&_tbody_tr:last-child_td]:!border-b-0',
  '& th': '!bg-[var(--panel)]',
  '&.tm-table-example-dense td': '!py-2',
  toolbar: 'flex flex-wrap items-center justify-between gap-2',
  'result-count': 'text-[11px] font-medium text-[var(--text)]',
  'toolbar-button':
    'inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 text-[9px] font-medium text-[var(--muted)] hover:bg-[var(--panel-raised)] hover:text-[var(--text)] disabled:cursor-not-allowed disabled:opacity-50',
  'sort-button':
    'inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-[9px] font-medium text-[var(--subtle)] hover:text-[var(--text)] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-[var(--tm-blue)]',
  'sort-button-active': 'text-[#b8cbff]',
  'check-cell': 'w-9 !px-3',
  project: 'flex min-w-[150px] flex-col gap-1',
  '&project strong': 'text-[10px] font-medium text-[var(--text)]',
  '&project small': 'font-mono text-[8px] text-[var(--subtle)]',
  owner: 'inline-flex min-w-[125px] items-center gap-2 whitespace-nowrap text-[9px]',
  avatar:
    'inline-flex size-6 shrink-0 items-center justify-center rounded-full text-[8px] font-semibold',
  'avatar-blue': 'bg-[#243e68] text-[#c7d8ff]',
  'avatar-violet': 'bg-[#3c315f] text-[#ddd2ff]',
  'avatar-green': 'bg-[#214b3f] text-[#c5f0dd]',
  'avatar-amber': 'bg-[#594126] text-[#ffe0ae]',
  status:
    'inline-flex whitespace-nowrap rounded-full bg-[#1b5e20]/30 px-2 py-1 text-[8px] font-medium text-[#81c784]',
  'status-review': 'bg-[#463461] text-[#d6b8ff]',
  'status-in-progress': 'bg-[#203b68] text-[#a9c4ff]',
  'status-planned': 'bg-[#394557] text-[#c0cad8]',
  'progress-heading': 'w-[100px]',
  'progress-cell': 'min-w-[100px]',
  'progress-value': 'mb-1 block font-mono text-[8px] text-[var(--subtle)]',
  'progress-track': 'block h-1 w-full overflow-hidden rounded-full bg-[#283244]',
  '&progress-track i': 'block h-full rounded-full bg-[#668bef]',
  'row-selected': 'bg-[#19253a] [&_td]:!border-[#293955]',
  footer: 'flex items-center justify-between gap-2 text-[9px] text-[var(--subtle)]',
  'export-button':
    'inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border)] bg-transparent px-2 text-[9px] font-medium text-[var(--muted)] hover:bg-[var(--panel-raised)] hover:text-[var(--text)]',
});

register.all('tm-typography-example', {
  scale: 'flex w-full max-w-[660px] flex-col divide-y divide-[var(--border)]',
  'scale-row':
    'grid grid-cols-[58px_minmax(0,1fr)_76px] items-center gap-2 py-3 first:pt-1 last:pb-1',
  'scale-label': 'text-[9px] font-medium uppercase tracking-[.08em] text-[var(--subtle)]',
  sample: 'min-w-0 truncate !text-[var(--text)]',
  spec: 'text-right font-mono text-[8px] tabular-nums text-[var(--subtle)]',
  'weight-picker': 'flex flex-wrap gap-1.5',
  'weight-button':
    'inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 text-[9px] text-[var(--muted)] hover:bg-[var(--panel-raised)] hover:text-[var(--text)]',
  '&weight-button span': 'font-mono text-[8px] text-[var(--subtle)]',
  'weight-active': 'border-[#547be8] bg-[#19253a] text-[#d8e3ff]',
  'weight-preview':
    'flex w-full max-w-[520px] flex-col gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4',
  'weight-meta': 'text-[8px] font-semibold tracking-[.12em] text-[#93a8ce]',
  '&weight-preview strong': '!text-[18px] !leading-snug !tracking-[-.02em] !text-[var(--text)]',
  '&weight-preview p': 'max-w-[440px] !text-[11px] !leading-relaxed !text-[var(--muted)]',
  controls: 'flex flex-wrap items-center justify-between gap-2',
  'tone-picker': 'flex flex-wrap gap-1.5',
  'tone-button':
    'inline-flex h-7 cursor-pointer items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--panel)] px-2 text-[8px] font-medium hover:bg-[var(--panel-raised)]',
  'tone-primary': 'text-[#d9e4ff]',
  'tone-secondary': 'text-[#acbad0]',
  'tone-muted': 'text-[#77849a]',
  'tone-success': 'text-[#7bd2a9]',
  'tone-warning': 'text-[#f2c27b]',
  'tone-active': 'border-[#547be8] bg-[#19253a]',
  'alignment-picker':
    'inline-flex items-center gap-0.5 rounded-md border border-[var(--border)] bg-[var(--panel)] p-0.5',
  'alignment-button':
    'inline-flex size-6 cursor-pointer items-center justify-center rounded border-0 bg-transparent text-[var(--subtle)] hover:text-[var(--text)]',
  'alignment-active': 'bg-[#24334b] text-[#c7d8ff]',
  'color-preview':
    'flex w-full max-w-[520px] flex-col gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4',
  'align-center': 'items-center text-center [&_p]:mx-auto',
  'align-right': 'items-end text-right [&_p]:ml-auto',
  eyebrow: '!text-[8px] !font-semibold !tracking-[.12em]',
  title: '!text-[16px] !font-semibold !leading-snug !tracking-[-.015em]',
  copy: 'max-w-[440px] !text-[10px] !leading-relaxed !text-[var(--muted)]',
});
