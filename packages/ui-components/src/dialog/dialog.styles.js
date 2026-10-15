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

;
