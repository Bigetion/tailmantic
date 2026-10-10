import { register } from 'tailmantic/collector';

register.all({
  'demo-icon-glyph-grid': {
    tw: 'grid w-full max-w-[600px] grid-cols-4 gap-3 sm:grid-cols-7',
  },
  'demo-icon-glyph-item': {
    tw: 'flex min-h-20 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-icon-glyph-item span': {
    tw: 'text-[10px] text-[var(--muted)]',
  },
  'demo-icon-glyph-size': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 py-1 text-[10px] text-[var(--text-muted)]',
  },
  'demo-icon-glyph-size-active': {
    tw: 'border-[var(--rgi-blue)] bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]',
  },
});
