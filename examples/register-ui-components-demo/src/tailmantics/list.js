import { register } from 'tailmantic/collector';

register.all({
  'demo-list': {
    tw: 'm-0 flex w-full max-w-[520px] list-none flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel)] p-0',
  },
  'demo-list-item': {
    tw: 'flex w-full cursor-pointer items-center justify-between border-0 border-b border-[var(--border)] bg-transparent px-4 py-3 text-left text-[var(--text-muted)] last:border-b-0 hover:bg-white/[.03]',
  },
  'demo-list-item-selected': {
    tw: 'bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]',
  },
  'demo-list-copy': {
    tw: 'flex flex-col gap-1',
  },
  'demo-list-copy strong': {
    tw: 'text-xs font-medium text-[var(--text)]',
  },
  'demo-list-copy small': {
    tw: 'text-[10px] text-[var(--muted)]',
  },
});
