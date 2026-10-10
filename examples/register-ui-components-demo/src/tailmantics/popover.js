import { register } from 'tailmantic/collector';

register.all({
  'demo-popover-controls': {
    tw: 'm-0 flex flex-wrap gap-2 border-0 p-0',
  },
  'demo-popover-mode': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-[11px] text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-popover-mode-active': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-soft)] font-medium text-[var(--rgi-blue)]',
  },
  'demo-popover-placement': {
    tw: 'cursor-pointer rounded border border-[var(--border)] bg-transparent px-2 py-1 text-[10px] capitalize text-[var(--muted)] hover:text-white',
  },
  'demo-popover-placement-active': {
    tw: 'border-[var(--rgi-blue)] text-[var(--rgi-blue)]',
  },
  'demo-popover-anchor-wrap': {
    tw: 'flex min-h-40 items-center justify-center rounded-lg border border-dashed border-[var(--border)] bg-[var(--panel)]/40 p-6',
  },
  'demo-popover-trigger': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs font-medium text-[var(--text)] hover:border-[var(--rgi-blue)]',
  },
  'demo-popover-surface': {
    tw: 'z-50 w-[min(300px,calc(100vw-2rem))] rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4 shadow-2xl',
  },
  'demo-popover-heading': {
    tw: 'flex items-center gap-2 text-[var(--rgi-blue)]',
  },
  'demo-popover-heading span': {
    tw: 'flex min-w-0 flex-1 flex-col gap-1',
  },
  'demo-popover-heading strong': {
    tw: 'text-xs font-semibold text-white',
  },
  'demo-popover-heading small': {
    tw: 'text-[10px] text-[var(--muted)]',
  },
  'demo-popover-heading button': {
    tw: 'cursor-pointer border-0 bg-transparent p-1 text-[var(--muted)] hover:text-white',
  },
  'demo-popover-description': {
    tw: 'mb-0 mt-3 text-xs leading-relaxed text-[var(--text-muted)]',
  },
  'demo-popover-status': {
    tw: 'mt-3 block text-[10px] text-[var(--muted)]',
  },
  'demo-popover-colors': {
    tw: 'mt-3 flex flex-col gap-1',
  },
  'demo-popover-colors button': {
    tw: 'flex cursor-pointer items-center gap-2 rounded border-0 bg-transparent px-2 py-2 text-left text-xs text-[var(--text-muted)] hover:bg-white/[.05]',
  },
  'demo-popover-colors button span': {
    tw: 'size-3 rounded-full',
  },
  'demo-popover-colors button svg': {
    tw: 'ml-auto',
  },
});
