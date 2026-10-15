import { register } from 'tailmantic/collector';

register.all('tm-link', {
  '': 'cursor-pointer text-[var(--accent,#315fc4)] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent,#315fc4)]',
  'underline-always': 'underline',
  'underline-hover': 'no-underline hover:underline',
  'underline-none': 'no-underline',
  'color-inherit': 'text-inherit',
  'color-secondary': 'text-[var(--muted,#626a75)]',
});
