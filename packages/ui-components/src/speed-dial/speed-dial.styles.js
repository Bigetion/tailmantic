import { register } from 'tailmantic/collector';

register.all('tm-speed-dial', {
  '': 'relative inline-flex flex-col items-center gap-2',
  up: 'flex-col-reverse',
  left: 'flex-row-reverse',
  right: 'flex-row',
  down: 'flex-col',
});

register.all('tm-speed-dial', {
  actions: 'm-0 flex min-w-0 flex-col gap-2 border-0 p-0',
  action:
    'flex size-10 cursor-pointer items-center justify-center rounded-full border border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] text-[var(--text,#20242b)] shadow-md hover:bg-[var(--surface-hover,#f0f2f5)] focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)] disabled:cursor-not-allowed disabled:opacity-45',
  trigger:
    'flex size-14 cursor-pointer items-center justify-center rounded-full border-0 bg-[var(--accent,#315fc4)] text-xl text-white shadow-lg transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent,#315fc4)]',
  '&open .tm-speed-dial-trigger': 'rotate-45',
  '& [hidden]': 'hidden',
});
