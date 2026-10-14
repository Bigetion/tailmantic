import { register } from 'tailmantic/collector';

register('rgi-stepper', {
  base: { tw: 'm-0 flex list-none gap-0 p-0 text-[var(--text,#20242b)]' },
  modifiers: {
    horizontal: { tw: 'flex-row items-start' },
    vertical: { tw: 'flex-col' },
    alternative: { tw: 'items-start text-center' },
  },
});
register('rgi-step', {
  base: { tw: 'relative flex min-w-0 flex-1 items-start' },
  modifiers: {
    active: { tw: 'text-[var(--accent,#315fc4)]' },
    completed: { tw: 'text-[var(--accent,#315fc4)]' },
    disabled: { tw: 'opacity-50' },
  },
});
register('rgi-stepper-horizontal .rgi-step:not(:last-child)::after', {
  base: {
    content: '""',
    tw: 'absolute left-[calc(50%+1.25rem)] right-0 top-4 h-px bg-[var(--border,#d5d9e0)]',
  },
});
register('rgi-stepper-horizontal .rgi-step-completed:not(:last-child)::after', {
  base: { tw: 'bg-[var(--accent,#315fc4)]' },
});
register('rgi-stepper-vertical .rgi-step', { base: { tw: 'min-h-12 flex-none' } });
register('rgi-stepper-vertical .rgi-step:not(:last-child)::after', {
  base: {
    content: '""',
    tw: 'absolute bottom-0 left-4 top-8 w-px bg-[var(--border,#d5d9e0)]',
  },
});
register('rgi-stepper-vertical .rgi-step-completed:not(:last-child)::after', {
  base: { tw: 'bg-[var(--accent,#315fc4)]' },
});
register('rgi-step-content', { base: { tw: 'flex items-center gap-2' } });
register('rgi-step-button', {
  base: {
    tw: 'flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-left text-inherit disabled:cursor-not-allowed',
  },
});
register('rgi-step-indicator', {
  base: {
    tw: 'z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] text-xs font-semibold text-[var(--muted,#626a75)]',
  },
});
register('rgi-step-active .rgi-step-indicator', {
  base: { tw: 'border-[var(--accent,#315fc4)] bg-[var(--accent,#315fc4)] text-white' },
});
register('rgi-step-completed .rgi-step-indicator', {
  base: { tw: 'border-[var(--accent,#315fc4)] bg-[var(--accent,#315fc4)] text-white' },
});
register('rgi-step-copy', { base: { tw: 'flex flex-col gap-1' } });
register('rgi-step-label', { base: { tw: 'text-sm font-medium' } });
register('rgi-step-description', { base: { tw: 'text-xs text-[var(--muted,#626a75)]' } });
register('rgi-stepper-alternative .rgi-step', { base: { tw: 'flex-col items-center' } });

