import { register } from 'tailmantic/collector';

register('demo-button', {
  base: {
    tw: 'inline-flex h-9 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded border border-transparent px-4 text-[13px] font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rgi-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page)] enabled:active:translate-y-px disabled:cursor-not-allowed disabled:opacity-40',
  },
  modifiers: {
    contained: {
      tw: 'bg-[var(--rgi-blue-dark)] text-white shadow-[0_2px_4px_rgba(72,111,216,.24)] enabled:hover:bg-[#6689ed] enabled:hover:shadow-[0_4px_12px_rgba(72,111,216,.3)]',
    },
    outlined: {
      tw: '!border-[#607db9] bg-transparent text-[var(--rgi-blue)] enabled:hover:!border-[var(--rgi-blue)] enabled:hover:bg-[var(--rgi-blue-soft)]',
    },
    text: {
      tw: 'bg-transparent text-[var(--rgi-blue)] enabled:hover:bg-[var(--rgi-blue-soft)]',
    },
    small: { tw: '!h-8 gap-1.5 !px-3 !text-[11px]' },
    large: { tw: 'h-11 gap-2.5 px-5 text-sm' },
    'color-success': {
      tw: '!bg-[#276b53] text-white !shadow-[0_2px_4px_rgba(39,107,83,.22)] enabled:hover:!bg-[#328468]',
    },
    'color-warning': {
      tw: '!bg-[#a75c1b] text-white !shadow-[0_2px_4px_rgba(167,92,27,.2)] enabled:hover:!bg-[#c5752a]',
    },
    'color-danger': {
      tw: '!bg-[#a94650] text-white !shadow-[0_2px_4px_rgba(169,70,80,.2)] enabled:hover:!bg-[#c45b66]',
    },
  },
});

register.group('demo-button-example', {
  section: { tw: 'flex w-full flex-col gap-3' },
  label: { tw: 'text-[9px] font-semibold uppercase tracking-[.14em] text-[var(--muted)]' },
  'icon-only': {
    tw: '!size-9 !p-0',
  },
  status: { tw: 'text-[11px] text-[var(--muted)]' },
});

register('demo-button-spinner', {
  base: { tw: 'animate-spin' },
});
