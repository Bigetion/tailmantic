import { register } from 'tailmantic/collector';

register('avatar-stack', {
  base: { tw: 'flex -space-x-2 [&_.rgi-avatar]:border-2 [&_.rgi-avatar]:border-[var(--panel)]' },
});

register('avatar-indigo', {
  base: { tw: 'bg-[#334a72] text-[#e6eeff]' },
});

register('avatar-teal', {
  base: { tw: 'bg-[#21594f] text-[#c9f2e7]' },
});

register('avatar-amber', {
  base: { tw: 'bg-[#65472d] text-[#ffe1bd]' },
});

register('avatar-violet', {
  base: { tw: 'bg-[#514276] text-[#e5dcff]' },
});

register('avatar-neutral', {
  base: { tw: 'bg-[#303844] text-[#c0cad8]' },
});

register('avatar-examples', {
  base: { tw: 'flex flex-wrap items-center gap-3' },
});

register('avatar-size-examples', {
  base: { tw: 'flex flex-wrap items-end gap-4' },
});

register('avatar-size-item', {
  base: { tw: 'flex flex-col items-center gap-2' },
});

register('avatar-size-label', {
  base: { tw: 'font-mono text-[9px] text-[#8491a5]' },
});

register('avatar-group', {
  base: { tw: 'flex items-center -space-x-2 [&_.rgi-avatar]:border-2 [&_.rgi-avatar]:border-[#111720]' },
});

register('avatar-group-overflow', {
  base: { tw: 'relative z-0 inline-flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-[#111720] bg-[#252f40] text-[10px] font-semibold text-[#c0ccdf]' },
});
