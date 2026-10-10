import { register } from 'tailmantic/collector';

register.all({
  'ui-breadcrumbs': { tw: 'text-sm text-[var(--muted)]' },
  'ui-breadcrumbs-list': { tw: 'm-0 flex list-none flex-wrap items-center gap-2 p-0' },
  'ui-breadcrumbs-item': { tw: 'inline-flex min-w-0 items-center gap-2' },
  'ui-breadcrumbs-separator': { tw: 'select-none text-[var(--muted)]' },
  'ui-breadcrumbs-link': { tw: 'truncate text-[var(--rgi-blue)] no-underline hover:underline' },
  'ui-breadcrumbs-current': { tw: 'font-medium text-[var(--text)]' },
  'ui-breadcrumbs-ellipsis': {
    tw: 'cursor-pointer border-0 bg-transparent p-0 text-[var(--rgi-blue)] hover:underline',
  },
});
