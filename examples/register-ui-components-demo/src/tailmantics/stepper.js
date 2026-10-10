import { register } from 'tailmantic/collector';

register.all({
  'demo-stepper': {
    tw: 'm-0 flex w-full max-w-[720px] list-none items-center p-0',
  },
  'demo-step': {
    tw: 'relative flex flex-1 items-center gap-2 text-xs text-[var(--muted)] last:flex-none',
  },
  'demo-step-active': {
    tw: 'font-medium text-[var(--text)]',
  },
  'demo-step-marker': {
    tw: 'inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-[10px]',
  },
  'demo-step-active .demo-step-marker': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-dark)] text-white',
  },
  'demo-stepper-actions': {
    tw: 'mt-5 flex w-full max-w-[720px] items-center justify-between',
  },
  'demo-stepper-actions button': {
    tw: 'cursor-pointer rounded-md border border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-dark)] px-3 py-2 text-xs font-medium text-white hover:bg-[#6689ed] disabled:cursor-default disabled:opacity-50',
  },
  'demo-stepper-control': { tw: 'flex w-fit items-center gap-2 text-xs text-[var(--text-muted)]' },
  'demo-stepper-control select': {
    tw: 'rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 py-1 text-xs text-[var(--text)]',
  },
  'demo-stepper-vertical': { tw: 'flex max-w-[340px] flex-col items-start gap-4' },
  'demo-stepper-vertical .demo-step': { tw: 'min-h-12 flex-none' },
  'demo-stepper-alternative .demo-step': { tw: 'flex-col items-start gap-1' },
  'demo-stepper-content': {
    tw: 'flex max-w-[420px] flex-col gap-1 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-3 text-xs text-[var(--muted)] [&>strong]:text-[var(--text)]',
  },
});
