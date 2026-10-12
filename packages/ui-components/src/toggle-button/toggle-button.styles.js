import { register } from 'tailmantic/collector';

register('rgi-toggle-button', {
  base: {
    tw: 'inline-flex min-h-9 cursor-pointer items-center justify-center gap-2 border border-[var(--border,#354158)] bg-[var(--panel,#101722)] px-3.5 text-sm font-medium text-[var(--text-muted,#aab6ca)] transition-colors hover:bg-[var(--hover,rgba(255,255,255,.05))] hover:text-[var(--text,#edf2fb)] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--rgi-blue,#86a6ff)] aria-pressed:bg-[var(--rgi-blue-soft,rgba(84,123,232,.2))] aria-pressed:text-[var(--rgi-blue,#b9ccff)] disabled:cursor-not-allowed disabled:opacity-40',
  },
});

register('rgi-toggle-button-small', {
  base: { tw: 'min-h-7 gap-1.5 px-2.5 text-xs' },
});

register('rgi-toggle-button-selected', {
  base: { tw: '!bg-[var(--rgi-blue-soft,rgba(84,123,232,.2))] !text-[var(--rgi-blue,#b9ccff)]' },
});

register.group('rgi-toggle-button-group', {
  root: {
    tw: 'inline-flex !gap-0 max-w-full overflow-hidden rounded-lg border border-[#354158] bg-[#101722] shadow-[0_2px_8px_rgba(0,0,0,.16)]',
  },
  button: {
    tw: 'inline-flex min-h-9 cursor-pointer items-center justify-center gap-2 border-0 border-r border-[#354158] bg-transparent px-3.5 text-[11px] font-medium text-[#aab6ca] transition-colors last:border-r-0 hover:bg-[#ffffff08] hover:text-white focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#86a6ff] aria-pressed:bg-[#21304b] aria-pressed:text-[#b9ccff] aria-pressed:hover:!bg-[#21304b] aria-pressed:hover:!text-[#b9ccff] disabled:cursor-not-allowed disabled:opacity-40',
  },
  icon: {
    tw: 'size-9 min-h-9 shrink-0 px-0 [&_svg]:shrink-0',
  },
});
