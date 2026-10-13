import { register } from 'tailmantic/collector';

register('rgi-app-bar', {
  base: {
    tw: 'z-10 flex min-h-14 w-full items-center gap-4 border-b border-[var(--border,#273142)] bg-[var(--panel,#111824)] px-4 py-2 text-[var(--text,#edf2fb)]',
  },
  modifiers: {
    static: { tw: 'relative' },
    sticky: { tw: 'sticky top-0' },
    fixed: { tw: 'fixed inset-x-0 top-0' },
    'elevation-0': { tw: 'shadow-none' },
    'elevation-1': { tw: 'shadow-[0_2px_6px_rgba(0,0,0,.16)]' },
    'elevation-2': { tw: 'shadow-[0_4px_12px_rgba(0,0,0,.2)]' },
    'elevation-3': { tw: 'shadow-[0_8px_24px_rgba(0,0,0,.24)]' },
  },
});
register('rgi-app-bar-example', {
  base: { tw: 'flex w-full max-w-[720px] flex-col gap-2' },
});
register('rgi-app-bar-example-preview', {
  base: { tw: 'overflow-hidden rounded-lg border border-[var(--border)] bg-[#0e141e]' },
});
register('rgi-app-bar-example-header', {
  base: {
    tw: 'relative z-10 min-h-14 gap-3 border-b border-[var(--border)] bg-[#151c27] px-4 py-2 max-sm:gap-2 max-sm:px-3',
  },
});
register('rgi-app-bar-example-brand', {
  base: { tw: 'flex shrink-0 items-center gap-2' },
});
register('rgi-app-bar-example-brand-mark', {
  base: {
    tw: 'inline-flex size-7 items-center justify-center rounded-lg bg-[#263650] text-xs font-bold text-[#b5ccff]',
  },
});
register('rgi-app-bar-example-brand-copy', {
  base: { tw: 'flex flex-col gap-0.5' },
});
register('rgi-app-bar-example-brand-copy strong', {
  base: { tw: 'whitespace-nowrap text-[9px] font-semibold text-[var(--text)]' },
});
register('rgi-app-bar-example-brand-copy small', {
  base: { tw: 'whitespace-nowrap text-[7px] text-[var(--muted)]' },
});
register('rgi-app-bar-example-nav', {
  base: { tw: 'ml-3 flex h-14 shrink-0 items-center gap-1 max-sm:hidden' },
});
register('rgi-app-bar-example-nav-link', {
  base: {
    tw: '!h-8 !border-0 !px-2.5 !text-[8px] !font-medium !normal-case !tracking-normal !text-[#9aa6b8] hover:!bg-white/5 hover:!text-white',
  },
});
register('rgi-app-bar-example-nav-link-active', {
  base: { tw: '!bg-[#202c3d] !text-[#d9e4f6] hover:!bg-[#202c3d]' },
});
register('rgi-app-bar-example-spacer', {
  base: { tw: 'min-w-0 flex-1' },
});
register('rgi-app-bar-example-icon-button', {
  base: {
    tw: '!relative !size-8 !shrink-0 !border-0 !p-0 !text-[#b7c1cf] hover:!bg-white/5 hover:!text-white',
  },
});
register('rgi-app-bar-example-icon-button-muted', {
  base: { tw: '!text-[#737f91]' },
});
register('rgi-app-bar-example-notification-dot', {
  base: {
    tw: 'absolute right-1.5 top-1.5 size-1.5 rounded-full bg-[#f08a75] ring-2 ring-[#151c27]',
  },
});
register('rgi-app-bar-example-settings', {
  base: {
    tw: '!h-8 !shrink-0 !gap-1.5 !border-[#303a49] !px-2.5 !text-[8px] !font-medium !normal-case !tracking-normal !text-[#c2cad5] hover:!bg-white/5 [&_svg]:max-sm:hidden',
  },
});
register('rgi-app-bar-example-account', {
  base: {
    tw: '!h-auto !shrink-0 !gap-1.5 !border-0 !p-0 !text-[9px] !text-[#9ba7b7] hover:!bg-transparent hover:!text-white',
  },
});
register('rgi-app-bar-example-avatar', {
  base: {
    tw: 'inline-flex size-7 items-center justify-center rounded-full border border-[#45536a] bg-[#28374d] text-[8px] font-semibold text-[#d7e2f5]',
  },
});
register('rgi-app-bar-example-content', {
  base: {
    tw: 'flex min-h-[145px] flex-col items-start justify-center gap-2 px-6 py-5 max-sm:min-h-[120px] max-sm:px-4',
  },
});
register('rgi-app-bar-example-eyebrow', {
  base: { tw: 'text-[7px] font-semibold tracking-[.16em] text-[#8190a5]' },
});
register('rgi-app-bar-example-content strong', {
  base: { tw: 'text-sm font-semibold tracking-tight text-[var(--text)]' },
});
register('rgi-app-bar-example-content span:last-child', {
  base: { tw: 'text-[9px] text-[var(--muted)]' },
});
register('rgi-app-bar-example-footer', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-2 px-1' },
});
register('rgi-app-bar-example-search', {
  base: {
    tw: 'relative ml-1 flex h-8 min-w-0 w-[170px] items-center gap-2 rounded-md border border-[#303a49] bg-[#0d131d] px-2.5 text-[#8390a2] [&_input]:min-w-0 [&_input]:flex-1 [&_input]:border-0 [&_input]:bg-transparent [&_input]:text-[8px] [&_input]:text-[var(--text)] [&_input]:outline-none [&_input]:placeholder:text-[#778397] [&_kbd]:inline-flex [&_kbd]:items-center [&_kbd]:gap-0.5 [&_kbd]:rounded [&_kbd]:border [&_kbd]:border-[#303a49] [&_kbd]:px-1 [&_kbd]:py-0.5 [&_kbd]:text-[7px] max-sm:w-[120px]',
  },
});
register('rgi-app-bar-example-search-open', {
  base: { tw: 'border-[#526e9b]' },
});
register('rgi-app-bar-example-search-results', {
  base: {
    tw: 'absolute left-0 right-0 top-[calc(100%+6px)] z-20 flex flex-col overflow-hidden rounded-md border border-[#354154] bg-[#171f2c] p-1 shadow-xl [&_span]:px-2 [&_span]:py-2 [&_span]:text-[8px] [&_span]:text-[var(--muted)]',
  },
});
register('rgi-app-bar-example-search-result', {
  base: {
    tw: '!h-auto !min-h-8 !justify-start !gap-2 !rounded !border-0 !bg-transparent !px-2 !py-2 !text-left !text-[8px] !normal-case !tracking-normal !text-[#c3ccda] hover:!bg-white/5',
  },
});
register('rgi-app-bar-example-breakpoint-note', {
  base: { tw: 'text-[8px] text-[var(--muted)]' },
});
register('rgi-app-bar-example-mobile-menu', {
  base: { tw: '!hidden !size-8 !shrink-0 !border-0 !p-0 !text-[#b7c1cf] max-sm:!inline-flex' },
});
register('rgi-app-bar-example-mobile-panel', {
  base: {
    tw: 'hidden max-sm:flex max-sm:flex-col max-sm:border-b max-sm:border-[var(--border)] max-sm:bg-[#151c27] max-sm:p-2',
  },
});
register('rgi-app-bar-example-mobile-link', {
  base: {
    tw: '!flex !min-h-9 !w-full !cursor-pointer !items-center !justify-between !rounded !border-0 !bg-transparent !px-3 !text-left !text-[9px] !normal-case !tracking-normal !text-[#b7c1cf] hover:!bg-white/5',
  },
});
register('rgi-app-bar-example-mobile-link-active', {
  base: { tw: '!bg-[#202c3d] !text-white' },
});
