import { register } from 'tailmantic/collector';

register.all('tm-pagination', {
  '': 'flex justify-center text-[var(--text,#20242b)]',
  list: 'm-0 flex list-none items-center gap-1 p-0 max-sm:gap-0.5',
  button:
    'box-border flex size-9 cursor-pointer items-center justify-center rounded border border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] text-sm text-[var(--text,#20242b)] hover:bg-[var(--surface-hover,#f0f2f5)] focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)] disabled:cursor-not-allowed disabled:opacity-45 max-sm:size-7',
  icon: 'block shrink-0',
  current: 'border-[var(--accent,#315fc4)] bg-[var(--accent,#315fc4)] text-white',
  ellipsis:
    'box-border flex size-9 items-center justify-center text-[var(--muted,#626a75)] max-sm:size-7',
});
