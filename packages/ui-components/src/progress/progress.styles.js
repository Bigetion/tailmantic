import { register } from 'tailmantic/collector';

register('tm-progress', { base: { tw: 'text-[var(--tm-blue,#8eacff)]' } });
register('tm-progress-linear', { base: { tw: 'block w-full' } });
register('tm-progress-linear .tm-progress-track', {
  base: {
    tw: 'relative block h-1.5 w-full overflow-hidden rounded-full bg-[var(--tm-progress-track,#293447)]',
  },
});
register('tm-progress-linear .tm-progress-indicator', {
  base: { tw: 'block h-full rounded-full bg-current transition-[width] duration-200' },
});
register('tm-progress-linear .tm-progress-indeterminate', {
  base: {
    tw: '!absolute left-0 w-2/5 animate-[tm-progress-linear-indeterminate_1.6s_ease-in-out_infinite]',
  },
});
register('tm-progress-circular', { base: { tw: 'inline-flex' } });
register('tm-progress-circle', { base: { tw: '-rotate-90' } });
register('tm-progress-track', {
  base: { tw: 'fill-none stroke-[var(--tm-progress-track,#293447)] [stroke-width:3]' },
});
register('tm-progress-indicator', {
  base: {
    tw: 'fill-none stroke-current [stroke-linecap:round] [stroke-width:3] transition-[stroke-dasharray] duration-200',
  },
});
register('tm-progress-indeterminate', {
  base: { tw: 'animate-[tm-progress-indeterminate_1.4s_ease-in-out_infinite]' },
});
register('@keyframes tm-progress-indeterminate', {
  '0%': { 'stroke-dasharray': '8 99', 'stroke-dashoffset': '0' },
  '50%': { 'stroke-dasharray': '65 99', 'stroke-dashoffset': '-24' },
  '100%': { 'stroke-dasharray': '8 99', 'stroke-dashoffset': '-107' },
});
register('@keyframes tm-progress-linear-indeterminate', {
  '0%': { transform: 'translateX(-110%) scaleX(.5)' },
  '50%': { transform: 'translateX(80%) scaleX(.9)' },
  '100%': { transform: 'translateX(260%) scaleX(.5)' },
});
