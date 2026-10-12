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
