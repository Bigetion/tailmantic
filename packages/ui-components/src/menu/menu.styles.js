import { register } from 'tailmantic/collector';

register.all('tm-menu', {
  positioner: 'z-50',
  '': 'box-border max-h-[min(24rem,80vh)] min-w-48 overflow-auto rounded-md border border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] p-1 text-[var(--text,#20242b)] shadow-[0_8px_24px_rgba(0,0,0,.16)]',
  item: 'box-border flex w-full cursor-pointer items-center rounded border-0 bg-transparent px-3 py-2 text-left text-sm text-inherit focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)] hover:bg-[var(--surface-hover,#f0f2f5)]',
  'item-disabled': 'cursor-not-allowed opacity-45',
  '& [aria-checked="true"]': 'bg-[var(--surface-hover,#f0f2f5)] text-[var(--text,#20242b)]',
});
