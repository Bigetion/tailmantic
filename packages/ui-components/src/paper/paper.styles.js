import { register } from 'tailmantic/collector';

register('tm-paper', {
  base: { tw: 'bg-[var(--panel,#111824)] text-[var(--text,#edf2fb)]' },
  modifiers: {
    'elevation-0': { tw: 'shadow-none' },
    'elevation-1': { tw: 'shadow-[0_2px_8px_rgba(0,0,0,.16)]' },
    'elevation-2': { tw: 'shadow-[0_5px_16px_rgba(0,0,0,.2)]' },
    'elevation-3': { tw: 'shadow-[0_10px_28px_rgba(0,0,0,.25)]' },
    'elevation-4': { tw: 'shadow-[0_16px_40px_rgba(0,0,0,.28)]' },
    'elevation-5': { tw: 'shadow-[0_22px_56px_rgba(0,0,0,.32)]' },
    square: { tw: 'rounded-none' },
  },
});

register.all('paper', {
  'demo': 'flex w-full max-w-[760px] flex-col gap-5',
  'elevation-grid': 'grid w-full grid-cols-3 gap-4 max-md:grid-cols-1',
  'elevation-example': 'flex min-w-0 flex-col gap-3 rounded-xl border border-[var(--border)] bg-[#111720]/70 p-4',
  'example-overline': 'text-[10px] font-semibold tracking-[.14em] text-[#8fa1ba]',
  'elevation-stage': 'flex min-h-[140px] items-center justify-center rounded-lg border border-white/[.04] p-4',
  'elevation-stage-0': 'bg-[#0c1119]',
  'elevation-stage-2': 'bg-[#101925]',
  'elevation-stage-5': 'bg-[#172235]',
  'elevation-sample': 'w-full max-w-[280px] rounded-xl border border-white/[.08] p-4',
  'elevation-sample-0': 'bg-[#141b26]',
  'elevation-sample-2': 'bg-[#1b2635]',
  'elevation-sample-5': 'bg-[#24344a]',
  'example-description': 'text-xs leading-relaxed text-[var(--muted)]',
  'demo-hint': 'm-0 flex items-center gap-2 text-xs leading-relaxed text-[var(--muted)]',
  'content': 'flex min-w-0 items-center gap-3',
  'content-icon': 'inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#24344a] text-[#a9c4ff]',
  '&content > span:last-child': 'flex min-w-0 flex-col gap-1 [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:text-[var(--text)] [&_small]:text-xs [&_small]:text-[var(--muted)]',
  'scale-controls': 'flex w-fit max-w-full flex-wrap items-center gap-1 rounded-xl border border-[var(--border)] bg-[#111720] p-1.5',
  '&scale-controls legend': 'px-1.5 text-xs font-medium text-[var(--muted)]',
  'level-button': 'inline-flex size-10 cursor-pointer appearance-none items-center justify-center rounded-lg border-0 bg-transparent p-0 text-sm font-medium tabular-nums text-[var(--muted)] shadow-none transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8baeff]',
  'level-button-active': 'bg-[#263a57] text-[#d6e4ff] hover:bg-[#263a57]',
  'scale-stage': 'relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-xl border border-[#303a49] bg-[radial-gradient(ellipse_at_center,rgba(93,125,181,.12),transparent_72%),#0d121b] p-8 max-sm:min-h-[190px] max-sm:p-5',
  'selected-elevation': 'relative flex w-full max-w-[420px] flex-col gap-4 rounded-xl border border-[#52627a]/70 bg-[#1a2432] p-5 transition-[box-shadow,transform] duration-300',
  'selected-description': 'text-xs text-[var(--muted)]',
  'level-indicator': 'size-2 rounded-full bg-[#8eafff] shadow-[0_0_10px_rgba(142,175,255,.7)]',
  'variants-grid': 'grid w-full grid-cols-2 items-stretch gap-4 max-sm:grid-cols-1',
  'variant-label': 'text-[10px] font-semibold tracking-[.14em] text-[#91a3bc]',
  'contained': 'flex flex-col gap-4 rounded-xl border border-[#344358] bg-[#18212e] p-5',
  'outlined': 'flex flex-col gap-4 rounded-xl border-2 border-[#52627a] bg-transparent p-5',
  'nested': 'col-span-2 flex flex-col gap-4 rounded-xl border border-[#344358] p-5 max-sm:col-span-1',
  'nested-inner': '!rounded-lg border border-[#3b4c65] bg-[#111923] p-3',
  'variant-description': 'm-0 text-xs leading-relaxed text-[var(--muted)]',
  'section-list': 'flex flex-col divide-y divide-[#303a49] [&>div:first-child]:pt-0 [&>div:last-child]:pb-0',
  'section-row': 'flex items-center gap-2.5 py-2.5 text-xs text-[#cbd5e3] [&_svg]:text-[#8eaef0]',
  'add-button': 'inline-flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-[#354358] bg-[#172235] px-3 py-2 text-xs font-medium text-[#c4d4f2] hover:bg-[#20304a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8baeff] [&_span]:rounded-full [&_span]:bg-[#26354a] [&_span]:px-2 [&_span]:py-1 [&_span]:text-[10px]',
});

register.all('component-showcase-paper', {
  '& .demo-content': 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
  '& .demo-canvas': 'items-stretch',
});
