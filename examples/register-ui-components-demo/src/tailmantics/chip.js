import { register } from 'tailmantic/collector';

register('demo-chip', {
  base: { tw: 'inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium' },
  modifiers: {
    primary: { tw: 'bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]' },
    success: { tw: 'bg-[var(--rgi-success-bg)] text-[var(--rgi-success)]' },
    outlined: { tw: 'border border-[var(--border)] bg-transparent text-[var(--text)]' },
    disabled: { tw: 'cursor-not-allowed opacity-40' },
  },
});
register.all({
  'demo-chip-group': { tw: 'm-0 flex flex-wrap gap-2 border-0 p-0' },
  'demo-chip-select': { tw: 'cursor-pointer border-0 bg-transparent p-0 text-inherit' },
  'demo-chip-delete': {
    tw: 'ml-1 inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-current opacity-70 hover:opacity-100',
  },
  'demo-chip-selected': { tw: 'ring-1 ring-[var(--rgi-blue)]' },
});
