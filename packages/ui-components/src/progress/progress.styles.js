import { register } from 'tailmantic/collector';

register('rgi-progress', { base: { tw: 'text-[var(--rgi-blue,#8eacff)]' } });
register('rgi-progress-linear', { base: { tw: 'block w-full' } });
register('rgi-progress-linear .rgi-progress-track', {
  base: {
    tw: 'relative block h-1.5 w-full overflow-hidden rounded-full bg-[var(--rgi-progress-track,#293447)]',
  },
});
register('rgi-progress-linear .rgi-progress-indicator', {
  base: { tw: 'block h-full rounded-full bg-current transition-[width] duration-200' },
});
register('rgi-progress-linear .rgi-progress-indeterminate', {
  base: {
    tw: '!absolute left-0 w-2/5 animate-[rgi-progress-linear-indeterminate_1.6s_ease-in-out_infinite]',
  },
});
register('rgi-progress-circular', { base: { tw: 'inline-flex' } });
register('rgi-progress-circle', { base: { tw: '-rotate-90' } });
register('rgi-progress-track', {
  base: { tw: 'fill-none stroke-[var(--rgi-progress-track,#293447)] [stroke-width:3]' },
});
register('rgi-progress-indicator', {
  base: {
    tw: 'fill-none stroke-current [stroke-linecap:round] [stroke-width:3] transition-[stroke-dasharray] duration-200',
  },
});
register('rgi-progress-indeterminate', {
  base: { tw: 'animate-[rgi-progress-indeterminate_1.4s_ease-in-out_infinite]' },
});
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
register('rgi-progress-example-stack', {
  base: { tw: 'flex w-full max-w-[620px] flex-col gap-3' },
});
register('rgi-progress-example-card', {
  base: {
    tw: 'flex w-full flex-col gap-3 rounded-lg border border-[var(--border)] bg-[#111720] p-4',
  },
});
register('rgi-progress-example-heading', {
  base: { tw: 'flex items-center gap-2.5' },
});
register('rgi-progress-example-icon', {
  base: {
    tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-[#202d43] text-[#a9c4ff]',
  },
});
register('rgi-progress-example-copy', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-1' },
});
register('rgi-progress-example-copy strong', {
  base: { tw: 'text-[10px] font-semibold text-[var(--text)]' },
});
register('rgi-progress-example-copy span', {
  base: { tw: 'text-[9px] text-[var(--muted)]' },
});
register('rgi-progress-example-value', {
  base: { tw: 'shrink-0 text-[10px] font-semibold tabular-nums text-[#a9c4ff]' },
});
register('rgi-progress-example-linear', {
  base: { tw: 'w-full' },
});
register('rgi-progress-example-actions', {
  base: { tw: 'flex flex-wrap items-center gap-2' },
});
register('rgi-progress-example-actions .rgi-button', {
  base: { tw: '!h-7 !px-2.5 !text-[9px] normal-case tracking-normal' },
});
register('rgi-progress-example-circular-grid', {
  base: {
    tw: 'flex flex-wrap items-center gap-x-8 gap-y-5 rounded-lg border border-[var(--border)] bg-[#111720] p-4',
  },
});
register('rgi-progress-example-circular-item', {
  base: { tw: 'flex min-w-[170px] items-center gap-3' },
});
register('rgi-progress-example-circular-meter', {
  base: {
    tw: 'relative inline-flex size-12 shrink-0 items-center justify-center text-[10px] font-semibold tabular-nums text-[var(--text)]',
  },
});
register('rgi-progress-example-circular-meter .rgi-progress', {
  base: { tw: 'absolute inset-0' },
});
register('rgi-progress-example-spinner', {
  base: { tw: 'animate-spin' },
});
register('rgi-progress-example-buffer-track', {
  base: {
    tw: 'relative h-1.5 w-full overflow-hidden rounded-full bg-[var(--rgi-progress-track,#293447)]',
  },
});
register('rgi-progress-example-buffer', {
  base: { tw: '!absolute inset-0 !w-full !text-[#60799f]' },
});
register('rgi-progress-example-buffer .rgi-progress-track', {
  base: { tw: '!bg-transparent' },
});
register('rgi-progress-example-buffer .rgi-progress-indicator', {
  base: { tw: '!bg-current' },
});
register('rgi-progress-example-played', {
  base: { tw: '!absolute inset-0 !w-full' },
});
register('rgi-progress-example-played .rgi-progress-track', {
  base: { tw: '!bg-transparent' },
});
register('rgi-progress-example-legend', {
  base: { tw: 'flex flex-wrap gap-x-4 gap-y-2 text-[9px] text-[var(--muted)]' },
});
register('rgi-progress-example-legend span', {
  base: { tw: 'inline-flex items-center gap-1.5' },
});
register('rgi-progress-example-legend i', {
  base: { tw: 'size-2 rounded-full bg-[var(--rgi-blue)]' },
});
register('rgi-progress-example-legend-buffered', {
  base: { tw: '!bg-[#60799f]' },
});
