import { register } from 'tailmantic/collector';

register.all('rgi-icon-glyph', {
  '': 'inline-block shrink-0 align-middle text-[var(--rgi-icon-color,currentColor)]',
  'grid': 'grid w-full grid-cols-[repeat(auto-fit,minmax(82px,1fr))] gap-2',
  'tile': 'flex min-h-[82px] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-[#29364c] bg-[linear-gradient(145deg,#182235,#111824)] px-1 py-3 text-[#aebcda] shadow-[inset_0_0_0_1px_rgba(155,188,255,.04)] hover:border-[#526b9a] hover:text-[#d3dfff] [&_span]:text-[9px]',
  'symbol': 'inline-flex size-9 items-center justify-center rounded-full text-[#b8cbff]',
  'tile-selected': 'border-[#547be8] bg-[linear-gradient(145deg,#24395d,#18253b)] text-[#e0e9ff] shadow-[inset_0_0_0_1px_rgba(155,188,255,.12)]',
  '&tile-selected .rgi-icon-glyph-symbol': 'bg-[#304d7e] text-white',
  'selection': 'inline-flex w-fit items-center gap-2 rounded-md border border-[#29364c] bg-[#141e2d] px-2.5 py-1.5 text-[10px] font-medium text-[#c7d5f5]',
  'size-list': 'flex w-full max-w-[460px] flex-col divide-y divide-[var(--border)] rounded-lg border border-[var(--border)] bg-[var(--panel)] px-3',
  'size-item': 'flex min-h-[62px] items-center gap-3 py-2',
  'size-symbol': 'inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-[#1a2639] text-[#b8cbff]',
  '&size-item span': 'flex min-w-0 flex-1 flex-col gap-1',
  '&size-item strong': 'text-[11px] font-medium text-[var(--text)]',
  '&size-item small': 'text-[9px] text-[var(--muted)]',
  '&size-item code': 'font-mono text-[10px] text-[#9eb6e9]',
  'toolbar': 'flex flex-wrap items-center gap-1 rounded-lg border border-[#29364c] bg-[#141e2d] p-1.5',
  '&toolbar button': 'relative inline-flex size-9 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent text-[#aebcda] hover:bg-[#24334b] hover:text-[#e0e9ff] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#789df5]',
  '&toolbar .rgi-icon-glyph-cart': 'mr-1',
  '&cart span': 'absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#547be8] px-1 text-[8px] font-bold leading-none text-white',
  'action-active': 'bg-[#3c2027] text-[#f08b98] hover:bg-[#49262f] hover:text-[#ffb4be]',
});
