import { register } from 'tailmantic/collector';

register('tm-speed-dial', {
  base: { tw: 'relative inline-flex flex-col items-center gap-2' },
  modifiers: {
    up: { tw: 'flex-col-reverse' },
    left: { tw: 'flex-row-reverse' },
    right: { tw: 'flex-row' },
    down: { tw: 'flex-col' },
  },
});

register.all('tm-speed-dial', {
  'actions': 'm-0 flex min-w-0 flex-col gap-2 border-0 p-0',
  'action': 'flex size-10 cursor-pointer items-center justify-center rounded-full border border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] text-[var(--text,#20242b)] shadow-md hover:bg-[var(--surface-hover,#f0f2f5)] focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)] disabled:cursor-not-allowed disabled:opacity-45',
  'trigger': 'flex size-14 cursor-pointer items-center justify-center rounded-full border-0 bg-[var(--accent,#315fc4)] text-xl text-white shadow-lg transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent,#315fc4)]',
  '&open .tm-speed-dial-trigger': 'rotate-45',
  '& [hidden]': 'hidden',
});

register.all('tm-speed-dial-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-4',
  'stage': 'flex min-h-[230px] items-center justify-between gap-6 rounded-xl border border-[#303a49] bg-[radial-gradient(ellipse_at_top_right,#20304a_0%,#111720_58%)] p-6 max-sm:gap-4 max-sm:p-4',
  'copy': 'flex max-w-[280px] flex-col gap-2 [&_strong]:text-base [&_strong]:font-semibold [&_span:last-child]:text-sm [&_span:last-child]:text-[#9ba9bc]',
  'kicker': 'text-[10px] font-semibold tracking-[.14em] text-[#90a8cd]',
  '& .tm-speed-dial-trigger': '!size-12 !shrink-0 !border !border-[#9ab8f2] !bg-[#8baeff] !text-[#101827] !shadow-[0_8px_20px_#0008] hover:!bg-[#a3beff] focus-visible:!outline-[#c5d7ff]',
  '& .tm-speed-dial-action': '!size-10 !shrink-0 !border-[#354154] !bg-[#202b3a] !text-[#d3dceb] !shadow-lg hover:!border-[#536985] hover:!bg-[#2a3a51] focus-visible:!outline-[#8baeff]',
  '& .tm-speed-dial-actions': 'gap-2',
  '& .tm-speed-dial-right .tm-speed-dial-actions': 'flex-row',
  '& .tm-speed-dial-left .tm-speed-dial-actions': 'flex-row',
  'status': 'min-h-5 text-xs text-[#9ba9bc]',
  'directions': 'm-0 flex min-w-0 flex-wrap gap-2 border-0 p-0',
  'direction': 'inline-flex min-h-9 min-w-16 cursor-pointer items-center justify-center rounded-lg border border-[#354154] bg-[#111720] px-3 text-xs capitalize text-[#9ba9bc] hover:border-[#536985] hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff] aria-pressed:border-[#789fe8] aria-pressed:bg-[#20304a] aria-pressed:text-[#c5d7ff]',
  'direction-stage': 'flex min-h-[220px] flex-wrap items-center justify-center gap-8 rounded-xl border border-dashed border-[#303a49] bg-[#0d121b] p-6 max-sm:gap-4 max-sm:p-4',
  'direction-note': 'max-w-48 text-center text-xs text-[#9ba9bc]',
  'share-card': 'flex min-h-24 w-full flex-wrap items-center gap-4 rounded-xl border border-[#293548] bg-[#111925] p-4',
  'share-icon': 'inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#364760] bg-[#24344a] text-[#adc6fa]',
  'share-copy': 'flex min-w-[160px] flex-1 flex-col gap-1 [&_strong]:text-sm [&_strong]:font-semibold [&_span]:text-xs [&_span]:text-[#9ba9bc]',
  '&share-card .tm-speed-dial': 'flex-row',
  '&share-card .tm-speed-dial-actions': 'flex-row',
});

register.all('component-showcase-speed-dial', {
  '& .demo-content': 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
});
