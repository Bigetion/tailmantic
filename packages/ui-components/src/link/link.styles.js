import { register } from 'tailmantic/collector';

register('tm-link', {
  base: {
    tw: 'cursor-pointer text-[var(--accent,#315fc4)] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent,#315fc4)]',
  },
  modifiers: {
    'underline-always': { tw: 'underline' },
    'underline-hover': { tw: 'no-underline hover:underline' },
    'underline-none': { tw: 'no-underline' },
    'color-inherit': { tw: 'text-inherit' },
    'color-secondary': { tw: 'text-[var(--muted,#626a75)]' },
  },
});

register.all('tm-link-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-4',
  'card': 'flex w-full items-start gap-4 rounded-xl border border-[#293548] bg-[#111925] p-5 max-sm:p-4',
  'icon': 'inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#34465f] bg-[#25354b] text-[#b6cdf7]',
  'copy': 'flex min-w-0 flex-1 flex-col gap-3',
  '&copy > strong': 'text-sm font-semibold text-[#e4ebf5]',
  '&copy p': 'm-0 max-w-xl text-sm leading-relaxed text-[#9ba9bc]',
  'inline-row': 'flex flex-wrap items-center gap-3 text-sm',
  'divider': 'h-4 w-px bg-[#394557]',
  'variants': 'flex w-full flex-col overflow-hidden rounded-xl border border-[#293548] bg-[#111925]',
  'variant-row': 'flex min-h-14 flex-wrap items-center justify-between gap-3 border-b border-[#293342] px-5 py-3 last:border-b-0 [&>span:first-child]:text-xs [&>span:first-child]:font-medium [&>span:first-child]:text-[#9ba9bc]',
  '& .tm-link-example-external': 'text-[#87d4c2]',
  'accessibility-row': 'flex flex-wrap items-center gap-x-5 gap-y-3',
  '& .tm-link-example-disabled': 'cursor-not-allowed text-[#6f7b8d] no-underline hover:text-[#6f7b8d] hover:no-underline',
  'footer': 'flex flex-wrap items-center justify-between gap-3',
  'toggle': 'cursor-pointer rounded-md border border-[#40516b] bg-[#1b2738] px-3 py-2 text-xs font-medium text-[#c0d2f2] transition-colors hover:bg-[#24344a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a9c4ff]',
  'status': 'text-xs text-[var(--muted)]',
});

register.all('component-showcase-link', {
  '& .demo-content': 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
});
