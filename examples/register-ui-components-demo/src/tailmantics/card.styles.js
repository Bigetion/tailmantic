import { register } from 'tailmantic/collector';

register('ui-card', {
  base: {
    tw: 'flex flex-col gap-3 overflow-hidden rounded-xl bg-[var(--panel)] p-5 text-[var(--text)]',
  },
  modifiers: {
    elevated: { tw: 'border border-[var(--border)] shadow-[0_2px_8px_rgba(0,0,0,.16)]' },
    outlined: { tw: 'border border-[#354257] shadow-none' },
    flat: { tw: 'border border-transparent shadow-none' },
    'elevation-0': { tw: 'shadow-none' },
    'elevation-1': { tw: 'shadow-[0_2px_8px_rgba(0,0,0,.16)]' },
    'elevation-2': { tw: 'shadow-[0_5px_16px_rgba(0,0,0,.2)]' },
    'elevation-3': { tw: 'shadow-[0_10px_28px_rgba(0,0,0,.25)]' },
    interactive: {
      tw: 'transition-[border-color,box-shadow,transform] duration-150 hover:-translate-y-px hover:border-[var(--rgi-blue)] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--rgi-blue)]',
    },
  },
});
