import { register } from 'tailmantic/collector';

register.all({
  'demo-number-field-control': {
    tw: 'flex max-w-[360px] flex-col gap-2',
  },
  'demo-number-field-control label': {
    tw: 'text-xs font-medium text-[var(--text-muted)]',
  },
  'demo-number-field': {
    tw: 'inline-flex h-10 w-fit overflow-hidden rounded-md border border-[var(--border)] bg-[var(--panel)]',
  },
  'demo-number-field button': {
    tw: 'inline-flex w-10 cursor-pointer items-center justify-center border-0 bg-transparent px-2 text-[var(--text-muted)] hover:bg-white/[.05] disabled:cursor-not-allowed disabled:opacity-40',
  },
  'demo-number-field input': {
    tw: 'w-16 border-x border-[var(--border)] bg-transparent text-center text-sm text-[var(--text)] outline-none',
  },
  'demo-number-field span': {
    tw: 'flex items-center px-2 text-xs text-[var(--muted)]',
  },
  'demo-number-field-invalid': {
    tw: 'border-rose-500',
  },
  'demo-number-field-error': {
    tw: 'text-[11px] text-rose-400',
  },
});
