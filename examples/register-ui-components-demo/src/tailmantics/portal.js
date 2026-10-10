import { register } from 'tailmantic/collector';

register.all({
  'demo-portal-explainer': {
    tw: 'flex max-w-[560px] flex-col items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-5',
  },
  'demo-portal-explainer p': {
    tw: 'm-0 text-xs leading-relaxed text-[var(--muted)]',
  },
  'demo-portal-trigger': {
    tw: 'cursor-pointer rounded-md border border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-dark)] px-3 py-2 text-xs font-semibold text-white hover:bg-[#6689ed] disabled:cursor-default disabled:opacity-50',
  },
  'demo-portal-toast': {
    tw: 'fixed bottom-6 right-6 z-[100] flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-xs text-[var(--text)] shadow-2xl',
  },
  'demo-portal-toast button': {
    tw: 'cursor-pointer border-0 bg-transparent text-xs font-semibold text-[var(--rgi-blue)] hover:text-white',
  },
  'demo-portal-clipping': { tw: 'relative max-h-56 overflow-hidden' },
  'demo-portal-custom-target': {
    tw: 'relative mt-3 w-full rounded border border-dashed border-[var(--rgi-blue)] p-8 text-[10px] text-[var(--muted)]',
  },
  'demo-portal-toast.demo-portal-toast-custom': {
    tw: 'absolute bottom-auto left-2 right-auto top-2 z-10',
  },
});
