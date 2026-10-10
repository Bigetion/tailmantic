import { register } from 'tailmantic/collector';

// app-bar.js
register('demo-app-bar', {
  base: {
    tw: 'z-10 flex min-h-14 w-full items-center gap-4 border-b border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-[var(--text)]',
  },
  modifiers: {
    static: { tw: 'relative' },
    sticky: { tw: 'sticky top-0' },
    fixed: { tw: 'fixed inset-x-0 top-0' },
    'elevation-0': { tw: 'shadow-none' },
    'elevation-1': { tw: 'shadow-[0_2px_6px_rgba(0,0,0,.16)]' },
    'elevation-2': { tw: 'shadow-[0_4px_12px_rgba(0,0,0,.2)]' },
    'elevation-3': { tw: 'shadow-[0_8px_24px_rgba(0,0,0,.24)]' },
  },
});
register.all({
  'demo-app-bar-preview': {
    tw: 'rounded-lg border bg-[var(--panel)]',
  },
  'demo-app-bar-static': { tw: 'relative' },
  'demo-app-bar-sticky': { tw: 'sticky top-0' },
  'demo-app-bar-fixed': { tw: 'fixed inset-x-0 top-0' },
  'demo-app-bar-elevation-0': { tw: 'shadow-none' },
  'demo-app-bar-elevation-1': { tw: 'shadow-[0_2px_6px_rgba(0,0,0,.16)]' },
  'demo-app-bar-elevation-2': { tw: 'shadow-[0_4px_12px_rgba(0,0,0,.2)]' },
  'demo-app-bar-elevation-3': { tw: 'shadow-[0_8px_24px_rgba(0,0,0,.24)]' },
  'demo-app-bar-compact': {
    tw: 'flex-wrap gap-2',
  },
  'demo-app-bar-icon': {
    tw: 'inline-flex size-8 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent text-[var(--text-muted)] hover:bg-white/[.06] hover:text-white',
  },
  'demo-app-bar-title': {
    tw: 'shrink-0 text-sm font-semibold text-white',
  },
  'demo-app-bar-nav': {
    tw: 'flex items-center gap-5 pl-4 text-xs text-[var(--muted)] max-sm:hidden',
  },
  'demo-app-bar-nav button': {
    tw: 'cursor-pointer border-0 bg-transparent p-0 text-inherit hover:text-white',
  },
  'demo-app-bar-nav-active': { tw: 'font-semibold text-[var(--rgi-blue)]' },
  'demo-app-bar-nav-compact': { tw: 'hidden' },
  'demo-app-bar-empty': { tw: 'text-[10px] italic text-[var(--muted)]' },
  'demo-app-bar-actions': {
    tw: 'ml-auto flex items-center gap-2',
  },
  'demo-app-bar-avatar': {
    tw: 'inline-flex size-7 items-center justify-center rounded-full bg-[var(--rgi-blue-soft)] text-[10px] font-semibold text-[var(--rgi-blue)]',
  },
  'demo-app-bar-control': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-xs text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-app-bar-nav-open': {
    tw: 'flex w-full pl-0',
  },
  'demo-app-bar-nav.demo-app-bar-nav-open': {
    tw: 'flex w-full pl-0',
  },
  'demo-app-bar-search': {
    tw: 'h-8 w-36 rounded-md border border-[var(--border)] bg-[var(--page)] px-2 text-xs text-[var(--text)] outline-none focus:border-[var(--rgi-blue)]',
  },
});

// autocomplete.js
register.all({
  'demo-autocomplete': {
    tw: 'relative flex w-full max-w-[480px] flex-col gap-2.5',
  },
  'demo-autocomplete-label': {
    tw: 'text-xs font-medium text-[var(--text-muted)]',
  },
  'demo-autocomplete-field': {
    tw: 'flex min-h-11 items-center gap-2.5 rounded-lg border border-[var(--border)] bg-[var(--page)] px-3.5 text-[var(--muted)] shadow-[inset_0_1px_0_rgba(255,255,255,.025)] transition-[border-color,box-shadow,background-color] duration-150 focus-within:border-[#718ecb] focus-within:bg-[var(--panel)] focus-within:shadow-[0_0_0_3px_rgba(125,159,255,.1)]',
  },
  'demo-autocomplete-input': {
    tw: 'min-w-0 flex-1 border-0 bg-transparent py-2 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)]',
  },
  'demo-autocomplete-modes': {
    tw: 'm-0 flex flex-wrap gap-2 border-0 p-0',
  },
  'demo-autocomplete-mode': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-[11px] text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-autocomplete-mode-active': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-soft)] font-medium text-[var(--rgi-blue)]',
  },
  'demo-autocomplete-tags': {
    tw: 'flex min-w-0 flex-wrap items-center gap-1.5 py-1',
  },
  'demo-autocomplete-tag': {
    tw: 'inline-flex max-w-full items-center gap-1.5 rounded-md border border-[#34425b] bg-[#192337] py-1 pl-2.5 pr-1.5 text-[10px] font-medium text-[#c8d6f5]',
  },
  'demo-autocomplete-tag button': {
    tw: 'inline-flex size-4 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-[#8795af] hover:bg-white/[.07] hover:text-white',
  },
  'demo-autocomplete-clear': {
    tw: 'inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent p-1 text-[var(--muted)] hover:bg-white/[.06] hover:text-white',
  },
  'demo-autocomplete-hint': {
    tw: 'flex items-center justify-between gap-3 px-1 text-[10px] text-[var(--muted)]',
  },
  'demo-autocomplete-hint span': {
    tw: 'inline-flex items-center gap-1',
  },
  'demo-autocomplete-options': {
    tw: 'z-50 max-h-[min(14rem,50vh)] w-[min(480px,calc(100vw-2rem))] overflow-y-auto overscroll-y-contain rounded-lg border border-[#303c52] bg-[var(--panel)] py-1.5 shadow-[0_18px_48px_rgba(0,0,0,.52)] [scrollbar-width:thin] [scrollbar-color:#354156_transparent]',
  },
  'demo-autocomplete-option': {
    tw: 'flex w-full cursor-pointer items-center gap-3 rounded-md border-0 bg-transparent px-3 py-2.5 text-left text-xs text-[#c6cede] transition-colors hover:bg-white/[.05] focus:outline-none',
  },
  'demo-autocomplete-option-active': {
    tw: 'bg-[#1a263a] text-white',
  },
  'demo-autocomplete-option-mark': {
    tw: 'inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#29364c] bg-[#192337] text-[10px] font-semibold text-[#a9c2ff]',
  },
  'demo-autocomplete-option-copy': {
    tw: 'flex min-w-0 flex-1 flex-col gap-0.5',
  },
  'demo-autocomplete-option-copy strong': {
    tw: 'truncate font-medium text-inherit',
  },
  'demo-autocomplete-option-copy small': {
    tw: 'truncate text-[10px] text-[#78859b]',
  },
  'demo-autocomplete-option-group': {
    tw: 'ml-auto rounded-full bg-white/[.04] px-1.5 py-0.5 text-[9px] text-[#9aa7bd]',
  },
  'demo-autocomplete-empty': {
    tw: 'flex flex-col gap-1 px-4 py-5 text-center text-xs text-[var(--text)] [&>span]:text-[10px] [&>span]:text-[var(--muted)]',
  },
});

// accordion.js
register.all({
  'demo-accordion-group': {
    tw: 'w-full max-w-[700px] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel)]',
  },
  'demo-accordion-item': {
    tw: 'border-b border-[var(--border)] last:border-b-0',
  },
  'demo-accordion-heading': { tw: 'm-0' },
  'demo-accordion-title': { tw: 'flex min-w-0 flex-1 items-center gap-3' },
  'demo-accordion-trigger': {
    tw: 'flex min-h-12 w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-4 py-3 text-left text-sm font-medium text-[var(--text)] hover:bg-white/[.03] focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)] disabled:cursor-not-allowed disabled:opacity-50',
  },
  'demo-accordion-icon': { tw: 'text-[var(--muted)] transition-transform duration-150' },
  'demo-accordion-panel': {
    tw: 'border-t border-[var(--border)] px-4 py-3 text-sm leading-relaxed text-[var(--muted)]',
  },
  'demo-accordion-panel[hidden]': { tw: 'hidden' },
});
register('demo-accordion-icon-open', { base: { tw: 'rotate-180 text-[var(--rgi-blue)]' } });
register.all({
  'demo-accordion-example': {
    tw: 'flex w-full max-w-[700px] flex-col gap-3',
  },
  'demo-accordion-toolbar': {
    tw: 'flex items-center justify-between text-xs font-medium text-[var(--text-muted)]',
  },
  'demo-accordion-toolbar button': {
    tw: 'cursor-pointer border-0 bg-transparent text-xs font-medium text-[var(--rgi-blue)] hover:text-white',
  },
  'demo-accordion-index': {
    tw: 'font-mono text-[10px] text-[var(--muted)]',
  },
  'demo-accordion-unavailable': {
    tw: 'text-[10px] text-[var(--muted)]',
  },
  'demo-accordion-item-disabled .demo-accordion-trigger': {
    tw: 'cursor-not-allowed opacity-40',
  },
});

