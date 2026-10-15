import { register } from 'tailmantic/collector';

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

register.all('tm-progress', {
  '': 'text-[var(--tm-blue,#8eacff)]',
  'linear': 'block w-full',
  '&linear .tm-progress-track': 'relative block h-1.5 w-full overflow-hidden rounded-full bg-[var(--tm-progress-track,#293447)]',
  '&linear .tm-progress-indicator': 'block h-full rounded-full bg-current transition-[width] duration-200',
  '&linear .tm-progress-indeterminate': '!absolute left-0 w-2/5 animate-[tm-progress-linear-indeterminate_1.6s_ease-in-out_infinite]',
  'circular': 'inline-flex',
  'circle': '-rotate-90',
  'track': 'fill-none stroke-[var(--tm-progress-track,#293447)] [stroke-width:3]',
  'indicator': 'fill-none stroke-current [stroke-linecap:round] [stroke-width:3] transition-[stroke-dasharray] duration-200',
  'indeterminate': 'animate-[tm-progress-indeterminate_1.4s_ease-in-out_infinite]',
});

