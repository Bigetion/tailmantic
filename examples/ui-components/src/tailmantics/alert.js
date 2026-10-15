import { register } from 'tailmantic/collector';

register.all('tm-alert-example', {
  'stack': 'flex w-full max-w-[620px] flex-col gap-2',
  '': '!gap-2.5 !rounded-md !px-3 !py-2.5 !text-[10px]',
  'actions': 'flex flex-wrap items-center gap-1',
  'action': '!h-7 !min-h-0 !px-2 !text-[9px] !text-current hover:!bg-white/10',
  'empty': 'flex min-h-[70px] w-full flex-wrap items-center justify-between gap-2 rounded-lg border border-dashed border-[var(--border)] px-3 py-2 text-[10px] text-[var(--muted)]',
});
