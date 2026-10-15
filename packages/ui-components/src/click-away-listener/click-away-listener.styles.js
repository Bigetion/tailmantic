import { register } from 'tailmantic/collector';

register('rgi-click-away-listener', { base: { tw: 'contents' } });

register.all('rgi-click-away-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-3',
  'stage': 'relative flex min-h-[250px] flex-col items-start gap-3 rounded-xl border border-dashed border-[#303a49] bg-[#0d121b] p-4 sm:min-h-[270px] sm:p-5',
  'copy': 'mb-1 flex max-w-[460px] flex-col gap-1.5 [&_strong]:text-[11px] [&_strong]:font-semibold [&_span:last-child]:text-[9px] [&_span:last-child]:leading-relaxed [&_span:last-child]:text-[#9ba9bc]',
  'eyebrow': 'text-[8px] font-semibold tracking-[.13em] text-[#90a8cd]',
  'trigger': 'inline-flex min-h-9 cursor-pointer items-center gap-2 rounded-md border border-[#526b94] bg-[#1c2a3e] px-3 text-xs font-medium text-[#c5d7ff] hover:bg-[#263954] focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  'outside': 'mt-auto inline-flex min-h-9 cursor-pointer items-center rounded-md border border-dashed border-[#3b4657] bg-transparent px-3 text-[10px] text-[#9ba9bc] hover:border-[#7185a3] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  'panel': 'z-10 w-[min(300px,100%)] rounded-lg border border-[#354154] bg-[#171f2c] p-3 shadow-[0_10px_24px_#0008]',
  'portal': 'fixed bottom-5 right-5 z-[100] w-[min(300px,calc(100vw-40px))] rounded-lg border border-[#526b94] bg-[#171f2c] p-3 text-[#edf2fb] shadow-[0_14px_36px_#000c]',
  'panel-heading': 'flex items-center gap-2 [&_span:last-child]:flex [&_span:last-child]:flex-col [&_span:last-child]:gap-1 [&_strong]:text-[10px] [&_strong]:font-semibold [&_small]:text-[9px] [&_small]:text-[#9ba9bc]',
  'panel-icon': 'inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-[#364760] bg-[#24344a] text-[#adc6fa]',
  'inside-action': 'mt-3 inline-flex min-h-9 w-full cursor-pointer items-center gap-2 rounded-md border border-[#303a49] bg-[#111720] px-2.5 text-left text-[10px] text-[#c1cad7] hover:border-[#536985] hover:bg-[#1c2737] focus-visible:outline-2 focus-visible:outline-[#8baeff] [&_svg]:text-[#9edab7] [&_span]:ml-auto [&_span]:text-[#9ba9bc]',
  'feedback': 'flex min-h-6 items-center gap-2 text-[9px] text-[#9ba9bc]',
  'dot': 'size-1.5 shrink-0 rounded-full bg-[#697789]',
  'dot-open': 'bg-[#e8bd69] shadow-[0_0_7px_#e8bd6970]',
});

register.all('component-showcase-click-away-listener', {
  '& .demo-content': 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
});
