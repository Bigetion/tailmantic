import { register } from 'tailmantic/collector';

register('rgi-menu-positioner', { base: { tw: 'z-50' } });
register('rgi-menu', {
  base: {
    tw: 'max-h-[min(24rem,80vh)] min-w-48 overflow-auto rounded-md border border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] p-1 text-[var(--text,#20242b)] shadow-[0_8px_24px_rgba(0,0,0,.16)]',
  },
});
register('rgi-menu-item', {
  base: {
    tw: 'flex w-full cursor-pointer items-center rounded px-3 py-2 text-left text-sm focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)] hover:bg-[var(--surface-hover,#f0f2f5)]',
  },
});
register('rgi-menu-item-disabled', { base: { tw: 'cursor-not-allowed opacity-45' } });

register('rgi-menu-surface', {
  base: {
    tw: 'z-50 w-[min(220px,calc(100vw-24px))] overflow-hidden rounded-lg border border-[#354154] bg-[#171f2c] text-[var(--text)] shadow-[0_16px_38px_rgba(0,0,0,.48)]',
  },
});

register('rgi-menu-list', {
  base: { tw: 'flex flex-col p-1' },
});

register('rgi-menu-item-danger', {
  base: {
    tw: 'text-[#f09a9a] hover:bg-[#4a252c] hover:text-[#ffb4b4] focus-visible:bg-[#4a252c] [&_svg]:text-[#e78d96]',
  },
});

register('rgi-menu-item[aria-checked="true"]', {
  base: {
    tw: 'bg-[#20304a] text-[#d9e5ff] [&_svg]:ml-auto [&_svg]:text-[#9edab7]',
  },
});
