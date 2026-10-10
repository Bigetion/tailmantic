import { register } from 'tailmantic/collector';

register.all({
  'demo-click-away-stage': {
    tw: 'flex min-h-36 w-full max-w-[480px] flex-col items-start justify-center gap-4 rounded-lg border border-dashed border-[var(--border)] p-5',
  },
  'demo-click-away-panel': {
    tw: 'flex flex-col gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4 text-sm text-[var(--text)] shadow-lg',
  },
  'demo-click-away-reopen': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs font-medium text-[var(--text)] hover:border-[var(--rgi-blue)]',
  },
});
