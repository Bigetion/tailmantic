import { register } from 'tailmantic/collector';

register.all('tm-card', {
  '': 'overflow-hidden rounded-xl bg-[var(--panel,#111824)] text-[var(--text,#edf2fb)]',
  elevated: 'border border-[var(--border,#273142)]',
  outlined: 'border border-[var(--border,#354257)] shadow-none',
  flat: 'border border-transparent shadow-none',
  'elevation-0': 'shadow-none',
  'elevation-1': 'shadow-[0_2px_8px_rgba(0,0,0,.16)]',
  'elevation-2': 'shadow-[0_5px_16px_rgba(0,0,0,.2)]',
  'elevation-3': 'shadow-[0_10px_28px_rgba(0,0,0,.25)]',
  interactive:
    'transition-[border-color,box-shadow,transform] duration-150 hover:-translate-y-px hover:border-[var(--tm-blue,#9bbcff)] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--tm-blue,#9bbcff)]',
});
