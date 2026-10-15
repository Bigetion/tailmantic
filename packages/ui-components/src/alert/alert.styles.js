import { register } from 'tailmantic/collector';

register.all('tm-alert', {
  '': 'flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-sm',

  info: 'border-[var(--tm-info-border,#315a78)] bg-[var(--tm-info-bg,#142b3b)] text-[var(--tm-info,#a9d6f5)]',
  success:
    'border-[var(--tm-success-border,#356548)] bg-[var(--tm-success-bg,#162e22)] text-[var(--tm-success,#a9dfba)]',
  warning:
    'border-[var(--tm-warning-border,#785c28)] bg-[var(--tm-warning-bg,#342a17)] text-[var(--tm-warning,#ffdc9b)]',
  error:
    'border-[var(--tm-error-border,#794248)] bg-[var(--tm-error-bg,#351d22)] text-[var(--tm-error,#f5b2b8)]',
  standard: '',
  outlined: '!bg-transparent',

  icon: 'mt-0.5 flex size-5 shrink-0 items-center justify-center font-bold',
  content: 'flex min-w-0 flex-1 flex-col gap-1',
  title: 'font-semibold leading-snug',
  message: 'leading-relaxed opacity-90',
  close: [
    'inline-flex size-7 shrink-0 cursor-pointer items-center justify-center',
    'rounded border-0 bg-transparent p-0 text-current',
    'opacity-70 hover:bg-white/10 hover:opacity-100',
    'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current',
  ],
});
