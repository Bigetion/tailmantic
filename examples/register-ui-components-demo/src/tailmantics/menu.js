import { register } from 'tailmantic/collector';

register.all({
  'demo-menu-modes': {
    tw: 'm-0 flex flex-wrap gap-2 border-0 p-0',
  },
  'demo-menu-mode': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-[11px] text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-menu-mode-active': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-soft)] font-medium text-[var(--rgi-blue)]',
  },
  'demo-menu-stage': {
    tw: 'flex min-h-48 w-full max-w-[520px] flex-col justify-center gap-3 rounded-lg border border-dashed border-[var(--border)] p-5',
  },
  'demo-menu-project': {
    tw: 'flex w-full items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--panel)] p-3',
  },
  'demo-menu-project div': {
    tw: 'flex flex-col gap-1',
  },
  'demo-menu-project strong': {
    tw: 'text-xs font-semibold text-white',
  },
  'demo-menu-project span': {
    tw: 'text-[10px] text-[var(--muted)]',
  },
  'demo-menu-trigger': {
    tw: 'inline-flex size-8 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent text-[var(--text-muted)] hover:bg-white/[.06] hover:text-white',
  },
  'demo-menu-surface': {
    tw: 'z-50 w-52 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-1 shadow-2xl',
  },
  'demo-menu-item': {
    tw: 'flex w-full cursor-pointer items-center gap-2 rounded-md border-0 bg-transparent px-3 py-2 text-left text-xs text-[var(--text-muted)] hover:bg-white/[.05] hover:text-white focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]',
  },
  'demo-menu-item span': {
    tw: 'flex-1',
  },
  'demo-menu-item-danger': {
    tw: 'text-rose-400 hover:text-rose-300',
  },
});
