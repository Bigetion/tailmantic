import { register } from 'tailmantic/collector';

register.all({
  'demo-typography': {
    tw: 'flex w-full max-w-[760px] flex-col gap-4',
  },
  'demo-typography > div': {
    tw: 'border-b border-[var(--border)] pb-3 last:border-b-0',
  },
  'demo-typography > div > span': {
    tw: 'mb-2 block text-[9px] font-semibold uppercase tracking-[.12em] text-[var(--muted)]',
  },
  'demo-typography h1': {
    tw: 'm-0 text-3xl font-semibold tracking-tight text-white',
  },
  'demo-typography h2': {
    tw: 'm-0 text-xl font-semibold text-[var(--text)]',
  },
  'demo-typography h3': {
    tw: 'm-0 text-base font-medium text-[var(--text)]',
  },
  'demo-typography p': {
    tw: 'm-0 max-w-[580px] text-sm leading-relaxed text-[var(--text-muted)]',
  },
  'demo-typography small': {
    tw: 'text-xs text-[var(--muted)]',
  },
  'demo-typography-controls': {
    tw: 'flex flex-wrap gap-3 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-3',
  },
  'demo-typography-controls label': {
    tw: 'flex items-center gap-2 text-[10px] text-[var(--text-muted)]',
  },
  'demo-typography-controls select': {
    tw: 'rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-xs text-[var(--text)]',
  },
});
