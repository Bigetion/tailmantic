import { register } from 'tailmantic/collector';

register.all({
  'demo-autocomplete': {
    tw: 'relative flex w-full max-w-[480px] flex-col gap-2.5',
  },
  'demo-autocomplete-label': {
    tw: 'text-xs font-medium text-[var(--text-muted)]',
  },
  'demo-autocomplete-field': {
    tw: 'flex min-h-11 items-center gap-2.5 rounded-lg border border-[var(--border)] bg-[var(--page)] px-3.5 text-[var(--muted)] shadow-[inset_0_1px_0_rgba(255,255,255,.025)] transition-[border-color,box-shadow,background-color] duration-150 focus-within:border-[#718ecb] focus-within:bg-[var(--panel)] focus-within:shadow-[0_0_0_3px_rgba(125,159,255,.1)]',
  },
  'demo-autocomplete-input': {
    tw: 'min-w-0 flex-1 border-0 bg-transparent py-2 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)]',
  },
  'demo-autocomplete-modes': {
    tw: 'm-0 flex flex-wrap gap-2 border-0 p-0',
  },
  'demo-autocomplete-mode': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-[11px] text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-autocomplete-mode-active': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-soft)] font-medium text-[var(--rgi-blue)]',
  },
  'demo-autocomplete-tags': {
    tw: 'flex min-w-0 flex-wrap items-center gap-1.5 py-1',
  },
  'demo-autocomplete-tag': {
    tw: 'inline-flex max-w-full items-center gap-1.5 rounded-md border border-[#34425b] bg-[#192337] py-1 pl-2.5 pr-1.5 text-[10px] font-medium text-[#c8d6f5]',
  },
  'demo-autocomplete-tag button': {
    tw: 'inline-flex size-4 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-[#8795af] hover:bg-white/[.07] hover:text-white',
  },
  'demo-autocomplete-clear': {
    tw: 'inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent p-1 text-[var(--muted)] hover:bg-white/[.06] hover:text-white',
  },
  'demo-autocomplete-hint': {
    tw: 'flex items-center justify-between gap-3 px-1 text-[10px] text-[var(--muted)]',
  },
  'demo-autocomplete-hint span': {
    tw: 'inline-flex items-center gap-1',
  },
  'demo-autocomplete-options': {
    tw: 'z-50 max-h-[min(14rem,50vh)] w-[min(480px,calc(100vw-2rem))] overflow-y-auto overscroll-y-contain rounded-lg border border-[#303c52] bg-[var(--panel)] py-1.5 shadow-[0_18px_48px_rgba(0,0,0,.52)] [scrollbar-width:thin] [scrollbar-color:#354156_transparent]',
  },
  'demo-autocomplete-option': {
    tw: 'flex w-full cursor-pointer items-center gap-3 rounded-md border-0 bg-transparent px-3 py-2.5 text-left text-xs text-[#c6cede] transition-colors hover:bg-white/[.05] focus:outline-none',
  },
  'demo-autocomplete-option-active': {
    tw: 'bg-[#1a263a] text-white',
  },
  'demo-autocomplete-option-mark': {
    tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#29364c] bg-[#192337] text-[10px] font-semibold text-[#a9c2ff]',
  },
  'demo-autocomplete-option-copy': {
    tw: 'flex min-w-0 flex-1 flex-col gap-0.5',
  },
  'demo-autocomplete-option-copy strong': {
    tw: 'truncate font-medium text-inherit',
  },
  'demo-autocomplete-option-copy small': {
    tw: 'truncate text-[10px] text-[#78859b]',
  },
  'demo-autocomplete-option-group': {
    tw: 'ml-auto rounded-full bg-white/[.04] px-1.5 py-0.5 text-[9px] text-[#9aa7bd]',
  },
  'demo-autocomplete-empty': {
    tw: 'flex flex-col gap-1 px-4 py-5 text-center text-xs text-[var(--text)] [&>span]:text-[10px] [&>span]:text-[var(--muted)]',
  },
});
