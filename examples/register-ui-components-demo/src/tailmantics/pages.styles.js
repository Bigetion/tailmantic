import { register } from 'tailmantic/collector';

// app-bar.js
register.all({
  'demo-app-bar-preview': {
    tw: 'rounded-lg border bg-[var(--panel)]',
  },
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
});

// alert.js
register.all({
  'demo-alert-action': {
    tw: 'mt-2 inline-flex w-fit cursor-pointer items-center rounded-md border border-current/25 bg-transparent px-2.5 py-1.5 text-xs font-semibold text-inherit transition-colors hover:bg-white/[.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current',
  },
  'demo-alert-restore': {
    tw: 'w-fit cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-[var(--text)] hover:border-[var(--rgi-blue)]',
  },
});

// avatar.js
register.all({
  'demo-avatar-group': {
    tw: 'm-0 flex items-center border-0 p-0 pl-3 [&>.ui-avatar]:-ml-3 [&>.ui-avatar]:ring-2 [&>.ui-avatar]:ring-[var(--panel)]',
  },
  'demo-avatar-control': {
    tw: 'cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
});

// badge.js
register.all({
  'demo-badge-anchor': {
    tw: 'relative inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-[var(--text-muted)]',
  },
  'demo-badge-control': {
    tw: 'w-fit cursor-pointer rounded-md border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-[var(--text-muted)] hover:border-[var(--rgi-blue)]',
  },
});

// bottom-navigation.js
register.all({
  'demo-bottom-nav-icon-wrap': { tw: 'relative flex items-center justify-center' },
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
  'demo-breadcrumb-control': {
    tw: 'flex w-fit items-center gap-2 text-xs text-[var(--text-muted)]',
  },
  'demo-breadcrumb-control select': {
    tw: 'rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 py-1 text-xs text-[var(--text)]',
  },
});

// button.js
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
  'demo-button-group': {
    tw: 'm-0 inline-flex w-fit overflow-hidden rounded-md border border-[var(--border)] bg-[var(--panel)] p-0',
  },
  'demo-button-group-item': {
    tw: 'relative inline-flex min-h-9 cursor-pointer select-none items-center justify-center gap-2 border-0 border-r border-[var(--border)] bg-transparent px-3.5 text-[11px] font-medium text-[var(--text-muted)] transition-colors last:border-r-0 hover:bg-white/[.05] hover:text-white focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#86a6ff] disabled:cursor-not-allowed disabled:opacity-40',
  },
  'demo-button-group-selected': {
    tw: 'bg-[#21304b] text-[#b9ccff] hover:bg-[#21304b] hover:text-[#b9ccff]',
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
register.all({
  'demo-chip-group': { tw: 'm-0 flex flex-wrap gap-2 border-0 p-0' },
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
