import { register } from 'tailmantic/collector';

register.group('demo-radio-group', {
  root: { tw: 'flex max-w-[420px] flex-col gap-3 border-0 p-0' },
  legend: { tw: 'mb-2 text-xs font-semibold text-[var(--text)]' },
  option: {
    tw: 'inline-flex cursor-pointer items-center gap-3 text-sm text-[var(--text)] has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-45',
  },
  input: { tw: 'size-4 accent-[var(--rgi-blue-dark)]' },
});
register('demo-radio-group-horizontal', {
  base: { tw: 'flex-row flex-wrap items-center gap-x-5 gap-y-2' },
});
