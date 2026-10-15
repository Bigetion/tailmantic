import { register } from 'tailmantic/collector';

register.all('modal-demo', {
  '': 'flex w-full max-w-[680px] flex-col gap-2.5',
  'stage': 'flex min-h-[145px] flex-wrap items-center justify-between gap-4 rounded-lg border border-[#303a49] bg-[radial-gradient(ellipse_at_top_right,#20304a_0%,#111720_58%)] p-4 sm:p-5',
  'stage-copy': 'flex min-w-[190px] flex-1 flex-col gap-1.5 [&_strong]:text-[10px] [&_strong]:font-semibold [&_span:last-child]:text-[8px] [&_span:last-child]:text-[var(--muted)]',
  'eyebrow': 'text-[7px] font-semibold tracking-[.13em] text-[#90a8cd]',
  'overlay': 'fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-[#080b12a6] p-4 backdrop-blur-[1.5px] max-sm:items-end max-sm:p-0',
  'surface': 'relative max-h-[min(90vh,760px)] w-full max-w-[430px] overflow-y-auto rounded-xl border border-[#303b50] bg-[#121925] p-4 shadow-[0_24px_80px_rgba(0,0,0,.65)] focus:outline-none sm:p-5',
  'heading': 'flex items-start gap-2.5',
  'icon': 'inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#364760] bg-[#24344a] text-[#adc6fa]',
  'heading-copy': 'flex min-w-0 flex-1 flex-col gap-1 pt-0.5 [&_strong]:text-[10px] [&_strong]:font-semibold [&_small]:text-[8px] [&_small]:leading-relaxed [&_small]:text-[var(--muted)]',
  'close': 'inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent text-[#929fb1] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  'project': 'mt-4 flex flex-wrap items-center justify-between gap-2 border-y border-[#2c3746] py-3 text-[8px] text-[var(--muted)]',
  'project-status': 'inline-flex items-center gap-1.5 text-[#e8c47d] [&_i]:size-1.5 [&_i]:rounded-full [&_i]:bg-[#e8bd69]',
  'actions': 'mt-4 flex flex-wrap items-center justify-end gap-2',
  'text-button': 'inline-flex h-8 cursor-pointer items-center justify-center rounded-md border border-transparent bg-transparent px-3 text-[8px] font-medium text-[#aeb9c9] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  'callout': 'mt-4 flex items-center gap-2 rounded-md border border-[#2c3746] bg-[#151d28] px-2.5 py-2 text-[8px] leading-relaxed text-[#adb9ca]',
  'callout-icon': 'inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-[#203b32] text-[#9edab7]',
});

register.all('modal-backdrop', {
  'controls': 'flex min-h-[145px] flex-wrap items-center justify-between gap-3 rounded-lg border border-[#303a49] bg-[#111720] p-4',
  'toggle': 'inline-flex cursor-pointer items-center gap-2 text-[8px] text-[#c2ccda] [&_input]:sr-only [&_input:focus-visible+span]:outline-2 [&_input:focus-visible+span]:outline-[#8baeff]',
  '&toggle input:checked + .modal-toggle-track': 'bg-[#5d83d7] [&_i]:translate-x-3',
});

register.all('modal-toggle', {
  'track': 'relative inline-flex h-4 w-7 items-center rounded-full bg-[#3b4655] transition-colors [&_i]:ml-0.5 [&_i]:size-3 [&_i]:rounded-full [&_i]:bg-[#d2dbe8] [&_i]:transition-transform',
});

register.all('modal-accessibility', {
  'icon': 'inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#364760] bg-[#24344a] text-[#adc6fa]',
  'stage': 'flex min-h-[145px] flex-wrap items-center gap-2.5 rounded-lg border border-[#303a49] bg-[#111720] p-4 [&>span:nth-child(2)]:flex [&>span:nth-child(2)]:min-w-[170px] [&>span:nth-child(2)]:flex-1 [&>span:nth-child(2)]:flex-col [&>span:nth-child(2)]:gap-1 [&_strong]:text-[9px] [&_strong]:font-semibold [&_small]:text-[8px] [&_small]:leading-relaxed [&_small]:text-[var(--muted)]',
  'options': 'mt-4 flex flex-col gap-2 border-y border-[#2c3746] py-3 [&_label]:grid [&_label]:grid-cols-[14px_1fr] [&_label]:items-center [&_label]:gap-x-2 [&_label]:text-[8px] [&_label]:font-medium [&_label]:text-[#d0d9e7] [&_input]:size-3.5 [&_input]:accent-[#8baeff] [&_small]:col-start-2 [&_small]:text-[7px] [&_small]:font-normal [&_small]:text-[var(--muted)]',
});
