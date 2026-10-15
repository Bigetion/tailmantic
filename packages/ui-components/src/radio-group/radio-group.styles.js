import { register } from 'tailmantic/collector';

register.all('tm-radio-group', {
  '': 'm-0 flex min-w-0 flex-col gap-2 border-0 p-0 text-[var(--text,#edf2fb)]',
  horizontal: 'flex-row flex-wrap items-start gap-x-5 gap-y-2',
  vertical: '',
});

register.all('tm-radio-option', {
  '': 'relative inline-flex cursor-pointer items-start gap-2.5 text-sm text-[var(--text,#edf2fb)]',
  disabled: 'cursor-not-allowed opacity-50',
  input:
    'absolute left-0 top-0 z-10 size-[18px] cursor-pointer opacity-0 disabled:cursor-not-allowed',
  indicator:
    'mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full border border-[var(--border,#64748b)] bg-[var(--surface,#111827)] transition-[border-color,box-shadow] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--tm-blue,#547be8)]',
  'indicator-checked': 'border-[var(--tm-blue,#547be8)]',
  dot: 'size-2.5 scale-0 rounded-full bg-[var(--tm-blue,#547be8)] transition-transform',
  'dot-visible': 'scale-100',
  copy: 'flex flex-col gap-0.5',
  label: 'font-medium',
  description: 'text-xs text-[var(--muted,#94a3b8)]',
});

register.all('tm-radio-group-legend', {
  '': 'mb-2 text-sm font-semibold text-[var(--text,#edf2fb)]',
});
