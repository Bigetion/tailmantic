import { register } from 'tailmantic/collector';

register.all({
  'demo-fab-stage': {
    tw: 'flex w-full max-w-[620px] flex-wrap items-center justify-between gap-5 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 max-sm:p-4',
  },
  'demo-fab-stage-copy': {
    tw: 'flex min-w-0 flex-col gap-1.5',
  },
  'demo-fab-stage-copy strong': {
    tw: 'text-sm font-semibold text-[var(--text)]',
  },
  'demo-fab-stage-copy span': {
    tw: 'text-xs text-[var(--muted)]',
  },
  'demo-fab': {
    tw: 'inline-flex size-14 shrink-0 cursor-pointer select-none items-center justify-center gap-2 rounded-full border border-transparent bg-[#547be8] p-0 text-white shadow-[0_5px_16px_rgba(0,0,0,.38),0_2px_5px_rgba(84,123,232,.28)] transition-[background-color,box-shadow,transform] duration-150 hover:bg-[#6689ed] hover:shadow-[0_8px_22px_rgba(0,0,0,.42),0_3px_8px_rgba(84,123,232,.32)] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page)] focus-visible:ring-[#9bbcff] disabled:cursor-not-allowed disabled:opacity-45',
  },
  'demo-fab-secondary': {
    tw: 'border-[#354158] bg-[#171e2a] text-[#b9ccff] shadow-[0_4px_12px_rgba(0,0,0,.28)] hover:bg-[#222d40] hover:shadow-[0_7px_18px_rgba(0,0,0,.36)]',
  },
  'demo-fab-extended': {
    tw: '!h-12 !w-auto min-w-14 rounded-2xl px-5 text-xs font-semibold',
  },
  'demo-fab-small': { tw: '!size-10' },
  'demo-fab-large': { tw: '!size-16' },
  'demo-fab-examples': { tw: 'flex flex-wrap items-center gap-3' },
  'demo-fab-size-group': {
    tw: 'm-0 flex flex-wrap items-center gap-3 border-0 p-0',
  },
  'demo-fab-size-group legend': {
    tw: 'sr-only',
  },
  'demo-fab-speed-dial': {
    tw: 'flex w-fit flex-col items-end gap-3',
  },
  'demo-fab-speed-dial-actions': {
    tw: 'm-0 flex flex-col items-end gap-2 border-0 p-0',
  },
  'demo-fab-speed-dial-actions legend': {
    tw: 'sr-only',
  },
  'demo-fab-speed-dial-actions-hidden': {
    tw: 'hidden',
  },
  'demo-fab-speed-dial-action': {
    tw: 'inline-flex cursor-pointer items-center gap-3 rounded-full border border-[var(--border)] bg-[#171e2a] py-2 pl-4 pr-3 text-xs text-[var(--text)] shadow-md transition-colors hover:border-[var(--rgi-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page)] focus-visible:ring-[var(--rgi-blue)]',
  },
});
