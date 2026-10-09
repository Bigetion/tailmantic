import { register } from 'tailmantic/collector';

register('rgi-link', {
  base: {
    tw: 'cursor-pointer text-[var(--accent,#315fc4)] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent,#315fc4)]',
  },
  modifiers: {
    'underline-always': { tw: 'underline' },
    'underline-hover': { tw: 'no-underline hover:underline' },
    'underline-none': { tw: 'no-underline' },
    'color-inherit': { tw: 'text-inherit' },
    'color-secondary': { tw: 'text-[var(--muted,#626a75)]' },
    underlined: { tw: 'underline' },
    subtle: { tw: 'text-[#bac5d4] hover:text-white' },
    external: { tw: 'text-[#87d4c2]' },
    disabled: { tw: 'cursor-not-allowed text-[#6f7b8d] no-underline hover:text-[#6f7b8d] hover:no-underline' },
  },
});
