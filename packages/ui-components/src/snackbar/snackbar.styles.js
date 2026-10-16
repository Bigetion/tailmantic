import { register } from 'tailmantic/collector';

register.all('tm-snackbar', {
  '': 'box-border flex w-full max-w-xl items-center gap-3 rounded-lg border px-4 py-3 text-sm shadow-[0_8px_30px_rgba(0,0,0,.28)]',
  info: 'border-[var(--border,#354257)] bg-[var(--panel-raised,#202a39)] text-[var(--text,#edf2fb)]',
  success:
    'border-[var(--tm-success-border,#356548)] bg-[var(--tm-success-bg,#162e22)] text-[var(--tm-success,#a9dfba)]',
  warning:
    'border-[var(--tm-warning-border,#785c28)] bg-[var(--tm-warning-bg,#342a17)] text-[var(--tm-warning,#ffdc9b)]',
  error:
    'border-[var(--tm-error-border,#794248)] bg-[var(--tm-error-bg,#351d22)] text-[var(--tm-error,#f5b2b8)]',
});

register.all('tm-snackbar', {
  message: 'min-w-0 flex-1 leading-relaxed',
  action: 'flex shrink-0 items-center gap-2',
  close:
    'inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-current opacity-70 hover:bg-white/10 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current',
});
