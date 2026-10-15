import { register } from 'tailmantic/collector';

register('@keyframes rgi-progress-indeterminate', {
  '0%': { 'stroke-dasharray': '8 99', 'stroke-dashoffset': '0' },
  '50%': { 'stroke-dasharray': '65 99', 'stroke-dashoffset': '-24' },
  '100%': { 'stroke-dasharray': '8 99', 'stroke-dashoffset': '-107' },
});

register('@keyframes rgi-progress-linear-indeterminate', {
  '0%': { transform: 'translateX(-110%) scaleX(.5)' },
  '50%': { transform: 'translateX(80%) scaleX(.9)' },
  '100%': { transform: 'translateX(260%) scaleX(.5)' },
});

register.all('rgi-progress', {
  '': 'text-[var(--rgi-blue,#8eacff)]',
  'linear': 'block w-full',
  '&linear .rgi-progress-track': 'relative block h-1.5 w-full overflow-hidden rounded-full bg-[var(--rgi-progress-track,#293447)]',
  '&linear .rgi-progress-indicator': 'block h-full rounded-full bg-current transition-[width] duration-200',
  '&linear .rgi-progress-indeterminate': '!absolute left-0 w-2/5 animate-[rgi-progress-linear-indeterminate_1.6s_ease-in-out_infinite]',
  'circular': 'inline-flex',
  'circle': '-rotate-90',
  'track': 'fill-none stroke-[var(--rgi-progress-track,#293447)] [stroke-width:3]',
  'indicator': 'fill-none stroke-current [stroke-linecap:round] [stroke-width:3] transition-[stroke-dasharray] duration-200',
  'indeterminate': 'animate-[rgi-progress-indeterminate_1.4s_ease-in-out_infinite]',
});

register.all('rgi-progress-example', {
  'stack': 'flex w-full max-w-[620px] flex-col gap-3',
  'card': 'flex w-full flex-col gap-3 rounded-lg border border-[var(--border)] bg-[#111720] p-4',
  'heading': 'flex items-center gap-2.5',
  'icon': 'inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-[#202d43] text-[#a9c4ff]',
  'copy': 'flex min-w-0 flex-1 flex-col gap-1',
  '&copy strong': 'text-[10px] font-semibold text-[var(--text)]',
  '&copy span': 'text-[9px] text-[var(--muted)]',
  'value': 'shrink-0 text-[10px] font-semibold tabular-nums text-[#a9c4ff]',
  'linear': 'w-full',
  'actions': 'flex flex-wrap items-center gap-2',
  '&actions .rgi-button': '!h-7 !px-2.5 !text-[9px] normal-case tracking-normal',
  'circular-grid': 'flex flex-wrap items-center gap-x-8 gap-y-5 rounded-lg border border-[var(--border)] bg-[#111720] p-4',
  'circular-item': 'flex min-w-[170px] items-center gap-3',
  'circular-meter': 'relative inline-flex size-12 shrink-0 items-center justify-center text-[10px] font-semibold tabular-nums text-[var(--text)]',
  '&circular-meter .rgi-progress': 'absolute inset-0',
  'spinner': 'animate-spin',
  'buffer-track': 'relative h-1.5 w-full overflow-hidden rounded-full bg-[var(--rgi-progress-track,#293447)]',
  'buffer': '!absolute inset-0 !w-full !text-[#60799f]',
  '&buffer .rgi-progress-track': '!bg-transparent',
  '&buffer .rgi-progress-indicator': '!bg-current',
  'played': '!absolute inset-0 !w-full',
  '&played .rgi-progress-track': '!bg-transparent',
  'legend': 'flex flex-wrap gap-x-4 gap-y-2 text-[9px] text-[var(--muted)]',
  '&legend span': 'inline-flex items-center gap-1.5',
  '&legend i': 'size-2 rounded-full bg-[var(--rgi-blue)]',
  'legend-buffered': '!bg-[#60799f]',
});
