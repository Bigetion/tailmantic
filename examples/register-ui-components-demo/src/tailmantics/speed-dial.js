import { register } from 'tailmantic/collector';

register.all({
  'demo-speed-dial': {
    tw: 'flex min-h-44 w-full max-w-[400px] flex-col items-end justify-end gap-3 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5',
  },
  'demo-speed-dial-actions': {
    tw: 'flex flex-col items-end gap-2',
  },
  'demo-speed-dial-actions button': {
    tw: 'inline-flex cursor-pointer items-center gap-3 rounded-full border border-[var(--border)] bg-[#171e2a] py-2 pl-4 pr-3 text-xs text-[var(--text)] shadow-md hover:border-[var(--rgi-blue)]',
  },
  'demo-speed-dial-trigger': {
    tw: 'inline-flex size-11 cursor-pointer items-center justify-center rounded-full border-0 bg-[var(--rgi-blue-dark)] text-white shadow-lg transition-transform hover:bg-[#6689ed]',
  },
  'demo-speed-dial-trigger-open': {
    tw: 'rotate-45',
  },
  'demo-speed-dial-control': {
    tw: 'flex w-fit items-center gap-2 text-xs text-[var(--text-muted)]',
  },
  'demo-speed-dial-control select': {
    tw: 'rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 py-1 text-xs text-[var(--text)]',
  },
  'demo-speed-dial-actions-down': { tw: 'flex-col-reverse' },
  'demo-speed-dial-actions-left': { tw: 'flex-row-reverse flex-wrap' },
  'demo-speed-dial-actions-right': { tw: 'flex-row flex-wrap' },
  'demo-speed-dial-left': { tw: 'flex-row-reverse items-center justify-end' },
  'demo-speed-dial-right': { tw: 'flex-row items-center justify-end' },
  'demo-speed-dial-down': { tw: 'justify-start' },
});
