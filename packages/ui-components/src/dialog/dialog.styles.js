import { register } from 'tailmantic/collector';

register.all('tm-dialog', {
  'backdrop': 'fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto bg-[var(--tm-dialog-backdrop,rgba(0,0,0,.58))] p-4',
  '': 'my-auto flex max-h-[min(90vh,48rem)] w-full max-w-lg flex-col overflow-y-auto rounded-xl border border-[var(--border,#273142)] bg-[var(--panel,#111824)] p-5 text-[var(--text,#edf2fb)] shadow-[0_24px_80px_rgba(0,0,0,.4)] outline-none',
  'header': 'flex items-start justify-between gap-4',
  'title': 'm-0 text-lg font-semibold',
  'close': 'inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-lg text-[var(--muted,#a4afbf)] hover:bg-white/10 hover:text-[var(--text,#edf2fb)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--tm-blue,#9bbcff)]',
  'description': 'mt-2 text-sm leading-relaxed text-[var(--muted,#a4afbf)]',
  'content': 'mt-4 min-h-0 text-sm leading-relaxed',
  'actions': 'mt-5 flex flex-wrap justify-end gap-2',
});

register.all('tm-dialog-example', {
  'surface': '!max-h-[min(90vh,48rem)] !max-w-[420px] !gap-0 !rounded-xl !border-[#303b50] !bg-[#121925] !p-5 !shadow-[0_24px_80px_rgba(0,0,0,.65)] max-sm:!rounded-xl',
  'surface-danger': '!border-[#51363c]',
  'surface-fullscreen': '!max-w-[620px]',
  '&surface .tm-dialog-header': 'items-start gap-3',
  '&surface .tm-dialog-title': 'flex items-center gap-3 text-sm font-semibold',
  '&surface .tm-dialog-description': 'mt-1.5 text-[10px] leading-relaxed',
  '&surface .tm-dialog-content': 'mt-4 text-[10px]',
  '&surface .tm-dialog-content:empty': '!hidden',
  '&surface .tm-dialog-actions': 'mt-5 gap-2',
  '&surface .tm-button': '!h-8 !px-3 !text-[10px] !normal-case !tracking-normal',
  'trigger-area': 'flex min-h-[164px] w-full flex-col items-start justify-center gap-3',
  'trigger': '!h-8 !px-3 !text-[10px] !normal-case !tracking-normal',
  'heading-icon': '!mb-0 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#243653] text-[#a9c4ff]',
  '&surface-danger .tm-dialog-example-heading-icon': 'bg-[#48252b] text-[#ff9aa5]',
  'form': 'flex flex-col gap-4',
  'field': 'flex flex-col gap-1.5 text-[9px] font-medium text-[#c4cede]',
  '&field input': 'h-9 rounded-md border border-[#303b50] bg-[#0d131d] px-3 text-[10px] text-[var(--text)] outline-none placeholder:text-[#66748a] focus:border-[#6c8fe1] focus:ring-2 focus:ring-[#547be8]/15',
  '&field textarea': 'min-h-[110px] resize-y rounded-md border border-[#303b50] bg-[#0d131d] px-3 py-2.5 text-[10px] leading-relaxed text-[var(--text)] outline-none placeholder:text-[#66748a] focus:border-[#6c8fe1] focus:ring-2 focus:ring-[#547be8]/15',
  'audience': 'flex flex-wrap items-center gap-1.5 text-[9px] text-[var(--muted)]',
  '&audience span': 'size-1.5 rounded-full bg-[#7bd6b0]',
  '&audience strong': 'font-medium text-[var(--text)]',
});
