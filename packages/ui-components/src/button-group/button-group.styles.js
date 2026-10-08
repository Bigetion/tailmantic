// Note: ButtonGroup styles depend on rgi-button being present. Always import button/styles alongside button-group/styles.
import { register } from 'tailmantic/collector';

register('rgi-button-group', {
  base: { tw: 'inline-flex items-center gap-1 text-[var(--text,#edf2fb)]' },
  modifiers: {
    vertical: { tw: 'flex-col items-stretch' },
  },
});
