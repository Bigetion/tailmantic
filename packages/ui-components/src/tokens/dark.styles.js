import { register } from 'tailmantic/collector';

// Dark theme token stylesheet for @tailmantic/ui-components.
// Import this file in your tailmantics entry to apply the dark theme.
register.all({
  ':root': {
    // Brand / accent
    '--rgi-blue': '#9bbcff',
    '--rgi-blue-dark': '#547be8',
    '--rgi-blue-soft': 'rgba(125,159,255,.12)',
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
    '--rgi-error': '#f5b2b8',
    '--rgi-error-bg': '#351d22',
    '--rgi-error-border': '#794248',
    '--rgi-info': '#a9d6f5',
    '--rgi-info-bg': '#142b3b',
    '--rgi-info-border': '#315a78',
    '--rgi-success': '#a9dfba',
    '--rgi-success-bg': '#162e22',
    '--rgi-success-border': '#356548',
    '--rgi-warning': '#ffdc9b',
    '--rgi-warning-bg': '#342a17',
    '--rgi-warning-border': '#785c28',

    // Component-specific
    '--rgi-dialog-backdrop': 'rgba(0,0,0,.58)',
    '--rgi-tooltip-bg': '#263244',
    '--rgi-tooltip-color': '#fff',
    '--rgi-icon-color': 'currentColor',
    '--rgi-avatar-bg': 'var(--panel-raised)',
    '--rgi-avatar-color': 'var(--text)',
    '--rgi-badge-outline': 'var(--surface)',
    '--rgi-typography-color': 'var(--text)',
    '--rgi-progress-track': '#293447',
    '--rgi-skeleton': '#303b4c',
    '--rgi-skeleton-highlight': 'rgba(255,255,255,.12)',
    '--rgi-table-head': 'var(--surface)',
    '--rgi-table-hover': 'var(--panel-raised)',
    '--rgi-table-stripe': 'rgba(127,145,170,.06)',

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
