// Note: ButtonGroup styles depend on tm-button being present. Always import button/styles alongside button-group/styles.
import { register } from 'tailmantic/collector';

register.all('tm-button-group', {
  '': 'inline-flex items-center gap-1 text-[var(--text,#edf2fb)]',
  vertical: 'flex-col items-stretch',
});
