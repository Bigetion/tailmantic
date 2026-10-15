import { register } from 'tailmantic/collector';

register.all('tm-tabs', {
  '': 'flex min-w-0 flex-col text-[var(--text,#20242b)]',
  vertical: 'flex-row',
});

register.all('tm-tabs', {
  list: 'flex min-w-0 overflow-x-auto border-b border-[var(--border,#d5d9e0)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
  'list-scrollable': 'justify-start',
  'list-centered': 'justify-center',
  'list-fullwidth': '[&_.tm-tab]:flex-1',
  '& [hidden]': 'hidden',
  '&vertical .tm-tabs-list':
    'flex-col overflow-y-auto overflow-x-hidden border-b-0 border-r [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
  '&vertical .tm-tab': 'justify-start rounded-t-none rounded-l-md',
  '&vertical .tm-tab-selected': '',
  '&vertical .tm-tab-indicator': 'bottom-2 left-auto right-[-1px] top-2 h-auto w-0.5',
  '&vertical .tm-tabs-scrollable-container': 'flex-col border-b-0 border-r',
  '&scrollable-container .tm-tabs-list': 'border-b-0 border-r-0',
  '&sm .tm-tab': 'min-h-8 px-3 text-xs',
  '&lg .tm-tab': 'min-h-14 px-5 text-base',
  'scroll-btn':
    'inline-flex shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent px-1.5 text-[var(--muted,#626a75)] hover:text-[var(--text,#e0eaff)] disabled:pointer-events-none disabled:opacity-30',
  'scrollable-container': 'flex min-w-0 items-stretch border-b border-[var(--border,#d5d9e0)]',
});

register.all('tm-tab', {
  '': 'relative inline-flex min-h-12 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-t-md border-0 bg-transparent px-4 pb-px text-sm font-medium text-[var(--muted,#626a75)] hover:bg-[var(--surface-hover,rgba(99,120,150,0.15))] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--accent,#315fc4)] disabled:cursor-not-allowed disabled:opacity-45',
  selected: 'font-semibold text-[var(--accent,#8baeff)]',
  icon: 'inline-flex',
  panel: 'min-w-0 p-4 focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)]',
  indicator: 'absolute bottom-[-1px] left-2 right-2 h-0.5 rounded-full bg-[var(--accent,#8baeff)]',
  badge:
    'inline-flex min-w-[1rem] items-center justify-center rounded-full bg-[var(--panel-raised,#1e2a3a)] px-1 py-0.5 text-[10px] leading-none text-[var(--muted,#626a75)]',
  content: 'inline-flex items-center gap-1.5',
});
