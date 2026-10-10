import { register } from 'tailmantic/collector';

register.all({
  'ui-button-group': { tw: 'inline-flex items-center gap-1 text-[var(--text)]' },
  'ui-button-group-vertical': { tw: 'flex-col items-stretch' },
  'ui-button-group-vertical .demo-button-group-item': {
    tw: 'justify-center border-r-0 border-b border-[var(--border)] last:border-b-0',
  },
});
