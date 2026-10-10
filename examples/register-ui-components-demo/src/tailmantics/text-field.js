import { register } from 'tailmantic/collector';

register.group('demo-field', {
  root: { tw: 'flex w-full max-w-[420px] flex-col gap-1.5' },
  label: { tw: 'text-xs font-medium text-[var(--text)]' },
  input: {
    tw: 'h-10 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--subtle)] focus:border-[var(--rgi-blue)] focus:ring-2 focus:ring-[var(--rgi-blue-soft)] disabled:cursor-not-allowed disabled:opacity-50',
  },
  message: { tw: 'text-xs text-[var(--muted)]' },
});
register('demo-field-input-error', { base: { tw: 'border-[#794248] focus:border-[#ff858e]' } });
register.all({
  'demo-field-control': {
    tw: 'flex min-h-10 items-center rounded-md border border-[var(--border)] bg-[var(--surface)] focus-within:border-[var(--rgi-blue)] focus-within:ring-2 focus-within:ring-[var(--rgi-blue-soft)]',
  },
  'demo-field-control .demo-field-input': {
    tw: 'min-w-0 flex-1 border-0 bg-transparent focus:border-0 focus:ring-0',
  },
  'demo-field-adornment': {
    tw: 'inline-flex shrink-0 items-center px-3 text-xs text-[var(--muted)]',
  },
  'demo-field-clear': {
    tw: 'mr-2 inline-flex cursor-pointer border-0 bg-transparent p-1 text-[var(--muted)] hover:text-[var(--text)]',
  },
});