// alert.js
register('demo-alert', {
  base: { tw: 'flex items-start gap-3 rounded-lg border px-4 py-3 text-sm' },
  modifiers: {
    info: { tw: 'border-[var(--rgi-info-border)] bg-[var(--rgi-info-bg)] text-[var(--rgi-info)]' },
    success: {
      tw: 'border-[var(--rgi-success-border)] bg-[var(--rgi-success-bg)] text-[var(--rgi-success)]',
    },
    warning: {
      tw: 'border-[var(--rgi-warning-border)] bg-[var(--rgi-warning-bg)] text-[var(--rgi-warning)]',
    },
    error: {
      tw: 'border-[var(--rgi-error-border)] bg-[var(--rgi-error-bg)] text-[var(--rgi-error)]',
    },
  },
});
register.group('demo-alert', {
  icon: {
    tw: 'mt-0.5 flex size-5 shrink-0 items-center justify-center',
  },
  copy: { tw: 'flex min-w-0 flex-1 flex-col gap-1' },
  title: { tw: 'font-semibold leading-snug' },
});
register.all({
  'demo-alert-outlined': {
    tw: '!bg-transparent',
  },
  'demo-alert-action': {
    tw: 'mt-2 inline-flex w-fit cursor-pointer items-center rounded-md border border-current/25 bg-transparent px-2.5 py-1.5 text-xs font-semibold text-inherit transition-colors hover:bg-white/[.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current',
  },
  'demo-alert-dismiss': {
    tw: 'ml-auto inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent p-0 text-inherit opacity-70 transition-colors hover:bg-white/[.08] hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current',
  },
  'demo-alert-restore': {
    tw: 'w-fit cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-[var(--text)] hover:border-[var(--rgi-blue)]',
  },
});

// avatar.js
register('demo-avatar', {
  base: {
    tw: 'inline-flex size-10 items-center justify-center rounded-full bg-[var(--panel-raised)] text-xs font-semibold text-[var(--text)]',
  },
  modifiers: {
    primary: { tw: 'bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]' },
    success: { tw: 'bg-[var(--rgi-success-bg)] text-[var(--rgi-success)]' },
    warning: { tw: 'bg-[var(--rgi-warning-bg)] text-[var(--rgi-warning)]' },
    large: { tw: 'size-14 text-sm' },
  },
});
register.all({
  'demo-avatar-xs': { tw: 'size-6 text-[9px]' },
  'demo-avatar-small': { tw: 'size-8 text-[10px]' },
  'demo-avatar-medium': { tw: 'size-10 text-xs' },
  'demo-avatar-xl': { tw: 'size-16 text-base' },
  'demo-avatar img': { tw: 'size-full rounded-full object-cover' },
  'demo-avatar-group': {
    tw: 'm-0 flex items-center border-0 p-0 pl-3 [&>.demo-avatar]:-ml-3 [&>.demo-avatar]:ring-2 [&>.demo-avatar]:ring-[var(--panel)]',
  },
  'demo-avatar-control': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
});

