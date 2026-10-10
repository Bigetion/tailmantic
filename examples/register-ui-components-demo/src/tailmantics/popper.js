import { register } from 'tailmantic/collector';

register.all({
  'demo-popper-controls': {
    tw: 'm-0 flex flex-wrap gap-2 border-0 p-0',
  },
  'demo-popper-control': {
    tw: 'inline-flex cursor-pointer items-center gap-1 rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-xs capitalize text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-popper-control-active': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-soft)] font-medium text-[var(--rgi-blue)]',
  },
  'demo-popper-offsets': {
    tw: 'grid w-full max-w-[480px] gap-4 sm:grid-cols-2',
  },
  'demo-popper-offsets label': {
    tw: 'flex flex-col gap-2 text-xs text-[var(--text-muted)]',
  },
  'demo-popper-offsets label span': {
    tw: 'flex justify-between',
  },
  'demo-popper-offsets output': {
    tw: 'text-[var(--rgi-blue)]',
  },
  'demo-popper-offsets input': {
    tw: 'accent-[var(--rgi-blue-dark)]',
  },
  'demo-popper-stage': {
    tw: 'relative flex min-h-52 w-full max-w-[600px] items-center justify-center rounded-lg border border-dashed border-[var(--border)] bg-[var(--panel)]/40 p-6',
  },
  'demo-popper-anchor': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-xs font-medium text-white hover:border-[var(--rgi-blue)]',
  },
  'demo-popper-surface': {
    tw: 'z-50 flex max-w-64 items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-3 text-[var(--text)] shadow-2xl',
  },
  'demo-popper-surface strong': {
    tw: 'text-xs font-semibold capitalize text-[var(--rgi-blue)]',
  },
  'demo-popper-surface span': {
    tw: 'text-[10px] leading-relaxed text-[var(--muted)]',
  },
  'demo-popper-surface button': {
    tw: 'cursor-pointer border-0 bg-transparent p-0 text-[var(--muted)] hover:text-white',
  },
});