register('rgi-stepper-example', {
  base: {
    tw: 'flex w-full max-w-[760px] flex-col gap-4 rounded-xl border border-[#303a49] bg-[#111720] p-4 sm:gap-5 sm:p-5',
  },
});
register('rgi-stepper-example .rgi-stepper', {
  base: { tw: 'w-full' },
});
register('rgi-stepper-example .rgi-step', {
  base: { tw: 'min-w-0' },
});
register('rgi-stepper-example .rgi-step-button', {
  base: {
    tw: 'min-w-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8baeff]',
  },
});
register('rgi-stepper-example .rgi-step-indicator', {
  base: {
    tw: '!size-8 !border-[#3a4657] !bg-[#202a38] !text-[#9eacbf] transition-colors',
  },
});
register('rgi-stepper-example .rgi-step-active .rgi-step-indicator', {
  base: {
    tw: '!border-[#8baeff] !bg-[#263954] !text-[#d2e0ff] !shadow-[0_0_0_3px_#8baeff20]',
  },
});
register('rgi-stepper-example .rgi-step-completed .rgi-step-indicator', {
  base: { tw: '!border-[#4c9b78] !bg-[#203b32] !text-[#a6e2c0]' },
});
register('rgi-stepper-example .rgi-step-copy', {
  base: { tw: 'min-w-0 gap-1' },
});
register('rgi-stepper-example .rgi-step-label', {
  base: { tw: 'text-[9px] text-[#acb8c8] sm:text-[10px]' },
});
register('rgi-stepper-example .rgi-step-active .rgi-step-label', {
  base: { tw: 'font-semibold text-[#c5d7ff]' },
});
register('rgi-stepper-example .rgi-step-completed .rgi-step-label', {
  base: { tw: 'text-[#a6e2c0]' },
});
register('rgi-stepper-example .rgi-step-description', {
  base: { tw: 'max-w-36 text-[8px] leading-relaxed text-[#8997aa]' },
});
register('rgi-stepper-example-content', {
  base: {
    tw: 'flex min-h-[78px] flex-col justify-center gap-1 rounded-lg border border-[#2c3746] bg-[#151d28] px-4 py-3 [&_strong]:text-[11px] [&_strong]:font-semibold [&_span:last-child]:text-[9px] [&_span:last-child]:text-[#9ba9bc]',
  },
});
register('rgi-stepper-example-eyebrow', {
  base: { tw: 'text-[8px] font-semibold tracking-[.1em] text-[#90a8cd]' },
});
register('rgi-stepper-example-actions', {
  base: { tw: 'flex items-center justify-between gap-3' },
});
register('rgi-stepper-example-secondary', {
  base: {
    tw: 'inline-flex h-9 cursor-pointer items-center justify-center rounded-md border border-transparent bg-transparent px-3 text-xs font-medium text-[#acb8c8] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff] disabled:cursor-not-allowed disabled:opacity-40',
  },
});
register('rgi-stepper-example-primary', {
  base: {
    tw: 'inline-flex h-9 cursor-pointer items-center justify-center rounded-md border border-[#789fe8] bg-[#263954] px-4 text-xs font-semibold text-[#d2e0ff] hover:bg-[#304768] focus-visible:outline-2 focus-visible:outline-[#8baeff]',
  },
});
register('rgi-stepper-example-vertical .rgi-stepper', {
  base: { tw: 'gap-1' },
});
register('rgi-stepper-example-vertical .rgi-step', {
  base: { tw: 'min-h-14' },
});
register('rgi-stepper-example-vertical .rgi-step-copy', {
  base: { tw: 'pb-3' },
});
register('rgi-stepper-example-alternative .rgi-stepper', {
  base: { tw: 'gap-1' },
});
register('rgi-stepper-example-alternative .rgi-step-button', {
  base: { tw: 'flex-col items-center gap-2 text-center' },
});
register('rgi-stepper-example-alternative .rgi-step-copy', {
  base: { tw: 'items-center' },
});
register('rgi-stepper-example-alternative .rgi-step-label', {
  base: { tw: 'max-w-16 text-center leading-tight' },
});
register('rgi-stepper-example-alternative .rgi-step:not(:last-child)::after', {
  base: { tw: 'top-4' },
});
register('rgi-stepper-example-horizontal .rgi-stepper-horizontal', {
  base: { tw: 'max-sm:flex-col' },
});
register('rgi-stepper-example-horizontal .rgi-stepper-horizontal .rgi-step', {
  base: { tw: 'max-sm:min-h-12 max-sm:flex-none' },
});
register('rgi-stepper-example-horizontal .rgi-stepper-horizontal .rgi-step-button', {
  base: { tw: 'max-sm:items-center' },
});
register(
  'rgi-stepper-example-horizontal .rgi-stepper-horizontal .rgi-step:not(:last-child)::after',
  {
    base: {
      tw: 'max-sm:bottom-0 max-sm:left-4 max-sm:right-auto max-sm:top-8 max-sm:h-auto max-sm:w-px',
    },
  },
);
register('component-showcase-stepper .demo-content', {
  base: {
    tw: 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
  },
});
