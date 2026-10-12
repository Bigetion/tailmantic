import { register } from 'tailmantic/collector';

register('rgi-text-field', {
  base: { tw: 'flex w-full min-w-0 flex-col gap-1.5' },
});

register('rgi-text-field-label', {
  base: { tw: 'text-xs font-medium text-[var(--text,#edf2fb)]' },
});

register('rgi-text-field-control', {
  base: {
    tw: 'h-10 w-full min-w-0 rounded-md border border-[var(--border,#354158)] bg-[var(--panel,#111722)] px-3 text-sm text-[var(--text,#edf2fb)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--text-subtle,#8996aa)] hover:border-[var(--text-muted,#71809a)] focus:border-[var(--rgi-blue,#86a6ff)] focus:ring-2 focus:ring-[var(--rgi-blue-soft,rgba(134,166,255,.2))] disabled:cursor-not-allowed disabled:opacity-50',
  },
});

register('rgi-text-field-shell', {
  base: { tw: 'relative flex w-full min-w-0 items-center' },
});

register('rgi-text-field-control-leading', {
  base: { tw: 'pl-9' },
});

register('rgi-text-field-control-trailing', {
  base: { tw: 'pr-9' },
});

register('rgi-text-field-adornment-start', {
  base: {
    tw: 'pointer-events-none absolute left-3 z-[1] inline-flex items-center text-[var(--text-subtle,#8996aa)]',
  },
});

register('rgi-text-field-adornment-end', {
  base: {
    tw: 'absolute right-1.5 z-[1] inline-flex items-center',
  },
});

register('rgi-text-field-clear', {
  base: {
    tw: 'inline-flex size-7 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent p-0 text-[var(--text-subtle,#8996aa)] transition-colors hover:bg-white/5 hover:text-[var(--text,#edf2fb)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--rgi-blue,#86a6ff)]',
  },
});

register('rgi-text-field-error', {
  base: {
    tw: '!border-[var(--danger,#dc737b)] focus:!border-[var(--danger,#dc737b)] focus:!ring-[var(--danger-soft,rgba(220,115,123,.2))]',
  },
});

register('rgi-text-field-message', {
  base: { tw: 'text-[11px] text-[var(--text-subtle,#8996aa)]' },
});

register('rgi-text-field-message-error', {
  base: { tw: '!text-[var(--danger,#dc737b)]' },
});