// badge.js
register('demo-badge', {
  base: {
    tw: 'inline-flex items-center rounded-full border border-transparent px-2.5 py-1 text-[11px] font-medium',
  },
  modifiers: {
    primary: { tw: 'bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]' },
    success: { tw: 'bg-[var(--rgi-success-bg)] text-[var(--rgi-success)]' },
    warning: { tw: 'bg-[var(--rgi-warning-bg)] text-[var(--rgi-warning)]' },
    danger: { tw: 'bg-[var(--rgi-error-bg)] text-[var(--rgi-error)]' },
  },
});
register.all({
  'demo-badge-root': {
    tw: 'relative inline-flex',
  },
  'demo-badge-standard': {
    tw: 'absolute -right-2 -top-2 z-10 h-5 min-w-5 justify-center !px-1.5 !py-0 text-[10px] leading-4 shadow-sm',
  },
  'demo-badge-dot': {
    tw: 'absolute -right-1 -top-1 z-10 !size-2.5 min-w-0 rounded-full border-2 border-[var(--panel)] !p-0',
  },
  'demo-badge-overlap-circular': {
    tw: '-right-1 -top-1',
  },
  'demo-badge-overlap-rectangular': {
    tw: '-right-2 -top-2',
  },
  'demo-badge-anchor': {
    tw: 'relative inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-[var(--text-muted)]',
  },
  'demo-badge-control': {
    tw: 'w-fit cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
});

// bottom-navigation.js
register.all({
  'ui-bottom-navigation': {
    tw: 'flex w-full items-center justify-around',
  },
  'ui-bottom-navigation-item': {
    tw: 'relative flex min-w-20 cursor-pointer flex-col items-center gap-1 rounded-lg border-0 bg-transparent px-4 py-2 text-[11px] text-[var(--muted)] transition-colors',
  },
  'ui-bottom-navigation-item-selected': {
    tw: 'bg-[var(--rgi-blue-soft)] font-semibold text-[var(--rgi-blue)]',
  },
  'ui-bottom-navigation-icon': {
    tw: 'flex h-6 items-center justify-center leading-none',
  },
  'ui-bottom-navigation-label': { tw: 'truncate' },
  'demo-bottom-nav-icon-wrap': { tw: 'relative flex items-center justify-center' },
});
register.all({
  'demo-bottom-navigation': {
    tw: 'flex w-full max-w-[420px] items-center justify-around rounded-xl border border-[var(--border)] bg-[var(--panel)] p-2',
  },
  'demo-bottom-nav-item-compact': { tw: 'min-w-12 px-2' },
  'demo-bottom-nav-badge': {
    tw: 'absolute -right-3 -top-2 rounded-full bg-[var(--rgi-error)] px-1 text-[9px] leading-4 text-white',
  },
  'demo-bottom-nav-control': {
    tw: 'w-fit cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
});

// breadcrumbs.js
register.all({
  'ui-breadcrumbs': { tw: 'text-sm text-[var(--muted)]' },
  'ui-breadcrumbs-list': { tw: 'm-0 flex list-none flex-wrap items-center gap-2 p-0' },
  'ui-breadcrumbs-item': { tw: 'inline-flex min-w-0 items-center gap-2' },
  'ui-breadcrumbs-separator': { tw: 'select-none text-[var(--muted)]' },
  'ui-breadcrumbs-link': {
    tw: 'truncate text-[var(--rgi-blue)] no-underline hover:underline',
  },
  'ui-breadcrumbs-current': { tw: 'font-medium text-[var(--text)]' },
  'ui-breadcrumbs-ellipsis': {
    tw: 'cursor-pointer border-0 bg-transparent p-0 text-[var(--rgi-blue)] hover:underline',
  },
  'demo-breadcrumb-control': {
    tw: 'flex w-fit items-center gap-2 text-xs text-[var(--text-muted)]',
  },
  'demo-breadcrumb-control select': {
    tw: 'rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 py-1 text-xs text-[var(--text)]',
  },
});

// button.js
register('demo-button', {
  base: {
    tw: 'inline-flex h-9 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded border border-transparent px-4 text-[13px] font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rgi-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page)] enabled:active:translate-y-px disabled:cursor-not-allowed disabled:opacity-40',
  },
  modifiers: {
    contained: {
      tw: 'bg-[var(--rgi-blue-dark)] text-white shadow-[0_2px_4px_rgba(72,111,216,.24)] enabled:hover:bg-[#6689ed] enabled:hover:shadow-[0_4px_12px_rgba(72,111,216,.3)]',
    },
    outlined: {
      tw: '!border-[#607db9] bg-transparent text-[var(--rgi-blue)] enabled:hover:!border-[var(--rgi-blue)] enabled:hover:bg-[var(--rgi-blue-soft)]',
    },
    text: {
      tw: 'bg-transparent text-[var(--rgi-blue)] enabled:hover:bg-[var(--rgi-blue-soft)]',
    },
    small: { tw: '!h-8 gap-1.5 !px-3 !text-[11px]' },
    large: { tw: 'h-11 gap-2.5 px-5 text-sm' },
    'color-success': {
      tw: '!bg-[#276b53] text-white !shadow-[0_2px_4px_rgba(39,107,83,.22)] enabled:hover:!bg-[#328468]',
    },
    'color-warning': {
      tw: '!bg-[#a75c1b] text-white !shadow-[0_2px_4px_rgba(167,92,27,.2)] enabled:hover:!bg-[#c5752a]',
    },
    'color-danger': {
      tw: '!bg-[#a94650] text-white !shadow-[0_2px_4px_rgba(169,70,80,.2)] enabled:hover:!bg-[#c45b66]',
    },
  },
});

register.group('demo-button-example', {
  section: { tw: 'flex w-full flex-col gap-3' },
  label: { tw: 'text-[9px] font-semibold uppercase tracking-[.14em] text-[var(--muted)]' },
  'icon-only': {
    tw: '!size-9 !p-0',
  },
  status: { tw: 'text-[11px] text-[var(--muted)]' },
});

register('demo-button-spinner', {
  base: { tw: 'animate-spin' },
});

// button-group.js
register.all({
  'ui-button-group': { tw: 'inline-flex items-center gap-1 text-[var(--text)]' },
  'ui-button-group-vertical': { tw: 'flex-col items-stretch' },
  'demo-button-group': {
    tw: 'm-0 inline-flex w-fit overflow-hidden rounded-md border border-[var(--border)] bg-[var(--panel)] p-0',
  },
  'demo-button-group-item': {
    tw: 'relative inline-flex min-h-9 cursor-pointer select-none items-center justify-center gap-2 border-0 border-r border-[var(--border)] bg-transparent px-3.5 text-[11px] font-medium text-[var(--text-muted)] transition-colors last:border-r-0 hover:bg-white/[.05] hover:text-white focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#86a6ff] disabled:cursor-not-allowed disabled:opacity-40',
  },
  'demo-button-group-selected': {
    tw: 'bg-[#21304b] text-[#b9ccff] hover:bg-[#21304b] hover:text-[#b9ccff]',
  },
  'ui-button-group-vertical .demo-button-group-item': {
    tw: 'justify-center border-r-0 border-b border-[var(--border)] last:border-b-0',
  },
  'demo-button-group-split': {
    tw: 'relative m-0 inline-flex !gap-0 overflow-visible rounded-lg border-0 p-0',
  },
  'demo-button-group-primary': {
    tw: 'inline-flex min-h-9 cursor-pointer select-none items-center gap-2 rounded-l-[7px] border border-[var(--rgi-blue-dark)] bg-[#344e81] px-4 text-[11px] font-medium text-white transition-colors hover:bg-[#405f9e] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#86a6ff] disabled:cursor-not-allowed disabled:opacity-40',
  },
  'demo-button-group-toggle': {
    tw: 'inline-flex min-h-9 w-9 cursor-pointer items-center justify-center rounded-r-[7px] border border-l border-l-white/20 border-[var(--rgi-blue-dark)] bg-[#344e81] px-0 text-white transition-colors hover:bg-[#405f9e] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#86a6ff]',
  },
  'demo-button-group-menu': {
    tw: 'absolute left-0 top-full z-10 m-0 mt-2 flex min-w-44 flex-col overflow-hidden rounded-lg border border-[#354158] bg-[#111824] p-1 shadow-[0_12px_32px_rgba(0,0,0,.42)]',
  },
  'demo-button-group-menu legend': {
    tw: 'sr-only',
  },
  'demo-button-group-menu button': {
    tw: 'cursor-pointer rounded-md border-0 bg-transparent px-3 py-2 text-left text-[11px] text-[#b8c3d6] hover:bg-white/[.05] hover:text-white focus-visible:outline-2 focus-visible:outline-[#86a6ff]',
  },
});

// card.js
register('ui-card', {
  base: {
    tw: 'flex flex-col gap-3 overflow-hidden rounded-xl bg-[var(--panel)] p-5 text-[var(--text)]',
  },
  modifiers: {
    elevated: {
      tw: 'border border-[var(--border)] shadow-[0_2px_8px_rgba(0,0,0,.16)]',
    },
    outlined: { tw: 'border border-[#354257] shadow-none' },
    flat: { tw: 'border border-transparent shadow-none' },
    'elevation-0': { tw: 'shadow-none' },
    'elevation-1': { tw: 'shadow-[0_2px_8px_rgba(0,0,0,.16)]' },
    'elevation-2': { tw: 'shadow-[0_5px_16px_rgba(0,0,0,.2)]' },
    'elevation-3': { tw: 'shadow-[0_10px_28px_rgba(0,0,0,.25)]' },
    interactive: {
      tw: 'transition-[border-color,box-shadow,transform] duration-150 hover:-translate-y-px hover:border-[var(--rgi-blue)] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--rgi-blue)]',
    },
  },
});
register.all({
  'demo-card-media': {
    tw: 'h-28 rounded-lg bg-[linear-gradient(135deg,#273e67,#3c6792_48%,#b1c5dd)]',
  },
  'demo-card-action': {
    tw: 'inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border)] bg-transparent px-2.5 py-1.5 text-xs text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-card-action-active': { tw: 'border-[var(--rgi-error)] text-[var(--rgi-error)]' },
});

// checkbox.js
register.group('ui-checkbox', {
  root: {
    tw: 'inline-flex w-fit cursor-pointer items-start gap-3 text-xs text-[var(--text)] has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-45',
  },
  control: {
    tw: 'relative mt-0.5 inline-flex size-[18px] shrink-0 items-center justify-center rounded-[5px] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-[var(--page)] focus-within:ring-[#86a6ff]',
  },
  input: {
    tw: 'absolute inset-0 z-10 m-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed',
  },
  indicator: {
    tw: 'flex size-[18px] items-center justify-center rounded-[5px] border border-[#53627a] bg-[#0e1420] text-[#101722] transition-[background-color,border-color,box-shadow]',
  },
  checked: { tw: 'border-[#84a2f1] bg-[#84a2f1]' },
  indeterminate: { tw: 'border-[#84a2f1] bg-[#84a2f1]' },
  disabled: { tw: 'cursor-not-allowed' },
  dash: { tw: 'h-0.5 w-2 rounded-full bg-[#101722]' },
  copy: { tw: 'flex min-w-0 flex-col gap-1' },
  label: { tw: 'font-medium text-[var(--text)]' },
  description: { tw: 'text-[11px] leading-relaxed text-[var(--muted)]' },
});

register.all({
  'demo-checkbox-list': {
    tw: 'm-0 flex max-w-[620px] flex-col items-start gap-4 border-0 p-0',
  },
  'demo-checkbox-list legend': {
    tw: 'sr-only',
  },
  'demo-checkbox-panel': {
    tw: 'flex w-full max-w-[620px] flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 max-sm:p-4',
  },
  'demo-checkbox-panel-heading': {
    tw: 'flex items-start justify-between gap-4 border-b border-[var(--border)] pb-4',
  },
  'demo-checkbox-panel-heading div': {
    tw: 'flex flex-col gap-1',
  },
  'demo-checkbox-panel-heading strong': {
    tw: 'text-sm font-semibold text-[var(--text)]',
  },
  'demo-checkbox-panel-heading div span': {
    tw: 'text-xs text-[var(--muted)]',
  },
  'demo-checkbox-count': {
    tw: 'shrink-0 rounded-full bg-[var(--panel-raised)] px-2.5 py-1 text-[10px] text-[var(--muted)]',
  },
  'demo-checkbox-divider': {
    tw: 'h-px w-full bg-[var(--border)]',
  },
  'demo-checkbox-fieldset': {
    tw: 'm-0 flex w-full max-w-[620px] flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 max-sm:p-4',
  },
  'demo-checkbox-fieldset legend': {
    tw: 'px-1 text-sm font-semibold text-[var(--text)]',
  },
});

// chip.js
register('ui-chip', {
  base: {
    tw: 'inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-[var(--border)] px-3 text-xs font-medium text-[var(--text)] transition-colors',
  },
  modifiers: {
    filled: { tw: 'border-transparent bg-[var(--panel-raised)]' },
    outlined: { tw: 'bg-transparent' },
    primary: { tw: 'border-transparent bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]' },
    success: { tw: 'border-transparent bg-[var(--rgi-success-bg)] text-[var(--rgi-success)]' },
    warning: { tw: 'border-transparent bg-[var(--rgi-warning-bg)] text-[var(--rgi-warning)]' },
    small: { tw: '!h-6 px-2 text-[10px]' },
    interactive: {
      tw: 'cursor-pointer hover:border-[var(--rgi-blue)] hover:bg-[var(--panel-raised)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rgi-blue)]',
    },
    selected: { tw: 'border-transparent bg-[var(--rgi-blue-dark)] text-white' },
    disabled: { tw: 'cursor-not-allowed opacity-45' },
  },
});
register.all({
  'demo-chip-group': { tw: 'm-0 flex flex-wrap gap-2 border-0 p-0' },
  'ui-chip-icon': { tw: 'inline-flex shrink-0 items-center justify-center' },
  'ui-chip button': {
    tw: 'ml-1 inline-flex cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-current opacity-70 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-current disabled:cursor-not-allowed',
  },
});

// click-away-listener.js
register.all({
  'demo-click-away-stage': {
    tw: 'flex min-h-36 w-full max-w-[480px] flex-col items-start justify-center gap-4 rounded-lg border border-dashed border-[var(--border)] p-5',
  },
  'demo-click-away-panel': {
    tw: 'flex flex-col gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4 text-sm text-[var(--text)] shadow-lg',
  },
  'demo-click-away-reopen': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs font-medium text-[var(--text)] hover:border-[var(--rgi-blue)]',
  },
});

// dialog.js
register('ui-dialog-backdrop', {
  base: { tw: 'fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,.65)] p-4' },
});
register('ui-dialog', {
  root: {
    tw: 'my-auto flex max-h-[min(90vh,48rem)] w-full max-w-[440px] flex-col overflow-y-auto rounded-xl border border-[var(--border)] bg-[var(--panel-raised)] p-6 text-[var(--text)] shadow-[0_20px_60px_rgba(0,0,0,.5)] outline-none',
  },
  close: {
    tw: 'inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-[var(--muted)] hover:bg-white/10 hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--rgi-blue)]',
  },
  header: { tw: 'flex items-start justify-between gap-4' },
  title: { tw: 'm-0 text-lg font-semibold' },
  description: { tw: 'mt-2 text-sm leading-relaxed text-[var(--muted)]' },
  content: { tw: 'mt-4 min-h-0 text-sm leading-relaxed' },
  actions: { tw: 'mt-5 flex flex-wrap justify-end gap-2' },
});
register.all({
  'demo-dialog-demo': {
    tw: 'flex flex-col items-start gap-4',
  },
  'demo-dialog-modes': {
    tw: 'm-0 flex flex-wrap gap-2 border-0 p-0',
  },
  'demo-dialog-mode': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-[11px] text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-dialog-mode-active': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-soft)] font-medium text-[var(--rgi-blue)]',
  },
  'demo-dialog-fullscreen': {
    tw: 'h-[min(90vh,720px)] max-w-[900px]',
  },
});

// divider.js
register('ui-divider', {
  base: { tw: 'my-1 shrink-0 border-0 border-[var(--border)] text-[var(--muted)]' },
  modifiers: {
    horizontal: { tw: 'w-full border-t' },
    vertical: { tw: 'mx-1 my-0 h-5 w-px shrink-0 bg-[var(--border)]' },
    inset: { tw: 'ml-5' },
    'flex-item': { tw: 'self-stretch' },
    'text-center': {
      tw: 'flex items-center gap-3 before:flex-1 after:flex-1 before:border-t after:border-t',
    },
    'text-left': { tw: 'flex items-center gap-3 after:flex-1 after:border-t' },
    'text-right': { tw: 'flex items-center gap-3 before:flex-1 before:border-t' },
  },
});
register('ui-divider-inset-horizontal', {
  base: { tw: '!w-[calc(100%-1.25rem)]' },
});
register('ui-divider-content', { base: { tw: 'shrink-0 px-1 text-xs' } });
register('demo-typography', {
  base: { tw: 'm-0 text-sm leading-relaxed text-[var(--text)]' },
  modifiers: {
    heading: { tw: 'text-xl font-semibold tracking-tight' },
    secondary: { tw: 'text-[var(--muted)]' },
  },
});
register.all({
  'demo-divider-row': {
    tw: 'flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4 text-xs text-[var(--text-muted)]',
  },
});

// drawer.js
register.all({
  'demo-drawer-trigger': {
    tw: 'inline-flex cursor-pointer items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs font-medium text-[var(--text)] hover:border-[var(--rgi-blue)]',
  },
  'ui-drawer-root': { tw: 'contents' },
  'ui-drawer-temporary': { tw: 'contents' },
  'ui-drawer-persistent': { tw: 'contents' },
  'ui-drawer-open': { tw: 'visible' },
  'ui-drawer-backdrop': {
    tw: 'fixed inset-0 z-40 cursor-default border-0 bg-black/60 p-0',
  },
  'ui-drawer': {
    tw: 'z-50 flex flex-col overflow-auto bg-[var(--panel)] p-5 text-[var(--text)] shadow-2xl',
  },
  'ui-drawer-surface-temporary': {
    tw: 'fixed inset-y-0 left-0 h-dvh w-[min(18rem,85vw)]',
  },
  'ui-drawer[hidden]': { tw: 'hidden' },
  'demo-drawer': {
    tw: 'flex flex-col gap-1',
  },
  'demo-drawer-heading': {
    tw: 'mb-4 flex items-center justify-between border-b border-[var(--border)] pb-4 text-sm text-white',
  },
  'demo-drawer-heading button': {
    tw: 'cursor-pointer border-0 bg-transparent text-[var(--muted)] hover:text-white',
  },
  'demo-drawer-item': {
    tw: 'cursor-pointer rounded-md border-0 bg-transparent px-3 py-2 text-left text-sm text-[var(--text-muted)] hover:bg-white/[.05] hover:text-white',
  },
  'demo-drawer-persistent': { tw: 'w-56 shrink-0 border-r border-[var(--border)]' },
  'demo-drawer-layout': {
    tw: 'flex min-h-52 w-full max-w-[620px] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel)]',
  },
  'demo-drawer-content': {
    tw: 'flex flex-1 flex-col gap-2 p-5 text-sm text-[var(--text)] [&>span]:text-xs [&>span]:text-[var(--muted)]',
  },
  'demo-drawer-item-active': { tw: 'bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]' },
});

// floating-action-button.js
register('ui-floating-action-button', {
  base: {
    tw: 'inline-flex size-14 shrink-0 cursor-pointer select-none items-center justify-center gap-2 rounded-full border border-transparent bg-[#547be8] p-0 text-white shadow-[0_5px_16px_rgba(0,0,0,.38),0_2px_5px_rgba(84,123,232,.28)] transition-[background-color,box-shadow,transform] duration-150 hover:bg-[#6689ed] hover:shadow-[0_8px_22px_rgba(0,0,0,.42),0_3px_8px_rgba(84,123,232,.32)] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page)] focus-visible:ring-[#9bbcff] disabled:cursor-not-allowed disabled:opacity-45',
  },
  modifiers: {
    primary: { tw: '' },
    secondary: {
      tw: 'border-[#354158] bg-[#171e2a] text-[#b9ccff] shadow-[0_4px_12px_rgba(0,0,0,.28)] hover:bg-[#222d40] hover:shadow-[0_7px_18px_rgba(0,0,0,.36)]',
    },
    extended: { tw: '!h-12 !w-auto min-w-14 rounded-2xl px-5 text-xs font-semibold' },
    small: { tw: '!size-10' },
    large: { tw: '!size-16' },
  },
});
register.all({
  'demo-fab-stage': {
    tw: 'flex w-full max-w-[620px] flex-wrap items-center justify-between gap-5 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 max-sm:p-4',
  },
  'demo-fab-stage-copy': {
    tw: 'flex min-w-0 flex-col gap-1.5',
  },
  'demo-fab-stage-copy strong': {
    tw: 'text-sm font-semibold text-[var(--text)]',
  },
  'demo-fab-stage-copy span': {
    tw: 'text-xs text-[var(--muted)]',
  },
  'demo-fab-examples': { tw: 'flex flex-wrap items-center gap-3' },
  'demo-fab-size-group': {
    tw: 'm-0 flex flex-wrap items-center gap-3 border-0 p-0',
  },
  'demo-fab-size-group legend': {
    tw: 'sr-only',
  },
  'demo-fab-speed-dial': {
    tw: 'flex w-fit flex-col items-end gap-3',
  },
  'demo-fab-speed-dial-actions': {
    tw: 'm-0 flex flex-col items-end gap-2 border-0 p-0',
  },
  'demo-fab-speed-dial-actions legend': {
    tw: 'sr-only',
  },
  'demo-fab-speed-dial-actions-hidden': {
    tw: 'hidden',
  },
  'demo-fab-speed-dial-action': {
    tw: 'inline-flex cursor-pointer items-center gap-3 rounded-full border border-[var(--border)] bg-[#171e2a] py-2 pl-4 pr-3 text-xs text-[var(--text)] shadow-md transition-colors hover:border-[var(--rgi-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page)] focus-visible:ring-[var(--rgi-blue)]',
  },
});

// icon-glyph.js
register.all({
  'ui-icon-glyph': { tw: 'inline-block shrink-0 align-middle' },
  'demo-icon-glyph-grid': {
    tw: 'grid w-full max-w-[600px] grid-cols-4 gap-3 sm:grid-cols-7',
  },
  'demo-icon-glyph-item': {
    tw: 'flex min-h-20 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-icon-glyph-item span': {
    tw: 'text-[10px] text-[var(--muted)]',
  },
  'demo-icon-glyph-size': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 py-1 text-[10px] text-[var(--text-muted)]',
  },
  'demo-icon-glyph-size-active': {
    tw: 'border-[var(--rgi-blue)] bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]',
  },
});

// icons.js
register.all({
  'demo-icons-grid': {
    tw: 'grid w-full max-w-[600px] grid-cols-2 gap-3 sm:grid-cols-4',
  },
  'ui-icon-button': {
    tw: 'flex cursor-pointer items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-3 text-left text-xs text-[var(--text-muted)] hover:border-[var(--rgi-blue)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--rgi-blue)]',
  },
  'ui-icon-button-symbol': {
    tw: 'inline-flex size-8 items-center justify-center rounded-md bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]',
  },
  'ui-icon-button-selected': { tw: 'ring-1 ring-[var(--rgi-blue)]' },
  'ui-icon-button-symbol-warning': {
    tw: 'bg-[var(--rgi-warning-bg)] text-[var(--rgi-warning)]',
  },
  'ui-icon-button-symbol-danger': { tw: 'bg-[var(--rgi-error-bg)] text-[var(--rgi-error)]' },
  'ui-icon-button-symbol-success': { tw: 'bg-[var(--rgi-success-bg)] text-[var(--rgi-success)]' },
});

// link.js
register('ui-link', {
  base: {
    tw: 'font-medium text-[var(--rgi-blue)] underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]',
  },
  modifiers: { hover: { tw: 'no-underline hover:underline' } },
});
register('ui-link-disabled', {
  base: { tw: 'cursor-not-allowed text-[var(--muted)] no-underline opacity-55' },
});

// list.js
register.all({
  'ui-list': {
    tw: 'm-0 flex w-full max-w-[520px] list-none flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel)] p-0',
  },
  'ui-list-dense': { tw: 'py-1' },
  'ui-list-no-padding': { tw: 'p-0' },
  'ui-list-item': {
    tw: 'flex w-full items-center last:border-b-0',
  },
  'ui-list-item-divider': { tw: 'border-b border-[var(--border)]' },
  'ui-list-item-no-gutters > button': { tw: 'px-0' },
  'ui-list-item-button': {
    tw: 'flex min-h-12 w-full cursor-pointer items-center justify-between gap-3 border-0 bg-transparent px-4 py-3 text-left text-[var(--text-muted)] last:border-b-0 hover:bg-white/[.03] focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]',
  },
  'ui-list-item-button-selected': {
    tw: 'bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]',
  },
  'ui-list-item-text': {
    tw: 'flex min-w-0 flex-1 flex-col gap-1',
  },
  'ui-list-primary': {
    tw: 'text-xs font-medium text-[var(--text)]',
  },
  'ui-list-secondary': {
    tw: 'text-[10px] text-[var(--muted)]',
  },
});

// menu.js
register.all({
  'demo-menu-modes': {
    tw: 'm-0 flex flex-wrap gap-2 border-0 p-0',
  },
  'demo-menu-mode': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-[11px] text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-menu-mode-active': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-soft)] font-medium text-[var(--rgi-blue)]',
  },
  'demo-menu-stage': {
    tw: 'flex min-h-48 w-full max-w-[520px] flex-col justify-center gap-3 rounded-lg border border-dashed border-[var(--border)] p-5',
  },
  'demo-menu-project': {
    tw: 'flex w-full items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--panel)] p-3',
  },
  'demo-menu-project div': {
    tw: 'flex flex-col gap-1',
  },
  'demo-menu-project strong': {
    tw: 'text-xs font-semibold text-white',
  },
  'demo-menu-project span': {
    tw: 'text-[10px] text-[var(--muted)]',
  },
  'demo-menu-trigger': {
    tw: 'inline-flex size-8 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent text-[var(--text-muted)] hover:bg-white/[.06] hover:text-white',
  },
  'demo-menu-surface': {
    tw: 'z-50 w-52 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-1 shadow-2xl',
  },
  'demo-menu-item': {
    tw: 'flex w-full cursor-pointer items-center gap-2 rounded-md border-0 bg-transparent px-3 py-2 text-left text-xs text-[var(--text-muted)] hover:bg-white/[.05] hover:text-white focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]',
  },
  'demo-menu-item span': {
    tw: 'flex-1',
  },
  'demo-menu-item-danger': {
    tw: 'text-rose-400 hover:text-rose-300',
  },
});

