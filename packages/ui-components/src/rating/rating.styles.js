import { register } from 'tailmantic/collector';

register.all('tm-rating', {
  '': 'inline-flex items-center gap-1 text-[var(--rating-color,#f4bd7a)]',
  readonly: 'cursor-default',
  disabled: 'cursor-not-allowed opacity-50',
});

register.all('tm-rating-choice', {
  '': 'inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0.5 text-2xl leading-none text-[var(--rating-color,#f4bd7a)] transition-[color,transform] hover:scale-110 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--tm-blue,#547be8)] disabled:cursor-default disabled:hover:scale-100',
  star: 'text-2xl leading-none text-[#515d70]',
  'star-selected': 'text-[var(--rating-color,#f4bd7a)]',
});

register.all('tm-rating-precision', {
  '': 'inline-flex cursor-pointer touch-none items-center gap-0.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#86a6ff] disabled:cursor-not-allowed',
  star: 'relative inline-flex text-2xl leading-none',
  empty: 'text-[#515d70]',
  fill: 'absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap text-[var(--rating-color,#f4bd7a)]',
});

register.all('tm-rating-form-value', {
  '': 'sr-only',
});
