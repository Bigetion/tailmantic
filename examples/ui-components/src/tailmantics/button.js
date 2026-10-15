import { register } from 'tailmantic/collector';

register.group('button-example', {
  section: { tw: 'flex w-full flex-col gap-3' },
  label: { tw: 'text-[9px] font-semibold uppercase tracking-[.14em] text-[var(--subtle)]' },
  row: {
    tw: 'flex flex-wrap items-center gap-3 [&_.tm-button]:normal-case [&_.tm-button]:tracking-normal',
  },
  'icon-button': {
    tw: 'inline-flex size-9 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel-raised)] text-[var(--muted)] transition-colors hover:border-[#566b92] hover:text-[var(--tm-blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--tm-blue)]',
  },
  status: { tw: 'text-[11px] text-[var(--muted)]' },
});
