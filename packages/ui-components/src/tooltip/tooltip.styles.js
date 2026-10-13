import { register } from 'tailmantic/collector';

register('rgi-tooltip-root', {
  base: {
    tw: 'relative inline-flex w-fit align-middle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rgi-blue,#9bbcff)] [&:hover_.rgi-tooltip-content]:visible [&:hover_.rgi-tooltip-content]:opacity-100 [&:focus-within_.rgi-tooltip-content]:visible [&:focus-within_.rgi-tooltip-content]:opacity-100',
  },
  modifiers: {
    top: {
      tw: '[&_.rgi-tooltip-content]:bottom-full [&_.rgi-tooltip-content]:left-1/2 [&_.rgi-tooltip-content]:mb-2 [&_.rgi-tooltip-content]:-translate-x-1/2',
    },
    bottom: {
      tw: '[&_.rgi-tooltip-content]:top-full [&_.rgi-tooltip-content]:left-1/2 [&_.rgi-tooltip-content]:mt-2 [&_.rgi-tooltip-content]:-translate-x-1/2',
    },
    left: {
      tw: '[&_.rgi-tooltip-content]:right-full [&_.rgi-tooltip-content]:top-1/2 [&_.rgi-tooltip-content]:mr-2 [&_.rgi-tooltip-content]:-translate-y-1/2',
    },
    right: {
      tw: '[&_.rgi-tooltip-content]:left-full [&_.rgi-tooltip-content]:top-1/2 [&_.rgi-tooltip-content]:ml-2 [&_.rgi-tooltip-content]:-translate-y-1/2',
    },
    open: { tw: '[&_.rgi-tooltip-content]:visible [&_.rgi-tooltip-content]:opacity-100' },
    closed: { tw: '[&_.rgi-tooltip-content]:!invisible [&_.rgi-tooltip-content]:!opacity-0' },
  },
});

register('rgi-tooltip-content', {
  base: {
    tw: 'invisible absolute z-50 w-max max-w-[min(20rem,calc(100vw-2rem))] rounded bg-[var(--rgi-tooltip-bg,#263244)] px-2.5 py-1.5 text-xs font-medium leading-snug text-[var(--rgi-tooltip-color,#fff)] opacity-0 shadow-lg transition-opacity',
  },
});

register('rgi-tooltip-example', {
  base: { tw: 'flex min-h-[88px] w-full flex-wrap items-center justify-center gap-3' },
});

register('rgi-tooltip-example-root', {
  base: { tw: 'inline-flex' },
});

register('rgi-tooltip-example-root .rgi-tooltip-content', {
  base: { tw: 'z-50 max-w-[240px] rounded-md border border-[#ffffff12] bg-[#252c38] px-2.5 py-1.5 text-[10px] leading-relaxed text-[#eef2fb] shadow-[0_8px_24px_#0009]' },
});

register('rgi-tooltip-example-trigger', {
  base: { tw: 'inline-flex h-9 cursor-pointer items-center justify-center rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 text-[10px] font-medium text-[var(--text)] transition-colors hover:border-[#547be8] hover:bg-[var(--panel-raised)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789df5]' },
});

register('rgi-tooltip-example-trigger-rich', {
  base: { tw: 'gap-2' },
});

register('rgi-tooltip-example-placement', {
  base: { tw: 'flex-col gap-3' },
});

register('rgi-tooltip-example-placement-picker', {
  base: { tw: 'flex flex-wrap items-center justify-center gap-1 rounded-md border border-[var(--border)] bg-[var(--panel)] p-1' },
});

register('rgi-tooltip-example-placement-button', {
  base: { tw: 'h-6 cursor-pointer rounded border-0 bg-transparent px-2 text-[9px] capitalize text-[var(--muted)] hover:bg-[var(--panel-raised)] hover:text-[var(--text)]' },
});

register('rgi-tooltip-example-placement-active', {
  base: { tw: 'bg-[#24385c] text-[#c7d8ff] hover:bg-[#24385c] hover:text-white' },
});

register('rgi-tooltip-example-root-rich .rgi-tooltip-content', {
  base: { tw: 'max-w-[260px] !p-0' },
});

register('rgi-tooltip-example-rich-content', {
  base: { tw: 'flex items-start gap-2.5 p-3' },
});

register('rgi-tooltip-example-rich-copy', {
  base: { tw: 'flex min-w-0 flex-1 flex-col gap-1.5' },
});

register('rgi-tooltip-example-rich-content strong', {
  base: { tw: 'text-[10px] font-semibold text-white' },
});

register('rgi-tooltip-example-rich-content small', {
  base: { tw: 'text-[9px] leading-relaxed text-[#b3bfd1]' },
});

register('rgi-tooltip-example-rich-icon', {
  base: { tw: 'inline-flex size-7 shrink-0 items-center justify-center rounded-md bg-[#26395b] text-[#a9c4ff]' },
});

register('rgi-tooltip-example-rich-check', {
  base: { tw: 'mt-0.5 shrink-0 text-[#7bd2a9]' },
});

register('rgi-tooltip-example-shortcut', {
  base: { tw: 'mt-1 inline-flex items-center gap-1 text-[8px] text-[#8795aa]' },
});

register('rgi-tooltip-example-shortcut kbd', {
  base: { tw: 'rounded border border-[#3c4655] bg-[#1a202a] px-1 py-0.5 font-mono text-[8px] text-[#d4dcec]' },
});