// modal.js
register.all({
  'demo-modal-trigger': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs font-medium text-[var(--text)] hover:border-[var(--rgi-blue)]',
  },
  'demo-modal-backdrop': {
    tw: 'fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4',
  },
  'demo-modal-dismiss': {
    tw: 'absolute inset-0 h-full w-full cursor-default border-0 bg-transparent',
  },
  'demo-modal': {
    tw: 'relative z-10 w-full max-w-[440px] rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 shadow-2xl',
  },
  'demo-modal header': {
    tw: 'flex items-center justify-between gap-4',
  },
  'demo-modal h2': {
    tw: 'm-0 text-base font-semibold text-white',
  },
  'demo-modal header button': {
    tw: 'cursor-pointer border-0 bg-transparent text-[var(--muted)] hover:text-white',
  },
  'demo-modal p': {
    tw: 'my-4 text-xs leading-relaxed text-[var(--muted)]',
  },
  'demo-modal label': {
    tw: 'mb-1 block text-xs font-medium text-[var(--text-muted)]',
  },
  'demo-modal input': {
    tw: 'h-10 w-full rounded-md border border-[var(--border)] bg-[var(--page)] px-3 text-sm text-[var(--text)] outline-none focus:border-[var(--rgi-blue)]',
  },
  'demo-modal footer': {
    tw: 'mt-5 flex justify-end gap-2',
  },
  'demo-modal footer button': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-xs text-[var(--text-muted)] hover:bg-white/[.04]',
  },
  'demo-modal footer .demo-modal-primary': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-dark)] font-semibold text-white hover:bg-[#6689ed]',
  },
  'demo-modal-option': { tw: 'inline-flex items-center gap-2 text-xs text-[var(--text-muted)]' },
  'demo-modal-high-contrast': { tw: 'border-2 border-white bg-black text-white' },
  'demo-modal-high-contrast input': {
    tw: 'border-white bg-black text-white placeholder:text-white',
  },
  'demo-modal-reduced-motion': { tw: 'transition-none' },
});

