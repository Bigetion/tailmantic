import { register } from 'tailmantic/collector';

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
register('@keyframes rgi-skeleton-wave', { '100%': { transform: 'translateX(100%)' } });
register('rgi-skeleton-example-stack', {
  base: { tw: 'flex w-full max-w-[620px] flex-col gap-3' },
});
register('rgi-skeleton-example-surface', {
  base: { tw: 'w-full rounded-lg border border-[var(--border)] bg-[#111720] p-4' },
});
register('rgi-skeleton-example-profile', {
  base: { tw: 'flex min-h-[92px] w-full items-start gap-3' },
});
register('rgi-skeleton-example-avatar', {
  base: { tw: 'shrink-0' },
});
register('rgi-skeleton-example-avatar-loaded', {
  base: {
    tw: 'inline-flex size-10 items-center justify-center rounded-full bg-[#263650] text-[#a9c4ff]',
  },
});
register('rgi-skeleton-example-profile-copy', {
  base: { tw: 'flex min-w-0 flex-1 flex-col items-start gap-2 pt-1' },
});
register('rgi-skeleton-example-profile-copy strong', {
  base: { tw: 'text-[11px] font-semibold text-[var(--text)]' },
});
register('rgi-skeleton-example-profile-copy span', {
  base: { tw: 'text-[9px] text-[var(--muted)]' },
});
register('rgi-skeleton-example-profile-copy p', {
  base: { tw: 'm-0 max-w-[390px] text-[9px] leading-relaxed text-[#aab4c3]' },
});
register('rgi-skeleton-example-title', {
  base: { tw: 'h-3 rounded-sm' },
});
register('rgi-skeleton-example-subtitle', {
  base: { tw: 'h-2 rounded-sm' },
});
register('rgi-skeleton-example-copy', {
  base: { tw: 'h-2 max-w-[300px] rounded-sm' },
});
register('rgi-skeleton-example-action', {
  base: { tw: 'mt-1 shrink-0 rounded-md' },
});
register('rgi-skeleton-example-loaded-badge', {
  base: {
    tw: 'inline-flex shrink-0 items-center gap-1 rounded-full border border-[#285b2b] bg-[#162d18] px-2 py-1 text-[8px] font-medium text-[#a5d6a7]',
  },
});
register('rgi-skeleton-example-controls', {
  base: { tw: 'flex flex-wrap items-center gap-2.5' },
});
register('rgi-skeleton-example-controls .rgi-button', {
  base: { tw: '!h-7 !px-2.5 !text-[9px] !normal-case !tracking-normal' },
});
register('rgi-skeleton-example-variant-grid', {
  base: { tw: 'grid w-full grid-cols-2 gap-3 max-sm:grid-cols-1' },
});
register('rgi-skeleton-example-variant-card', {
  base: {
    tw: 'flex min-w-0 flex-col gap-2 rounded-lg border border-[var(--border)] bg-[#111720] p-3',
  },
});
register('rgi-skeleton-example-variant-image', {
  base: {
    tw: 'flex h-20 items-center justify-center gap-2 rounded-md bg-[#ffffff0c] text-[9px] text-[#778397]',
  },
});
register('rgi-skeleton-example-variant-title', {
  base: { tw: 'h-2.5 rounded-sm' },
});
register('rgi-skeleton-example-variant-line', {
  base: { tw: 'h-2 rounded-sm' },
});
register('rgi-skeleton-example-horizontal', {
  base: { tw: 'flex-row items-center' },
});
register('rgi-skeleton-example-variant-circle', {
  base: { tw: 'shrink-0' },
});
register('rgi-skeleton-example-variant-copy', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-2' },
});
register('rgi-skeleton-example-list', {
  base: { tw: 'col-span-2 gap-0 max-sm:col-span-1' },
});
register('rgi-skeleton-example-row', {
  base: { tw: 'flex items-center gap-3 border-b border-[var(--border)] py-2.5 last:border-0' },
});
register('rgi-skeleton-example-list-icon', {
  base: { tw: 'shrink-0 rounded-md' },
});
register('rgi-skeleton-example-animation-controls', {
  base: {
    tw: 'flex w-fit flex-wrap items-center gap-1 rounded-lg border border-[var(--border)] bg-[#111720] p-1',
  },
});
register('rgi-skeleton-example-animation-label', {
  base: { tw: 'px-1.5 text-[9px] font-medium text-[var(--muted)]' },
});
register('rgi-skeleton-example-animation-option', {
  base: { tw: '!h-7 !px-3 !text-[9px] !normal-case !tracking-normal' },
});
