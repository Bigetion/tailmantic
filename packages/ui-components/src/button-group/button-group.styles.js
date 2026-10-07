import { register } from 'tailmantic/collector';

register('rgi-button-group', {
  base: { tw: 'inline-flex items-center gap-1 text-[var(--text,#edf2fb)]' },
  modifiers: {
    vertical: { tw: 'flex-col items-stretch' },
  },
});
