import { register } from 'tailmantic/collector';

register.all({
  'ui-accordion-group': {
    tw: 'w-full max-w-[700px] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel)]',
  },
  'ui-accordion-item': {
    tw: 'border-b border-[var(--border)] last:border-b-0',
  },
  'ui-accordion-heading': { tw: 'm-0' },
  'ui-accordion-title': { tw: 'flex min-w-0 flex-1 items-center gap-3' },
  'ui-accordion-trigger': {
    tw: 'flex min-h-12 w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-4 py-3 text-left text-sm font-medium text-[var(--text)] hover:bg-white/[.03] focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)] disabled:cursor-not-allowed disabled:opacity-50',
  },
  'ui-accordion-icon': { tw: 'text-[var(--muted)] transition-transform duration-150' },
  'ui-accordion-panel': {
    tw: 'border-t border-[var(--border)] px-4 py-3 text-sm leading-relaxed text-[var(--muted)]',
  },
  'ui-accordion-panel[hidden]': { tw: 'hidden' },
  'ui-accordion-icon-open': { tw: 'rotate-180 text-[var(--rgi-blue)]' },
  'ui-accordion-item-disabled .ui-accordion-trigger': {
    tw: 'cursor-not-allowed opacity-40',
  },
});
