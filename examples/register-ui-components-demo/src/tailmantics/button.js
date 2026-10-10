import { register } from 'tailmantic/collector';

register('demo-button', {
  base: {
    tw: 'inline-flex cursor-pointer select-none items-center justify-center gap-2 rounded border border-transparent font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rgi-blue)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40',
  },
  modifiers: {
    contained: { tw: 'bg-[var(--rgi-blue-dark)] text-white hover:bg-[#6689ed]' },
    outlined: {
      tw: 'border-[#607db9] bg-transparent text-[var(--rgi-blue)] hover:bg-[var(--rgi-blue-soft)]',
    },
    text: { tw: 'bg-transparent text-[var(--rgi-blue)] hover:bg-[var(--rgi-blue-soft)]' },
    small: { tw: 'h-8 px-3 text-[11px]' },
    medium: { tw: 'h-9 px-4 text-[13px]' },
    large: { tw: 'h-11 px-5 text-sm' },
  },
});
