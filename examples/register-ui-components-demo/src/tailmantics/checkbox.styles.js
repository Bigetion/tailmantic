import { register } from 'tailmantic/collector';

register.group('ui-checkbox', {
  root: {
    tw: 'inline-flex w-fit cursor-pointer items-start gap-3 text-xs text-[var(--text)] has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-45',
  },
  control: {
    tw: 'relative mt-0.5 inline-flex size-[18px] shrink-0 items-center justify-center rounded-[5px] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-[var(--page)] focus-within:ring-[#86a6ff]',
  },
  input: {
    tw: 'absolute inset-0 z-10 m-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed',
  },
  indicator: {
    tw: 'flex size-[18px] items-center justify-center rounded-[5px] border border-[#53627a] bg-[#0e1420] text-[#101722] transition-[background-color,border-color,box-shadow]',
  },
  checked: { tw: 'border-[#84a2f1] bg-[#84a2f1]' },
  indeterminate: { tw: 'border-[#84a2f1] bg-[#84a2f1]' },
  disabled: { tw: 'cursor-not-allowed' },
  dash: { tw: 'h-0.5 w-2 rounded-full bg-[#101722]' },
  copy: { tw: 'flex min-w-0 flex-col gap-1' },
  label: { tw: 'font-medium text-[var(--text)]' },
  description: { tw: 'text-[11px] leading-relaxed text-[var(--muted)]' },
});
