import { register } from 'tailmantic/collector';

register('rgi-text-field', {
  base: { tw: 'flex min-w-0 flex-col gap-1.5' },
});

register('rgi-text-field-label', {
  base: { tw: 'text-xs font-medium text-[var(--text,#edf2fb)]' },
});

register('rgi-text-field-control', {
  base: {
    tw: 'h-10 w-full min-w-0 rounded-md border border-[var(--border,#354158)] bg-[var(--panel,#111722)] px-3 text-sm text-[var(--text,#edf2fb)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--text-subtle,#8996aa)] hover:border-[var(--text-muted,#71809a)] focus:border-[var(--rgi-blue,#86a6ff)] focus:ring-2 focus:ring-[var(--rgi-blue-soft,rgba(134,166,255,.2))] disabled:cursor-not-allowed disabled:opacity-50',
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

register('rgi-input', {
  base: {
    tw: 'h-10 w-full rounded border border-[#626a75] bg-transparent px-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--subtle)] hover:border-[var(--text)] focus:border-2 focus:border-[var(--rgi-blue)]',
  },
  modifiers: {
    wrap: { tw: 'flex w-[260px] flex-col gap-1.5' },
    filled: { tw: 'rounded-t border-0 border-b-2 border-[#626a75] bg-[#25282d] focus:border-[var(--rgi-blue)]' },
  },
});

register('rgi-label', {
  base: { tw: 'text-xs text-[var(--muted)]' },
});
