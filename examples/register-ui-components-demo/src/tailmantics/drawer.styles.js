import { register } from 'tailmantic/collector';

register.all({
  'ui-drawer-root': { tw: 'contents' },
  'ui-drawer-temporary': { tw: 'contents' },
  'ui-drawer-persistent': { tw: 'contents' },
  'ui-drawer-open': { tw: 'visible' },
  'ui-drawer-backdrop': { tw: 'fixed inset-0 z-40 cursor-default border-0 bg-black/60 p-0' },
  'ui-drawer': {
    tw: 'z-50 flex flex-col overflow-auto bg-[var(--panel)] p-5 text-[var(--text)] shadow-2xl',
  },
  'ui-drawer-surface-temporary': {
    tw: 'fixed inset-y-0 left-0 h-dvh w-[min(18rem,85vw)]',
  },
  'ui-drawer[hidden]': { tw: 'hidden' },
});
