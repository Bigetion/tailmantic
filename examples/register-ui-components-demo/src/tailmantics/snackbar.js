import { register } from 'tailmantic/collector';

register.group('demo-snackbar', {
  root: {
    tw: 'flex max-w-[420px] items-center justify-between gap-6 rounded-lg border border-[var(--rgi-success-border)] bg-[var(--panel-raised)] px-4 py-3 text-sm text-[var(--text)] shadow-[0_8px_24px_rgba(0,0,0,.32)]',
  },
  close: {
    tw: 'cursor-pointer border-0 bg-transparent text-lg text-[var(--muted)] hover:text-white',
  },
});
register.all({
  'demo-snackbar-modes': {
    tw: 'm-0 flex flex-wrap gap-2 border-0 p-0',
  },
  'demo-snackbar-mode': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-[11px] capitalize text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-snackbar-mode-active': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-soft)] font-medium text-[var(--rgi-blue)]',
  },
  'demo-snackbar-show': {
    tw: 'w-fit cursor-pointer rounded-md border border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-dark)] px-3 py-2 text-xs font-semibold text-white hover:bg-[#6689ed]',
  },
  'demo-snackbar-stage': {
    tw: 'flex min-h-20 w-full max-w-[560px] items-center rounded-lg border border-dashed border-[var(--border)] p-3',
  },
  'demo-snackbar-stage-bottom': {
    tw: 'items-end',
  },
  'demo-snackbar-stage-top': {
    tw: 'items-start',
  },
  'demo-snackbar': {
    tw: 'flex w-full max-w-[420px] items-center gap-3 rounded-lg border border-[var(--rgi-success-border)] bg-[var(--panel-raised)] px-4 py-3 text-xs text-[var(--text)] shadow-[0_8px_24px_rgba(0,0,0,.32)]',
  },
  'demo-snackbar-icon': {
    tw: 'shrink-0 text-emerald-400',
  },
  'demo-snackbar > span': {
    tw: 'flex-1',
  },
  'demo-snackbar-action': {
    tw: 'inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent text-[11px] font-semibold text-[var(--rgi-blue)] hover:text-white',
  },
  'demo-snackbar-close': {
    tw: 'inline-flex cursor-pointer border-0 bg-transparent text-[var(--muted)] hover:text-white',
  },
});
