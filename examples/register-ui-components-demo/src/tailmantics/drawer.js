import { register } from 'tailmantic/collector';

register.all({
  'demo-drawer-trigger': {
    tw: 'inline-flex cursor-pointer items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs font-medium text-[var(--text)] hover:border-[var(--rgi-blue)]',
  },
  'demo-drawer-backdrop': {
    tw: 'fixed inset-0 z-40 bg-black/60',
  },
  'demo-drawer-dismiss': {
    tw: 'absolute inset-0 h-full w-full cursor-default border-0 bg-transparent',
  },
  'demo-drawer': {
    tw: 'relative z-10 flex h-full w-72 flex-col gap-1 bg-[var(--panel)] p-5 shadow-2xl',
  },
  'demo-drawer-heading': {
    tw: 'mb-4 flex items-center justify-between border-b border-[var(--border)] pb-4 text-sm text-white',
  },
  'demo-drawer-heading button': {
    tw: 'cursor-pointer border-0 bg-transparent text-[var(--muted)] hover:text-white',
  },
  'demo-drawer-item': {
    tw: 'cursor-pointer rounded-md border-0 bg-transparent px-3 py-2 text-left text-sm text-[var(--text-muted)] hover:bg-white/[.05] hover:text-white',
  },
  'demo-drawer-persistent': { tw: 'w-56 shrink-0 border-r border-[var(--border)]' },
  'demo-drawer-layout': {
    tw: 'flex min-h-52 w-full max-w-[620px] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel)]',
  },
  'demo-drawer-content': {
    tw: 'flex flex-1 flex-col gap-2 p-5 text-sm text-[var(--text)] [&>span]:text-xs [&>span]:text-[var(--muted)]',
  },
  'demo-drawer-item-active': { tw: 'bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]' },
});
