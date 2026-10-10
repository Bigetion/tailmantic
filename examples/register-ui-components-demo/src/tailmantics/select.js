import { register } from 'tailmantic/collector';

register.group('demo-select', {
  root: { tw: 'flex w-full max-w-[420px] flex-col gap-1.5' },
  label: { tw: 'text-xs font-medium text-[var(--text)]' },
  input: {
    tw: 'h-10 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 text-sm text-[var(--text)] outline-none focus:border-[var(--rgi-blue)] disabled:opacity-50',
  },
});
register('demo-select select[multiple]', { base: { tw: 'h-auto min-h-24 py-2' } });
