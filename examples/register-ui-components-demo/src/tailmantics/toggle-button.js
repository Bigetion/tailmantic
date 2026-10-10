import { register } from 'tailmantic/collector';

register('demo-toggle', {
  base: {
    tw: 'inline-flex h-9 cursor-pointer items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-medium text-[var(--muted)] transition-colors hover:bg-[var(--panel-raised)] focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]',
  },
  modifiers: {
    selected: { tw: 'border-[#607db9] bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]' },
  },
});
register.all({
  'demo-toggle-group': { tw: 'm-0 flex flex-wrap gap-2 border-0 p-0' },
  'demo-toggle-small': { tw: 'h-7 px-2.5 text-xs' },
  'demo-toggle-large': { tw: 'h-11 px-5 text-base' },
  'demo-toggle-icon': { tw: 'size-9 px-0' },
  'demo-toggle-icon.demo-toggle-small': { tw: 'size-7' },
  'demo-toggle-icon.demo-toggle-large': { tw: 'size-11' },
  'demo-toggle-size-control': {
    tw: 'flex w-fit items-center gap-2 text-xs text-[var(--text-muted)]',
  },
  'demo-toggle-size-control select': {
    tw: 'rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 py-1 text-xs text-[var(--text)]',
  },
});
