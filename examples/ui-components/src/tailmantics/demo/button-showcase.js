import { register } from 'tailmantic/collector';

register.group('rgi-button-example', {
  root: { tw: 'flex w-full flex-col gap-3 text-[var(--text,#edf2fb)]' },
  label: { tw: 'text-[9px] font-semibold uppercase tracking-[.14em] text-[var(--subtle)]' },
  row: { tw: 'flex flex-wrap items-center gap-3' },
  note: { tw: 'text-[11px] text-[var(--muted)]' },
  status: { tw: 'text-[11px] text-[var(--muted)]' },
});

register.group('rgi-button-group-example', {
  root: { tw: 'relative flex flex-col items-start gap-2.5 text-[var(--text,#edf2fb)]' },
  status: { tw: 'text-[10px] text-[#8290a8]' },
});
