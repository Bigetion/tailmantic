import { register } from 'tailmantic/collector';

register.group('demo-progress', {
  root: { tw: 'flex w-full max-w-[420px] flex-col gap-2' },
  label: { tw: 'flex justify-between text-xs text-[var(--muted)]' },
  track: { tw: 'relative h-2 overflow-hidden rounded-full bg-[#293447]' },
  bar: {
    tw: 'relative z-[1] h-full rounded-full bg-[var(--rgi-blue-dark)] transition-[width] duration-200',
  },
});
register('demo-progress-indeterminate', {
  base: { tw: 'w-1/3 animate-[progress_1.2s_ease-in-out_infinite]' },
});
register('demo-progress-keyframes', {
  '@keyframes progress': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(300%)' },
  },
});
register.all({
  'demo-progress-buffer': { tw: 'absolute inset-y-0 left-0 rounded-full bg-[#52627e]' },
  'demo-progress-circular-row': { tw: 'flex flex-wrap gap-4' },
  'demo-progress-circular': {
    tw: 'flex size-16 items-center justify-center rounded-full p-1.5 text-xs font-semibold text-[var(--text)] [&>span]:flex [&>span]:size-full [&>span]:items-center [&>span]:justify-center [&>span]:rounded-full [&>span]:bg-[var(--panel)]',
  },
});
