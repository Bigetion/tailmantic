import { register } from 'tailmantic/collector';

register.group('demo-slider', {
  root: { tw: 'flex w-full max-w-[420px] flex-col gap-2' },
  label: { tw: 'text-xs font-medium text-[var(--text)]' },
  input: {
    tw: 'h-2 w-full cursor-pointer accent-[var(--rgi-blue-dark)] disabled:cursor-not-allowed disabled:opacity-40',
  },
});
register.all({
  'demo-slider-control': { tw: 'flex w-full flex-col gap-2' },
  'demo-slider-marks': { tw: 'flex justify-between text-[9px] text-[var(--muted)]' },
  'demo-slider-range': {
    tw: 'flex w-full max-w-[420px] flex-col gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-3',
  },
});
