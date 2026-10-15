import { register } from 'tailmantic/collector';

register.all('tm-table', {
  '': 'w-full border-collapse text-left text-sm text-[var(--text,#edf2fb)]',
  standard: '[&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3',
  dense: '[&_th]:px-3 [&_th]:py-2 [&_td]:px-3 [&_td]:py-2 text-xs',
  hoverable: '[&_tbody_tr:hover]:bg-[var(--tm-table-hover,var(--panel-raised,#171e2a))]',
  'sticky-header': '[&_thead_th]:sticky [&_thead_th]:top-0 [&_thead_th]:z-[1]',
  striped: '[&_tbody_tr:nth-child(even)]:bg-[var(--tm-table-stripe,rgba(127,145,170,.06))]',
});

register.all('tm-table', {
  '& th':
    'border-b border-[var(--border,#273142)] bg-[var(--tm-table-head,var(--surface,#101722))] font-semibold text-[var(--muted,#9aa8bd)]',
  '& td': 'border-b border-[var(--border,#273142)] align-middle',
  '& caption': 'pb-3 text-left font-medium text-[var(--text,#edf2fb)]',
});
