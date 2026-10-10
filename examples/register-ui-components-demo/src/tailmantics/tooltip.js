import { register } from 'tailmantic/collector';

register.all({
  'demo-tooltip-modes': {
    tw: 'm-0 flex flex-wrap gap-2 border-0 p-0',
  },
  'demo-tooltip-mode': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-[11px] text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-tooltip-mode-active': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-soft)] font-medium text-[var(--rgi-blue)]',
  },
  'demo-tooltip-stage': {
    tw: 'flex min-h-48 items-center justify-center rounded-lg border border-dashed border-[var(--border)] bg-[var(--panel)]/40 p-6',
  },
  'demo-tooltip-trigger': {
    tw: 'inline-flex cursor-pointer items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--panel)] px-4 py-2.5 text-xs font-medium text-[var(--text)] hover:border-[var(--rgi-blue)] focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]',
  },
  'demo-tooltip-surface': {
    tw: 'z-50 max-w-56 rounded-md border border-[var(--border)] bg-[#263244] px-3 py-2 text-xs text-white shadow-xl',
  },
  'demo-tooltip-surface-rich': {
    tw: 'max-w-80 rounded-lg p-3',
  },
  'demo-tooltip-rich-content': {
    tw: 'flex items-start gap-2',
  },
  'demo-tooltip-rich-content > span': {
    tw: 'flex flex-1 flex-col gap-1',
  },
  'demo-tooltip-rich-content strong': {
    tw: 'text-xs font-semibold',
  },
  'demo-tooltip-rich-content small': {
    tw: 'text-[10px] leading-relaxed text-slate-300',
  },
  'demo-tooltip-shortcut': {
    tw: 'mt-1 inline-flex items-center gap-1 text-[10px] text-slate-300',
  },
  'demo-tooltip-shortcut kbd': {
    tw: 'rounded border border-slate-500 px-1 text-[9px]',
  },
});