// number-field.js
register.all({
  'demo-number-field-control': {
    tw: 'flex max-w-[360px] flex-col gap-2',
  },
  'demo-number-field-control label': {
    tw: 'text-xs font-medium text-[var(--text-muted)]',
  },
  'demo-number-field': {
    tw: 'inline-flex h-10 w-fit overflow-hidden rounded-md border border-[var(--border)] bg-[var(--panel)]',
  },
  'demo-number-field button': {
    tw: 'inline-flex w-10 cursor-pointer items-center justify-center border-0 bg-transparent px-2 text-[var(--text-muted)] hover:bg-white/[.05] disabled:cursor-not-allowed disabled:opacity-40',
  },
  'demo-number-field input': {
    tw: 'w-16 border-x border-[var(--border)] bg-transparent text-center text-sm text-[var(--text)] outline-none',
  },
  'demo-number-field span': {
    tw: 'flex items-center px-2 text-xs text-[var(--muted)]',
  },
  'demo-number-field-invalid': {
    tw: 'border-rose-500',
  },
  'demo-number-field-error': {
    tw: 'text-[11px] text-rose-400',
  },
});

// pagination.js
register('demo-pagination', { base: { tw: 'flex flex-wrap items-center gap-1.5' } });
register('demo-page-button', {
  base: {
    tw: 'inline-flex size-9 cursor-pointer items-center justify-center rounded-md border border-[var(--border)] bg-[var(--panel)] text-sm text-[var(--text)] hover:bg-[var(--panel-raised)] disabled:cursor-not-allowed disabled:opacity-40',
  },
});
register('demo-page-active', {
  base: { tw: 'border-[#607db9] bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]' },
});
register.all({
  'demo-pagination-small .demo-page-button': { tw: 'size-7 text-xs' },
  'demo-pagination-large .demo-page-button': { tw: 'size-11 text-base' },
  'demo-pagination-control': {
    tw: 'flex w-fit items-center gap-2 text-xs text-[var(--text-muted)]',
  },
  'demo-pagination-control select': {
    tw: 'rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 py-1 text-xs text-[var(--text)]',
  },
  'demo-pagination-table': {
    tw: 'max-h-36 w-full max-w-[360px] overflow-y-auto rounded-md border border-[var(--border)] bg-[var(--panel)] text-xs text-[var(--text-muted)] [&>div]:border-b [&>div]:border-[var(--border)] [&>div]:px-3 [&>div]:py-2',
  },
});

// paper.js
register.all({
  'demo-paper-grid': {
    tw: 'grid w-full max-w-[760px] gap-4 sm:grid-cols-3',
  },
  'demo-paper': {
    tw: 'flex min-h-28 flex-col justify-center gap-2 rounded-lg bg-[var(--panel)] p-4 text-xs text-[var(--muted)]',
  },
  'demo-paper strong': {
    tw: 'text-sm font-semibold text-white',
  },
  'demo-paper-flat': {
    tw: 'border border-transparent',
  },
  'demo-paper-raised': {
    tw: 'border border-[var(--border)] shadow-xl',
  },
  'demo-paper-outlined': {
    tw: 'border border-[var(--rgi-blue)] bg-transparent',
  },
  'demo-paper-elevations': { tw: 'grid-cols-2 sm:grid-cols-3' },
  'demo-paper-nested': { tw: 'max-w-[540px] border border-[var(--border)] shadow-xl' },
  'demo-paper-elevation-0': { tw: 'border border-transparent shadow-none' },
  'demo-paper-elevation-1': { tw: 'border border-[var(--border)] shadow-md' },
  'demo-paper-elevation-2': { tw: 'border border-[var(--border)] shadow-lg' },
  'demo-paper-elevation-3': { tw: 'border border-[var(--border)] shadow-xl' },
  'demo-paper-elevation-4': { tw: 'border border-[var(--border)] shadow-2xl' },
  'demo-paper-elevation-8': { tw: 'border border-[#526078] shadow-[0_16px_38px_rgba(0,0,0,.45)]' },
});

