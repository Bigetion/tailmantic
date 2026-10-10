import { register } from 'tailmantic/collector';

register.group('demo-switch', {
  root: {
    tw: 'inline-flex cursor-pointer items-center gap-3 text-sm text-[var(--text)] has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-[var(--rgi-blue)]',
  },
  input: { tw: 'sr-only' },
  track: {
    tw: 'flex h-5 w-9 items-center rounded-full bg-[#465164] p-0.5 transition-colors',
  },
  thumb: { tw: 'size-4 rounded-full bg-white transition-transform' },
});
register('demo-switch-checked .demo-switch-track', {
  base: { tw: 'bg-[var(--rgi-blue-dark)]' },
});
register('demo-switch-checked .demo-switch-thumb', {
  base: { tw: 'translate-x-4' },
});
register('demo-switch-copy', {
  base: { tw: 'flex flex-col gap-1 [&>small]:text-[10px] [&>small]:text-[var(--muted)]' },
});
register('demo-switch-success.demo-switch-checked .demo-switch-track', {
  base: { tw: 'bg-[var(--rgi-success)]' },
});
register('demo-switch-danger.demo-switch-checked .demo-switch-track', {
  base: { tw: 'bg-[var(--rgi-error)]' },
});
