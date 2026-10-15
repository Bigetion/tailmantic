import { register } from 'tailmantic/collector';

register.all('tm-divider', {
  '': 'm-0 shrink-0 border-0 border-[var(--border,#273142)] text-[var(--muted,#9aa8bd)]',
  horizontal: 'w-full border-t',
  vertical: 'inline-block h-6 w-0 self-stretch border-l align-middle',
  inset: '!ml-[60px] !w-[calc(100%_-_60px)]',
  'flex-item': 'self-stretch',
  'text-center':
    'flex items-center gap-3 before:flex-1 after:flex-1 before:border-t after:border-t',
  'text-left': 'flex items-center gap-3 after:flex-1 after:border-t',
  'text-right': 'flex items-center gap-3 before:flex-1 before:border-t',
});

register.all('tm-divider', {
  content: 'shrink-0 px-1 text-xs',
});