// popover.js
register.all({
  'demo-popover-controls': {
    tw: 'm-0 flex flex-wrap gap-2 border-0 p-0',
  },
  'demo-popover-mode': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-[11px] text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-popover-mode-active': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-soft)] font-medium text-[var(--rgi-blue)]',
  },
  'demo-popover-placement': {
    tw: 'cursor-pointer rounded border border-[var(--border)] bg-transparent px-2 py-1 text-[10px] capitalize text-[var(--muted)] hover:text-white',
  },
  'demo-popover-placement-active': {
    tw: 'border-[var(--rgi-blue)] text-[var(--rgi-blue)]',
  },
  'demo-popover-anchor-wrap': {
    tw: 'flex min-h-40 items-center justify-center rounded-lg border border-dashed border-[var(--border)] bg-[var(--panel)]/40 p-6',
  },
  'demo-popover-trigger': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs font-medium text-[var(--text)] hover:border-[var(--rgi-blue)]',
  },
  'demo-popover-surface': {
    tw: 'z-50 w-[min(300px,calc(100vw-2rem))] rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4 shadow-2xl',
  },
  'demo-popover-heading': {
    tw: 'flex items-center gap-2 text-[var(--rgi-blue)]',
  },
  'demo-popover-heading span': {
    tw: 'flex min-w-0 flex-1 flex-col gap-1',
  },
  'demo-popover-heading strong': {
    tw: 'text-xs font-semibold text-white',
  },
  'demo-popover-heading small': {
    tw: 'text-[10px] text-[var(--muted)]',
  },
  'demo-popover-heading button': {
    tw: 'cursor-pointer border-0 bg-transparent p-1 text-[var(--muted)] hover:text-white',
  },
  'demo-popover-description': {
    tw: 'mb-0 mt-3 text-xs leading-relaxed text-[var(--text-muted)]',
  },
  'demo-popover-status': {
    tw: 'mt-3 block text-[10px] text-[var(--muted)]',
  },
  'demo-popover-colors': {
    tw: 'mt-3 flex flex-col gap-1',
  },
  'demo-popover-colors button': {
    tw: 'flex cursor-pointer items-center gap-2 rounded border-0 bg-transparent px-2 py-2 text-left text-xs text-[var(--text-muted)] hover:bg-white/[.05]',
  },
  'demo-popover-colors button span': {
    tw: 'size-3 rounded-full',
  },
  'demo-popover-colors button svg': {
    tw: 'ml-auto',
  },
});

// popper.js
register.all({
  'demo-popper-controls': {
    tw: 'm-0 flex flex-wrap gap-2 border-0 p-0',
  },
  'demo-popper-control': {
    tw: 'inline-flex cursor-pointer items-center gap-1 rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-xs capitalize text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-popper-control-active': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-soft)] font-medium text-[var(--rgi-blue)]',
  },
  'demo-popper-offsets': {
    tw: 'grid w-full max-w-[480px] gap-4 sm:grid-cols-2',
  },
  'demo-popper-offsets label': {
    tw: 'flex flex-col gap-2 text-xs text-[var(--text-muted)]',
  },
  'demo-popper-offsets label span': {
    tw: 'flex justify-between',
  },
  'demo-popper-offsets output': {
    tw: 'text-[var(--rgi-blue)]',
  },
  'demo-popper-offsets input': {
    tw: 'accent-[var(--rgi-blue-dark)]',
  },
  'demo-popper-stage': {
    tw: 'relative flex min-h-52 w-full max-w-[600px] items-center justify-center rounded-lg border border-dashed border-[var(--border)] bg-[var(--panel)]/40 p-6',
  },
  'demo-popper-anchor': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-xs font-medium text-white hover:border-[var(--rgi-blue)]',
  },
  'demo-popper-surface': {
    tw: 'z-50 flex max-w-64 items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-3 text-[var(--text)] shadow-2xl',
  },
  'demo-popper-surface strong': {
    tw: 'text-xs font-semibold capitalize text-[var(--rgi-blue)]',
  },
  'demo-popper-surface span': {
    tw: 'text-[10px] leading-relaxed text-[var(--muted)]',
  },
  'demo-popper-surface button': {
    tw: 'cursor-pointer border-0 bg-transparent p-0 text-[var(--muted)] hover:text-white',
  },
});

// portal.js
register.all({
  'demo-portal-explainer': {
    tw: 'flex max-w-[560px] flex-col items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-5',
  },
  'demo-portal-explainer p': {
    tw: 'm-0 text-xs leading-relaxed text-[var(--muted)]',
  },
  'demo-portal-trigger': {
    tw: 'cursor-pointer rounded-md border border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-dark)] px-3 py-2 text-xs font-semibold text-white hover:bg-[#6689ed] disabled:cursor-default disabled:opacity-50',
  },
  'demo-portal-toast': {
    tw: 'fixed bottom-6 right-6 z-[100] flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-xs text-[var(--text)] shadow-2xl',
  },
  'demo-portal-toast button': {
    tw: 'cursor-pointer border-0 bg-transparent text-xs font-semibold text-[var(--rgi-blue)] hover:text-white',
  },
  'demo-portal-clipping': { tw: 'relative max-h-56 overflow-hidden' },
  'demo-portal-custom-target': {
    tw: 'relative mt-3 w-full rounded border border-dashed border-[var(--rgi-blue)] p-8 text-[10px] text-[var(--muted)]',
  },
  'demo-portal-toast.demo-portal-toast-custom': {
    tw: 'absolute bottom-auto left-2 right-auto top-2 z-10',
  },
});

// progress.js
register.group('demo-progress', {
  root: { tw: 'flex w-full max-w-[420px] flex-col gap-2' },
  label: { tw: 'flex justify-between text-xs text-[var(--muted)]' },
  track: { tw: 'relative h-2 overflow-hidden rounded-full bg-[#293447]' },
  bar: {
    tw: 'relative z-[1] h-full rounded-full bg-[var(--rgi-blue-dark)] transition-[width] duration-200',
  },
});
register('demo-progress-indeterminate', {
  base: { tw: 'w-1/3 animate-[progress_1.2s_ease-in-out_infinite]' },
});
register('demo-progress-keyframes', {
  '@keyframes progress': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(300%)' },
  },
});
register.all({
  'demo-progress-buffer': { tw: 'absolute inset-y-0 left-0 rounded-full bg-[#52627e]' },
  'demo-progress-circular-row': { tw: 'flex flex-wrap gap-4' },
  'demo-progress-circular': {
    tw: 'flex size-16 items-center justify-center rounded-full p-1.5 text-xs font-semibold text-[var(--text)] [&>span]:flex [&>span]:size-full [&>span]:items-center [&>span]:justify-center [&>span]:rounded-full [&>span]:bg-[var(--panel)]',
  },
});

// radio-group.js
register.group('demo-radio-group', {
  root: { tw: 'flex max-w-[420px] flex-col gap-3 border-0 p-0' },
  legend: { tw: 'mb-2 text-xs font-semibold text-[var(--text)]' },
  option: {
    tw: 'inline-flex cursor-pointer items-center gap-3 text-sm text-[var(--text)] has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-45',
  },
  input: { tw: 'size-4 accent-[var(--rgi-blue-dark)]' },
});
register('demo-radio-group-horizontal', {
  base: { tw: 'flex-row flex-wrap items-center gap-x-5 gap-y-2' },
});

// rating.js
register.all({
  'demo-rating': {
    tw: 'm-0 flex items-center gap-1 border-0 p-0',
  },
  'demo-rating-star': {
    tw: 'cursor-pointer border-0 bg-transparent p-1 text-[var(--border)] transition-colors hover:text-[#f4bd50]',
  },
  'demo-rating-star-active': {
    tw: 'text-[#f4bd50]',
  },
  'demo-rating-value': {
    tw: 'ml-2 text-xs font-medium text-[var(--text-muted)]',
  },
  'demo-rating-gradient': { tw: 'absolute size-0 overflow-hidden' },
  'demo-rating-precision': {
    tw: 'flex w-full max-w-[300px] flex-col gap-2 text-xs text-[var(--text-muted)]',
  },
  'demo-rating-precision input': { tw: 'accent-[#f4bd50]' },
  'demo-rating-readonly': { tw: 'flex items-center gap-2 text-xs text-[var(--text-muted)]' },
  'demo-rating-star:disabled': { tw: 'cursor-default opacity-80' },
  'demo-rating-static': {
    tw: 'flex items-center gap-1 text-[#f4bd50] [&>span]:ml-1 [&>span]:text-xs [&>span]:text-[var(--text-muted)]',
  },
});

