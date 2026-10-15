import { register } from 'tailmantic/collector';

register('@keyframes rgi-skeleton-wave', { '100%': { transform: 'translateX(100%)' } });

register('rgi-skeleton', {
  base: { tw: 'block max-w-full bg-[var(--rgi-skeleton,#303b4c)]' },
  modifiers: {
    text: { tw: 'h-[1em] origin-left scale-y-75 rounded-sm' },
    rectangular: { tw: 'rounded-md' },
    circular: { tw: 'aspect-square rounded-full' },
    pulse: { tw: 'animate-pulse' },
    wave: {
      tw: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[rgi-skeleton-wave_1.6s_ease-in-out_infinite] before:bg-[linear-gradient(90deg,transparent,var(--rgi-skeleton-highlight,rgba(255,255,255,.12)),transparent)]',
    },
  },
});

register.all('rgi-skeleton-example', {
  'stack': 'flex w-full max-w-[620px] flex-col gap-3',
  'surface': 'w-full rounded-lg border border-[var(--border)] bg-[#111720] p-4',
  'profile': 'flex min-h-[92px] w-full items-start gap-3',
  'avatar': 'shrink-0',
  'avatar-loaded': 'inline-flex size-10 items-center justify-center rounded-full bg-[#263650] text-[#a9c4ff]',
  'profile-copy': 'flex min-w-0 flex-1 flex-col items-start gap-2 pt-1',
  '&profile-copy strong': 'text-[11px] font-semibold text-[var(--text)]',
  '&profile-copy span': 'text-[9px] text-[var(--muted)]',
  '&profile-copy p': 'm-0 max-w-[390px] text-[9px] leading-relaxed text-[#aab4c3]',
  'title': 'h-3 rounded-sm',
  'subtitle': 'h-2 rounded-sm',
  'copy': 'h-2 max-w-[300px] rounded-sm',
  'action': 'mt-1 shrink-0 rounded-md',
  'loaded-badge': 'inline-flex shrink-0 items-center gap-1 rounded-full border border-[#285b2b] bg-[#162d18] px-2 py-1 text-[8px] font-medium text-[#a5d6a7]',
  'controls': 'flex flex-wrap items-center gap-2.5',
  '&controls .rgi-button': '!h-7 !px-2.5 !text-[9px] !normal-case !tracking-normal',
  'variant-grid': 'grid w-full grid-cols-2 gap-3 max-sm:grid-cols-1',
  'variant-card': 'flex min-w-0 flex-col gap-2 rounded-lg border border-[var(--border)] bg-[#111720] p-3',
  'variant-image': 'flex h-20 items-center justify-center gap-2 rounded-md bg-[#ffffff0c] text-[9px] text-[#778397]',
  'variant-title': 'h-2.5 rounded-sm',
  'variant-line': 'h-2 rounded-sm',
  'horizontal': 'flex-row items-center',
  'variant-circle': 'shrink-0',
  'variant-copy': 'flex min-w-0 flex-1 flex-col gap-2',
  'list': 'col-span-2 gap-0 max-sm:col-span-1',
  'row': 'flex items-center gap-3 border-b border-[var(--border)] py-2.5 last:border-0',
  'list-icon': 'shrink-0 rounded-md',
  'animation-controls': 'flex w-fit flex-wrap items-center gap-1 rounded-lg border border-[var(--border)] bg-[#111720] p-1',
  'animation-label': 'px-1.5 text-[9px] font-medium text-[var(--muted)]',
  'animation-option': '!h-7 !px-3 !text-[9px] !normal-case !tracking-normal',
});
