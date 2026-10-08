import { register } from 'tailmantic/collector';

// Light theme token stylesheet for @tailmantic/ui-components.
// Import this file in your tailmantics entry to apply the light theme.
register.all({
  ':root': {
    // Brand / accent (same blue hues as dark theme)
    '--rgi-blue': '#9bbcff',
    '--rgi-blue-dark': '#547be8',
    '--rgi-blue-soft': 'rgba(125,159,255,.12)',
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
    '--rgi-error': '#b02a37',
    '--rgi-error-bg': '#fff5f5',
    '--rgi-error-border': '#f5c2c7',
    '--rgi-info': '#055160',
    '--rgi-info-bg': '#e8f4fd',
    '--rgi-info-border': '#b6d4fe',
    '--rgi-success': '#0a5c36',
    '--rgi-success-bg': '#f0fdf4',
    '--rgi-success-border': '#bbf7d0',
    '--rgi-warning': '#664d03',
    '--rgi-warning-bg': '#fffde7',
    '--rgi-warning-border': '#fde68a',

    // Component-specific
    '--rgi-dialog-backdrop': 'rgba(0,0,0,.5)',
    '--rgi-tooltip-bg': '#343a40',
    '--rgi-tooltip-color': '#fff',
    '--rgi-icon-color': 'currentColor',
    '--rgi-avatar-bg': 'var(--panel-raised)',
    '--rgi-avatar-color': 'var(--text)',
    '--rgi-badge-outline': 'var(--surface)',
    '--rgi-typography-color': 'var(--text)',
    '--rgi-progress-track': '#dee2e6',
    '--rgi-skeleton': '#e2e8f0',
    '--rgi-skeleton-highlight': 'rgba(255,255,255,.6)',
    '--rgi-table-head': 'var(--surface)',
    '--rgi-table-hover': 'var(--panel-raised)',
    '--rgi-table-stripe': 'rgba(0,0,0,.03)',

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