// select.js
register.group('demo-select', {
  root: { tw: 'flex w-full max-w-[420px] flex-col gap-1.5' },
  label: { tw: 'text-xs font-medium text-[var(--text)]' },
  input: {
    tw: 'h-10 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 text-sm text-[var(--text)] outline-none focus:border-[var(--rgi-blue)] disabled:opacity-50',
  },
});
register('demo-select select[multiple]', { base: { tw: 'h-auto min-h-24 py-2' } });

// skeleton.js
register('demo-skeleton', {
  base: { tw: 'block h-3 animate-pulse rounded bg-[#303b4c]' },
  modifiers: {
    circular: { tw: 'size-11 rounded-full' },
    rectangular: { tw: 'h-16 rounded-md' },
  },
});
register.all({
  'demo-skeleton-static': { tw: 'animate-none' },
  'demo-skeleton-control': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-[var(--text)] hover:border-[var(--rgi-blue)]',
  },
  'demo-skeleton-toggle': { tw: 'inline-flex items-center gap-2 text-xs text-[var(--text-muted)]' },
  'demo-skeleton-loaded': {
    tw: 'flex min-h-24 w-full max-w-[420px] flex-col justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4 text-sm text-[var(--text)] [&>span]:text-xs [&>span]:text-[var(--muted)]',
  },
});

// slider.js
register.group('demo-slider', {
  root: { tw: 'flex w-full max-w-[420px] flex-col gap-2' },
  label: { tw: 'text-xs font-medium text-[var(--text)]' },
  input: {
    tw: 'h-2 w-full cursor-pointer accent-[var(--rgi-blue-dark)] disabled:cursor-not-allowed disabled:opacity-40',
  },
});
register.all({
  'demo-slider-control': { tw: 'flex w-full flex-col gap-2' },
  'demo-slider-marks': { tw: 'flex justify-between text-[9px] text-[var(--muted)]' },
  'demo-slider-range': {
    tw: 'flex w-full max-w-[420px] flex-col gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-3',
  },
});

// snackbar.js
register.group('demo-snackbar', {
  root: {
    tw: 'flex max-w-[420px] items-center justify-between gap-6 rounded-lg border border-[var(--rgi-success-border)] bg-[var(--panel-raised)] px-4 py-3 text-sm text-[var(--text)] shadow-[0_8px_24px_rgba(0,0,0,.32)]',
  },
  close: {
    tw: 'cursor-pointer border-0 bg-transparent text-lg text-[var(--muted)] hover:text-white',
  },
});
register.all({
  'demo-snackbar-modes': {
    tw: 'm-0 flex flex-wrap gap-2 border-0 p-0',
  },
  'demo-snackbar-mode': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-[11px] capitalize text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-snackbar-mode-active': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-soft)] font-medium text-[var(--rgi-blue)]',
  },
  'demo-snackbar-show': {
    tw: 'w-fit cursor-pointer rounded-md border border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-dark)] px-3 py-2 text-xs font-semibold text-white hover:bg-[#6689ed]',
  },
  'demo-snackbar-stage': {
    tw: 'flex min-h-20 w-full max-w-[560px] items-center rounded-lg border border-dashed border-[var(--border)] p-3',
  },
  'demo-snackbar-stage-bottom': {
    tw: 'items-end',
  },
  'demo-snackbar-stage-top': {
    tw: 'items-start',
  },
  'demo-snackbar': {
    tw: 'flex w-full max-w-[420px] items-center gap-3 rounded-lg border border-[var(--rgi-success-border)] bg-[var(--panel-raised)] px-4 py-3 text-xs text-[var(--text)] shadow-[0_8px_24px_rgba(0,0,0,.32)]',
  },
  'demo-snackbar-icon': {
    tw: 'shrink-0 text-emerald-400',
  },
  'demo-snackbar > span': {
    tw: 'flex-1',
  },
  'demo-snackbar-action': {
    tw: 'inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent text-[11px] font-semibold text-[var(--rgi-blue)] hover:text-white',
  },
  'demo-snackbar-close': {
    tw: 'inline-flex cursor-pointer border-0 bg-transparent text-[var(--muted)] hover:text-white',
  },
});

// speed-dial.js
register.all({
  'demo-speed-dial': {
    tw: 'flex min-h-44 w-full max-w-[400px] flex-col items-end justify-end gap-3 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5',
  },
  'demo-speed-dial-actions': {
    tw: 'flex flex-col items-end gap-2',
  },
  'demo-speed-dial-actions button': {
    tw: 'inline-flex cursor-pointer items-center gap-3 rounded-full border border-[var(--border)] bg-[#171e2a] py-2 pl-4 pr-3 text-xs text-[var(--text)] shadow-md hover:border-[var(--rgi-blue)]',
  },
  'demo-speed-dial-trigger': {
    tw: 'inline-flex size-11 cursor-pointer items-center justify-center rounded-full border-0 bg-[var(--rgi-blue-dark)] text-white shadow-lg transition-transform hover:bg-[#6689ed]',
  },
  'demo-speed-dial-trigger-open': {
    tw: 'rotate-45',
  },
  'demo-speed-dial-control': {
    tw: 'flex w-fit items-center gap-2 text-xs text-[var(--text-muted)]',
  },
  'demo-speed-dial-control select': {
    tw: 'rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 py-1 text-xs text-[var(--text)]',
  },
  'demo-speed-dial-actions-down': { tw: 'flex-col-reverse' },
  'demo-speed-dial-actions-left': { tw: 'flex-row-reverse flex-wrap' },
  'demo-speed-dial-actions-right': { tw: 'flex-row flex-wrap' },
  'demo-speed-dial-left': { tw: 'flex-row-reverse items-center justify-end' },
  'demo-speed-dial-right': { tw: 'flex-row items-center justify-end' },
  'demo-speed-dial-down': { tw: 'justify-start' },
});

// stepper.js
register.all({
  'demo-stepper': {
    tw: 'm-0 flex w-full max-w-[720px] list-none items-center p-0',
  },
  'demo-step': {
    tw: 'relative flex flex-1 items-center gap-2 text-xs text-[var(--muted)] last:flex-none',
  },
  'demo-step-active': {
    tw: 'font-medium text-[var(--text)]',
  },
  'demo-step-marker': {
    tw: 'inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-[10px]',
  },
  'demo-step-active .demo-step-marker': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-dark)] text-white',
  },
  'demo-stepper-actions': {
    tw: 'mt-5 flex w-full max-w-[720px] items-center justify-between',
  },
  'demo-stepper-actions button': {
    tw: 'cursor-pointer rounded-md border border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-dark)] px-3 py-2 text-xs font-medium text-white hover:bg-[#6689ed] disabled:cursor-default disabled:opacity-50',
  },
  'demo-stepper-control': { tw: 'flex w-fit items-center gap-2 text-xs text-[var(--text-muted)]' },
  'demo-stepper-control select': {
    tw: 'rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 py-1 text-xs text-[var(--text)]',
  },
  'demo-stepper-vertical': { tw: 'flex max-w-[340px] flex-col items-start gap-4' },
  'demo-stepper-vertical .demo-step': { tw: 'min-h-12 flex-none' },
  'demo-stepper-alternative .demo-step': { tw: 'flex-col items-start gap-1' },
  'demo-stepper-content': {
    tw: 'flex max-w-[420px] flex-col gap-1 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-3 text-xs text-[var(--muted)] [&>strong]:text-[var(--text)]',
  },
});

// switch.js
register.group('demo-switch', {
  root: {
    tw: 'inline-flex cursor-pointer items-center gap-3 text-sm text-[var(--text)] has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-[var(--rgi-blue)]',
  },
  input: { tw: 'sr-only' },
  track: {
    tw: 'flex h-5 w-9 items-center rounded-full bg-[#465164] p-0.5 transition-colors',
  },
  thumb: { tw: 'size-4 rounded-full bg-white transition-transform' },
});
register('demo-switch-checked .demo-switch-track', {
  base: { tw: 'bg-[var(--rgi-blue-dark)]' },
});
register('demo-switch-checked .demo-switch-thumb', {
  base: { tw: 'translate-x-4' },
});
register('demo-switch-copy', {
  base: { tw: 'flex flex-col gap-1 [&>small]:text-[10px] [&>small]:text-[var(--muted)]' },
});
register('demo-switch-success.demo-switch-checked .demo-switch-track', {
  base: { tw: 'bg-[var(--rgi-success)]' },
});
register('demo-switch-danger.demo-switch-checked .demo-switch-track', {
  base: { tw: 'bg-[var(--rgi-error)]' },
});

// table.js
register('demo-table-wrap', {
  base: { tw: 'w-full overflow-x-auto rounded-lg border border-[var(--border)]' },
});
register('demo-table', {
  base: { tw: 'w-full border-collapse text-left text-sm text-[var(--text)]' },
});
register('demo-table th', {
  base: { tw: 'bg-[var(--surface)] px-4 py-3 text-xs font-semibold text-[var(--muted)]' },
});
register('demo-table td', { base: { tw: 'border-t border-[var(--border)] px-4 py-3' } });
register.all({
  'demo-table-dense th': { tw: 'px-2 py-1.5' },
  'demo-table-dense td': { tw: 'px-2 py-1.5' },
  'demo-table-control': { tw: 'inline-flex items-center gap-2 text-xs text-[var(--text-muted)]' },
  'demo-table-control-button': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-xs text-[var(--text)] hover:border-[var(--rgi-blue)] disabled:opacity-40',
  },
  'demo-table-sort': {
    tw: 'cursor-pointer border-0 bg-transparent p-0 text-left text-xs font-semibold text-[var(--muted)] hover:text-[var(--text)]',
  },
  'demo-table-row-selected': { tw: 'bg-[var(--rgi-blue-soft)]' },
});

