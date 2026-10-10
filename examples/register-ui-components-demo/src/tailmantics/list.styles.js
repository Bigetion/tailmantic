import { register } from 'tailmantic/collector';

register.all({
  'ui-list': {
    tw: 'm-0 flex w-full max-w-[520px] list-none flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel)] p-0',
  },
  'ui-list-dense': { tw: 'py-1' },
  'ui-list-no-padding': { tw: 'p-0' },
  'ui-list-item': { tw: 'flex w-full items-center last:border-b-0' },
  'ui-list-item-divider': { tw: 'border-b border-[var(--border)]' },
  'ui-list-item-no-gutters > button': { tw: 'px-0' },
  'ui-list-item-button': {
    tw: 'flex min-h-12 w-full cursor-pointer items-center justify-between gap-3 border-0 bg-transparent px-4 py-3 text-left text-[var(--text-muted)] last:border-b-0 hover:bg-white/[.03] focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]',
  },
  'ui-list-item-button-selected': { tw: 'bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]' },
  'ui-list-item-text': { tw: 'flex min-w-0 flex-1 flex-col gap-1' },
  'ui-list-primary': { tw: 'text-xs font-medium text-[var(--text)]' },
  'ui-list-secondary': { tw: 'text-[10px] text-[var(--muted)]' },
});
