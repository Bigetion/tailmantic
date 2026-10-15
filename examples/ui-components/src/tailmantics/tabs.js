import { register } from 'tailmantic/collector';

register.all('tm-tabs-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-3 rounded-xl border border-[#303a49] bg-[#111720] p-4 sm:gap-4 sm:p-5',
  '& .tm-tabs': 'min-w-0',
  '& .tm-tabs-list': 'border-[#303a49]',
  '& .tm-tab': 'text-[#9ba9bc] hover:bg-white/[.035] hover:text-white focus-visible:outline-[#8baeff]',
  '& .tm-tab-selected': 'text-[#c5d7ff]',
  '& .tm-tab-indicator': 'bg-[#8baeff]',
  '& .tm-tab-panel': 'px-0 pb-0 pt-4',
  '& .tm-tabs-scrollable-container': 'border-[#303a49]',
  '& .tm-tabs-scroll-btn': 'min-w-8 text-[#9ba9bc] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  '& .tm-tab-badge': 'bg-[#263954] text-[#c5d7ff]',
  'card': 'flex min-h-[84px] flex-wrap items-center gap-3 rounded-lg border border-[#2c3746] bg-[#151d28] p-3 sm:gap-4 sm:p-4',
  'icon': 'inline-flex size-9 shrink-0 items-center justify-center rounded-lg',
  'icon-blue': 'border border-[#364760] bg-[#24344a] text-[#adc6fa]',
  'icon-green': 'border border-[#315244] bg-[#1d382e] text-[#a6e2c0]',
  'icon-purple': 'border border-[#463d61] bg-[#302944] text-[#c8b8f2]',
  'copy': 'flex min-w-[140px] flex-1 flex-col gap-1 [&_strong]:text-[10px] [&_strong]:font-semibold [&_span]:text-[9px] [&_span]:leading-relaxed [&_span]:text-[#9ba9bc]',
  'metric': 'ml-auto flex flex-col items-end gap-1 [&_strong]:text-[9px] [&_strong]:font-medium [&_strong]:text-[#d0d9e7] [&_span]:text-[8px] [&_span]:text-[#9edab7]',
  'filter': 'flex min-h-[72px] items-center gap-3 rounded-lg border border-[#2c3746] bg-[#151d28] px-3 py-2.5 sm:px-4',
  'count': 'inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#263954] text-xs font-semibold text-[#bfd2f6]',
  '&centered .tm-tabs-list': 'justify-center',
  'settings': 'flex min-h-[152px] flex-col items-center justify-center gap-2 rounded-lg border border-[#2c3746] bg-[#151d28] px-4 py-5 text-center [&_strong]:text-[10px] [&_strong]:font-semibold [&_p]:m-0 [&_p]:max-w-[320px] [&_p]:text-[9px] [&_p]:leading-relaxed [&_p]:text-[#9ba9bc]',
  '&settings .tm-tabs-example-icon': 'mb-1',
  'status': 'min-h-4 text-[9px] text-[#9ba9bc]',
});

register.all('component-showcase-tabs', {
  '& .demo-content': 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
});
