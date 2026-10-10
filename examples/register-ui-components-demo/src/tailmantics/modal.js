import { register } from 'tailmantic/collector';

register.all({
  'demo-modal-trigger': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs font-medium text-[var(--text)] hover:border-[var(--rgi-blue)]',
  },
  'demo-modal-backdrop': {
    tw: 'fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4',
  },
  'demo-modal-dismiss': {
    tw: 'absolute inset-0 h-full w-full cursor-default border-0 bg-transparent',
  },
  'demo-modal': {
    tw: 'relative z-10 w-full max-w-[440px] rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 shadow-2xl',
  },
  'demo-modal header': {
    tw: 'flex items-center justify-between gap-4',
  },
  'demo-modal h2': {
    tw: 'm-0 text-base font-semibold text-white',
  },
  'demo-modal header button': {
    tw: 'cursor-pointer border-0 bg-transparent text-[var(--muted)] hover:text-white',
  },
  'demo-modal p': {
    tw: 'my-4 text-xs leading-relaxed text-[var(--muted)]',
  },
  'demo-modal label': {
    tw: 'mb-1 block text-xs font-medium text-[var(--text-muted)]',
  },
  'demo-modal input': {
    tw: 'h-10 w-full rounded-md border border-[var(--border)] bg-[var(--page)] px-3 text-sm text-[var(--text)] outline-none focus:border-[var(--rgi-blue)]',
  },
  'demo-modal footer': {
    tw: 'mt-5 flex justify-end gap-2',
  },
  'demo-modal footer button': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-xs text-[var(--text-muted)] hover:bg-white/[.04]',
  },
  'demo-modal footer .demo-modal-primary': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-dark)] font-semibold text-white hover:bg-[#6689ed]',
  },
  'demo-modal-option': { tw: 'inline-flex items-center gap-2 text-xs text-[var(--text-muted)]' },
  'demo-modal-high-contrast': { tw: 'border-2 border-white bg-black text-white' },
  'demo-modal-high-contrast input': {
    tw: 'border-white bg-black text-white placeholder:text-white',
  },
  'demo-modal-reduced-motion': { tw: 'transition-none' },
});
