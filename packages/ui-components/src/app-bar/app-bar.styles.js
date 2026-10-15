import { register } from 'tailmantic/collector';

register.all('tm-app-bar', {
  '': 'z-10 flex min-h-14 w-full items-center gap-4 border-b border-[var(--border,#273142)] bg-[var(--panel,#111824)] px-4 py-2 text-[var(--text,#edf2fb)]',
  static: 'relative',
  sticky: 'sticky top-0',
  fixed: 'fixed inset-x-0 top-0',
  'elevation-0': 'shadow-none',
  'elevation-1': 'shadow-[0_2px_6px_rgba(0,0,0,.16)]',
  'elevation-2': 'shadow-[0_4px_12px_rgba(0,0,0,.2)]',
  'elevation-3': 'shadow-[0_8px_24px_rgba(0,0,0,.24)]',
});
