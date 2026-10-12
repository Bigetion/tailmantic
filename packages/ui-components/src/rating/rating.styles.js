import { register } from 'tailmantic/collector';

register('rgi-rating', {
  base: { tw: 'inline-flex items-center gap-1 text-[var(--rating-color,#f4bd7a)]' },
  modifiers: {
    readonly: { tw: 'cursor-default' },
    disabled: { tw: 'cursor-not-allowed opacity-50' },
  },
});

register.group('rgi-rating-choice', {
  root: {
    tw: 'inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0.5 text-2xl leading-none text-[var(--rating-color,#f4bd7a)] transition-[color,transform] hover:scale-110 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--rgi-blue,#547be8)] disabled:cursor-default disabled:hover:scale-100',
  },
  star: { tw: 'text-2xl leading-none text-[#515d70]' },
  'star-selected': { tw: 'text-[var(--rating-color,#f4bd7a)]' },
});

register.group('rgi-rating-precision', {
  root: {
    tw: 'inline-flex cursor-pointer touch-none items-center gap-0.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#86a6ff] disabled:cursor-not-allowed',
  },
  star: { tw: 'relative inline-flex text-2xl leading-none' },
  empty: { tw: 'text-[#515d70]' },
  fill: {
    tw: 'absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap text-[var(--rating-color,#f4bd7a)]',
  },
});

register('rgi-rating-form-value', {
  base: { tw: 'sr-only' },
});
