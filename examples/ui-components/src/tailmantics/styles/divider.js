import { register } from 'tailmantic/collector';

register.all('tm-divider', {
  'example': 'flex w-full max-w-[520px] flex-col gap-3 text-xs text-[var(--muted)]',
  'example-label': 'text-xs font-medium text-[var(--text)]',
  'toolbar': 'flex flex-nowrap items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-2',
  '&toolbar button': 'inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-md border-0 bg-transparent px-1 text-xs font-medium text-[var(--text)] hover:bg-[var(--panel-raised)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--tm-blue)]',
  'list': 'flex w-full max-w-[520px] flex-col rounded-lg border border-[var(--border)] bg-[var(--panel)]',
  'list-item': 'flex min-h-[68px] items-center gap-3 px-4 py-3',
  'list-copy': 'flex min-w-0 flex-col gap-1',
  '&list-item strong': 'text-xs font-medium text-[var(--text)]',
  '&list-item small': 'text-[10px] text-[var(--muted)]',
  'list-icon': 'inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--panel-raised)] text-[var(--muted)]',
});
