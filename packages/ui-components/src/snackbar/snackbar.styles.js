import { register } from 'tailmantic/collector';

register('tm-snackbar', {
  base: {
    tw: 'flex w-full max-w-xl items-center gap-3 rounded-lg border px-4 py-3 text-sm shadow-[0_8px_30px_rgba(0,0,0,.28)]',
  },
  modifiers: {
    info: {
      tw: 'border-[var(--border,#354257)] bg-[var(--panel-raised,#202a39)] text-[var(--text,#edf2fb)]',
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
  },
});

register.all('tm-snackbar', {
  'message': 'min-w-0 flex-1 leading-relaxed',
  'action': 'flex shrink-0 items-center gap-2',
  'close': 'inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-current opacity-70 hover:bg-white/10 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current',
});

register.all('tm-snackbar-example', {
  'stack': 'flex w-full max-w-[620px] flex-col gap-3',
  'stage': 'flex min-h-[92px] w-full items-center justify-center rounded-lg border border-[var(--border)] bg-[#0d121b] p-3',
  'stage-start': 'justify-start',
  'stage-center': 'justify-center',
  'stage-end': 'justify-end',
  '&stage .tm-snackbar': 'max-w-full',
  'placeholder': 'text-[9px] text-[var(--muted)]',
  'controls': 'flex flex-wrap items-center gap-2.5',
  '&controls .tm-button': '!h-7 !px-2.5 !text-[9px] normal-case tracking-normal',
  'action': '!h-7 !gap-1.5 !px-2 !text-[9px] !normal-case !tracking-normal',
  'position-controls': 'flex w-fit flex-wrap items-center gap-1 rounded-lg border border-[var(--border)] bg-[#111720] p-1',
  'position-label': 'px-1.5 text-[9px] font-medium text-[var(--muted)]',
  'position-option': '!h-7 !px-3 !text-[9px] !normal-case !tracking-normal',
});
