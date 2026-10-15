import { register } from 'tailmantic/collector';

register.all('tm-portal', {
  '': 'contents',
  'example': 'flex min-h-[175px] w-full max-w-[650px] flex-col justify-center gap-3',
  'example-stage': 'flex min-h-[140px] flex-wrap items-center justify-between gap-4 rounded-lg border border-dashed border-[#303a49] bg-[#0d121b] p-4 sm:p-5',
  'example-copy': 'flex min-w-[210px] flex-1 flex-col gap-1.5 [&_strong]:text-[10px] [&_strong]:font-semibold [&_span:last-child]:max-w-[360px] [&_span:last-child]:text-[8px] [&_span:last-child]:leading-relaxed [&_span:last-child]:text-[var(--muted)]',
  'example-eyebrow': 'text-[7px] font-semibold tracking-[.12em] text-[#8baeff]',
  'example-feedback': 'min-h-4 text-[8px] text-[var(--muted)]',
  'example-icon': 'inline-flex size-7 shrink-0 items-center justify-center rounded-md border border-[#364760] bg-[#24344a] text-[#adc6fa]',
  'body-notice': 'fixed right-5 top-5 z-[90] flex w-[min(290px,calc(100vw-24px))] items-center gap-2.5 rounded-lg border border-[#354154] bg-[#171f2c] p-3 text-[var(--text)] shadow-[0_16px_38px_rgba(0,0,0,.48)] max-sm:right-3 max-sm:top-3 [&_span:nth-child(2)]:flex [&_span:nth-child(2)]:min-w-0 [&_span:nth-child(2)]:flex-1 [&_span:nth-child(2)]:flex-col [&_span:nth-child(2)]:gap-1 [&_strong]:text-[9px] [&_strong]:font-semibold [&_small]:text-[8px] [&_small]:text-[var(--muted)]',
  '&body-notice .tm-button': 'inline-flex size-6 min-h-0 shrink-0 items-center justify-center rounded border-0 bg-transparent p-0 text-[var(--muted)] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  'custom-stage': 'items-start',
  'custom-target': 'flex min-h-[64px] w-full items-center justify-center gap-2 rounded-md border border-dashed border-[#536985] bg-[#111a27] p-2 sm:max-w-[255px]',
  'target-label': 'text-[7px] font-medium uppercase tracking-[.1em] text-[#8092aa]',
  'target-content': 'flex w-full items-center gap-2 rounded-md border border-[#354154] bg-[#192435] p-2 text-[#adc6fa] [&>span]:flex [&>span]:min-w-0 [&>span]:flex-1 [&>span]:flex-col [&>span]:gap-1 [&_strong]:text-[8px] [&_strong]:font-semibold [&_small]:text-[7px] [&_small]:text-[var(--muted)]',
  '&target-content .tm-button': 'inline-flex size-5 min-h-0 shrink-0 items-center justify-center rounded border-0 bg-transparent p-0 text-[var(--muted)] hover:bg-white/5 hover:text-white',
  'clipping-frame': 'flex min-h-[145px] flex-col items-start justify-center gap-2 overflow-hidden rounded-lg border border-dashed border-[#536985] bg-[#111a27] p-4',
  '&clipping-frame p': 'm-0 max-w-[340px] text-[8px] leading-relaxed text-[var(--muted)]',
  'escaped-layer': 'fixed bottom-5 right-5 z-[90] flex w-[min(232px,calc(100vw-24px))] items-center gap-2 rounded-lg border border-[#455b82] bg-[#192435] p-2.5 text-[#adc6fa] shadow-[0_18px_48px_rgba(0,0,0,.55)] max-sm:bottom-3 max-sm:right-3 [&>span:nth-child(2)]:flex [&>span:nth-child(2)]:min-w-0 [&>span:nth-child(2)]:flex-1 [&>span:nth-child(2)]:flex-col [&>span:nth-child(2)]:gap-1 [&_strong]:text-[8px] [&_strong]:font-semibold [&_small]:text-[7px] [&_small]:text-[var(--muted)]',
  '&escaped-layer .tm-button': 'inline-flex size-5 min-h-0 shrink-0 items-center justify-center rounded border-0 bg-transparent p-0 text-[var(--muted)] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
});
