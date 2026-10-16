import { register } from 'tailmantic/collector';

register.all({
  ':root': {
    '--tm-blue': '#9bbcff',
    '--tm-blue-dark': '#547be8',
    '--tm-blue-soft': 'rgba(125,159,255,.12)',
    '--accent': '#547be8',
    '--page': '#090c12',
    '--panel': '#10151e',
    '--panel-raised': '#171e2a',
    '--panel-sunken': '#0d1117',
    '--panel-hover': '#20304a',
    '--surface': '#101722',
    '--surface-raised': '#1f2937',
    '--surface-hover': '#20304a',
    '--border': '#273142',
    '--text': '#edf2fb',
    '--muted': '#a3aec0',
    '--subtle': '#717f95',
    '--text-muted': '#aab6ca',
    '--text-subtle': '#8996aa',
    '--green': '#7bd6b0',
    '--orange': '#f4bd7a',
    '--red': '#ff858e',
    '--danger': '#dc737b',
    '--danger-soft': 'rgba(220,115,123,.2)',
    '--tm-error': '#f5b2b8',
    '--tm-error-bg': '#351d22',
    '--tm-error-border': '#794248',
    '--tm-info': '#a9d6f5',
    '--tm-info-bg': '#142b3b',
    '--tm-info-border': '#315a78',
    '--tm-success': '#a9dfba',
    '--tm-success-bg': '#162e22',
    '--tm-success-border': '#356548',
    '--tm-warning': '#ffdc9b',
    '--tm-warning-bg': '#342a17',
    '--tm-warning-border': '#785c28',
    '--tm-dialog-backdrop': 'rgba(0,0,0,.58)',
    '--tm-tooltip-bg': '#263244',
    '--tm-tooltip-color': '#fff',
    '--tm-icon-color': 'currentColor',
    '--tm-avatar-bg': 'var(--panel-raised)',
    '--tm-avatar-color': 'var(--text)',
    '--tm-badge-outline': 'var(--surface)',
    '--tm-typography-color': 'var(--text)',
    '--tm-progress-track': '#293447',
    '--tm-skeleton': '#303b4c',
    '--tm-skeleton-highlight': 'rgba(255,255,255,.12)',
    '--tm-table-head': 'var(--surface)',
    '--tm-table-hover': 'var(--panel-raised)',
    '--tm-table-stripe': 'rgba(127,145,170,.06)',
    '--switch-thumb': '#e1e7f0',
    '--switch-track': '#465164',
    '--slider-track': '#29364c',
    '--slider-thumb-border': '#d8e3ff',
    '--rating-color': '#e3a927',
    '--radius': '12px',
  },
  body: {
    color: '#edf2fb',
    'background-color': '#090c12',
    'font-family': '"DM Sans", sans-serif',
    'min-height': '100vh',
    margin: '0',
  },
  'app-shell': {
    tw: 'min-h-screen',
  },
  topbar: {
    tw: 'sticky top-0 z-30 flex h-14 items-center border-b border-[#273142] bg-[#0d1118]/95 px-5 backdrop-blur max-sm:px-3',
  },
  'playground-brand': {
    tw: 'flex min-w-0 items-center gap-2.5 no-underline',
  },
  'brand-lockup': {
    tw: 'flex items-center gap-2.5 no-underline',
  },
  'brand-mark': {
    tw: 'flex size-7 items-center justify-center rounded-md bg-[#547be8] text-white',
  },
  'brand-name': {
    tw: 'text-[13px] font-semibold tracking-wide text-[#e8edf8]',
  },
  'topbar-spacer': {
    tw: 'flex-1',
  },
  'version-badge': {
    tw: 'rounded-full border border-[#293448] bg-[#121925] px-2.5 py-1 font-mono text-[10px] text-[#aab6ca] max-sm:max-w-[52vw] max-sm:truncate',
  },
  'app-layout': {
    tw: 'mx-auto grid min-h-[calc(100vh-56px)] max-w-[1600px] grid-cols-[240px_minmax(0,1fr)] max-md:grid-cols-1',
  },
  sidebar: {
    tw: 'sticky top-14 flex h-[calc(100vh-56px)] flex-col border-r border-[#273142] bg-[#0d1118] px-3 py-5 max-md:sticky max-md:top-14 max-md:h-[220px] max-md:border-b max-md:border-r-0',
  },
  'sidebar-intro': {
    tw: 'mb-4 px-2',
  },
  'sidebar-label': {
    tw: 'text-[10px] font-semibold uppercase tracking-[.14em] text-[#7f8ca2]',
  },
  'playground-search': {
    tw: 'mb-4',
  },
  'search-box': {
    tw: 'flex h-9 items-center gap-2 rounded-md border border-[#273142] bg-[#121925] px-2.5 text-[#8694aa]',
  },
  'search-box input': {
    tw: 'min-w-0 flex-1 border-0 bg-transparent text-xs text-[#edf2fb] outline-none placeholder:text-[#748198]',
  },
  'sidebar-scroll': {
    tw: 'min-h-0 flex-1 space-y-5 overflow-y-auto',
  },
  'nav-section': {
    tw: 'grid gap-1',
  },
  'nav-heading': {
    tw: 'mb-1 flex items-center justify-between px-2 text-[10px] font-semibold uppercase tracking-[.12em] text-[#76839a]',
  },
  'nav-group-count': {
    tw: 'font-mono text-[9px] text-[#68758b]',
  },
  ':is(.nav-link, .nav-link-active)': {
    tw: 'flex min-h-8 items-center justify-between rounded-md px-2 text-xs no-underline transition-colors',
  },
  'nav-link': {
    tw: 'text-[#a3aec0] hover:bg-[#171e2a] hover:text-[#edf2fb]',
  },
  'nav-link-active': {
    tw: 'bg-[#1a2943] font-medium text-[#b8ceff]',
  },
  'empty-search': {
    tw: 'py-5 text-xs text-[#8996aa]',
  },
  'main-content': {
    tw: 'min-w-0 px-8 py-8 max-md:px-4 max-md:py-5',
  },
  'content-width': {
    tw: 'mx-auto w-full max-w-[1120px]',
  },
  'playground-home': {
    tw: 'pb-12',
  },
  'playground-hero': {
    tw: 'mb-9 max-w-[760px]',
  },
  'component-count': {
    tw: 'mb-3 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[.14em] text-[#9bbcff]',
  },
  eyebrow: {
    tw: 'mb-3 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[.14em] text-[#9bbcff]',
  },
  'page-heading': {
    tw: 'mb-3 text-[clamp(34px,5vw,50px)] font-semibold leading-[1.08] tracking-[-.04em] text-[#edf2fb]',
  },
  'page-intro': {
    tw: 'max-w-[680px] text-sm leading-7 text-[#a3aec0]',
  },
  ':is(.playground-hero .page-intro code)': {
    tw: 'rounded border border-[#293448] bg-[#111720] px-1.5 py-0.5 font-mono text-[11px] text-[#c5d3ef]',
  },
  'playground-summary': {
    tw: 'mt-5 flex items-center gap-2 text-[10px] text-[var(--subtle)]',
  },
  'playground-summary strong': {
    tw: 'font-semibold text-[#dce4f2]',
  },
  'playground-status-dot': {
    tw: 'size-1.5 rounded-full bg-[#7bd6b0] shadow-[0_0_8px_rgba(123,214,176,.7)]',
  },
  'playground-categories': {
    tw: 'grid gap-7',
  },
  'playground-category': {
    tw: 'min-w-0',
  },
  'docs-section-heading': {
    tw: 'mb-3 flex items-center justify-between border-b border-[#273142] pb-2',
  },
  'docs-section-heading h2': {
    tw: 'text-sm font-semibold text-[#e5ebf6]',
  },
  'docs-section-heading span': {
    tw: 'text-[10px] text-[#8794a9]',
  },
  'component-index-grid': {
    tw: 'grid grid-cols-2 gap-2.5 xl:grid-cols-3',
  },
  'component-index-card': {
    tw: 'relative grid min-h-[88px] content-start gap-1 rounded-lg border border-[#273142] bg-[#111720] p-3 pr-9 no-underline transition-colors hover:border-[#526b9b] hover:bg-[#151e2b]',
  },
  'component-index-card strong': {
    tw: 'text-xs font-semibold text-[#e5ebf6]',
  },
  'component-index-card span': {
    tw: 'text-[10px] leading-4 text-[#8794a9]',
  },
  'component-index-card svg': {
    tw: 'absolute right-3 top-3 text-[#7486a4]',
  },
  'component-test-page': {
    tw: 'mx-auto w-full max-w-[940px] pb-12',
  },
  'component-test-header': {
    tw: 'mb-5',
  },
  'component-test-header h1': {
    tw: 'mb-2 text-3xl font-semibold tracking-[-.03em] text-[#edf2fb]',
  },
  'component-test-header p:last-child': {
    tw: 'text-sm leading-6 text-[#a3aec0]',
  },
  'component-package-info': {
    tw: 'mb-5 flex min-w-0 flex-wrap items-center gap-2 rounded-md border border-[#273142] bg-[#10151e] px-3 py-2 text-[10px] text-[#8794a9]',
  },
  'component-package-info code': {
    tw: 'break-all font-mono text-[#c5d3ef]',
  },
  'test-case': {
    tw: 'overflow-visible rounded-lg border border-[#273142] bg-[#10151e]',
  },
  'test-case-heading': {
    tw: 'border-b border-[#273142] px-5 py-4',
  },
  'test-case-heading h2': {
    tw: 'text-sm font-semibold text-[#e5ebf6]',
  },
  'test-case-heading p': {
    tw: 'mt-1 text-xs leading-5 text-[#8996aa]',
  },
  'test-case-content': {
    tw: 'grid min-w-0 gap-4 p-5 max-sm:p-4',
  },
  'test-row': {
    tw: 'flex flex-wrap items-center gap-3',
  },
  'test-stack': {
    tw: 'grid gap-3',
  },
  'test-control-width': {
    tw: 'w-full max-w-[420px]',
  },
  'test-output': {
    tw: 'text-[11px] text-[#9aa8bd]',
  },
  'test-labeled-control': {
    tw: 'flex w-fit cursor-pointer items-center gap-2 text-xs text-[#c5cfdf]',
  },
  'demo-app-bar': {
    tw: 'flex items-center gap-2 rounded-md border border-[#273142] bg-[#121925] px-3 py-2',
  },
  'demo-app-bar-title': {
    tw: 'mr-auto text-sm font-semibold',
  },
  'demo-card': {
    tw: 'grid max-w-[460px] gap-3 rounded-lg border border-[#2a3547] bg-[#141b26] p-5',
  },
  ':is(.demo-card h3, .demo-modal-content h3)': {
    tw: 'text-sm font-semibold text-[#e5ebf6]',
  },
  ':is(.demo-card p, .demo-modal-content p)': {
    tw: 'text-xs leading-5 text-[#9ca9bc]',
  },
  'demo-paper': {
    tw: 'rounded-md border border-[#273142] bg-[#151d29] px-4 py-3 text-xs',
  },
  'demo-table': {
    tw: 'w-full text-left text-xs',
  },
  'demo-bottom-navigation': {
    tw: '!absolute !inset-x-0 !bottom-0 !z-auto !mx-auto !w-full flex max-w-[420px] justify-around rounded-lg border border-[#273142] bg-[#141b26] p-2',
  },
  'demo-bottom-navigation-preview': {
    tw: 'relative min-h-28 w-full overflow-hidden rounded-lg border border-[#273142] bg-[#0b1018]',
  },
  'demo-list': {
    tw: 'max-w-[520px] rounded-md border border-[#273142] bg-[#141b26]',
  },
  'demo-drawer-content': {
    tw: 'grid min-w-[260px] gap-4 p-5',
  },
  'demo-floating-content': {
    tw: 'max-w-[280px] rounded-lg border border-[#35445d] bg-[#1b2534] p-4 text-xs text-[#e6edf9] shadow-xl',
  },
  'demo-modal-content': {
    tw: 'grid max-w-[420px] gap-3 rounded-lg border border-[#35445d] bg-[#141b26] p-5',
  },
  'demo-portal-content': {
    tw: 'fixed bottom-5 right-5 z-[100] rounded-lg border border-[#35445d] bg-[#1b2534] px-4 py-3 text-xs text-[#e6edf9] shadow-xl',
  },
  'click-away-target': {
    tw: 'max-w-[420px] rounded-md border border-dashed border-[#526b9b] bg-[#151e2b] p-5 text-xs text-[#c4d0e2]',
  },
  'icon-preview': {
    tw: 'grid justify-items-center gap-1.5 text-[#c4d0e2]',
  },
  'icon-preview small': {
    tw: 'text-[9px] text-[#8996aa]',
  },
});
