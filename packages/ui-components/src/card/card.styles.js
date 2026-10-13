import { register } from 'tailmantic/collector';

register('rgi-card', {
  base: { tw: 'overflow-hidden rounded-xl bg-[var(--panel,#111824)] text-[var(--text,#edf2fb)]' },
  modifiers: {
    elevated: { tw: 'border border-[var(--border,#273142)]' },
    outlined: { tw: 'border border-[var(--border,#354257)] shadow-none' },
    flat: { tw: 'border border-transparent shadow-none' },
    'elevation-0': { tw: 'shadow-none' },
    'elevation-1': { tw: 'shadow-[0_2px_8px_rgba(0,0,0,.16)]' },
    'elevation-2': { tw: 'shadow-[0_5px_16px_rgba(0,0,0,.2)]' },
    'elevation-3': { tw: 'shadow-[0_10px_28px_rgba(0,0,0,.25)]' },
    interactive: {
      tw: 'transition-[border-color,box-shadow,transform] duration-150 hover:-translate-y-px hover:border-[var(--rgi-blue,#9bbcff)] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--rgi-blue,#9bbcff)]',
    },
  },
});

register('rgi-card-example', {
  base: { tw: 'w-full max-w-[440px]' },
});

register('rgi-card-example-project', {
  base: { tw: 'p-5' },
});

register('rgi-card-example-project-top', {
  base: { tw: 'flex items-center justify-between' },
});

register('rgi-card-example-project-icon', {
  base: {
    tw: 'inline-flex size-10 items-center justify-center rounded-xl border border-[#344358] bg-[#202d40] text-[#a9c4ff]',
  },
});

register('rgi-card-example-more', {
  base: {
    tw: 'inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent p-0 text-[#8995a7] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8baeff]',
  },
});

register('rgi-card-example-copy', {
  base: { tw: 'flex flex-col items-start gap-2' },
});

register('rgi-card-example-eyebrow', {
  base: { tw: 'text-[10px] font-semibold tracking-[.16em] text-[#8694a9]' },
});

register('rgi-card-example-copy h3', {
  base: { tw: 'm-0 text-lg font-semibold tracking-tight text-[var(--text)]' },
});

register('rgi-card-example-copy p', {
  base: { tw: 'm-0 text-sm leading-relaxed text-[var(--muted)]' },
});

register('rgi-card-example-project-top + .rgi-card-example-copy', {
  base: { tw: 'mt-5' },
});

register('rgi-card-example-project-meta', {
  base: {
    tw: 'mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)]',
  },
});

register('rgi-card-example-status', {
  base: {
    tw: 'inline-flex items-center gap-2 rounded-full border border-[#5b4a2b] bg-[#2d281d] px-3 py-1.5 text-[#dfbd78]',
  },
});

register('rgi-card-example-status i', {
  base: { tw: 'size-2 rounded-full bg-[#e3b85f]' },
});

register('rgi-card-example-team', {
  base: { tw: 'inline-flex items-center gap-2' },
});

register('rgi-card-example-project-footer', {
  base: { tw: 'mt-4 flex items-center justify-between gap-3' },
});

register('rgi-card-example-avatar-stack', {
  base: {
    tw: 'm-0 list-none flex items-center [&_li]:-ml-2 [&_li:first-child]:ml-0 [&_li]:inline-flex [&_li]:size-8 [&_li]:items-center [&_li]:justify-center [&_li]:rounded-full [&_li]:border-2 [&_li]:border-[#141b26] [&_li]:bg-[#344358] [&_li]:text-[9px] [&_li]:font-semibold [&_li]:text-[#e0e8f4] [&_li:last-child]:bg-[#252e3c] [&_li:last-child]:text-[#aab4c3]',
  },
});

register('rgi-card-example-open', {
  base: {
    tw: 'inline-flex h-9 cursor-pointer items-center gap-2 rounded-lg border border-[#354358] bg-transparent px-3 text-xs font-medium text-[#c4d4f2] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8baeff]',
  },
});

register('rgi-card-example-action', {
  base: { tw: 'p-5' },
});

register('rgi-card-example-author', {
  base: { tw: 'flex items-center gap-3' },
});

register('rgi-card-example-author-avatar', {
  base: {
    tw: 'inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-[#49586c] bg-[#2a394e] text-[10px] font-semibold text-[#d8e4f7]',
  },
});

register('rgi-card-example-author-details', {
  base: {
    tw: 'flex min-w-0 flex-1 flex-col gap-1 [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:text-[var(--text)] [&_small]:text-xs [&_small]:text-[var(--muted)]',
  },
});

register('rgi-card-example-action-copy', {
  base: { tw: 'mt-5' },
});

register('rgi-card-example-tags', {
  base: {
    tw: 'mt-4 flex items-center gap-2 [&_span]:rounded-full [&_span]:border [&_span]:border-[#364151] [&_span]:px-3 [&_span]:py-1.5 [&_span]:text-xs [&_span]:text-[#aab5c5]',
  },
});

register('rgi-card-example-actions', {
  base: { tw: 'mt-4 flex items-center gap-2 border-t border-[var(--border)] pt-3' },
});

register('rgi-card-example-action-button', {
  base: {
    tw: 'inline-flex h-9 cursor-pointer items-center gap-2 rounded-lg border-0 bg-transparent px-3 text-xs font-medium text-[#aab5c5] hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8baeff]',
  },
});

register('rgi-card-example-action-button.is-active', {
  base: { tw: 'text-[#f28da0]' },
});

register('rgi-card-example-media', {
  base: { tw: 'max-w-[440px]' },
});

register('rgi-card-example-media-visual', {
  base: {
    tw: 'relative flex h-44 items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#1c2a3b_0%,#344768_52%,#273144_100%)]',
  },
});

register('rgi-card-example-media-orbit', {
  base: { tw: 'absolute rounded-full border border-[#b6cbff]/20' },
});

register('rgi-card-example-media-orbit-one', {
  base: { tw: 'size-56' },
});

register('rgi-card-example-media-orbit-two', {
  base: { tw: 'size-36' },
});

register('rgi-card-example-media-art', {
  base: {
    tw: 'relative inline-flex size-16 items-center justify-center rounded-2xl border border-[#b6cbff]/30 bg-[#d5e1f1]/10 text-[#cfddff] shadow-[0_10px_40px_rgba(0,0,0,.25)]',
  },
});

register('rgi-card-example-media-label', {
  base: {
    tw: 'absolute bottom-4 left-4 text-[10px] font-semibold tracking-[.16em] text-[#d9e4f6]/75',
  },
});

register('rgi-card-example-media-content', {
  base: { tw: 'p-5' },
});

register('rgi-card-example-media-heading', {
  base: {
    tw: 'flex items-center justify-between gap-2 [&_span]:text-[10px] [&_span]:font-semibold [&_span]:tracking-[.12em] [&_span:first-child]:text-[#a9c4ff] [&_span:last-child]:text-[var(--muted)]',
  },
});

register('rgi-card-example-media-content h3', {
  base: { tw: 'mt-3 text-base font-semibold tracking-tight' },
});

register('rgi-card-example-media-content p', {
  base: { tw: 'mt-2' },
});

register('rgi-card-example-media-footer', {
  base: { tw: 'mt-4 flex items-center justify-between border-t border-[var(--border)] pt-3' },
});

register('rgi-card-example-media-author', {
  base: {
    tw: 'inline-flex items-center gap-2.5 text-xs text-[#b8c2d0] [&_.rgi-card-example-author-avatar]:size-8 [&_.rgi-card-example-author-avatar]:text-[9px]',
  },
});
