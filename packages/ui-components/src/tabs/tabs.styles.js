import { register } from 'tailmantic/collector';

register('rgi-tabs', {
  base: { tw: 'flex min-w-0 flex-col text-[var(--text,#20242b)]' },
  modifiers: { vertical: { tw: 'flex-row' } },
});

register.all('rgi-tabs', {
  'list': 'flex min-w-0 overflow-x-auto border-b border-[var(--border,#d5d9e0)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
  'list-scrollable': 'justify-start',
  'list-centered': 'justify-center',
  'list-fullwidth': '[&_.rgi-tab]:flex-1',
  '& [hidden]': 'hidden',
  '&vertical .rgi-tabs-list': 'flex-col overflow-y-auto overflow-x-hidden border-b-0 border-r [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
  '&vertical .rgi-tab': 'justify-start rounded-t-none rounded-l-md',
  '&vertical .rgi-tab-selected': '',
  '&vertical .rgi-tab-indicator': 'bottom-2 left-auto right-[-1px] top-2 h-auto w-0.5',
  '&vertical .rgi-tabs-scrollable-container': 'flex-col border-b-0 border-r',
  '&scrollable-container .rgi-tabs-list': 'border-b-0 border-r-0',
  '&sm .rgi-tab': 'min-h-8 px-3 text-xs',
  '&lg .rgi-tab': 'min-h-14 px-5 text-base',
  'scroll-btn': 'inline-flex shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent px-1.5 text-[var(--muted,#626a75)] hover:text-[var(--text,#e0eaff)] disabled:pointer-events-none disabled:opacity-30',
  'scrollable-container': 'flex min-w-0 items-stretch border-b border-[var(--border,#d5d9e0)]',
});

register.all('rgi-tab', {
  '': 'relative inline-flex min-h-12 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-t-md border-0 bg-transparent px-4 pb-px text-sm font-medium text-[var(--muted,#626a75)] hover:bg-[var(--surface-hover,rgba(99,120,150,0.15))] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--accent,#315fc4)] disabled:cursor-not-allowed disabled:opacity-45',
  'selected': 'font-semibold text-[var(--accent,#8baeff)]',
  'icon': 'inline-flex',
  'panel': 'min-w-0 p-4 focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)]',
  'indicator': 'absolute bottom-[-1px] left-2 right-2 h-0.5 rounded-full bg-[var(--accent,#8baeff)]',
  'badge': 'inline-flex min-w-[1rem] items-center justify-center rounded-full bg-[var(--panel-raised,#1e2a3a)] px-1 py-0.5 text-[10px] leading-none text-[var(--muted,#626a75)]',
  'content': 'inline-flex items-center gap-1.5',
});

register.all('rgi-tabs-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-3 rounded-xl border border-[#303a49] bg-[#111720] p-4 sm:gap-4 sm:p-5',
  '& .rgi-tabs': 'min-w-0',
  '& .rgi-tabs-list': 'border-[#303a49]',
  '& .rgi-tab': 'text-[#9ba9bc] hover:bg-white/[.035] hover:text-white focus-visible:outline-[#8baeff]',
  '& .rgi-tab-selected': 'text-[#c5d7ff]',
  '& .rgi-tab-indicator': 'bg-[#8baeff]',
  '& .rgi-tab-panel': 'px-0 pb-0 pt-4',
  '& .rgi-tabs-scrollable-container': 'border-[#303a49]',
  '& .rgi-tabs-scroll-btn': 'min-w-8 text-[#9ba9bc] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  '& .rgi-tab-badge': 'bg-[#263954] text-[#c5d7ff]',
  'card': 'flex min-h-[84px] flex-wrap items-center gap-3 rounded-lg border border-[#2c3746] bg-[#151d28] p-3 sm:gap-4 sm:p-4',
  'icon': 'inline-flex size-9 shrink-0 items-center justify-center rounded-lg',
  'icon-blue': 'border border-[#364760] bg-[#24344a] text-[#adc6fa]',
  'icon-green': 'border border-[#315244] bg-[#1d382e] text-[#a6e2c0]',
  'icon-purple': 'border border-[#463d61] bg-[#302944] text-[#c8b8f2]',
  'copy': 'flex min-w-[140px] flex-1 flex-col gap-1 [&_strong]:text-[10px] [&_strong]:font-semibold [&_span]:text-[9px] [&_span]:leading-relaxed [&_span]:text-[#9ba9bc]',
  'metric': 'ml-auto flex flex-col items-end gap-1 [&_strong]:text-[9px] [&_strong]:font-medium [&_strong]:text-[#d0d9e7] [&_span]:text-[8px] [&_span]:text-[#9edab7]',
  'filter': 'flex min-h-[72px] items-center gap-3 rounded-lg border border-[#2c3746] bg-[#151d28] px-3 py-2.5 sm:px-4',
  'count': 'inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#263954] text-xs font-semibold text-[#bfd2f6]',
  '&centered .rgi-tabs-list': 'justify-center',
  'settings': 'flex min-h-[152px] flex-col items-center justify-center gap-2 rounded-lg border border-[#2c3746] bg-[#151d28] px-4 py-5 text-center [&_strong]:text-[10px] [&_strong]:font-semibold [&_p]:m-0 [&_p]:max-w-[320px] [&_p]:text-[9px] [&_p]:leading-relaxed [&_p]:text-[#9ba9bc]',
  '&settings .rgi-tabs-example-icon': 'mb-1',
  'status': 'min-h-4 text-[9px] text-[#9ba9bc]',
});

register.all('component-showcase-tabs', {
  '& .demo-content': 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
});
