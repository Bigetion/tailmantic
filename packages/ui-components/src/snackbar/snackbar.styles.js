import { register } from 'tailmantic/collector';

register('rgi-snackbar', {
  base: {
    tw: 'flex w-full max-w-xl items-center gap-3 rounded-lg border px-4 py-3 text-sm shadow-[0_8px_30px_rgba(0,0,0,.28)]',
  },
  modifiers: {
    info: {
      tw: 'border-[var(--border,#354257)] bg-[var(--panel-raised,#202a39)] text-[var(--text,#edf2fb)]',
    },
    success: {
      tw: 'border-[var(--rgi-success-border,#356548)] bg-[var(--rgi-success-bg,#162e22)] text-[var(--rgi-success,#a9dfba)]',
    },
    warning: {
      tw: 'border-[var(--rgi-warning-border,#785c28)] bg-[var(--rgi-warning-bg,#342a17)] text-[var(--rgi-warning,#ffdc9b)]',
    },
    error: {
      tw: 'border-[var(--rgi-error-border,#794248)] bg-[var(--rgi-error-bg,#351d22)] text-[var(--rgi-error,#f5b2b8)]',
    },
  },
});
register('rgi-snackbar-message', { base: { tw: 'min-w-0 flex-1 leading-relaxed' } });
register('rgi-snackbar-action', { base: { tw: 'flex shrink-0 items-center gap-2' } });
register('rgi-snackbar-close', {
  base: {
    tw: 'inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-current opacity-70 hover:bg-white/10 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current',
  },
});
register('rgi-snackbar-example-stack', {
  base: { tw: 'flex w-full max-w-[620px] flex-col gap-3' },
});
register('rgi-snackbar-example-stage', {
  base: {
    tw: 'flex min-h-[92px] w-full items-center justify-center rounded-lg border border-[var(--border)] bg-[#0d121b] p-3',
  },
});
register('rgi-snackbar-example-stage-start', {
  base: { tw: 'justify-start' },
});
register('rgi-snackbar-example-stage-center', {
  base: { tw: 'justify-center' },
});
register('rgi-snackbar-example-stage-end', {
  base: { tw: 'justify-end' },
});
register('rgi-snackbar-example-stage .rgi-snackbar', {
  base: { tw: 'max-w-full' },
});
register('rgi-snackbar-example-placeholder', {
  base: { tw: 'text-[9px] text-[var(--muted)]' },
});
register('rgi-snackbar-example-controls', {
  base: { tw: 'flex flex-wrap items-center gap-2.5' },
});
register('rgi-snackbar-example-controls .rgi-button', {
  base: { tw: '!h-7 !px-2.5 !text-[9px] normal-case tracking-normal' },
});
register('rgi-snackbar-example-action', {
  base: {
    tw: '!h-7 !gap-1.5 !px-2 !text-[9px] !normal-case !tracking-normal',
  },
});
register('rgi-snackbar-example-position-controls', {
  base: {
    tw: 'flex w-fit flex-wrap items-center gap-1 rounded-lg border border-[var(--border)] bg-[#111720] p-1',
  },
});
register('rgi-snackbar-example-position-label', {
  base: { tw: 'px-1.5 text-[9px] font-medium text-[var(--muted)]' },
});
register('rgi-snackbar-example-position-option', {
  base: { tw: '!h-7 !px-3 !text-[9px] !normal-case !tracking-normal' },
});
