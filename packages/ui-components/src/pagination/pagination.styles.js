import { register } from 'tailmantic/collector';

register('rgi-pagination', { base: { tw: 'flex justify-center text-[var(--text,#20242b)]' } });
register('rgi-pagination-list', { base: { tw: 'm-0 flex list-none items-center gap-1 p-0' } });
register('rgi-pagination-button', {
  base: {
    tw: 'flex size-9 cursor-pointer items-center justify-center rounded border border-[var(--border,#d5d9e0)] bg-[var(--surface,#fff)] text-sm text-[var(--text,#20242b)] hover:bg-[var(--surface-hover,#f0f2f5)] focus-visible:outline-2 focus-visible:outline-[var(--accent,#315fc4)] disabled:cursor-not-allowed disabled:opacity-45',
  },
});
register('rgi-pagination-current', {
  base: { tw: 'border-[var(--accent,#315fc4)] bg-[var(--accent,#315fc4)] text-white' },
});
register('rgi-pagination-ellipsis', {
  base: { tw: 'flex size-9 items-center justify-center text-[var(--muted,#626a75)]' },
});

register('rgi-pagination-outlined .rgi-pagination-button', {
  base: { tw: 'border border-[#354154] bg-[#171f2c] hover:border-[#536985] hover:bg-[#202b3a]' },
});

register('rgi-pagination-outlined .rgi-pagination-current', {
  base: { tw: 'border-[#789fe8] bg-[#263954] text-[#d2e0ff] hover:border-[#789fe8] hover:bg-[#263954]' },
});

register('rgi-pagination-outlined .rgi-pagination-button:disabled', {
  base: { tw: 'border-[#2d3643] bg-[#141a23]' },
});
