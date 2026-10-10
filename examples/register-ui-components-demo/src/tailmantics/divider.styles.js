import { register } from 'tailmantic/collector';

register('ui-divider', {
  base: { tw: 'my-1 shrink-0 border-0 border-[var(--border)] text-[var(--muted)]' },
  modifiers: {
    horizontal: { tw: 'w-full border-t' },
    vertical: { tw: 'mx-1 my-0 h-5 w-px shrink-0 bg-[var(--border)]' },
    inset: { tw: 'ml-5' },
    'flex-item': { tw: 'self-stretch' },
    'text-center': {
      tw: 'flex items-center gap-3 before:flex-1 after:flex-1 before:border-t after:border-t',
    },
    'text-left': { tw: 'flex items-center gap-3 after:flex-1 after:border-t' },
    'text-right': { tw: 'flex items-center gap-3 before:flex-1 before:border-t' },
  },
});
register('ui-divider-inset-horizontal', {
  base: { tw: '!w-[calc(100%-1.25rem)]' },
});
register('ui-divider-content', { base: { tw: 'shrink-0 px-1 text-xs' } });
