import { register } from 'tailmantic/collector';

register.all('tm-breadcrumbs', {
  '': 'text-sm text-[var(--muted,#626a75)]',
  'list': 'm-0 flex list-none flex-wrap items-center gap-2 p-0',
  'item': 'inline-flex min-w-0 items-center gap-2',
  'separator': 'select-none text-[var(--muted,#626a75)]',
  'ellipsis': 'select-none',
  '& a': 'truncate text-[var(--accent,#315fc4)] underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)]',
  '& [aria-current="page"]': 'font-medium text-[var(--text,#20242b)] no-underline',
});

;

;
