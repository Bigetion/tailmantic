import { register } from 'tailmantic/collector';

register.all({
  'ui-bottom-navigation': { tw: 'flex w-full items-center justify-around' },
  'ui-bottom-navigation-item': {
    tw: 'relative flex min-w-20 cursor-pointer flex-col items-center gap-1 rounded-lg border-0 bg-transparent px-4 py-2 text-[11px] text-[var(--muted)] transition-colors',
  },
  'ui-bottom-navigation-item-selected': {
    tw: 'bg-[var(--rgi-blue-soft)] font-semibold text-[var(--rgi-blue)]',
  },
  'ui-bottom-navigation-icon': {
    tw: 'flex h-6 items-center justify-center leading-none',
  },
  'ui-bottom-navigation-label': { tw: 'truncate' },
});
