import { register } from 'tailmantic/collector';

register.all({
  '*': {
    'box-sizing': 'border-box',
    '@media (prefers-reduced-motion: reduce)': {
      'scroll-behavior': 'auto',
      'animation-duration': '0.01ms',
      'animation-iteration-count': '1',
      'transition-duration': '0.01ms',
    },
  },
  body: {
    tw: 'm-0 min-h-screen bg-[var(--page)] font-[DM_Sans,sans-serif] text-sm text-[var(--text)] antialiased',
  },
  'app-shell': {
    tw: 'flex min-h-screen bg-[var(--page)] max-md:flex-col',
  },
  sidebar: {
    tw: 'sticky top-0 flex h-screen w-[250px] shrink-0 flex-col overflow-y-auto border-r border-[var(--demo-sidebar-border)] bg-[var(--demo-sidebar)] px-3 py-5 max-md:static max-md:h-auto max-md:w-full max-md:border-r-0 max-md:border-b max-md:py-3',
  },
  'sidebar-brand': {
    tw: 'mb-6 flex items-center gap-2 px-3 text-sm font-bold tracking-wide text-white no-underline max-md:mb-3',
  },
  'brand-mark': {
    tw: 'inline-flex size-7 items-center justify-center rounded-md bg-[var(--rgi-blue-dark)] text-sm font-bold text-white',
  },
  'sidebar-nav': {
    tw: 'flex flex-col gap-5 max-md:flex-row max-md:overflow-x-auto max-md:gap-4',
  },
  'sidebar-group': {
    tw: 'flex flex-col gap-1 max-md:min-w-max',
  },
  'sidebar-group-label': {
    tw: 'mb-1 px-3 text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--demo-sidebar-muted)] max-md:hidden',
  },
  'sidebar-item': {
    tw: 'flex cursor-pointer items-center gap-2.5 rounded-md border-0 bg-transparent px-3 py-2 text-left text-xs font-medium text-[var(--demo-sidebar-muted)] no-underline transition-colors hover:bg-white/[.05] hover:text-white focus-visible:outline-2 focus-visible:outline-[var(--demo-accent)]',
  },
  'sidebar-item-active': {
    tw: 'flex cursor-pointer items-center gap-2.5 rounded-md border-0 bg-[var(--rgi-blue-soft)] px-3 py-2 text-left text-xs font-semibold text-[var(--demo-accent)] no-underline focus-visible:outline-2 focus-visible:outline-[var(--demo-accent)]',
  },
  'main-content': {
    tw: 'min-w-0 flex-1 px-[clamp(1.5rem,5vw,5rem)] py-10 max-sm:px-4 max-sm:py-6',
  },
  'content-frame': {
    tw: 'mx-auto w-full max-w-[1100px]',
  },
  'demo-topline': {
    tw: 'mb-7 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--muted)]',
  },
  'demo-header': {
    tw: 'mb-8 flex items-end justify-between gap-6 border-b border-[var(--border)] pb-6 max-sm:mb-6',
  },
  'demo-eyebrow': {
    tw: 'mb-2 block text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--rgi-blue)]',
  },
  'demo-title': {
    tw: 'mb-1 text-4xl font-semibold tracking-tight text-[var(--text)] max-sm:text-3xl',
  },
  'demo-desc': {
    tw: 'm-0 max-w-[650px] text-sm leading-relaxed text-[var(--muted)]',
  },
  'demo-stage': {
    tw: 'flex min-h-[360px] flex-col gap-8 pb-10',
  },
  'demo-section': {
    tw: 'flex flex-col gap-4 border-b border-[var(--border)] pb-7 last:border-b-0',
  },
  'demo-section-title': {
    tw: 'text-xs font-semibold text-[var(--text-muted)]',
  },
  'demo-row': {
    tw: 'flex flex-wrap items-center gap-3',
  },
  'demo-col': {
    tw: 'flex max-w-[420px] flex-col gap-4',
  },
  'demo-grid': {
    tw: 'grid gap-4 sm:grid-cols-2 xl:grid-cols-3',
  },
  'demo-surface': {
    tw: 'rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5',
  },
  'demo-control': {
    tw: 'flex items-center gap-3 text-sm text-[var(--text)]',
  },
  'demo-card': {
    tw: 'flex flex-col gap-3 p-5',
  },
  'demo-note': {
    tw: 'text-xs leading-relaxed text-[var(--muted)]',
  },
});
