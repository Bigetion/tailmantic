import { register } from 'tailmantic/collector';

register.all({
  'demo-rating': {
    tw: 'm-0 flex items-center gap-1 border-0 p-0',
  },
  'demo-rating-star': {
    tw: 'cursor-pointer border-0 bg-transparent p-1 text-[var(--border)] transition-colors hover:text-[#f4bd50]',
  },
  'demo-rating-star-active': {
    tw: 'text-[#f4bd50]',
  },
  'demo-rating-value': {
    tw: 'ml-2 text-xs font-medium text-[var(--text-muted)]',
  },
  'demo-rating-gradient': { tw: 'absolute size-0 overflow-hidden' },
  'demo-rating-precision': {
    tw: 'flex w-full max-w-[300px] flex-col gap-2 text-xs text-[var(--text-muted)]',
  },
  'demo-rating-precision input': { tw: 'accent-[#f4bd50]' },
  'demo-rating-readonly': { tw: 'flex items-center gap-2 text-xs text-[var(--text-muted)]' },
  'demo-rating-star:disabled': { tw: 'cursor-default opacity-80' },
  'demo-rating-static': {
    tw: 'flex items-center gap-1 text-[#f4bd50] [&>span]:ml-1 [&>span]:text-xs [&>span]:text-[var(--text-muted)]',
  },
});
