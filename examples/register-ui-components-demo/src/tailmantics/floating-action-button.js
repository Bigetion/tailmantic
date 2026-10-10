import { register } from 'tailmantic/collector';

register.all({
  'demo-fab-stage': {
    tw: 'flex w-full max-w-[460px] items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5',
  },
  'demo-fab': {
    tw: 'inline-flex size-12 cursor-pointer items-center justify-center rounded-full border-0 bg-[var(--rgi-blue-dark)] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#6689ed] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rgi-blue)]',
  },
  'demo-fab-examples': { tw: 'flex flex-wrap items-center gap-3' },
  'demo-fab-small': { tw: 'size-10' },
  'demo-fab-large': { tw: 'size-14' },
});
