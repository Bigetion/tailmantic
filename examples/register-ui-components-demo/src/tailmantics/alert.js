import { register } from 'tailmantic/collector';

register('demo-alert', {
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
register.group('demo-alert', {
  icon: {
    tw: 'flex size-5 shrink-0 items-center justify-center rounded-full border border-current text-xs font-bold',
  },
  copy: { tw: 'flex flex-col gap-1' },
  title: { tw: 'font-semibold' },
});
register.all({
  'demo-alert-outlined': {
    tw: 'bg-transparent',
  },
  'demo-alert-action': {
    tw: 'mt-2 w-fit cursor-pointer border-0 bg-transparent p-0 text-xs font-semibold underline underline-offset-2',
  },
  'demo-alert-dismiss': {
    tw: 'ml-auto cursor-pointer border-0 bg-transparent text-lg leading-none text-current opacity-70 hover:opacity-100',
  },
  'demo-alert-restore': {
    tw: 'w-fit cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-[var(--text)] hover:border-[var(--rgi-blue)]',
  },
});
