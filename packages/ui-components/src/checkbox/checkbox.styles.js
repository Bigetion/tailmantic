import { register } from 'tailmantic/collector';

register.all('tm-checkbox', {
  '': 'relative mt-0.5 flex size-[17px] shrink-0 items-center justify-center rounded-[5px] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#86a6ff]',
  input: 'absolute inset-0 z-10 m-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed',
  indicator:
    'flex size-[17px] items-center justify-center rounded-[5px] border border-[#53627a] bg-[#0e1420] text-[#0c1421] transition-[background-color,border-color,box-shadow]',
  checked: 'border-[#84a2f1] bg-[#84a2f1]',
  indeterminate: 'border-[#84a2f1] bg-[#84a2f1]',
  disabled: 'cursor-not-allowed opacity-45',
  dash: 'h-0.5 w-2 rounded-full bg-[#101722]',
});
