import { register } from 'tailmantic/collector';

// Dark theme token stylesheet for @tailmantic/ui-components.
// Import this file in your tailmantics entry to apply the dark theme.
register.all({
  ':root': {
    // Brand / accent
    '--rgi-blue': '#9bbcff',
    '--rgi-blue-dark': '#547be8',
    '--rgi-blue-soft': 'rgba(125,159,255,.12)',
    '--tm-blue': 'var(--rgi-blue)',
    '--tm-blue-dark': 'var(--rgi-blue-dark)',
    '--tm-blue-soft': 'var(--rgi-blue-soft)',
    '--accent': '#547be8',

    // Page & panel surfaces
    '--page': '#090c12',
    '--panel': '#10151e',
    '--panel-raised': '#171e2a',
    '--panel-sunken': '#0d1117',
    '--panel-hover': '#20304a',

    // Generic surface aliases (used by table, badge, etc.)
    '--surface': '#101722',
    '--surface-raised': '#1f2937',
    '--surface-hover': '#20304a',

    // Borders
    '--border': '#273142',

    // Typography
    '--text': '#edf2fb',
    '--muted': '#a3aec0',
    '--subtle': '#717f95',
    '--text-muted': '#aab6ca',
    '--text-subtle': '#8996aa',

    // Hover overlay
    '--hover': 'rgba(255,255,255,.05)',

    // Semantic colors
    '--green': '#7bd6b0',
    '--orange': '#f4bd7a',
    '--red': '#ff858e',

    // Danger
    '--danger': '#dc737b',
    '--danger-soft': 'rgba(220,115,123,.2)',

    // Alert / status variants
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

    // Component-specific
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

    // Form controls
    '--switch-thumb': '#e1e7f0',
    '--switch-track': '#465164',
    '--slider-track': '#29364c',
    '--slider-thumb-border': '#d8e3ff',
    '--rating-color': '#e3a927',

    // Layout
    '--radius': '12px',
  },
});
