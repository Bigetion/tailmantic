import { register } from 'tailmantic/collector';

register('ui-dialog-backdrop', {
  base: { tw: 'fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,.65)] p-4' },
});
register('ui-dialog', {
  root: {
    tw: 'my-auto flex max-h-[min(90vh,48rem)] w-full max-w-[440px] flex-col overflow-y-auto rounded-xl border border-[var(--border)] bg-[var(--panel-raised)] p-6 text-[var(--text)] shadow-[0_20px_60px_rgba(0,0,0,.5)] outline-none',
  },
  close: {
    tw: 'inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-[var(--muted)] hover:bg-white/10 hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--rgi-blue)]',
  },
  header: { tw: 'flex items-start justify-between gap-4' },
  title: { tw: 'm-0 text-lg font-semibold' },
  description: { tw: 'mt-2 text-sm leading-relaxed text-[var(--muted)]' },
  content: { tw: 'mt-4 min-h-0 text-sm leading-relaxed' },
  actions: { tw: 'mt-5 flex flex-wrap justify-end gap-2' },
});
