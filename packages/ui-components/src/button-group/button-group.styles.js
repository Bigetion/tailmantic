// Note: ButtonGroup styles depend on rgi-button being present. Always import button/styles alongside button-group/styles.
import { register } from 'tailmantic/collector';

register('rgi-button-group', {
  base: { tw: 'inline-flex items-center gap-1 text-[var(--text,#edf2fb)]' },
  modifiers: {
    vertical: { tw: 'flex-col items-stretch' },
  },
});

register.group('button-group', {
  root: {
    tw: '!gap-0 overflow-hidden rounded-lg border border-[#354158] bg-[#101722] shadow-[0_2px_8px_rgba(0,0,0,.16)]',
  },
  button: {
    tw: 'inline-flex min-h-9 cursor-pointer select-none items-center justify-center gap-2 border-0 border-r border-[#354158] bg-transparent px-3.5 text-[11px] font-medium text-[#aab6ca] transition-colors last:border-r-0 hover:bg-[#ffffff08] hover:text-white focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#86a6ff]',
  },
  selected: {
    tw: 'bg-[#21304b] text-[#b9ccff] hover:!bg-[#21304b] hover:!text-[#b9ccff]',
  },
  vertical: {
    tw: 'flex-col !items-stretch [&_.button-group-button]:min-h-9 [&_.button-group-button]:w-10 [&_.button-group-button]:border-r-0 [&_.button-group-button]:border-b [&_.button-group-button:last-child]:border-b-0',
  },
  split: {
    tw: 'relative !overflow-visible rounded-lg',
  },
  primary: {
    tw: 'rounded-l-[7px] !bg-[#344e81] px-4 !text-white hover:!bg-[#405f9e] hover:!text-white',
  },
  'split-toggle': {
    tw: 'w-9 rounded-r-[7px] px-0 hover:!bg-[#ffffff10] hover:!text-white',
  },
  menu: {
    tw: 'absolute left-0 top-full z-10 m-0 mt-2 flex min-w-44 flex-col overflow-hidden rounded-lg border-0 bg-[#111824] p-1 shadow-[0_12px_32px_rgba(0,0,0,.42)] [min-inline-size:0]',
  },
  'menu-legend': { tw: 'sr-only' },
  'menu-item': {
    tw: 'cursor-pointer rounded-md border-0 bg-transparent px-3 py-2 text-left text-[11px] text-[#b8c3d6] hover:bg-[#ffffff0c] hover:text-white focus-visible:outline-2 focus-visible:outline-[#86a6ff]',
  },
  demo: {
    tw: 'relative flex flex-col items-start gap-2.5',
  },
  status: {
    tw: 'text-[10px] text-[#8290a8]',
  },
});
