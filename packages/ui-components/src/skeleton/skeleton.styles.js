import { register } from 'tailmantic/collector';

register('@keyframes tm-skeleton-wave', { '100%': { transform: 'translateX(100%)' } });

register.all('tm-skeleton', {
  '': 'block max-w-full bg-[var(--tm-skeleton,#303b4c)]',
  text: 'h-[1em] origin-left scale-y-75 rounded-sm',
  rectangular: 'rounded-md',
  circular: 'aspect-square rounded-full',
  pulse: 'animate-pulse',
  wave: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[tm-skeleton-wave_1.6s_ease-in-out_infinite] before:bg-[linear-gradient(90deg,transparent,var(--tm-skeleton-highlight,rgba(255,255,255,.12)),transparent)]',
});
