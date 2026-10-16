// Note: ButtonGroup styles depend on tm-button being present. Always import button/styles alongside button-group/styles.
import { register } from 'tailmantic/collector';

register.all('tm-button-group', {
  '': 'inline-flex items-center gap-0 text-[var(--text,#edf2fb)]',
  '& > .tm-button': 'relative rounded-none',
  '& > .tm-button:first-child': 'rounded-l',
  '& > .tm-button:last-child': 'rounded-r',
});

register(':is(.tm-button-group:not(.tm-button-group-vertical) > .tm-button + .tm-button)', {
  'border-left-width': '0',
});

register.all('tm-button-group-vertical', {
  '': 'flex-col items-stretch',
  '& > .tm-button': 'relative rounded-none',
  '& > .tm-button + .tm-button': 'border-t-0',
  '& > .tm-button:first-child': 'rounded-t rounded-b-none',
  '& > .tm-button:last-child': 'rounded-b rounded-t-none',
});
