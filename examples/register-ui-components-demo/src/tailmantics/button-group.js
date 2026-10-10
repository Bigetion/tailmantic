import { register } from 'tailmantic/collector';

register.all({
  'demo-button-group': {
    tw: 'm-0 inline-flex w-fit overflow-hidden rounded-md border border-[var(--border)] bg-[var(--panel)] p-0',
  },
  'demo-button-group legend': {
    tw: 'sr-only',
  },
  'demo-button-group-item': {
    tw: 'inline-flex cursor-pointer items-center gap-2 border-0 border-r border-[var(--border)] bg-transparent px-4 py-2 text-xs text-[var(--text-muted)] last:border-r-0 hover:bg-white/[.05]',
  },
  'demo-button-group-selected': {
    tw: 'bg-[var(--rgi-blue-soft)] font-semibold text-[var(--rgi-blue)]',
  },
  'demo-button-group-vertical': {
    tw: 'flex-col',
  },
  'demo-button-group-vertical .demo-button-group-item': {
    tw: 'justify-center border-r-0 border-b border-[var(--border)] last:border-b-0',
  },
  'demo-button-group-split': {
    tw: 'relative inline-flex overflow-visible rounded-md',
  },
  'demo-button-group-primary': {
    tw: 'inline-flex cursor-pointer items-center gap-2 rounded-l-md border border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-dark)] px-4 py-2 text-xs font-medium text-white hover:bg-[#6689ed]',
  },
  'demo-button-group-toggle': {
    tw: 'inline-flex cursor-pointer items-center justify-center rounded-r-md border border-l border-l-white/20 border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-dark)] px-2 text-white hover:bg-[#6689ed]',
  },
  'demo-button-group-menu': {
    tw: 'absolute left-0 top-11 z-10 flex w-48 flex-col rounded-md border border-[var(--border)] bg-[var(--panel)] p-1 shadow-xl',
  },
  'demo-button-group-menu button': {
    tw: 'cursor-pointer rounded border-0 bg-transparent px-3 py-2 text-left text-xs text-[var(--text-muted)] hover:bg-white/[.05] hover:text-white',
  },
});
