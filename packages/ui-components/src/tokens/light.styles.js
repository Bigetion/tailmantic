import { register } from 'tailmantic/collector';

// Light theme token stylesheet for @tailmantic/ui-components.
// Import this file in your tailmantics entry to apply the light theme.
register.all({
  ':root': {
    // Brand / accent (same blue hues as dark theme)
    '--rgi-blue': '#9bbcff',
    '--rgi-blue-dark': '#547be8',
    '--rgi-blue-soft': 'rgba(125,159,255,.12)',
    '--tm-blue': 'var(--rgi-blue)',
    '--tm-blue-dark': 'var(--rgi-blue-dark)',
    '--tm-blue-soft': 'var(--rgi-blue-soft)',
    '--accent': '#547be8',

    // Page & panel surfaces (light equivalents of dark theme values)
    '--page': '#f0f4f8',
    '--panel': '#ffffff',
    '--panel-raised': '#f8f9fa',
    '--panel-sunken': '#f1f3f5',
    '--panel-hover': '#e8edf3',

    // Generic surface aliases
    '--surface': '#ffffff',
    '--surface-raised': '#f1f3f5',
    '--surface-hover': '#f0f2f5',

    // Borders
    '--border': '#dee2e6',

    // Typography
    '--text': '#212529',
    '--muted': '#6c757d',
    '--subtle': '#adb5bd',
    '--text-muted': '#71809a',
    '--text-subtle': '#8290a5',

    // Hover overlay
    '--hover': 'rgba(0,0,0,.04)',

    // Semantic colors (same as dark — accent palette stays consistent)
    '--green': '#198754',
    '--orange': '#fd7e14',
    '--red': '#dc3545',

    // Danger
    '--danger': '#dc3545',
    '--danger-soft': 'rgba(220,53,69,.12)',

    // Alert / status variants (light backgrounds with matching borders)
    '--tm-error': '#b02a37',
    '--tm-error-bg': '#fff5f5',
    '--tm-error-border': '#f5c2c7',
    '--tm-info': '#055160',
    '--tm-info-bg': '#e8f4fd',
    '--tm-info-border': '#b6d4fe',
    '--tm-success': '#0a5c36',
    '--tm-success-bg': '#f0fdf4',
    '--tm-success-border': '#bbf7d0',
    '--tm-warning': '#664d03',
    '--tm-warning-bg': '#fffde7',
    '--tm-warning-border': '#fde68a',

    // Component-specific
    '--tm-dialog-backdrop': 'rgba(0,0,0,.5)',
    '--tm-tooltip-bg': '#343a40',
    '--tm-tooltip-color': '#fff',
    '--tm-icon-color': 'currentColor',
    '--tm-avatar-bg': 'var(--panel-raised)',
    '--tm-avatar-color': 'var(--text)',
    '--tm-badge-outline': 'var(--surface)',
    '--tm-typography-color': 'var(--text)',
    '--tm-progress-track': '#dee2e6',
    '--tm-skeleton': '#e2e8f0',
    '--tm-skeleton-highlight': 'rgba(255,255,255,.6)',
    '--tm-table-head': 'var(--surface)',
    '--tm-table-hover': 'var(--panel-raised)',
    '--tm-table-stripe': 'rgba(0,0,0,.03)',

    // Form controls
    '--switch-thumb': '#ffffff',
    '--switch-track': '#adb5bd',
    '--slider-track': '#dee2e6',
    '--slider-thumb-border': '#547be8',
    '--rating-color': '#e3a927',

    // Layout
    '--radius': '12px',
  },
});
