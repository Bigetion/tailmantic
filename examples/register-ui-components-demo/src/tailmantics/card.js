import { register } from 'tailmantic/collector';

register('demo-card', {
  base: {
    tw: 'flex flex-col gap-3 overflow-hidden rounded-xl bg-[var(--panel)] p-5 text-[var(--text)]',
  },
  modifiers: {
    elevated: { tw: 'border border-[var(--border)] shadow-[0_2px_8px_rgba(0,0,0,.16)]' },
    outlined: { tw: 'border border-[#354257] shadow-none' },
  },
});
register.all({
  'demo-card-media': {
    tw: 'h-28 rounded-lg bg-[linear-gradient(135deg,#273e67,#3c6792_48%,#b1c5dd)]',
  },
  'demo-card-action': {
    tw: 'inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border)] bg-transparent px-2.5 py-1.5 text-xs text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-card-action-active': { tw: 'border-[var(--rgi-error)] text-[var(--rgi-error)]' },
});
