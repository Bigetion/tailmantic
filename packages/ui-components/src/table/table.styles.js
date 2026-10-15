import { register } from 'tailmantic/collector';

register('rgi-table', {
  base: { tw: 'w-full border-collapse text-left text-sm text-[var(--text,#edf2fb)]' },
  modifiers: {
    standard: { tw: '[&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3' },
    dense: { tw: '[&_th]:px-3 [&_th]:py-2 [&_td]:px-3 [&_td]:py-2 text-xs' },
    hoverable: { tw: '[&_tbody_tr:hover]:bg-[var(--rgi-table-hover,var(--panel-raised,#171e2a))]' },
    'sticky-header': { tw: '[&_thead_th]:sticky [&_thead_th]:top-0 [&_thead_th]:z-[1]' },
    striped: {
      tw: '[&_tbody_tr:nth-child(even)]:bg-[var(--rgi-table-stripe,rgba(127,145,170,.06))]',
    },
  },
});

register.all('rgi-table', {
  '& th': 'border-b border-[var(--border,#273142)] bg-[var(--rgi-table-head,var(--surface,#101722))] font-semibold text-[var(--muted,#9aa8bd)]',
  '& td': 'border-b border-[var(--border,#273142)] align-middle',
  '& caption': 'pb-3 text-left font-medium text-[var(--text,#edf2fb)]',
});

register.all('rgi-table-example', {
  'wrap': 'w-full overflow-auto overscroll-contain rounded-lg border border-[var(--border)] [scrollbar-width:thin] [scrollbar-color:#354156_#111824] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#111824] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#354156] [&::-webkit-scrollbar-thumb:hover]:bg-[#52627c]',
  '': 'min-w-[760px] !text-left !text-[10px] [&_th]:!px-3 [&_th]:!py-2.5 [&_th]:!font-medium [&_th]:!text-[var(--subtle)] [&_td]:!px-3 [&_td]:!py-3 [&_td]:!text-[var(--muted)] [&_tbody_tr:last-child_td]:!border-b-0',
  '& th': '!bg-[var(--panel)]',
  '&.rgi-table-example-dense td': '!py-2',
  'toolbar': 'flex flex-wrap items-center justify-between gap-2',
  'result-count': 'text-[11px] font-medium text-[var(--text)]',
  'toolbar-button': 'inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 text-[9px] font-medium text-[var(--muted)] hover:bg-[var(--panel-raised)] hover:text-[var(--text)] disabled:cursor-not-allowed disabled:opacity-50',
  'sort-button': 'inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-[9px] font-medium text-[var(--subtle)] hover:text-[var(--text)] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]',
  'sort-button-active': 'text-[#b8cbff]',
  'check-cell': 'w-9 !px-3',
  'project': 'flex min-w-[150px] flex-col gap-1',
  '&project strong': 'text-[10px] font-medium text-[var(--text)]',
  '&project small': 'font-mono text-[8px] text-[var(--subtle)]',
  'owner': 'inline-flex min-w-[125px] items-center gap-2 whitespace-nowrap text-[9px]',
  'avatar': 'inline-flex size-6 shrink-0 items-center justify-center rounded-full text-[8px] font-semibold',
  'avatar-blue': 'bg-[#243e68] text-[#c7d8ff]',
  'avatar-violet': 'bg-[#3c315f] text-[#ddd2ff]',
  'avatar-green': 'bg-[#214b3f] text-[#c5f0dd]',
  'avatar-amber': 'bg-[#594126] text-[#ffe0ae]',
  'status': 'inline-flex whitespace-nowrap rounded-full bg-[#1b5e20]/30 px-2 py-1 text-[8px] font-medium text-[#81c784]',
  'status-review': 'bg-[#463461] text-[#d6b8ff]',
  'status-in-progress': 'bg-[#203b68] text-[#a9c4ff]',
  'status-planned': 'bg-[#394557] text-[#c0cad8]',
  'progress-heading': 'w-[100px]',
  'progress-cell': 'min-w-[100px]',
  'progress-value': 'mb-1 block font-mono text-[8px] text-[var(--subtle)]',
  'progress-track': 'block h-1 w-full overflow-hidden rounded-full bg-[#283244]',
  '&progress-track i': 'block h-full rounded-full bg-[#668bef]',
  'row-selected': 'bg-[#19253a] [&_td]:!border-[#293955]',
  'footer': 'flex items-center justify-between gap-2 text-[9px] text-[var(--subtle)]',
  'export-button': 'inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border)] bg-transparent px-2 text-[9px] font-medium text-[var(--muted)] hover:bg-[var(--panel-raised)] hover:text-[var(--text)]',
});
