import type { PopperProps } from '@tailmantic/ui-components';
import {
  Accordion,
  AccordionGroup,
  Autocomplete,
  Button,
  Checkbox,
  Chip,
  IconGlyph,
} from '@tailmantic/ui-components';
import AccordionOnly, { AccordionGroup as AccordionGroupOnly } from '@tailmantic/ui-components/accordion';
import ButtonOnly from '@tailmantic/ui-components/button';
import CheckboxOnly from '@tailmantic/ui-components/checkbox';
import ChipOnly from '@tailmantic/ui-components/chip';
import IconGlyphOnly from '@tailmantic/ui-components/icon-glyph';

export const rootExports = (
  <>
    <AccordionGroup
      multiple
      defaultExpanded={0}
      helperText="Select a question."
      label="Questions"
      showExpandAll
    >
      <Accordion title="First" disabled disabledLabel="Unavailable">First answer</Accordion>
      <Accordion title="Second">Second answer</Accordion>
    </AccordionGroup>
    <Autocomplete
      options={[{ label: 'React', description: 'UI library', group: 'Frontend', mark: 'R' }]}
      multiple
      freeSolo
      label="Frameworks"
      helperText="Choose one or more."
      onSelectedValuesChange={(values, options) => values.concat(options.map((option) => option.label))}
    />
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
    <AccordionGroupOnly defaultExpanded={0}>
      <AccordionOnly title="Package subpath">Accordion item</AccordionOnly>
    </AccordionGroupOnly>
    <ButtonOnly size="small" />
    <CheckboxOnly defaultChecked />
    <ChipOnly variant="filled" />
    <IconGlyphOnly name="search" />
  </>
);

export const popperModifierProps: Pick<PopperProps, 'modifiers'> = {
  modifiers: [{ name: 'offset', options: { offset: [2, 12] } }],
};
