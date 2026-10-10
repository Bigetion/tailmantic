import { register } from 'tailmantic/collector';

register.all({
  'demo-button-group': {
    tw: 'm-0 inline-flex w-fit overflow-hidden rounded-md border border-[var(--border)] bg-[var(--panel)] p-0',
  },
  'demo-button-group legend': {
    tw: 'sr-only',
  },
  'demo-button-group-item': {
    tw: 'relative inline-flex min-h-9 cursor-pointer select-none items-center justify-center gap-2 border-0 border-r border-[var(--border)] bg-transparent px-3.5 text-[11px] font-medium text-[var(--text-muted)] transition-colors last:border-r-0 hover:bg-white/[.05] hover:text-white focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#86a6ff] disabled:cursor-not-allowed disabled:opacity-40',
  },
  'demo-button-group-selected': {
    tw: 'bg-[#21304b] text-[#b9ccff] hover:bg-[#21304b] hover:text-[#b9ccff]',
  },
  'demo-button-group-vertical': {
    tw: 'flex-col',
  },
  'demo-button-group-vertical .demo-button-group-item': {
    tw: 'justify-center border-r-0 border-b border-[var(--border)] last:border-b-0',
  },
  'demo-button-group-split': {
    tw: 'relative m-0 inline-flex overflow-visible rounded-lg border-0 p-0',
  },
  'demo-button-group-primary': {
    tw: 'inline-flex min-h-9 cursor-pointer select-none items-center gap-2 rounded-l-[7px] border border-[var(--rgi-blue-dark)] bg-[#344e81] px-4 text-[11px] font-medium text-white transition-colors hover:bg-[#405f9e] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#86a6ff] disabled:cursor-not-allowed disabled:opacity-40',
  },
  'demo-button-group-toggle': {
    tw: 'inline-flex min-h-9 w-9 cursor-pointer items-center justify-center rounded-r-[7px] border border-l border-l-white/20 border-[var(--rgi-blue-dark)] bg-[#344e81] px-0 text-white transition-colors hover:bg-[#405f9e] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#86a6ff]',
  },
  'demo-button-group-menu': {
    tw: 'absolute left-0 top-full z-10 m-0 mt-2 flex min-w-44 flex-col overflow-hidden rounded-lg border border-[#354158] bg-[#111824] p-1 shadow-[0_12px_32px_rgba(0,0,0,.42)]',
  },
  'demo-button-group-menu legend': {
    tw: 'sr-only',
  },
  'demo-button-group-menu button': {
    tw: 'cursor-pointer rounded-md border-0 bg-transparent px-3 py-2 text-left text-[11px] text-[#b8c3d6] hover:bg-white/[.05] hover:text-white focus-visible:outline-2 focus-visible:outline-[#86a6ff]',
  },
});
