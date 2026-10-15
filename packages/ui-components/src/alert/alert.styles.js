import { register } from 'tailmantic/collector';

register('tm-alert', {
  base: { tw: 'flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-sm' },
  modifiers: {
    info: {
      tw: 'border-[var(--tm-info-border,#315a78)] bg-[var(--tm-info-bg,#142b3b)] text-[var(--tm-info,#a9d6f5)]',
    },
    success: {
      tw: 'border-[var(--tm-success-border,#356548)] bg-[var(--tm-success-bg,#162e22)] text-[var(--tm-success,#a9dfba)]',
    },
    warning: {
      tw: 'border-[var(--tm-warning-border,#785c28)] bg-[var(--tm-warning-bg,#342a17)] text-[var(--tm-warning,#ffdc9b)]',
    },
    error: {
      tw: 'border-[var(--tm-error-border,#794248)] bg-[var(--tm-error-bg,#351d22)] text-[var(--tm-error,#f5b2b8)]',
    },
    standard: { tw: '' },
    outlined: { tw: '!bg-transparent' },
  },
});

register.all('tm-alert', {
  'icon': 'mt-0.5 flex size-5 shrink-0 items-center justify-center font-bold',
  'content': 'flex min-w-0 flex-1 flex-col gap-1',
  'title': 'font-semibold leading-snug',
  'message': 'leading-relaxed opacity-90',
  'close': 'inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-current opacity-70 hover:bg-white/10 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current',
});

register.all('tm-alert-example', {
  'stack': 'flex w-full max-w-[620px] flex-col gap-2',
  '': '!gap-2.5 !rounded-md !px-3 !py-2.5 !text-[10px]',
  'actions': 'flex flex-wrap items-center gap-1',
  'action': '!h-7 !min-h-0 !px-2 !text-[9px] !text-current hover:!bg-white/10',
  'empty': 'flex min-h-[70px] w-full flex-wrap items-center justify-between gap-2 rounded-lg border border-dashed border-[var(--border)] px-3 py-2 text-[10px] text-[var(--muted)]',
});
