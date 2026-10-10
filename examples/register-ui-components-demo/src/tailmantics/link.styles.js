import { register } from 'tailmantic/collector';

register('ui-link', {
  base: {
    tw: 'font-medium text-[var(--rgi-blue)] underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]',
  },
  modifiers: { hover: { tw: 'no-underline hover:underline' } },
});
register('ui-link-disabled', {
  base: { tw: 'cursor-not-allowed text-[var(--muted)] no-underline opacity-55' },
});
