import { register } from 'tailmantic/collector';

register('tm-tooltip-root', {
  base: {
    tw: 'relative inline-flex w-fit align-middle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--tm-blue,#9bbcff)] [&:hover_.tm-tooltip-content]:visible [&:hover_.tm-tooltip-content]:opacity-100 [&:focus-within_.tm-tooltip-content]:visible [&:focus-within_.tm-tooltip-content]:opacity-100',
  },
  modifiers: {
    top: {
      tw: '[&_.tm-tooltip-content]:bottom-full [&_.tm-tooltip-content]:left-1/2 [&_.tm-tooltip-content]:mb-2 [&_.tm-tooltip-content]:-translate-x-1/2',
    },
    bottom: {
      tw: '[&_.tm-tooltip-content]:top-full [&_.tm-tooltip-content]:left-1/2 [&_.tm-tooltip-content]:mt-2 [&_.tm-tooltip-content]:-translate-x-1/2',
    },
    left: {
      tw: '[&_.tm-tooltip-content]:right-full [&_.tm-tooltip-content]:top-1/2 [&_.tm-tooltip-content]:mr-2 [&_.tm-tooltip-content]:-translate-y-1/2',
    },
    right: {
      tw: '[&_.tm-tooltip-content]:left-full [&_.tm-tooltip-content]:top-1/2 [&_.tm-tooltip-content]:ml-2 [&_.tm-tooltip-content]:-translate-y-1/2',
    },
    open: { tw: '[&_.tm-tooltip-content]:visible [&_.tm-tooltip-content]:opacity-100' },
    closed: { tw: '[&_.tm-tooltip-content]:!invisible [&_.tm-tooltip-content]:!opacity-0' },
  },
});

register('tm-tooltip-content', {
  base: {
    tw: 'invisible absolute z-50 w-max max-w-[min(20rem,calc(100vw-2rem))] rounded bg-[var(--tm-tooltip-bg,#263244)] px-2.5 py-1.5 text-xs font-medium leading-snug text-[var(--tm-tooltip-color,#fff)] opacity-0 shadow-lg transition-opacity',
  },
});

register.all('tm-tooltip-example', {
  '': 'flex min-h-[88px] w-full flex-wrap items-center justify-center gap-3',
  'root': 'inline-flex',
  '&root .tm-tooltip-content': 'z-50 max-w-[240px] rounded-md border border-[#ffffff12] bg-[#252c38] px-2.5 py-1.5 text-[10px] leading-relaxed text-[#eef2fb] shadow-[0_8px_24px_#0009]',
  'trigger': 'inline-flex h-9 cursor-pointer items-center justify-center rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 text-[10px] font-medium text-[var(--text)] transition-colors hover:border-[#547be8] hover:bg-[var(--panel-raised)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789df5]',
  'trigger-rich': 'gap-2',
  'placement': 'flex-col gap-3',
  'placement-picker': 'flex flex-wrap items-center justify-center gap-1 rounded-md border border-[var(--border)] bg-[var(--panel)] p-1',
  'placement-button': 'h-6 cursor-pointer rounded border-0 bg-transparent px-2 text-[9px] capitalize text-[var(--muted)] hover:bg-[var(--panel-raised)] hover:text-[var(--text)]',
  'placement-active': 'bg-[#24385c] text-[#c7d8ff] hover:bg-[#24385c] hover:text-white',
  '&root-rich .tm-tooltip-content': 'max-w-[260px] !p-0',
  'rich-content': 'flex items-start gap-2.5 p-3',
  'rich-copy': 'flex min-w-0 flex-1 flex-col gap-1.5',
  '&rich-content strong': 'text-[10px] font-semibold text-white',
  '&rich-content small': 'text-[9px] leading-relaxed text-[#b3bfd1]',
  'rich-icon': 'inline-flex size-7 shrink-0 items-center justify-center rounded-md bg-[#26395b] text-[#a9c4ff]',
  'rich-check': 'mt-0.5 shrink-0 text-[#7bd2a9]',
  'shortcut': 'mt-1 inline-flex items-center gap-1 text-[8px] text-[#8795aa]',
  '&shortcut kbd': 'rounded border border-[#3c4655] bg-[#1a202a] px-1 py-0.5 font-mono text-[8px] text-[#d4dcec]',
});
