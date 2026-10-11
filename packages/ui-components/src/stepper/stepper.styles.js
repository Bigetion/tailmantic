import { register } from 'tailmantic/collector';

register('tm-stepper', {
  base: { tw: 'm-0 flex list-none gap-0 p-0 text-[var(--text,#20242b)]' },
  modifiers: {
    horizontal: { tw: 'flex-row items-start' },
    vertical: { tw: 'flex-col' },
    alternative: { tw: 'items-start text-center' },
  },
});
register('tm-step', {
  base: { tw: 'relative flex min-w-0 flex-1 items-start' },
  modifiers: {
    active: { tw: 'text-[var(--accent,#315fc4)]' },
    completed: { tw: 'text-[var(--accent,#315fc4)]' },
    disabled: { tw: 'opacity-50' },
  },
});
register('tm-stepper-horizontal .tm-step:not(:last-child)::after', {
  base: {
    content: '""',
    tw: 'absolute left-[calc(50%+1.25rem)] right-0 top-4 h-px bg-[var(--border,#d5d9e0)]',
  },
});
register('tm-stepper-vertical .tm-step', { base: { tw: 'min-h-12 flex-none' } });
register('tm-step-content', { base: { tw: 'flex items-center gap-2' } });
register('tm-step-button', {
  base: {
    tw: 'flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-left text-inherit disabled:cursor-not-allowed',
  },
});
register('tm-step-indicator', {
  base: {
    tw: 'z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] text-xs font-semibold text-[var(--muted,#626a75)]',
  },
});
register('tm-step-active .tm-step-indicator', {
  base: { tw: 'border-[var(--accent,#315fc4)] bg-[var(--accent,#315fc4)] text-white' },
});
register('tm-step-completed .tm-step-indicator', {
  base: { tw: 'border-[var(--accent,#315fc4)] bg-[var(--accent,#315fc4)] text-white' },
});
register('tm-step-copy', { base: { tw: 'flex flex-col gap-1' } });
register('tm-step-label', { base: { tw: 'text-sm font-medium' } });
register('tm-step-description', { base: { tw: 'text-xs text-[var(--muted,#626a75)]' } });
register('tm-stepper-alternative .tm-step', { base: { tw: 'flex-col items-center' } });
