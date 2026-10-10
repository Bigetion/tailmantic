import { register } from 'tailmantic/collector';

register.all({
  'demo-paper-grid': {
    tw: 'grid w-full max-w-[760px] gap-4 sm:grid-cols-3',
  },
  'demo-paper': {
    tw: 'flex min-h-28 flex-col justify-center gap-2 rounded-lg bg-[var(--panel)] p-4 text-xs text-[var(--muted)]',
  },
  'demo-paper strong': {
    tw: 'text-sm font-semibold text-white',
  },
  'demo-paper-flat': {
    tw: 'border border-transparent',
  },
  'demo-paper-raised': {
    tw: 'border border-[var(--border)] shadow-xl',
  },
  'demo-paper-outlined': {
    tw: 'border border-[var(--rgi-blue)] bg-transparent',
  },
  'demo-paper-elevations': { tw: 'grid-cols-2 sm:grid-cols-3' },
  'demo-paper-nested': { tw: 'max-w-[540px] border border-[var(--border)] shadow-xl' },
  'demo-paper-elevation-0': { tw: 'border border-transparent shadow-none' },
  'demo-paper-elevation-1': { tw: 'border border-[var(--border)] shadow-md' },
  'demo-paper-elevation-2': { tw: 'border border-[var(--border)] shadow-lg' },
  'demo-paper-elevation-3': { tw: 'border border-[var(--border)] shadow-xl' },
  'demo-paper-elevation-4': { tw: 'border border-[var(--border)] shadow-2xl' },
  'demo-paper-elevation-8': { tw: 'border border-[#526078] shadow-[0_16px_38px_rgba(0,0,0,.45)]' },
});
