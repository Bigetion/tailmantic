import { register } from 'tailmantic/collector';

register.all({
  'ui-menu': {
    tw: 'z-50 w-52 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-1 shadow-2xl',
  },
  'ui-menu-item': {
    tw: 'flex w-full cursor-pointer items-center gap-2 rounded-md border-0 bg-transparent px-3 py-2 text-left text-xs text-[var(--text-muted)] hover:bg-white/[.05] hover:text-white focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]',
  },
  'ui-menu-item span': { tw: 'flex-1' },
  'ui-menu-item-danger': { tw: 'text-rose-400 hover:text-rose-300' },
});
