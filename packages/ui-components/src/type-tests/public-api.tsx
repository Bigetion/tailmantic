import type { PopperProps } from '@tailmantic/ui-components';
import {
  Accordion,
  AccordionGroup,
  Autocomplete,
  Button,
  Checkbox,
  Chip,
  IconGlyph,
  SplitButtonGroup,
} from '@tailmantic/ui-components';
import AccordionOnly, { AccordionGroup as AccordionGroupOnly } from '@tailmantic/ui-components/accordion';
import ButtonOnly from '@tailmantic/ui-components/button';
import ButtonGroupOnly, { SplitButtonGroup as SplitButtonGroupOnly } from '@tailmantic/ui-components/button-group';
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
    <Button loading uppercase={false} iconOnly aria-label="Loading action" />
    <SplitButtonGroup
      primaryLabel="Save draft"
      actions={[{ value: 'publish', label: 'Publish now' }]}
      onAction={(value) => value.toUpperCase()}
    />
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
    <ButtonGroupOnly orientation="vertical" variant="segmented" />
    <SplitButtonGroupOnly
      primaryLabel="Save"
      actions={[{ value: 'publish', label: 'Publish' }]}
    />
    <CheckboxOnly defaultChecked />
    <ChipOnly variant="filled" />
    <IconGlyphOnly name="search" />
  </>
);

export const popperModifierProps: Pick<PopperProps, 'modifiers'> = {
  modifiers: [{ name: 'offset', options: { offset: [2, 12] } }],
};
