import { register } from 'tailmantic/collector';

register.group('tm-select', {
  root: { tw: 'relative flex w-[240px] max-w-full flex-col gap-2.5' },
  label: { tw: 'text-[10px] font-semibold uppercase tracking-[.12em] text-[#aab7cd]' },
  control: { tw: 'relative flex min-w-0 flex-col gap-1.5' },
  trigger: {
    tw: 'flex min-h-11 w-full cursor-pointer items-center justify-between gap-2.5 rounded-xl border border-[#354158] bg-[#0e1420] px-3.5 text-left text-xs text-[var(--text,#edf2fb)] shadow-[inset_0_1px_0_rgba(255,255,255,.025)] transition-[border-color,box-shadow,background-color] duration-150 hover:border-[#52678b] focus-visible:border-[#718ecb] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(125,159,255,.1)] disabled:cursor-not-allowed disabled:opacity-50 aria-expanded:border-[#718ecb]',
  },
  'trigger-open': { tw: 'bg-[#111927] shadow-[0_0_0_3px_rgba(125,159,255,.1)]' },
  'trigger-error': {
    tw: '!border-[var(--danger,#dc737b)] focus-visible:!shadow-[0_0_0_3px_var(--danger-soft,rgba(220,115,123,.2))]',
  },
  value: { tw: 'min-w-0 flex-1 truncate' },
  icon: {
    tw: 'size-2 shrink-0 rotate-45 border-b-2 border-r-2 border-[#8290a7] transition-transform',
  },
  'icon-open': { tw: '-translate-y-0.5 rotate-[225deg] border-[#b8c9f1]' },
  tags: { tw: 'flex min-w-0 flex-wrap items-center gap-1.5 pt-1' },
  tag: {
    tw: 'inline-flex max-w-full items-center gap-1.5 rounded-md border border-[#34425b] bg-[#192337] py-1 pl-2.5 pr-1.5 text-[10px] font-medium text-[#c8d6f5]',
  },
  'tag-remove': {
    tw: 'inline-flex size-5 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-[#8795af] hover:bg-[#ffffff12] hover:text-white focus-visible:outline-2 focus-visible:outline-[#86a6ff] disabled:cursor-not-allowed disabled:opacity-50',
  },
  helper: { tw: 'text-[11px] text-[var(--text-subtle,#8996aa)]' },
  'helper-error': { tw: '!text-[var(--danger,#dc737b)]' },
});

register.all('tm-select', {
  'options': 'z-50 max-h-64 w-[240px] max-w-[calc(100vw-32px)] overflow-y-auto overscroll-y-contain rounded-xl border border-[#303c52] bg-[#111824] py-1.5 text-[var(--text,#edf2fb)] shadow-[0_18px_48px_rgba(0,0,0,.52)]',
  'option': 'flex min-h-11 w-full cursor-pointer items-center justify-between gap-3 border-0 bg-transparent px-3 text-left text-xs text-[#c6cede] transition-colors hover:bg-[#ffffff08] focus-visible:outline-none',
  'option-active': 'bg-[#1a263a] text-white',
  'option-selected': 'text-[#a9c2ff]',
  'option-disabled': 'cursor-not-allowed opacity-40 hover:bg-transparent',
  'option-copy': 'flex min-w-0 flex-1 flex-col gap-0.5',
  'option-label': 'truncate font-medium text-inherit',
  'option-detail': 'truncate text-[10px] text-[#78859b]',
  'option-check': 'shrink-0 text-[#a9c2ff]',
});
