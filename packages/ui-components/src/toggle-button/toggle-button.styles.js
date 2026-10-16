import { register } from 'tailmantic/collector';

register.all('tm-toggle-button', {
  '': 'inline-flex min-h-9 w-fit cursor-pointer items-center justify-self-start gap-2 rounded-md border border-[var(--border,#354158)] bg-[var(--panel,#101722)] px-3.5 text-sm font-medium text-[var(--text-muted,#aab6ca)] transition-[background-color,border-color,color,box-shadow,transform] hover:border-[#465b80] hover:bg-[var(--hover,rgba(255,255,255,.05))] hover:text-[var(--text,#edf2fb)] active:scale-[.98] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--tm-blue,#86a6ff)] aria-pressed:border-[#6484d2] aria-pressed:bg-[#243653] aria-pressed:text-[#d7e3ff] aria-pressed:shadow-[inset_0_0_0_1px_rgba(155,188,255,.12)] disabled:cursor-not-allowed disabled:opacity-40',
  small: 'min-h-7 gap-1.5 px-2.5 text-xs',
  selected: '!border-[#6484d2] !bg-[#243653] !text-[#d7e3ff] !shadow-[inset_0_0_0_1px_rgba(155,188,255,.12)]',
});

register.all('tm-toggle-button-group', {
  '': 'inline-flex !gap-0 max-w-full overflow-hidden rounded-lg border border-[#354158] bg-[#101722] shadow-[0_2px_8px_rgba(0,0,0,.16)]',
  button:
    'inline-flex min-h-9 cursor-pointer items-center justify-center gap-2 border-0 border-r border-[#354158] bg-transparent px-3.5 text-[11px] font-medium text-[#aab6ca] transition-colors last:border-r-0 hover:bg-[#ffffff08] hover:text-white focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#86a6ff] aria-pressed:bg-[#21304b] aria-pressed:text-[#b9ccff] aria-pressed:hover:!bg-[#21304b] aria-pressed:hover:!text-[#b9ccff] disabled:cursor-not-allowed disabled:opacity-40',
  icon: 'size-9 min-h-9 shrink-0 px-0 [&_svg]:shrink-0',
});
