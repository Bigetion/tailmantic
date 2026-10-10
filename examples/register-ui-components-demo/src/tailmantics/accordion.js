import { register } from 'tailmantic/collector';

register.group('demo-accordion', {
  root: {
    tw: 'w-full max-w-[700px] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel)]',
  },
  item: { tw: 'border-b border-[var(--border)] last:border-b-0' },
  heading: { tw: 'm-0' },
  trigger: {
    tw: 'flex min-h-12 w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-4 py-3 text-left text-sm font-medium text-[var(--text)] hover:bg-white/[.03] focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]',
  },
  icon: { tw: 'text-[var(--muted)] transition-transform duration-150' },
  panel: {
    tw: 'border-t border-[var(--border)] px-4 py-3 text-sm leading-relaxed text-[var(--muted)]',
  },
});
register('demo-accordion-icon-open', { base: { tw: 'rotate-180 text-[var(--rgi-blue)]' } });
register('demo-accordion-panel[hidden]', { base: { tw: 'hidden' } });
register.all({
  'demo-accordion-example': {
    tw: 'flex w-full max-w-[700px] flex-col gap-3',
  },
  'demo-accordion-toolbar': {
    tw: 'flex items-center justify-between text-xs font-medium text-[var(--text-muted)]',
  },
  'demo-accordion-toolbar button': {
    tw: 'cursor-pointer border-0 bg-transparent text-xs font-medium text-[var(--rgi-blue)] hover:text-white',
  },
  'demo-accordion-index': {
    tw: 'font-mono text-[10px] text-[var(--muted)]',
  },
  'demo-accordion-unavailable': {
    tw: 'text-[10px] text-[var(--muted)]',
  },
  'demo-accordion-item-disabled .demo-accordion-trigger': {
    tw: 'cursor-not-allowed opacity-40',
  },
});
