import type { PopperProps } from '@tailmantic/ui-components';
import { Button, Checkbox, Chip, IconGlyph } from '@tailmantic/ui-components';
import ButtonOnly from '@tailmantic/ui-components/button';
import CheckboxOnly from '@tailmantic/ui-components/checkbox';
import ChipOnly from '@tailmantic/ui-components/chip';
import IconGlyphOnly from '@tailmantic/ui-components/icon-glyph';

export const rootExports = (
  <>
    <Button variant="outlined" ref={(button) => button?.focus()} />
    <IconGlyph name="home" />
    <Checkbox
      indeterminate
      onChange={(event) => event.currentTarget.checked}
      ref={(input) => {
        if (input) input.indeterminate = true;
      }}
    />
    <Chip
      color="primary"
      onDelete={(event) => event.currentTarget.disabled}
      ref={(element) => element?.focus()}
    />
  </>
);

export const subpathExports = (
  <>
    <ButtonOnly size="small" />
    <CheckboxOnly defaultChecked />
    <ChipOnly variant="filled" />
    <IconGlyphOnly name="search" />
  </>
);

export const popperModifierProps: Pick<PopperProps, 'modifiers'> = {
  modifiers: [{ name: 'offset', options: { offset: [2, 12] } }],
};
