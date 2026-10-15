import { register } from 'tailmantic/collector';

register.all('tm-menu', {
  'positioner': 'z-50',
  '': 'max-h-[min(24rem,80vh)] min-w-48 overflow-auto rounded-md border border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] p-1 text-[var(--text,#20242b)] shadow-[0_8px_24px_rgba(0,0,0,.16)]',
  'item': 'flex w-full cursor-pointer items-center rounded border-0 bg-transparent px-3 py-2 text-left text-sm text-inherit focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)] hover:bg-[var(--surface-hover,#f0f2f5)]',
  'item-disabled': 'cursor-not-allowed opacity-45',
  '& [aria-checked="true"]': 'bg-[var(--surface-hover,#f0f2f5)] text-[var(--text,#20242b)]',
});

register.all('tm-menu-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-4',
  'context-open': 'min-h-[390px]',
  'card': 'flex min-w-0 items-center gap-4 rounded-xl border border-[#293548] bg-[#111925] px-5 py-4 max-sm:px-4',
  'icon': 'inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#364760] bg-[#24344a] text-[#adc6fa]',
  'copy': 'flex min-w-0 flex-1 flex-col gap-1 [&_strong]:truncate [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:text-[#e4ebf5] [&_span]:truncate [&_span]:text-xs [&_span]:text-[#9ba9bc]',
  'trigger': 'inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-transparent text-[#9ba9bc] hover:border-[#354154] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  'note': 'min-h-10 border-t border-[#303a49] px-4 py-3 text-xs text-[#9ba9bc]',
  'menu': '!z-[60] !w-[min(260px,calc(100vw-24px))] !rounded-xl !border-[#354154] !bg-[#171f2c] !p-1.5 !text-[#e4ebf5] !shadow-[0_16px_38px_rgba(0,0,0,.48)]',
  '&menu .tm-menu-item': '!min-h-10 !gap-3 !rounded-lg !px-3 !py-2.5 !text-sm !text-[#c5cfdf] hover:!bg-white/[.06] focus-visible:!outline-[#8baeff] [&_span:first-of-type]:flex-1 [&_svg:last-child]:ml-auto',
  '&menu .tm-menu-item-danger': '!text-[#f09a9a] hover:!bg-[#4a252c] hover:!text-[#ffb4b4] [&_svg]:!text-[#e78d96]',
  '&menu .tm-menu-item[aria-checked="true"]': '!bg-[#20304a] !text-[#d9e5ff] [&_svg]:!text-[#9edab7]',
  'footer': 'text-xs text-[var(--muted)]',
  'controls': 'm-0 flex min-w-0 w-full flex-wrap gap-1 rounded-xl border border-[#293548] bg-[#111925] p-1.5',
  'placement-option': 'inline-flex min-h-8 cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent px-3 text-xs capitalize text-[#9ba9bc] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  'placement-option-active': '!bg-[#20304a] !text-[#c5d7ff] hover:!bg-[#20304a]',
  'stage': 'relative flex min-h-[222px] flex-col items-center justify-start gap-3 rounded-xl border border-dashed border-[#303a49] bg-[#0d121b] p-6 pt-8',
  'status': 'absolute left-4 top-3 min-h-5 rounded-md bg-[#0d121b] px-2 py-1 text-xs text-[#9ba9bc]',
  'selection-card': 'flex w-full flex-wrap items-center gap-3 rounded-xl border border-[#293548] bg-[#111925] p-4',
  'selection-copy': 'flex min-w-[160px] flex-1 flex-col gap-1 [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:text-[#e4ebf5] [&_small]:text-xs [&_small]:text-[#9ba9bc]',
  'sort-trigger': 'inline-flex min-h-9 cursor-pointer items-center justify-between gap-3 rounded-lg border border-[#354154] bg-[#171f2c] px-3 text-xs text-[#d3dceb] hover:border-[#536985] focus-visible:outline-2 focus-visible:outline-[#8baeff]',
});

register.all('component-showcase-menu', {
  '& .demo-content': 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
});