// tabs.js
register('demo-tabs', { base: { tw: 'w-full max-w-[700px]' } });
register('demo-tab-list', { base: { tw: 'flex border-b border-[var(--border)]' } });
register('demo-tab', {
  base: {
    tw: 'cursor-pointer border-0 border-b-2 border-transparent bg-transparent px-4 py-3 text-sm text-[var(--muted)] hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]',
  },
});
register('demo-tab-active', {
  base: { tw: 'border-b-[var(--rgi-blue)] font-semibold text-[var(--rgi-blue)]' },
});
register('demo-tab-panel', { base: { tw: 'py-5 text-sm leading-relaxed text-[var(--text)]' } });
register.all({
  'demo-tabs-control': { tw: 'flex w-fit items-center gap-2 text-xs text-[var(--text-muted)]' },
  'demo-tabs-control select': {
    tw: 'rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 py-1 text-xs text-[var(--text)]',
  },
  'demo-tab-list-centered': { tw: 'justify-center' },
  'demo-tab-list-scrollable': { tw: 'overflow-x-auto whitespace-nowrap' },
});

// text-field.js
register.group('demo-field', {
  root: { tw: 'flex w-full max-w-[420px] flex-col gap-1.5' },
  label: { tw: 'text-xs font-medium text-[var(--text)]' },
  input: {
    tw: 'h-10 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--subtle)] focus:border-[var(--rgi-blue)] focus:ring-2 focus:ring-[var(--rgi-blue-soft)] disabled:cursor-not-allowed disabled:opacity-50',
  },
  message: { tw: 'text-xs text-[var(--muted)]' },
});
register('demo-field-input-error', { base: { tw: 'border-[#794248] focus:border-[#ff858e]' } });
register.all({
  'demo-field-control': {
    tw: 'flex min-h-10 items-center rounded-md border border-[var(--border)] bg-[var(--surface)] focus-within:border-[var(--rgi-blue)] focus-within:ring-2 focus-within:ring-[var(--rgi-blue-soft)]',
  },
  'demo-field-control .demo-field-input': {
    tw: 'min-w-0 flex-1 border-0 bg-transparent focus:border-0 focus:ring-0',
  },
  'demo-field-adornment': {
    tw: 'inline-flex shrink-0 items-center px-3 text-xs text-[var(--muted)]',
  },
  'demo-field-clear': {
    tw: 'mr-2 inline-flex cursor-pointer border-0 bg-transparent p-1 text-[var(--muted)] hover:text-[var(--text)]',
  },
});

// toggle-button.js
register('demo-toggle', {
  base: {
    tw: 'inline-flex h-9 cursor-pointer items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-medium text-[var(--muted)] transition-colors hover:bg-[var(--panel-raised)] focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]',
  },
  modifiers: {
    selected: { tw: 'border-[#607db9] bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]' },
  },
});
register.all({
  'demo-toggle-group': { tw: 'm-0 flex flex-wrap gap-2 border-0 p-0' },
  'demo-toggle-small': { tw: 'h-7 px-2.5 text-xs' },
  'demo-toggle-large': { tw: 'h-11 px-5 text-base' },
  'demo-toggle-icon': { tw: 'size-9 px-0' },
  'demo-toggle-icon.demo-toggle-small': { tw: 'size-7' },
  'demo-toggle-icon.demo-toggle-large': { tw: 'size-11' },
  'demo-toggle-size-control': {
    tw: 'flex w-fit items-center gap-2 text-xs text-[var(--text-muted)]',
  },
  'demo-toggle-size-control select': {
    tw: 'rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 py-1 text-xs text-[var(--text)]',
  },
});

// tooltip.js
register.all({
  'demo-tooltip-modes': {
    tw: 'm-0 flex flex-wrap gap-2 border-0 p-0',
  },
  'demo-tooltip-mode': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-[11px] text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
  'demo-tooltip-mode-active': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-soft)] font-medium text-[var(--rgi-blue)]',
  },
  'demo-tooltip-stage': {
    tw: 'flex min-h-48 items-center justify-center rounded-lg border border-dashed border-[var(--border)] bg-[var(--panel)]/40 p-6',
  },
  'demo-tooltip-trigger': {
    tw: 'inline-flex cursor-pointer items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--panel)] px-4 py-2.5 text-xs font-medium text-[var(--text)] hover:border-[var(--rgi-blue)] focus-visible:outline-2 focus-visible:outline-[var(--rgi-blue)]',
  },
  'demo-tooltip-surface': {
    tw: 'z-50 max-w-56 rounded-md border border-[var(--border)] bg-[#263244] px-3 py-2 text-xs text-white shadow-xl',
  },
  'demo-tooltip-surface-rich': {
    tw: 'max-w-80 rounded-lg p-3',
  },
  'demo-tooltip-rich-content': {
    tw: 'flex items-start gap-2',
  },
  'demo-tooltip-rich-content > span': {
    tw: 'flex flex-1 flex-col gap-1',
  },
  'demo-tooltip-rich-content strong': {
    tw: 'text-xs font-semibold',
  },
  'demo-tooltip-rich-content small': {
    tw: 'text-[10px] leading-relaxed text-slate-300',
  },
  'demo-tooltip-shortcut': {
    tw: 'mt-1 inline-flex items-center gap-1 text-[10px] text-slate-300',
  },
  'demo-tooltip-shortcut kbd': {
    tw: 'rounded border border-slate-500 px-1 text-[9px]',
  },
});

// transfer-list.js
register.all({
  'demo-transfer-list': {
    tw: 'grid w-full max-w-[760px] gap-4 sm:grid-cols-2',
  },
  'demo-transfer-column': {
    tw: 'flex min-h-64 flex-col rounded-lg border border-[var(--border)] bg-[var(--panel)] p-3',
  },
  'demo-transfer-column > strong': {
    tw: 'mb-3 flex items-center justify-between border-b border-[var(--border)] pb-3 text-xs font-semibold text-[var(--text)]',
  },
  'demo-transfer-column > strong span': {
    tw: 'text-[10px] font-normal text-[var(--muted)]',
  },
  'demo-transfer-column ul': {
    tw: 'm-0 flex flex-1 list-none flex-col gap-1 p-0',
  },
  'demo-transfer-item': {
    tw: 'w-full cursor-pointer rounded-md border border-transparent bg-transparent px-2 py-2 text-left text-xs text-[var(--text-muted)] hover:bg-white/[.04]',
  },
  'demo-transfer-item-selected': {
    tw: 'border-[var(--rgi-blue-dark)] bg-[var(--rgi-blue-soft)] text-[var(--rgi-blue)]',
  },
  'demo-transfer-empty': {
    tw: 'px-2 py-2 text-xs text-[var(--muted)]',
  },
  'demo-transfer-action': {
    tw: 'mt-3 inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-[var(--border)] bg-transparent px-2 py-2 text-[11px] font-medium text-[var(--text-muted)] hover:border-[var(--rgi-blue)] disabled:cursor-not-allowed disabled:opacity-40',
  },
  'demo-transfer-select-all': {
    tw: 'mb-2 w-fit cursor-pointer border-0 bg-transparent px-1 text-left text-[10px] font-medium text-[var(--rgi-blue)] hover:underline disabled:opacity-40',
  },
});

// typography.js
register.all({
  'demo-typography': {
    tw: 'flex w-full max-w-[760px] flex-col gap-4',
  },
  'demo-typography > div': {
    tw: 'border-b border-[var(--border)] pb-3 last:border-b-0',
  },
  'demo-typography > div > span': {
    tw: 'mb-2 block text-[9px] font-semibold uppercase tracking-[.12em] text-[var(--muted)]',
  },
  'demo-typography h1': {
    tw: 'm-0 text-3xl font-semibold tracking-tight text-white',
  },
  'demo-typography h2': {
    tw: 'm-0 text-xl font-semibold text-[var(--text)]',
  },
  'demo-typography h3': {
    tw: 'm-0 text-base font-medium text-[var(--text)]',
  },
  'demo-typography p': {
    tw: 'm-0 max-w-[580px] text-sm leading-relaxed text-[var(--text-muted)]',
  },
  'demo-typography small': {
    tw: 'text-xs text-[var(--muted)]',
  },
  'demo-typography-controls': {
    tw: 'flex flex-wrap gap-3 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-3',
  },
  'demo-typography-controls label': {
    tw: 'flex items-center gap-2 text-[10px] text-[var(--text-muted)]',
  },
  'demo-typography-controls select': {
    tw: 'rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-xs text-[var(--text)]',
  },
});
