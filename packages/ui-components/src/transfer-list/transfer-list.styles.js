import { register } from 'tailmantic/collector';

register.all('tm-transfer', {
  list: 'grid w-full max-w-[650px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 max-sm:gap-2',
  panel:
    'flex h-[220px] min-w-0 flex-col overflow-hidden rounded-lg border border-[#2c394e] bg-[#0e141e]/75 p-2.5',
  heading:
    '-mx-2.5 -mt-2.5 mb-2.5 box-border flex min-h-10 shrink-0 items-center justify-between gap-3 border-b border-[#2a3548] bg-[#121a27] px-3 text-[10px] font-semibold uppercase leading-none tracking-[.1em] text-[#d4dced]',
  count:
    'inline-flex min-w-6 items-center justify-center rounded-full border border-[#34445f] bg-[#1b2940] px-2 py-1 text-[9px] font-semibold leading-none tabular-nums text-[#c3d2f2]',
  items:
    'm-0 flex min-h-0 min-w-0 flex-1 flex-col gap-1 overflow-y-auto border-0 p-0 [scrollbar-width:thin] [scrollbar-color:#354156_transparent]',
  'select-all':
    'mb-1 flex shrink-0 cursor-pointer items-center gap-2 border-b border-[#252f40] px-2 pb-2 text-[9px] text-[#8997ad]',
  'select-all-disabled': 'cursor-not-allowed opacity-40',
  item: 'flex min-w-0 cursor-pointer items-center gap-2 rounded-md border border-transparent px-2 py-2 text-[10px] text-[#aab6ca] transition-colors hover:bg-[#ffffff07]',
  'item-selected': 'border-[#3a4d70] bg-[#19253a] text-[#d8e3f7] hover:bg-[#202e46]',
  checkbox:
    'relative flex size-4 shrink-0 items-center justify-center rounded-[3px] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#86a6ff]',
  'checkbox-input':
    'absolute inset-0 z-10 m-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed',
  'checkbox-indicator':
    'flex size-3.5 items-center justify-center rounded-[3px] border border-[#53627a] bg-[#101722] text-[#0d1522] transition-[background-color,border-color]',
  'checkbox-checked': '!border-[#91aef5] !bg-[#91aef5]',
  'checkbox-indeterminate': '!border-[#91aef5] !bg-[#91aef5]',
  'checkbox-dash': 'h-0.5 w-1.5 rounded-full bg-[#101722]',
  'checkbox-disabled': 'cursor-not-allowed opacity-40',
  'item-copy': 'flex min-w-0 flex-col gap-1',
  'item-label': 'truncate text-[10px] font-medium',
  'item-description': 'truncate text-[8px] text-[#7e8ba0]',
  'list-empty': 'm-auto py-4 text-center text-[9px] text-[#76849a]',
  actions: 'm-0 flex flex-col gap-1.5 border-0 p-0',
  action:
    'inline-flex size-8 cursor-pointer items-center justify-center rounded-md border border-[#34425a] bg-[#151e2c] p-0 text-[#9eb5e8] transition-[background-color,border-color,color,opacity] hover:border-[#5875ad] hover:bg-[#20304a] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#86a6ff] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[#34425a] disabled:hover:bg-[#151e2c]',
  'action-all': 'text-[#bdc8dc]',
  status: 'col-span-full min-h-4 text-[9px] text-[#8190a6]',
});
