import { register } from 'tailmantic/collector';

register.all({
  'demo-app-bar': {
    tw: 'flex min-h-14 items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4',
  },
  'demo-app-bar-icon': {
    tw: 'inline-flex size-8 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent text-[var(--text-muted)] hover:bg-white/[.06] hover:text-white',
  },
  'demo-app-bar-title': {
    tw: 'shrink-0 text-sm font-semibold text-white',
  },
  'demo-app-bar-nav': {
    tw: 'flex items-center gap-5 pl-4 text-xs text-[var(--muted)] max-sm:hidden',
  },
  'demo-app-bar-nav button': {
    tw: 'cursor-pointer border-0 bg-transparent p-0 text-inherit hover:text-white',
  },
  'demo-app-bar-nav-active': { tw: 'font-semibold text-[var(--rgi-blue)]' },
  'demo-app-bar-nav-compact': { tw: 'hidden' },
  'demo-app-bar-empty': { tw: 'text-[10px] italic text-[var(--muted)]' },
  'demo-app-bar-actions': {
    tw: 'ml-auto flex items-center gap-2',
  },
  'demo-app-bar-avatar': {
    tw: 'inline-flex size-7 items-center justify-center rounded-full bg-[var(--rgi-blue-soft)] text-[10px] font-semibold text-[var(--rgi-blue)]',
  },
  'demo-app-bar-control': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-xs text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-app-bar-compact': {
    tw: 'flex-wrap gap-2',
  },
  'demo-app-bar-nav-open': {
    tw: 'flex w-full pl-0',
  },
  'demo-app-bar-nav.demo-app-bar-nav-open': {
    tw: 'flex w-full pl-0',
  },
  'demo-app-bar-search': {
    tw: 'h-8 w-36 rounded-md border border-[var(--border)] bg-[var(--page)] px-2 text-xs text-[var(--text)] outline-none focus:border-[var(--rgi-blue)]',
  },
});
