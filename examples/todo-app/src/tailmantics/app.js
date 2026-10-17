import { register } from 'tailmantic/collector';

register.all({
  ':where(*, *::before, *::after)': { boxSizing: 'border-box' },
  'todo-app': {
    tw: 'min-h-screen bg-[var(--canvas)] text-[var(--ink)]',
  },
  'todo-app-frame': {
    tw: 'mx-auto grid min-h-screen w-full max-w-[1440px] grid-cols-[248px_minmax(0,1fr)] max-lg:grid-cols-1',
  },
  'todo-sidebar': {
    tw: 'sticky top-0 flex h-screen flex-col border-r border-[#e5ebe7] bg-[#fbfcfb] px-5 py-6 max-lg:hidden',
  },
  'todo-brand': {
    tw: 'mb-10 flex items-center gap-3 font-[Manrope] text-[19px] font-extrabold text-[#1d3029] no-underline',
  },
  'todo-brand-icon': {
    tw: 'grid size-9 place-items-center rounded-[11px] bg-[#277562] text-white',
  },
  'todo-sidebar-caption': {
    tw: 'mb-3 pl-3 font-bold tracking-[.12em] text-[#9aa69f]',
  },
  'todo-view-nav': {
    tw: 'flex flex-col gap-1',
  },
  'todo-view-nav-mobile': {
    tw: 'hidden max-lg:flex max-lg:flex-row max-lg:overflow-x-auto max-lg:scrollbar-none max-lg:border-b max-lg:border-[#e7ece8] max-lg:bg-[#fbfcfb] max-lg:px-3 max-lg:py-2',
  },
  'todo-view-link': {
    tw: 'flex min-w-0 items-center justify-start gap-3 !rounded-[9px] !border-0 !bg-transparent !px-3 !py-2 !text-left !text-[13px] !font-medium !normal-case !tracking-normal !text-[#68766f] hover:!bg-[#f0f4f1] hover:!text-[#1d3029]',
  },
  'todo-view-link-mobile': {
    tw: 'max-lg:!min-h-8 max-lg:!shrink-0 max-lg:!gap-1.5 max-lg:!px-2.5 max-lg:!text-[11px]',
  },
  'todo-view-link-selected': {
    tw: '!bg-[#e6f2ed] !font-semibold !text-[#1d6b59] hover:!bg-[#e6f2ed] hover:!text-[#1d6b59]',
  },
  'todo-view-link.todo-view-link-selected': {
    tw: '!bg-[#e6f2ed] !font-semibold !text-[#1d6b59]',
  },
  'todo-view-link.todo-view-link-selected:hover': {
    tw: '!bg-[#e6f2ed] !text-[#1d6b59]',
  },
  'todo-view-icon': {
    tw: 'shrink-0',
  },
  'todo-view-label': {
    tw: 'truncate',
  },
  'todo-view-count': {
    tw: 'ml-auto !min-h-5 !border-0 !bg-transparent !px-1.5 !text-[10px] !text-[#8d9a92] max-lg:hidden',
  },
  'todo-sidebar-note': {
    tw: 'mt-auto !rounded-[12px] !border !border-[#e5ece7] !bg-[#f3f7f4] !p-4 !shadow-none',
  },
  'todo-note-icon': {
    tw: 'mb-3 grid size-7 place-items-center rounded-[9px] bg-white text-[#277562] shadow-sm',
  },
  'todo-note-copy': {
    tw: '!text-[12px] !font-semibold !text-[#34483f]',
  },
  'todo-note-detail': {
    tw: '!mt-1 !text-[11px] !text-[#849189]',
  },
  'todo-sidebar-footer': {
    tw: 'mt-5 flex items-center gap-3 border-t border-[#e7ece8] pt-5',
  },
  'todo-avatar': {
    tw: '!bg-[#dcebe4] !text-[#276b58]',
  },
  'todo-profile-copy': {
    tw: 'flex min-w-0 flex-1 flex-col [&_.tm-typography]:!text-[#34483f] [&_.tm-typography:first-child]:!text-[12px] [&_.tm-typography:last-child]:!text-[11px] [&_.tm-typography:last-child]:!text-[#8c9991]',
  },
  'todo-online-dot': {
    tw: 'size-2 shrink-0 rounded-full bg-[#5b9b78]',
  },
  'todo-main': {
    tw: 'min-w-0',
  },
  'todo-mobile-header': {
    tw: 'hidden items-center justify-between border-b border-[#e7ece8] bg-[#fbfcfb] px-5 py-3 max-lg:flex',
  },
  'todo-mobile-date': {
    tw: '!text-[11px] !text-[#87938c]',
  },
  'todo-content': {
    tw: 'mx-auto max-w-[1020px] px-10 py-10 max-md:px-5 max-md:py-6',
  },
  'todo-page-heading': {
    tw: 'mb-7 flex items-end justify-between gap-6 max-sm:flex-col max-sm:items-stretch',
  },
  'todo-eyebrow': {
    tw: 'mb-2 flex items-center gap-2 !text-[12px] !font-medium !text-[#89958e]',
  },
  'todo-page-title': {
    tw: '!font-[Manrope] !text-[30px] !font-bold !leading-tight !tracking-[-.025em] !text-[#1d3029] max-sm:!text-[26px]',
  },
  'todo-heading-copy': {
    tw: '!mt-2 !text-[13px] !text-[#7f8b84]',
  },
  'todo-search': {
    tw: 'w-[230px] max-sm:w-full',
  },
  'todo-search-shortcut': {
    tw: 'rounded border border-[#e8ece9] px-1.5 py-0.5 text-[10px] text-[#9aa59f]',
  },
  'todo-control-input': {
    tw: '!min-w-0 !border-[#e3e9e5] !bg-white !text-[12px] !text-[#263b32] placeholder:!text-[#a2aca6] focus:!border-[#9ac0b2]',
  },
  'todo-storage-alert': {
    tw: 'mb-5',
  },
  'todo-focus': {
    tw: 'mb-6 flex items-center gap-4 !rounded-[12px] !border !border-[#dceae2] !bg-[#edf5f0] !p-4 !shadow-none max-sm:gap-3 max-sm:!px-3',
  },
  'todo-focus-mark': {
    tw: 'grid size-9 shrink-0 place-items-center rounded-full bg-white [&>span]:size-2.5 [&>span]:rounded-full [&>span]:bg-[#4a9273]',
  },
  'todo-focus-copy': {
    tw: 'flex min-w-0 flex-1 flex-col [&_.tm-typography:first-child]:!text-[12px] [&_.tm-typography:first-child]:!font-semibold [&_.tm-typography:first-child]:!text-[#315849] [&_.tm-typography:last-child]:!mt-0.5 [&_.tm-typography:last-child]:!text-[11px] [&_.tm-typography:last-child]:!text-[#728b7d] max-sm:[&_.tm-typography:last-child]:hidden',
  },
  'todo-focus-progress': {
    tw: 'flex w-[150px] flex-col gap-1.5 text-right [&_.tm-typography]:!text-[10px] [&_.tm-typography]:!font-medium [&_.tm-typography]:!text-[#668574] max-sm:w-[72px]',
  },
  'todo-progress': {
    tw: '!w-full !text-[#5b9b78] [&_.tm-progress-track]:!h-1 [&_.tm-progress-track]:!bg-[#d6e7dc]',
  },
  'todo-composer-form': {
    tw: 'mb-8',
  },
  'todo-composer': {
    tw: '!rounded-[12px] !border !border-[#e2e9e4] !bg-white !p-2 !shadow-[0_2px_8px_rgba(31,56,44,.035)] focus-within:!border-[#a7cbbc]',
  },
  'todo-composer-main': {
    tw: 'flex items-center gap-3 px-3 py-2',
  },
  'todo-composer-plus': {
    tw: 'grid size-7 shrink-0 place-items-center rounded-full bg-[#e8f3ed] text-[#34745f]',
  },
  'todo-task-field': {
    tw: 'min-w-0 flex-1 [&_.tm-text-field-control]:!border-0 [&_.tm-text-field-control]:!bg-transparent [&_.tm-text-field-control]:!px-0 [&_.tm-text-field-control]:!py-1 [&_.tm-text-field-control]:!text-[13px] [&_.tm-text-field-control]:!shadow-none [&_.tm-text-field-control]:focus:!ring-0',
  },
  'todo-composer-options': {
    tw: 'flex items-center justify-end gap-2 border-t border-[#f0f2f0] px-2 pt-2 max-sm:flex-wrap max-sm:gap-1',
  },
  'todo-date-field': {
    tw: '!w-[172px] !flex-none max-sm:!w-[148px] [&_.tm-date-picker-trigger]:!h-8 [&_.tm-date-picker-trigger]:!min-h-8 [&_.tm-date-picker-trigger]:!rounded-[7px] [&_.tm-date-picker-trigger]:!border-[#e3e9e5] [&_.tm-date-picker-trigger]:!bg-white [&_.tm-date-picker-trigger]:!px-2 [&_.tm-date-picker-trigger]:!text-[11px] [&_.tm-date-picker-trigger]:!text-[#68766f] [&_.tm-date-picker-trigger]:hover:!bg-[#f5f7f5] [&_.tm-date-picker-trigger-icon]:!size-3.5 [&_.tm-date-picker-trigger-icon]:!text-[#77847c] [&_.tm-date-picker-trigger-chevron]:!size-4 [&_.tm-date-picker-trigger-chevron]:!text-[#77847c]',
  },
  'todo-date-picker-popover': {
    tw: '!border-[#e2e9e4] !bg-white !text-[#354a40] !shadow-[0_14px_36px_rgba(31,56,44,.16)]',
  },
  'todo-date-picker-popover .tm-date-picker-month-label': {
    tw: '!text-[#2b4037]',
  },
  'todo-date-picker-popover .tm-date-picker-weekday': {
    tw: '!text-[#89958e]',
  },
  'todo-date-picker-popover .tm-date-picker-month-button': {
    tw: '!text-[#718078] hover:!bg-[#f0f4f1] hover:!text-[#277562] focus-visible:!outline-[#277562]',
  },
  'todo-date-picker-popover .tm-date-picker-day': {
    tw: '!text-[#45584e] hover:!bg-[#f0f4f1] focus-visible:!outline-[#277562] aria-[current=date]:!text-[#277562]',
  },
  'todo-date-picker-popover .tm-date-picker-day-outside': {
    tw: '!text-[#adb7b0]',
  },
  'todo-date-picker-popover .tm-date-picker-day-selected': {
    tw: '!border-[#277562] !bg-[#277562] !text-white hover:!bg-[#1d5b4d]',
  },
  'todo-date-picker-popover .tm-date-picker-day-selected[aria-current="date"]:not(:disabled)': {
    tw: '!text-white',
  },
  'todo-priority-field': {
    tw: '!relative !w-[108px] !flex-none max-sm:!w-[96px] [&_.sr-only]:!absolute [&_.sr-only]:!-m-px [&_.sr-only]:!size-px [&_.sr-only]:!overflow-hidden [&_.sr-only]:!whitespace-nowrap [&_.sr-only]:!border-0 [&_.sr-only]:!p-0 [&_.sr-only]:[clip:rect(0,0,0,0)] [&_.sr-only]:[clip-path:inset(50%)] [&_.tm-select-trigger]:!h-8 [&_.tm-select-trigger]:!min-h-8 [&_.tm-select-trigger]:!w-[108px] max-sm:[&_.tm-select-trigger]:!w-[96px] [&_.tm-select-trigger]:!rounded-[7px] [&_.tm-select-trigger]:!border-[#e3e9e5] [&_.tm-select-trigger]:!bg-white [&_.tm-select-trigger]:!px-2 [&_.tm-select-trigger]:!text-[11px] [&_.tm-select-trigger]:!font-normal [&_.tm-select-trigger]:!normal-case [&_.tm-select-trigger]:!tracking-normal [&_.tm-select-trigger]:!text-[#68766f] [&_.tm-select-trigger]:hover:!bg-[#f5f7f5]',
  },
  'todo-add-button': {
    tw: '!ml-1 !h-8 !gap-1.5 !rounded-[7px] !bg-[#277562] !px-3 !text-[11px] !font-semibold !normal-case !tracking-normal hover:!bg-[#1d5b4d] max-sm:!ml-0',
  },
  'todo-list-toolbar': {
    tw: 'mb-3 flex items-center justify-between gap-3',
  },
  'todo-list-heading': {
    tw: 'flex min-w-0 items-center gap-3 [&_.tm-typography]:!font-[Manrope] [&_.tm-typography]:!text-[14px] [&_.tm-typography]:!font-bold [&_.tm-typography]:!text-[#2b4037]',
  },
  'todo-list-count': {
    tw: '!border-0 !bg-[#e9f2ed] !text-[10px] !text-[#547565]',
  },
  'todo-clear-button': {
    tw: '!min-h-8 !gap-1.5 !rounded-[7px] !px-2 !py-1.5 !text-[11px] !font-medium !normal-case !tracking-normal !text-[#89958e] hover:!bg-[#fff0ed] hover:!text-[#bb6655]',
  },
  'todo-task-paper': {
    tw: 'overflow-hidden !rounded-[12px] !border !border-[#e5ebe7] !bg-white !p-0 !shadow-none',
  },
  'todo-task-list': {
    tw: '!m-0 !flex !list-none !flex-col !p-0',
  },
  'todo-task-row': {
    tw: '!flex !min-h-[68px] !items-center !gap-3 !border-b !border-[#edf0ee] !px-4 !py-3 last:!border-b-0 hover:!bg-[#fcfdfc] max-sm:!gap-2 max-sm:!px-3',
  },
  'todo-task-row-completed': {
    tw: '!bg-[#fbfcfb]',
  },
  'todo-task-checkbox': {
    tw: '!size-[19px] shrink-0 [&_.tm-checkbox-indicator]:!size-[19px] [&_.tm-checkbox-indicator]:!rounded-full [&_.tm-checkbox-indicator]:!border-[#cbd7d0] [&_.tm-checkbox-indicator]:!bg-white [&_.tm-checkbox-indicator]:!text-white [&_.tm-checkbox-checked]:!border-[#5b9b78] [&_.tm-checkbox-checked]:!bg-[#5b9b78]',
  },
  'todo-task-details': {
    tw: 'flex min-w-0 flex-1 flex-col gap-1',
  },
  'todo-task-title': {
    tw: 'overflow-hidden text-ellipsis whitespace-nowrap !text-[12px] !font-medium !text-[#354a40]',
  },
  'todo-task-title-completed': {
    tw: '!text-[#a2aca6] line-through',
  },
  'todo-task-meta': {
    tw: 'flex flex-wrap items-center gap-2',
  },
  'todo-priority-chip': {
    tw: '!min-h-5 !px-2 !text-[10px] !capitalize',
  },
  'todo-priority-low': {
    tw: '!bg-[#e8f3ed] !text-[#4c8064]',
  },
  'todo-priority-medium': {
    tw: '!bg-[#fbf1df] !text-[#9b7131]',
  },
  'todo-priority-high': {
    tw: '!bg-[#f9e9e5] !text-[#b65e4d]',
  },
  'todo-due-chip': {
    tw: '!min-h-5 !border-[#e7ece8] !bg-transparent !px-2 !text-[10px] !text-[#87938c]',
  },
  'todo-delete-button': {
    tw: '!min-h-8 !shrink-0 !rounded-[7px] !bg-transparent !px-2 !text-[#aab5ae] !shadow-none hover:!bg-[#fff0ed] hover:!text-[#bb6655]',
  },
  'todo-empty-state': {
    tw: 'flex min-h-[210px] flex-col items-center justify-center !rounded-[12px] !border !border-dashed !border-[#dce5df] !bg-white/70 !px-6 text-center !shadow-none',
  },
  'todo-empty-icon': {
    tw: 'mb-3 grid size-10 place-items-center rounded-full bg-[#edf5f0] text-[#6f9985]',
  },
  'todo-empty-state-title': {
    tw: '!text-[13px] !font-semibold !text-[#43594e]',
  },
  'todo-empty-state-copy': {
    tw: 'mt-1 !max-w-[260px] !text-[11px] !text-[#8a9790]',
  },
  'todo-list-footer': {
    tw: 'mt-4 flex items-center justify-between gap-3 [&_.tm-typography]:!text-[10px] [&_.tm-typography]:!text-[#9aa59f] max-sm:flex-col max-sm:items-start',
  },
  'todo-footer-status': {
    tw: 'inline-flex items-center gap-1.5',
  },
  'todo-saved-indicator': {
    tw: 'size-1.5 rounded-full bg-[#6ea484]',
  },
  'todo-save-error': {
    tw: '!bg-[#c45b66]',
  },
});
