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

register('rgi-table th', {
  base: {
    tw: 'border-b border-[var(--border,#273142)] bg-[var(--rgi-table-head,var(--surface,#101722))] font-semibold text-[var(--muted,#9aa8bd)]',
  },
});

register('rgi-table td', {
  base: { tw: 'border-b border-[var(--border,#273142)] align-middle' },
});

register('rgi-table caption', {
  base: { tw: 'pb-3 text-left font-medium text-[var(--text,#edf2fb)]' },
});

register('rgi-table-example-wrap', {
  base: { tw: 'w-full overflow-x-auto rounded-lg border border-[var(--border)]' },
});

register('rgi-table-example', {
  base: { tw: 'min-w-[760px] !text-left !text-[10px] [&_th]:!px-3 [&_th]:!py-2.5 [&_th]:!font-medium [&_th]:!text-[var(--subtle)] [&_td]:!px-3 [&_td]:!py-3 [&_td]:!text-[var(--muted)] [&_tbody_tr:last-child_td]:!border-b-0' },
});

register('rgi-table-example th', {
  base: { tw: '!bg-[var(--panel)]' },
});

register('rgi-table-example.rgi-table-example-dense td', {
  base: { tw: '!py-2' },
});

register('rgi-table-example-toolbar', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-2' },
});

register('rgi-table-example-result-count', {
  base: { tw: 'text-[11px] font-medium text-[var(--text)]' },
});

register('rgi-table-example-toolbar-button', {
  base: { tw: 'inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 text-[9px] font-medium text-[var(--muted)] hover:bg-[var(--panel-raised)] hover:text-[var(--text)] disabled:cursor-not-allowed disabled:opacity-50' },
});

register('rgi-table-example-sort-button', {
  base: { tw: 'inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-[9px] font-medium text-[var(--subtle)] hover:text-[var(--text)] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]' },
});

register('rgi-table-example-sort-button-active', {
  base: { tw: 'text-[#b8cbff]' },
});

register('rgi-table-example-check-cell', {
  base: { tw: 'w-9 !px-3' },
});

register('rgi-table-example-checkbox', {
  base: { tw: 'size-3.5 cursor-pointer accent-[#789df5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789df5]' },
});

register('rgi-table-example-project', {
  base: { tw: 'flex min-w-[150px] flex-col gap-1' },
});

register('rgi-table-example-project strong', {
  base: { tw: 'text-[10px] font-medium text-[var(--text)]' },
});

register('rgi-table-example-project small', {
  base: { tw: 'font-mono text-[8px] text-[var(--subtle)]' },
});

register('rgi-table-example-owner', {
  base: { tw: 'inline-flex min-w-[125px] items-center gap-2 whitespace-nowrap text-[9px]' },
});

register('rgi-table-example-avatar', {
  base: { tw: 'inline-flex size-6 shrink-0 items-center justify-center rounded-full text-[8px] font-semibold' },
});

register('rgi-table-example-avatar-blue', {
  base: { tw: 'bg-[#243e68] text-[#c7d8ff]' },
});

register('rgi-table-example-avatar-violet', {
  base: { tw: 'bg-[#3c315f] text-[#ddd2ff]' },
});

register('rgi-table-example-avatar-green', {
  base: { tw: 'bg-[#214b3f] text-[#c5f0dd]' },
});

register('rgi-table-example-avatar-amber', {
  base: { tw: 'bg-[#594126] text-[#ffe0ae]' },
});

register('rgi-table-example-status', {
  base: { tw: 'inline-flex whitespace-nowrap rounded-full bg-[#1b5e20]/30 px-2 py-1 text-[8px] font-medium text-[#81c784]' },
});

register('rgi-table-example-status-review', {
  base: { tw: 'bg-[#463461] text-[#d6b8ff]' },
});

register('rgi-table-example-status-in-progress', {
  base: { tw: 'bg-[#203b68] text-[#a9c4ff]' },
});

register('rgi-table-example-status-planned', {
  base: { tw: 'bg-[#394557] text-[#c0cad8]' },
});

register('rgi-table-example-progress-heading', {
  base: { tw: 'w-[100px]' },
});

register('rgi-table-example-progress-cell', {
  base: { tw: 'min-w-[100px]' },
});

register('rgi-table-example-progress-value', {
  base: { tw: 'mb-1 block font-mono text-[8px] text-[var(--subtle)]' },
});

register('rgi-table-example-progress-track', {
  base: { tw: 'block h-1 w-full overflow-hidden rounded-full bg-[#283244]' },
});

register('rgi-table-example-progress-track i', {
  base: { tw: 'block h-full rounded-full bg-[#668bef]' },
});

register('rgi-table-example-row-selected', {
  base: { tw: 'bg-[#19253a] [&_td]:!border-[#293955]' },
});

register('rgi-table-example-footer', {
  base: { tw: 'flex items-center justify-between gap-2 text-[9px] text-[var(--subtle)]' },
});

register('rgi-table-example-export-button', {
  base: { tw: 'inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border)] bg-transparent px-2 text-[9px] font-medium text-[var(--muted)] hover:bg-[var(--panel-raised)] hover:text-[var(--text)]' },
});
