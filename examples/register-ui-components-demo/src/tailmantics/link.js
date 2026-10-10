import { register } from 'tailmantic/collector';

register('demo-link', {
  base: {
    tw: 'font-medium text-[var(--rgi-blue)] underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]',
  },
  modifiers: { hover: { tw: 'no-underline hover:underline' } },
});
register('demo-link-disabled', {
  base: { tw: 'cursor-not-allowed text-[var(--muted)] no-underline opacity-55' },
});
