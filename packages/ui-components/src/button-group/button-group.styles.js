import { register } from 'tailmantic/collector';

register('rgi-button-group', {
  base: { tw: 'inline-flex items-center gap-1 text-[var(--text,#edf2fb)]' },
  modifiers: {
    vertical: { tw: 'flex-col items-stretch' },
  },
});

register('rgi-button-group-segmented .rgi-button', {
  base: {
    tw: 'h-9 min-w-10 rounded-none border-0 border-r border-[#354158] bg-transparent px-3.5 text-[11px] font-medium normal-case tracking-normal text-[#aab6ca] shadow-none hover:bg-[#ffffff08] hover:text-white last:border-r-0',
  },
});

register('rgi-button-group-segmented', {
  base: { tw: 'gap-0 overflow-hidden rounded-lg border border-[#354158] bg-[#101722] shadow-[0_2px_8px_rgba(0,0,0,.16)]' },
});

register('rgi-button-group-spaced', {
  base: { tw: 'gap-3' },
});

register.group('rgi-button-group-example', {
  root: { tw: 'relative flex flex-col items-start gap-2.5 text-[var(--text,#edf2fb)]' },
  status: { tw: 'text-[10px] text-[#8290a8]' },
});

register('rgi-button-group-segmented .rgi-button[aria-pressed="true"]', {
  base: {
    tw: 'bg-[#21304b] text-[#b9ccff] shadow-none hover:!bg-[#21304b] hover:!text-[#b9ccff]',
  },
});

register('rgi-button-group-vertical .rgi-button', {
  base: { tw: 'min-w-10 border-r-0 border-b border-[#354158] last:border-b-0' },
});

register('rgi-button-group-segmented .rgi-button-icon-only', {
  base: { tw: 'min-w-10 px-0' },
});

register('rgi-split-button-group', {
  base: { tw: 'relative inline-flex items-center gap-0' },
});

register('rgi-split-button-primary', {
  base: { tw: 'h-9 rounded-r-none !bg-[#344e81] px-4 text-white shadow-none hover:!bg-[#405f9e]' },
});

register('rgi-split-button-toggle', {
  base: { tw: 'h-9 w-9 rounded-l-none border-l border-l-[#ffffff20] !bg-[#344e81] px-0 text-white shadow-none hover:!bg-[#405f9e]' },
});

register('rgi-split-button-menu', {
  base: { tw: 'absolute left-0 top-full z-50 mt-2 flex min-w-44 flex-col overflow-hidden rounded-lg border border-[#354158] bg-[#111824] p-1 shadow-[0_12px_32px_rgba(0,0,0,.42)]' },
});

register('rgi-split-button-menu-item', {
  base: { tw: 'cursor-pointer rounded-md border-0 bg-transparent px-3 py-2 text-left text-[11px] text-[#b8c3d6] hover:bg-[#ffffff0c] hover:text-white focus-visible:outline-2 focus-visible:outline-[#86a6ff] disabled:cursor-not-allowed disabled:opacity-50' },
});
