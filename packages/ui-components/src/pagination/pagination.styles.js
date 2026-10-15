import { register } from 'tailmantic/collector';

register.all('rgi-pagination', {
  '': 'flex justify-center text-[var(--text,#20242b)]',
  'list': 'm-0 flex list-none items-center gap-1 p-0',
  'button': 'flex size-9 cursor-pointer items-center justify-center rounded border border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] text-sm text-[var(--text,#20242b)] hover:bg-[var(--surface-hover,#f0f2f5)] focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)] disabled:cursor-not-allowed disabled:opacity-45',
  'current': 'border-[var(--accent,#315fc4)] bg-[var(--accent,#315fc4)] text-white',
  'ellipsis': 'flex size-9 items-center justify-center text-[var(--muted,#626a75)]',
});

register.all('rgi-pagination-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-4',
  'heading': 'flex flex-wrap items-center justify-between gap-2 [&_strong]:text-sm [&_strong]:font-semibold [&_span]:text-xs [&_span]:text-[#9ba9bc]',
  '& .rgi-pagination': 'justify-start',
  '& .rgi-pagination-list': 'flex-wrap gap-1.5',
  '& .rgi-pagination-button': '!size-9 !rounded-lg !border-transparent !bg-transparent !text-sm !font-medium !text-[#aeb9c9] hover:!bg-white/5 hover:!text-white focus-visible:!outline-[#8baeff] disabled:!opacity-40',
  '& .rgi-pagination-button.rgi-pagination-current': '!border-transparent !bg-[#263954] !text-[#d2e0ff] hover:!bg-[#263954] hover:!text-white',
  'status': 'text-xs text-[#9ba9bc]',
  'table-card': 'flex w-full flex-col gap-4 rounded-xl border border-[#293548] bg-[#111925] p-4',
  'table-header': 'flex flex-wrap items-end justify-between gap-3',
  'size-control': 'inline-flex items-center gap-2 text-xs text-[#9ba9bc]',
  '&size-control select': 'h-9 cursor-pointer rounded-lg border border-[#354154] bg-[#171f2c] px-3 text-xs text-[#d3dceb] focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  'table-wrap': 'w-full overflow-x-auto rounded-lg border border-[#303a49] bg-[#0d121b]',
  'table': 'w-full border-collapse text-left text-xs [&_th]:whitespace-nowrap [&_th]:border-b [&_th]:border-[#303a49] [&_th]:px-3 [&_th]:py-3 [&_th]:font-medium [&_th]:text-[#9ba9bc] [&_td]:whitespace-nowrap [&_td]:border-b [&_td]:border-[#28313f] [&_td]:px-3 [&_td]:py-3 [&_tbody_tr:last-child_td]:border-0 [&_td]:text-[#c5cfdf]',
  '&table td:first-child': '[&_strong]:block [&_strong]:font-medium [&_strong]:text-[#e4ebf5] [&_small]:mt-1 [&_small]:block [&_small]:text-[10px] [&_small]:text-[#9ba9bc]',
  'status-pill': 'inline-flex rounded-full bg-[#2d3540] px-2.5 py-1 text-[10px] text-[#c0cad8]',
  'status-pill-in-progress': 'bg-[#4a3a24] text-[#e8c47d]',
  'status-pill-in-review': 'bg-[#263954] text-[#b8d0ff]',
  'status-pill-complete': 'bg-[#203b32] text-[#9edab7]',
  'table-footer': 'flex flex-wrap items-center justify-between gap-3',
  '&outlined .rgi-pagination-button:not(.rgi-pagination-current)': '!border-[#354154] !bg-[#171f2c] hover:!border-[#536985] hover:!bg-[#202b3a]',
  '&outlined .rgi-pagination-button.rgi-pagination-current[aria-current="page"]': '!border-[#789fe8] !bg-[#263954] !text-[#d2e0ff] hover:!border-[#789fe8] hover:!bg-[#263954]',
  '&outlined .rgi-pagination-button:disabled': '!border-[#2d3643] !bg-[#141a23]',
});

register.all('component-showcase-pagination', {
  '& .demo-content': 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
});
