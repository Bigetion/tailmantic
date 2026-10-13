import { register } from 'tailmantic/collector';

register('rgi-divider', {
  base: { tw: 'm-0 shrink-0 border-0 border-[var(--border,#273142)] text-[var(--muted,#9aa8bd)]' },
  modifiers: {
    horizontal: { tw: 'w-full border-t' },
    vertical: { tw: 'inline-block h-6 w-0 self-stretch border-l align-middle' },
    inset: { tw: '!ml-[60px] !w-[calc(100%_-_60px)]' },
    'flex-item': { tw: 'self-stretch' },
    'text-center': {
      tw: 'flex items-center gap-3 before:flex-1 after:flex-1 before:border-t after:border-t',
    },
    'text-left': { tw: 'flex items-center gap-3 after:flex-1 after:border-t' },
    'text-right': { tw: 'flex items-center gap-3 before:flex-1 before:border-t' },
  },
});

register('rgi-divider-content', {
  base: { tw: 'shrink-0 px-1 text-xs' },
});

register('rgi-divider-example', {
  base: { tw: 'flex w-full max-w-[520px] flex-col gap-3 text-xs text-[var(--muted)]' },
});

register('rgi-divider-example-label', {
  base: { tw: 'text-xs font-medium text-[var(--text)]' },
});

register('rgi-divider-toolbar', {
  base: {
    tw: 'flex flex-nowrap items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-2',
  },
});

register('rgi-divider-toolbar button', {
  base: {
    tw: 'inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-md border-0 bg-transparent px-1 text-xs font-medium text-[var(--text)] hover:bg-[var(--panel-raised)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--rgi-blue)]',
  },
});

register('rgi-divider-list', {
  base: {
    tw: 'flex w-full max-w-[520px] flex-col rounded-lg border border-[var(--border)] bg-[var(--panel)]',
  },
});

register('rgi-divider-list-item', {
  base: { tw: 'flex min-h-[68px] items-center gap-3 px-4 py-3' },
});

register('rgi-divider-list-copy', {
  base: { tw: 'flex min-w-0 flex-col gap-1' },
});

register('rgi-divider-list-item strong', {
  base: { tw: 'text-xs font-medium text-[var(--text)]' },
});

register('rgi-divider-list-item small', {
  base: { tw: 'text-[10px] text-[var(--muted)]' },
});

register('rgi-divider-list-icon', {
  base: {
    tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--panel-raised)] text-[var(--muted)]',
  },
});
