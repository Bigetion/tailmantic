import { register } from 'tailmantic/collector';

register.all('tm-text-field', {
  '': 'flex w-full min-w-0 flex-col gap-1.5',
  label: 'text-xs font-medium text-[var(--text,#edf2fb)]',
  control:
    'box-border h-10 w-full min-w-0 rounded-md border border-[var(--border,#354158)] bg-[var(--panel,#111722)] px-3 text-sm text-[var(--text,#edf2fb)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--text-subtle,#8996aa)] hover:border-[var(--text-muted,#71809a)] focus:border-[var(--tm-blue,#86a6ff)] focus:ring-2 focus:ring-[var(--tm-blue-soft,rgba(134,166,255,.2))] disabled:cursor-not-allowed disabled:opacity-50',
  shell: 'relative flex w-full min-w-0 items-center',
  'control-leading': 'pl-9',
  'control-trailing': 'pr-9',
  'adornment-start':
    'pointer-events-none absolute left-3 z-[1] inline-flex items-center text-[var(--text-subtle,#8996aa)]',
  'adornment-end': 'absolute right-1.5 z-[1] inline-flex items-center',
  clear:
    'inline-flex size-7 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent p-0 text-[var(--text-subtle,#8996aa)] transition-colors hover:bg-white/5 hover:text-[var(--text,#edf2fb)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--tm-blue,#86a6ff)]',
  error:
    '!border-[var(--danger,#dc737b)] focus:!border-[var(--danger,#dc737b)] focus:!ring-[var(--danger-soft,rgba(220,115,123,.2))]',
  message: 'text-[11px] text-[var(--text-subtle,#8996aa)]',
  'message-error': '!text-[var(--danger,#dc737b)]',
});
