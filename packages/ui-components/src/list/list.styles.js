import { register } from 'tailmantic/collector';

register.all('tm-list', {
  '': 'm-0 flex list-none flex-col p-2 text-[var(--text,#edf2fb)]',
  dense: 'py-1',
  'no-padding': 'p-0',
});

register.all('tm-list-item', {
  '': 'flex min-h-12 items-center gap-3 px-4 py-2 text-sm',
  divider: 'border-b border-[var(--border,#273142)] last:border-b-0',
  'no-gutters': 'px-0',
});

register.all('tm-list', {
  'item-text': 'flex min-w-0 flex-col gap-1',
  primary: 'font-medium',
  secondary: 'text-xs text-[var(--muted,#9aa8bd)]',
});
