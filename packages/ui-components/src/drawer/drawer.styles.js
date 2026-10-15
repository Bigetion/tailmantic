import { register } from 'tailmantic/collector';

register.all('tm-drawer', {
  '': 'fixed z-50 flex h-dvh w-[min(20rem,85vw)] flex-col overflow-auto bg-[var(--surface,#fff)] p-4 text-[var(--text,#20242b)] shadow-[0_8px_32px_rgba(0,0,0,.2)]',
  'anchor-left': 'inset-y-0 left-0',
  'anchor-right': 'inset-y-0 right-0',
  'anchor-top': 'inset-x-0 top-0 h-auto w-full',
  'anchor-bottom': 'inset-x-0 bottom-0 h-auto w-full',
});

register.all('tm-drawer', {
  root: 'contents',
  backdrop: 'fixed inset-0 z-40 cursor-default border-0 bg-black/40 p-0',
  permanent: 'contents',
  persistent: 'contents',
  temporary: 'contents',
  open: 'visible',
  '& [hidden]': 'hidden',
});
