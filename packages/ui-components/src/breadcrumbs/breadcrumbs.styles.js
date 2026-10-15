import { register } from 'tailmantic/collector';

register.all('rgi-breadcrumbs', {
  '': 'text-sm text-[var(--muted,#626a75)]',
  'list': 'm-0 flex list-none flex-wrap items-center gap-2 p-0',
  'item': 'inline-flex min-w-0 items-center gap-2',
  'separator': 'select-none text-[var(--muted,#626a75)]',
  'ellipsis': 'select-none',
  '& a': 'truncate text-[var(--accent,#315fc4)] underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)]',
  '& [aria-current="page"]': 'font-medium text-[var(--text,#20242b)] no-underline',
});

register.all('rgi-breadcrumbs-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-4',
  'panel': 'flex min-h-[176px] flex-col justify-between gap-6 rounded-xl border border-[#293548] bg-[#111925] p-6 max-sm:p-4',
  'context': 'flex flex-col gap-2 border-b border-[#263246] pb-4',
  'eyebrow': 'text-[10px] font-semibold uppercase tracking-[.14em] text-[#8292a9]',
  'title': 'text-lg font-semibold text-[#e4ebf5]',
  'description': 'text-sm leading-relaxed text-[#9ba9bc]',
  'status': 'text-xs text-[#9ba9bc] [&_strong]:font-semibold [&_strong]:text-[#e4ebf5]',
  'separators': 'grid w-full gap-3',
  'separator-row': 'flex flex-col gap-2 rounded-lg border border-[#293548] bg-[#111925] px-4 py-3 [&_svg]:size-3.5',
  'separator-label': 'text-[10px] font-semibold uppercase tracking-[.12em] text-[#8292a9]',
  'collapse-controls': 'flex flex-wrap items-center justify-between gap-3',
  'collapse-button': 'cursor-pointer rounded-md border border-[#40516b] bg-[#1b2738] px-3 py-2 text-xs font-medium text-[#c0d2f2] transition-colors hover:bg-[#24344a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a9c4ff]',
});

register.all('component-showcase-breadcrumbs', {
  '& .demo-content': 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
});
