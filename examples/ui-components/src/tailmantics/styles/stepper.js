import { register } from 'tailmantic/collector';

register.all('tm-stepper-example', {
  '': 'flex w-full max-w-[760px] flex-col gap-4 rounded-xl border border-[#303a49] bg-[#111720] p-4 sm:gap-5 sm:p-5',
  '& .tm-stepper': 'w-full',
  '& .tm-step': 'min-w-0',
  '& .tm-step-button': 'min-w-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8baeff]',
  '& .tm-step-indicator': '!size-8 !border-[#3a4657] !bg-[#202a38] !text-[#9eacbf] transition-colors',
  '& .tm-step-active .tm-step-indicator': '!border-[#8baeff] !bg-[#263954] !text-[#d2e0ff] !shadow-[0_0_0_3px_#8baeff20]',
  '& .tm-step-completed .tm-step-indicator': '!border-[#4c9b78] !bg-[#203b32] !text-[#a6e2c0]',
  '& .tm-step-copy': 'min-w-0 gap-1',
  '& .tm-step-label': 'text-[9px] text-[#acb8c8] sm:text-[10px]',
  '& .tm-step-active .tm-step-label': 'font-semibold text-[#c5d7ff]',
  '& .tm-step-completed .tm-step-label': 'text-[#a6e2c0]',
  '& .tm-step-description': 'max-w-36 text-[8px] leading-relaxed text-[#8997aa]',
  'content': 'flex min-h-[78px] flex-col justify-center gap-1 rounded-lg border border-[#2c3746] bg-[#151d28] px-4 py-3 [&_strong]:text-[11px] [&_strong]:font-semibold [&_span:last-child]:text-[9px] [&_span:last-child]:text-[#9ba9bc]',
  'eyebrow': 'text-[8px] font-semibold tracking-[.1em] text-[#90a8cd]',
  'actions': 'flex items-center justify-between gap-3',
  'secondary': 'inline-flex h-9 cursor-pointer items-center justify-center rounded-md border border-transparent bg-transparent px-3 text-xs font-medium text-[#acb8c8] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8baeff] disabled:cursor-not-allowed disabled:opacity-40',
  'primary': 'inline-flex h-9 cursor-pointer items-center justify-center rounded-md border border-[#789fe8] bg-[#263954] px-4 text-xs font-semibold text-[#d2e0ff] hover:bg-[#304768] focus-visible:outline-2 focus-visible:outline-[#8baeff]',
});

register.all('tm-stepper-example-vertical', {
  '& .tm-stepper': 'gap-1',
  '& .tm-step': 'min-h-14',
  '& .tm-step-copy': 'pb-3',
});

register.all('tm-stepper-example-alternative', {
  '& .tm-stepper': 'gap-1',
  '& .tm-step-button': 'flex-col items-center gap-2 text-center',
  '& .tm-step-copy': 'items-center',
  '& .tm-step-label': 'max-w-16 text-center leading-tight',
  '& .tm-step:not(:last-child)::after': 'top-4',
});

register.all('tm-stepper-example-horizontal', {
  '& .tm-stepper-horizontal': 'max-sm:flex-col',
  '& .tm-stepper-horizontal .tm-step': 'max-sm:min-h-12 max-sm:flex-none',
  '& .tm-stepper-horizontal .tm-step-button': 'max-sm:items-center',
  '& .tm-stepper-horizontal .tm-step:not(:last-child)::after': 'max-sm:bottom-0 max-sm:left-4 max-sm:right-auto max-sm:top-8 max-sm:h-auto max-sm:w-px',
});

register.all('component-showcase-stepper', {
  '& .demo-content': 'bg-[radial-gradient(ellipse_at_50%_0%,rgba(112,145,225,.045),transparent_68%),#0c1119]',
});
