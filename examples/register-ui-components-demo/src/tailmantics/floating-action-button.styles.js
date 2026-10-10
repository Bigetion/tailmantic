import { register } from 'tailmantic/collector';

register('ui-floating-action-button', {
  base: {
    tw: 'inline-flex size-14 shrink-0 cursor-pointer select-none items-center justify-center gap-2 rounded-full border border-transparent bg-[#547be8] p-0 text-white shadow-[0_5px_16px_rgba(0,0,0,.38),0_2px_5px_rgba(84,123,232,.28)] transition-[background-color,box-shadow,transform] duration-150 hover:bg-[#6689ed] hover:shadow-[0_8px_22px_rgba(0,0,0,.42),0_3px_8px_rgba(84,123,232,.32)] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page)] focus-visible:ring-[#9bbcff] disabled:cursor-not-allowed disabled:opacity-45',
  },
  modifiers: {
    primary: { tw: '' },
    secondary: {
      tw: 'border-[#354158] bg-[#171e2a] text-[#b9ccff] shadow-[0_4px_12px_rgba(0,0,0,.28)] hover:bg-[#222d40] hover:shadow-[0_7px_18px_rgba(0,0,0,.36)]',
    },
    extended: { tw: '!h-12 !w-auto min-w-14 rounded-2xl px-5 text-xs font-semibold' },
    small: { tw: '!size-10' },
    large: { tw: '!size-16' },
  },
});
