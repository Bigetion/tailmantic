import { register } from 'tailmantic/collector';

register.all('tm-stepper', {
  '': 'm-0 flex list-none gap-0 p-0 text-[var(--text,#20242b)]',
  horizontal: 'flex-row items-start',
  vertical: 'flex-col',
  alternative: 'items-start text-center',
});

register.all('tm-step', {
  '': 'relative flex min-w-0 flex-1 items-start',
  active: 'text-[var(--accent,#315fc4)]',
  completed: 'text-[var(--accent,#315fc4)]',
  disabled: 'opacity-50',
});

register.all({
  'tm-stepper-horizontal .tm-step:not(:last-child)::after': {
    content: '""',
    tw: 'absolute left-[calc(50%+1.25rem)] right-0 top-4 h-px bg-[var(--border,#d5d9e0)]',
  },
});

register.all({
  'tm-stepper-horizontal .tm-step-completed:not(:last-child)::after': 'bg-[var(--accent,#315fc4)]',
});

register.all({ 'tm-stepper-vertical .tm-step': 'min-h-12 flex-none' });

register.all({
  'tm-stepper-vertical .tm-step:not(:last-child)::after': {
    content: '""',
    tw: 'absolute bottom-0 left-4 top-8 w-px bg-[var(--border,#d5d9e0)]',
  },
});

register.all({
  'tm-stepper-vertical .tm-step-completed:not(:last-child)::after': 'bg-[var(--accent,#315fc4)]',
});

register.all({
  'tm-step-active .tm-step-indicator':
    'border-[var(--accent,#315fc4)] bg-[var(--accent,#315fc4)] text-white',
});

register.all({
  'tm-step-completed .tm-step-indicator':
    'border-[var(--accent,#315fc4)] bg-[var(--accent,#315fc4)] text-white',
});

register.all({ 'tm-stepper-alternative .tm-step': 'flex-col items-center' });

register.all('tm-step', {
  content: 'flex items-center gap-2',
  button:
    'flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-left text-inherit disabled:cursor-not-allowed',
  indicator:
    'z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] text-xs font-semibold text-[var(--muted,#626a75)]',
  copy: 'flex flex-col gap-1',
  label: 'text-sm font-medium',
  description: 'text-xs text-[var(--muted,#626a75)]',
});
