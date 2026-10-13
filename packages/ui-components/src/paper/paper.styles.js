import { register } from 'tailmantic/collector';

register('rgi-paper', {
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

register('paper-demo', {
  base: { tw: 'flex w-full max-w-[760px] flex-col gap-5' },
});

register('paper-elevation-grid', {
  base: { tw: 'grid w-full grid-cols-3 gap-4 max-md:grid-cols-1' },
});

register('paper-elevation-example', {
  base: {
    tw: 'flex min-w-0 flex-col gap-3 rounded-xl border border-[var(--border)] bg-[#111720]/70 p-4',
  },
});

register('paper-example-overline', {
  base: { tw: 'text-[10px] font-semibold tracking-[.14em] text-[#8fa1ba]' },
});

register('paper-elevation-stage', {
  base: {
    tw: 'flex min-h-[140px] items-center justify-center rounded-lg border border-white/[.04] p-4',
  },
});

register('paper-elevation-stage-0', {
  base: { tw: 'bg-[#0c1119]' },
});

register('paper-elevation-stage-2', {
  base: { tw: 'bg-[#101925]' },
});

register('paper-elevation-stage-5', {
  base: { tw: 'bg-[#172235]' },
});

register('paper-elevation-sample', {
  base: { tw: 'w-full max-w-[280px] rounded-xl border border-white/[.08] p-4' },
});

register('paper-elevation-sample-0', {
  base: { tw: 'bg-[#141b26]' },
});

register('paper-elevation-sample-2', {
  base: { tw: 'bg-[#1b2635]' },
});

register('paper-elevation-sample-5', {
  base: { tw: 'bg-[#24344a]' },
});

register('paper-example-description', {
  base: { tw: 'text-xs leading-relaxed text-[var(--muted)]' },
});

register('paper-demo-hint', {
  base: { tw: 'm-0 flex items-center gap-2 text-xs leading-relaxed text-[var(--muted)]' },
});

register('paper-content', {
  base: { tw: 'flex min-w-0 items-center gap-3' },
});

register('paper-content-icon', {
  base: {
    tw: 'inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#24344a] text-[#a9c4ff]',
  },
});

register('paper-content > span:last-child', {
  base: {
    tw: 'flex min-w-0 flex-col gap-1 [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:text-[var(--text)] [&_small]:text-xs [&_small]:text-[var(--muted)]',
  },
});

register('paper-scale-controls', {
  base: {
    tw: 'flex w-fit max-w-full flex-wrap items-center gap-1 rounded-xl border border-[var(--border)] bg-[#111720] p-1.5',
  },
});

register('paper-scale-controls legend', {
  base: { tw: 'px-1.5 text-xs font-medium text-[var(--muted)]' },
});

register('paper-level-button', {
  base: {
    tw: 'inline-flex size-10 cursor-pointer appearance-none items-center justify-center rounded-lg border-0 bg-transparent p-0 text-sm font-medium tabular-nums text-[var(--muted)] shadow-none transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8baeff]',
  },
});

register('paper-level-button-active', {
  base: { tw: 'bg-[#263a57] text-[#d6e4ff] hover:bg-[#263a57]' },
});

register('paper-scale-stage', {
  base: {
    tw: 'relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-xl border border-[#303a49] bg-[radial-gradient(ellipse_at_center,rgba(93,125,181,.12),transparent_72%),#0d121b] p-8 max-sm:min-h-[190px] max-sm:p-5',
  },
});

register('paper-selected-elevation', {
  base: {
    tw: 'relative flex w-full max-w-[420px] flex-col gap-4 rounded-xl border border-[#52627a]/70 bg-[#1a2432] p-5 transition-[box-shadow,transform] duration-300',
  },
});

register('paper-selected-description', {
  base: { tw: 'text-xs text-[var(--muted)]' },
});

register('paper-level-indicator', {
  base: { tw: 'size-2 rounded-full bg-[#8eafff] shadow-[0_0_10px_rgba(142,175,255,.7)]' },
});

register('paper-variants-grid', {
  base: { tw: 'grid w-full grid-cols-2 items-stretch gap-4 max-sm:grid-cols-1' },
});

register('paper-variant-label', {
  base: { tw: 'text-[10px] font-semibold tracking-[.14em] text-[#91a3bc]' },
});

register('paper-contained', {
  base: { tw: 'flex flex-col gap-4 rounded-xl border border-[#344358] bg-[#18212e] p-5' },
});

register('paper-outlined', {
  base: { tw: 'flex flex-col gap-4 rounded-xl border-2 border-[#52627a] bg-transparent p-5' },
});

register('paper-nested', {
  base: {
    tw: 'col-span-2 flex flex-col gap-4 rounded-xl border border-[#344358] p-5 max-sm:col-span-1',
  },
});

register('paper-nested-inner', {
  base: { tw: '!rounded-lg border border-[#3b4c65] bg-[#111923] p-3' },
});

register('paper-variant-description', {
  base: { tw: 'm-0 text-xs leading-relaxed text-[var(--muted)]' },
});

register('paper-section-list', {
  base: {
    tw: 'flex flex-col divide-y divide-[#303a49] [&>div:first-child]:pt-0 [&>div:last-child]:pb-0',
  },
});

register('paper-section-row', {
  base: { tw: 'flex items-center gap-2.5 py-2.5 text-xs text-[#cbd5e3] [&_svg]:text-[#8eaef0]' },
});

register('paper-add-button', {
  base: {
    tw: 'inline-flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-[#354358] bg-[#172235] px-3 py-2 text-xs font-medium text-[#c4d4f2] hover:bg-[#20304a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8baeff] [&_span]:rounded-full [&_span]:bg-[#26354a] [&_span]:px-2 [&_span]:py-1 [&_span]:text-[10px]',
  },
});

register('component-showcase-paper .demo-content', {
  base: {
    tw: 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
  },
});

register('component-showcase-paper .demo-canvas', {
  base: { tw: 'items-stretch' },
});
