import { register } from 'tailmantic/collector';

register.all({
  'docs-nav': { tw: 'mb-5 border-b border-[#202938] pb-3' },
  ':is(.component-nav-label)': {
    tw: 'mb-3 block px-2 text-[9px] font-semibold uppercase tracking-[.16em] text-[#7e8ba0]',
  },
  'docs-page': { tw: 'pb-12' },
  'docs-hero': { tw: 'mb-10 max-w-[820px]' },
  ':is(.docs-hero .page-heading)': { tw: 'mb-4 text-[clamp(34px,5vw,52px)] leading-[1.08]' },
  ':is(.docs-hero .page-intro)': { tw: 'max-w-[720px] text-sm leading-7 text-[#aab5c8]' },
  'docs-body': { tw: 'max-w-[900px]' },
  'docs-section': { tw: 'mb-12 scroll-mt-20' },
  ':is(.docs-section h2)': {
    tw: 'mb-3 mt-0 text-[21px] font-semibold tracking-[-.025em] text-[#e8edf7]',
  },
  ':is(.docs-section h3)': { tw: 'text-sm font-semibold text-[#dbe3f1]' },
  ':is(.docs-section p)': { tw: 'mb-4 max-w-[760px] text-[12px] leading-6 text-[#9aa8bd]' },
  ':is(.docs-section p code)': {
    tw: 'rounded border border-[#293448] bg-[#111720] px-1.5 py-0.5 font-mono text-[10px] text-[#b9c9ec]',
  },
  ':is(.docs-section a:not(.docs-primary-link, .docs-secondary-link, .component-index-card))': {
    tw: 'text-[var(--tm-blue)] underline decoration-[#647da8]/50 underline-offset-4 hover:text-white',
  },
  'docs-quickstart': {
    tw: 'grid grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)] items-center gap-8 rounded-2xl border border-[#293448] bg-[linear-gradient(135deg,#121a28,#0e141e)] p-7 max-sm:grid-cols-1 max-sm:p-5',
  },
  ':is(.docs-quickstart h2)': { tw: 'text-[25px]' },
  ':is(.docs-quickstart p:not(.component-count))': { tw: 'mb-5' },
  'docs-actions': { tw: 'flex flex-wrap items-center gap-4' },
  'docs-primary-link': {
    tw: 'inline-flex h-9 items-center gap-2 rounded-lg bg-[#547be8] px-3.5 text-[11px] font-semibold text-white no-underline hover:bg-[#6689ef]',
  },
  'docs-secondary-link': {
    tw: 'text-[11px] font-medium text-[#b9c9ec] no-underline hover:text-white',
  },
  'docs-code': {
    tw: 'overflow-x-auto rounded-xl border border-[#293448] bg-[#090d14] px-5 py-4 text-[11px] leading-6 text-[#d1d9e7]',
  },
  'docs-code code': { tw: 'font-mono' },
  'docs-callout': {
    tw: 'rounded-r-lg border-l-2 border-[#789df5] bg-[#111a2b] px-4 py-3 text-[11px]',
  },
  'docs-section-heading': { tw: 'mb-4 flex items-end justify-between gap-4' },
  ':is(.docs-section-heading h2)': { tw: 'mb-0' },
  ':is(.docs-section-heading > a)': {
    tw: 'mb-1 inline-flex shrink-0 items-center gap-1.5 text-[10px] text-[var(--tm-blue)] no-underline hover:text-white',
  },
  ':is(.docs-section-heading > span)': { tw: 'mb-1 text-[10px] text-[var(--subtle)]' },
  'docs-feature-grid': { tw: 'mb-7 grid grid-cols-3 gap-3 max-sm:grid-cols-1' },
  'docs-feature-grid > div': {
    tw: 'flex flex-col items-start gap-2 rounded-xl border border-[var(--border)] bg-[#111720]/70 p-4',
  },
  'docs-feature-grid svg': { tw: 'text-[var(--tm-blue)]' },
  'docs-feature-grid strong': { tw: 'text-[11px] font-semibold text-[#dce4f2]' },
  'docs-feature-grid span': { tw: 'text-[10px] leading-5 text-[var(--subtle)]' },
  'docs-category-list': { tw: 'grid gap-5' },
  ':is(.docs-category-list > section)': { tw: 'border-t border-[var(--border)] pt-4' },
  ':is(.docs-category-list > section > div)': { tw: 'flex flex-wrap gap-2' },
  ':is(.docs-category-list a)': {
    tw: 'inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[#111720] px-3 py-2 text-[10px] text-[#b9c5d7] no-underline hover:border-[#536985] hover:text-white',
  },
  'component-index-section': { tw: 'mb-10' },
  'component-index-grid': { tw: 'grid grid-cols-2 gap-2.5 max-sm:grid-cols-1' },
  'component-index-card': {
    tw: 'relative flex min-h-[88px] flex-col gap-2 rounded-xl border border-[var(--border)] bg-[#111720]/70 p-4 pr-10 no-underline transition-colors hover:border-[#536985] hover:bg-[#151e2b]',
  },
  ':is(.component-index-card strong)': { tw: 'text-[11px] font-semibold text-[#dce4f2]' },
  ':is(.component-index-card span)': { tw: 'text-[10px] leading-5 text-[var(--subtle)]' },
  ':is(.component-index-card svg)': { tw: 'absolute right-4 top-4 text-[var(--tm-blue)]' },
  'docs-api-card': {
    tw: 'grid gap-3 rounded-xl border border-[var(--border)] bg-[#111720]/70 p-5',
  },
  ':is(.docs-api-card > div)': { tw: 'grid gap-1.5' },
  ':is(.docs-api-card > div > span)': {
    tw: 'text-[9px] font-semibold uppercase tracking-[.12em] text-[var(--subtle)]',
  },
  ':is(.docs-api-card code)': { tw: 'font-mono text-[11px] text-[#c5d3ef]' },
  ':is(.docs-api-card > a)': {
    tw: 'inline-flex w-fit items-center gap-2 text-[10px] text-[var(--tm-blue)] hover:text-white',
  },
  ':is(.docs-api-card p)': { tw: 'mb-0 text-[10px] leading-5 text-[var(--subtle)]' },
});
