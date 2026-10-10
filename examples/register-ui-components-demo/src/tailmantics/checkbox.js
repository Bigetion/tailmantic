import { register } from 'tailmantic/collector';

register.group('demo-checkbox', {
  root: {
    tw: 'inline-flex cursor-pointer items-center gap-3 text-sm text-[var(--text)] has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-[var(--rgi-blue)]',
  },
  input: { tw: 'sr-only' },
  box: {
    tw: 'inline-flex size-[18px] items-center justify-center rounded border border-[#64748b] bg-[var(--surface)] text-[11px] text-white',
  },
});
register('demo-checkbox-box-checked', {
  base: { tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-dark)]' },
});
register('demo-checkbox-box-indeterminate', {
  base: { tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-dark)]' },
});
register.all({
  'demo-checkbox-group': { tw: 'flex flex-col gap-3 rounded-lg border border-[var(--border)] p-4' },
  'demo-checkbox-group legend': { tw: 'px-1 text-xs font-semibold text-[var(--text)]' },
});
