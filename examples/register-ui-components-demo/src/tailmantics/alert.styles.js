import { register } from 'tailmantic/collector';

register('ui-alert', {
  base: { tw: 'flex items-start gap-3 rounded-lg border px-4 py-3 text-sm' },
  modifiers: {
    info: { tw: 'border-[var(--rgi-info-border)] bg-[var(--rgi-info-bg)] text-[var(--rgi-info)]' },
    success: {
      tw: 'border-[var(--rgi-success-border)] bg-[var(--rgi-success-bg)] text-[var(--rgi-success)]',
    },
    warning: {
      tw: 'border-[var(--rgi-warning-border)] bg-[var(--rgi-warning-bg)] text-[var(--rgi-warning)]',
    },
    error: {
      tw: 'border-[var(--rgi-error-border)] bg-[var(--rgi-error-bg)] text-[var(--rgi-error)]',
    },
  },
});
register.group('ui-alert', {
  icon: {
    tw: 'mt-0.5 flex size-5 shrink-0 items-center justify-center',
  },
  copy: { tw: 'flex min-w-0 flex-1 flex-col gap-1' },
  title: { tw: 'font-semibold leading-snug' },
});
register.all({
  'ui-alert-outlined': { tw: '!bg-transparent' },
  'ui-alert-dismiss': {
    tw: 'ml-auto inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent p-0 text-inherit opacity-70 transition-colors hover:bg-white/[.08] hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current',
  },
});
