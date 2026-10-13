import { register } from 'tailmantic/collector';

register('rgi-dialog-backdrop', {
  base: {
    tw: 'fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto bg-[var(--rgi-dialog-backdrop,rgba(0,0,0,.58))] p-4',
  },
});
register('rgi-dialog', {
  base: {
    tw: 'my-auto flex max-h-[min(90vh,48rem)] w-full max-w-lg flex-col overflow-y-auto rounded-xl border border-[var(--border,#273142)] bg-[var(--panel,#111824)] p-5 text-[var(--text,#edf2fb)] shadow-[0_24px_80px_rgba(0,0,0,.4)] outline-none',
  },
});
register('rgi-dialog-header', { base: { tw: 'flex items-start justify-between gap-4' } });
register('rgi-dialog-title', { base: { tw: 'm-0 text-lg font-semibold' } });
register('rgi-dialog-close', {
  base: {
    tw: 'inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-lg text-[var(--muted,#a4afbf)] hover:bg-white/10 hover:text-[var(--text,#edf2fb)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--rgi-blue,#9bbcff)]',
  },
});
register('rgi-dialog-description', {
  base: { tw: 'mt-2 text-sm leading-relaxed text-[var(--muted,#a4afbf)]' },
});
register('rgi-dialog-content', { base: { tw: 'mt-4 min-h-0 text-sm leading-relaxed' } });
register('rgi-dialog-actions', { base: { tw: 'mt-5 flex flex-wrap justify-end gap-2' } });
register('rgi-dialog-example-surface', {
  base: {
    tw: '!max-h-[min(90vh,48rem)] !max-w-[420px] !gap-0 !rounded-xl !border-[#303b50] !bg-[#121925] !p-5 !shadow-[0_24px_80px_rgba(0,0,0,.65)] max-sm:!rounded-xl',
  },
});
register('rgi-dialog-example-surface-danger', {
  base: { tw: '!border-[#51363c]' },
});
register('rgi-dialog-example-surface-fullscreen', {
  base: { tw: '!max-w-[620px]' },
});
register('rgi-dialog-example-surface .rgi-dialog-header', {
  base: { tw: 'items-start gap-3' },
});
register('rgi-dialog-example-surface .rgi-dialog-title', {
  base: { tw: 'flex items-center gap-3 text-sm font-semibold' },
});
register('rgi-dialog-example-surface .rgi-dialog-description', {
  base: { tw: 'mt-1.5 text-[10px] leading-relaxed' },
});
register('rgi-dialog-example-surface .rgi-dialog-content', {
  base: { tw: 'mt-4 text-[10px]' },
});
register('rgi-dialog-example-surface .rgi-dialog-content:empty', {
  base: { tw: '!hidden' },
});
register('rgi-dialog-example-surface .rgi-dialog-actions', {
  base: { tw: 'mt-5 gap-2' },
});
register('rgi-dialog-example-surface .rgi-button', {
  base: { tw: '!h-8 !px-3 !text-[10px] !normal-case !tracking-normal' },
});
register('rgi-dialog-example-trigger-area', {
  base: { tw: 'flex min-h-[164px] w-full flex-col items-start justify-center gap-3' },
});
register('rgi-dialog-example-trigger', {
  base: { tw: '!h-8 !px-3 !text-[10px] !normal-case !tracking-normal' },
});
register('rgi-dialog-example-heading-icon', {
  base: { tw: '!mb-0 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#243653] text-[#a9c4ff]' },
});
register('rgi-dialog-example-surface-danger .rgi-dialog-example-heading-icon', {
  base: { tw: 'bg-[#48252b] text-[#ff9aa5]' },
});
register('rgi-dialog-example-form', {
  base: { tw: 'flex flex-col gap-4' },
});
register('rgi-dialog-example-field', {
  base: { tw: 'flex flex-col gap-1.5 text-[9px] font-medium text-[#c4cede]' },
});
register('rgi-dialog-example-field input', {
  base: { tw: 'h-9 rounded-md border border-[#303b50] bg-[#0d131d] px-3 text-[10px] text-[var(--text)] outline-none placeholder:text-[#66748a] focus:border-[#6c8fe1] focus:ring-2 focus:ring-[#547be8]/15' },
});
register('rgi-dialog-example-field textarea', {
  base: { tw: 'min-h-[110px] resize-y rounded-md border border-[#303b50] bg-[#0d131d] px-3 py-2.5 text-[10px] leading-relaxed text-[var(--text)] outline-none placeholder:text-[#66748a] focus:border-[#6c8fe1] focus:ring-2 focus:ring-[#547be8]/15' },
});
register('rgi-dialog-example-audience', {
  base: { tw: 'flex flex-wrap items-center gap-1.5 text-[9px] text-[var(--muted)]' },
});
register('rgi-dialog-example-audience span', {
  base: { tw: 'size-1.5 rounded-full bg-[#7bd6b0]' },
});
register('rgi-dialog-example-audience strong', {
  base: { tw: 'font-medium text-[var(--text)]' },
});
