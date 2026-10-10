import { register } from 'tailmantic/collector';

register.all({
  'demo-transfer-list': {
    tw: 'grid w-full max-w-[760px] gap-4 sm:grid-cols-2',
  },
  'demo-transfer-column': {
    tw: 'flex min-h-64 flex-col rounded-lg border border-[var(--border)] bg-[var(--panel)] p-3',
  },
  'demo-transfer-column > strong': {
    tw: 'mb-3 flex items-center justify-between border-b border-[var(--border)] pb-3 text-xs font-semibold text-[var(--text)]',
  },
  'demo-transfer-column > strong span': {
    tw: 'text-[10px] font-normal text-[var(--muted)]',
  },
  'demo-transfer-column ul': {
    tw: 'm-0 flex flex-1 list-none flex-col gap-1 p-0',
  },
  'demo-transfer-item': {
    tw: 'w-full cursor-pointer rounded-md border border-transparent bg-transparent px-2 py-2 text-left text-xs text-[var(--text-muted)] hover:bg-white/[.04]',
  },
  'demo-transfer-item-selected': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]',
  },
  'demo-transfer-empty': {
    tw: 'px-2 py-2 text-xs text-[var(--muted)]',
  },
  'demo-transfer-action': {
    tw: 'mt-3 inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-[var(--border)] bg-transparent px-2 py-2 text-[11px] font-medium text-[var(--text-muted)] hover:border-[var(--rgi-blue)] disabled:cursor-not-allowed disabled:opacity-40',
  },
  'demo-transfer-select-all': {
    tw: 'mb-2 w-fit cursor-pointer border-0 bg-transparent px-1 text-left text-[10px] font-medium text-[var(--rgi-blue)] hover:underline disabled:opacity-40',
  },
});
