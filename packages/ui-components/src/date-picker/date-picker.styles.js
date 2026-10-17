import { register } from 'tailmantic/collector';

register.all('tm-date-picker', {
  '': 'relative flex w-[240px] max-w-full flex-col gap-1.5',
  label: 'text-[10px] font-semibold uppercase tracking-[.12em] text-[#aab7cd]',
  trigger:
    'box-border flex min-h-11 w-full cursor-pointer items-center justify-between gap-2.5 rounded-xl border border-[#354158] bg-[#0e1420] px-3.5 text-left text-xs text-[var(--text,#edf2fb)] shadow-[inset_0_1px_0_rgba(255,255,255,.025)] transition-[border-color,box-shadow,background-color] duration-150 hover:border-[#52678b] focus-visible:border-[#718ecb] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(125,159,255,.1)] disabled:cursor-not-allowed disabled:opacity-50 aria-expanded:border-[#718ecb]',
  'trigger-content': 'flex min-w-0 flex-1 items-center gap-2.5',
  'trigger-icon': 'size-4 shrink-0 text-[#8290a7]',
  'trigger-value': 'min-w-0 truncate',
  'trigger-placeholder': 'text-[var(--text-subtle,#8996aa)]',
  'trigger-chevron': 'size-4 shrink-0 text-[#8290a7]',
  helper: 'text-[11px] text-[var(--text-subtle,#8996aa)]',
  'helper-error': '!text-[var(--danger,#dc737b)]',
});

register.all('tm-date-picker-trigger-error', {
  '': '!border-[var(--danger,#dc737b)]',
});

register.all('tm-date-picker-popover', {
  '': '!z-[1200] w-[min(19rem,calc(100vw-2rem))] !rounded-xl !border !border-[#303c52] !bg-[#111824] !p-3 !text-[var(--text,#edf2fb)] !shadow-[0_18px_48px_rgba(0,0,0,.52)]',
});

register.all('tm-date-picker', {
  calendar: 'flex flex-col gap-3',
  header: 'flex items-center justify-between gap-2',
  'month-label': 'text-xs font-semibold text-[var(--text,#edf2fb)]',
  'month-year-selects': 'flex min-w-0 items-center gap-1.5',
  'month-navigation': 'flex items-center gap-1',
  'month-button':
    'inline-flex size-8 cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent p-0 text-[#9aa8be] hover:bg-[#ffffff0c] hover:text-white focus-visible:outline-2 focus-visible:outline-[#86a6ff] disabled:cursor-not-allowed disabled:opacity-40',
  'month-button-icon': 'size-4',
  grid: 'w-full table-fixed border-collapse',
  weekday: 'h-7 text-center text-[10px] font-medium text-[#78859b]',
  cell: 'p-0 text-center align-middle',
  day: 'relative inline-flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-transparent p-0 text-[11px] text-[#c6cede] transition-colors hover:bg-[#ffffff0c] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-[#86a6ff] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent aria-[current=date]:font-semibold aria-[current=date]:text-[#a9c2ff]',
  'day-outside': 'text-[#667187]',
  'day-selected': '!border-[#86a6ff] !bg-[#243653] !text-white hover:!bg-[#2d4264]',
});

register.all('tm-date-picker-select-options', {
  '': '!z-[1210]',
});
