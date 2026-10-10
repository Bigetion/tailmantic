import { register } from 'tailmantic/collector';

register('demo-dialog-backdrop', {
  base: { tw: 'fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,.65)] p-4' },
});
register.group('demo-dialog', {
  root: {
    tw: 'relative w-full max-w-[440px] rounded-xl border border-[var(--border)] bg-[var(--panel-raised)] p-6 text-[var(--text)] shadow-[0_20px_60px_rgba(0,0,0,.5)]',
  },
  close: {
    tw: 'absolute right-4 top-3 cursor-pointer border-0 bg-transparent text-xl text-[var(--muted)] hover:text-white',
  },
  title: { tw: 'mb-2 pr-8 text-lg font-semibold' },
  description: { tw: 'text-sm leading-relaxed text-[var(--muted)]' },
  actions: { tw: 'mt-6 flex justify-end gap-2' },
});
register.all({
  'demo-dialog-demo': {
    tw: 'flex flex-col items-start gap-4',
  },
  'demo-dialog-modes': {
    tw: 'm-0 flex flex-wrap gap-2 border-0 p-0',
  },
  'demo-dialog-mode': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-[11px] text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-dialog-mode-active': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-soft)] font-medium text-[var(--rgi-blue)]',
  },
  'demo-dialog-fullscreen': {
    tw: 'h-[min(90vh,720px)] max-w-[900px]',
  },
});
