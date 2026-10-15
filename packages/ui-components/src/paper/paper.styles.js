import { register } from 'tailmantic/collector';

register.all('tm-paper', {
  '': 'bg-[var(--panel,#111824)] text-[var(--text,#edf2fb)]',
  'elevation-0': 'shadow-none',
  'elevation-1': 'shadow-[0_2px_8px_rgba(0,0,0,.16)]',
  'elevation-2': 'shadow-[0_5px_16px_rgba(0,0,0,.2)]',
  'elevation-3': 'shadow-[0_10px_28px_rgba(0,0,0,.25)]',
  'elevation-4': 'shadow-[0_16px_40px_rgba(0,0,0,.28)]',
  'elevation-5': 'shadow-[0_22px_56px_rgba(0,0,0,.32)]',
  square: 'rounded-none',
});
