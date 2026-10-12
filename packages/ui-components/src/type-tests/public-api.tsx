import type { PopperProps } from '@tailmantic/ui-components';
import {
  Accordion,
  AccordionHelper,
  AccordionItem,
  AccordionToolbar,
  Autocomplete,
  Button,
  Checkbox,
  Chip,
  IconGlyph,
  Select,
  TextField,
} from '@tailmantic/ui-components';
import AccordionOnly, {
  AccordionHelper as AccordionHelperOnly,
  AccordionItem as AccordionItemOnly,
  AccordionToolbar as AccordionToolbarOnly,
} from '@tailmantic/ui-components/accordion';
import ButtonOnly from '@tailmantic/ui-components/button';
import CheckboxOnly from '@tailmantic/ui-components/checkbox';
import ChipOnly from '@tailmantic/ui-components/chip';
import IconGlyphOnly from '@tailmantic/ui-components/icon-glyph';

export const rootExports = (
  <>
    <Autocomplete options={['React']} value="React" onValueChange={(value) => value} />
    <Autocomplete
      multiple
      freeSolo
      options={['React']}
      selectedValues={['React']}
      onSelectedValuesChange={(values) => values}
    />
    <Select
      label="Department"
      options={[
        { value: 'engineering', label: 'Engineering', detail: 'Product team' },
        { value: 'design', label: 'Design' },
      ]}
      value="engineering"
      onValueChange={(value, option) => [value, option?.detail]}
      ref={(button) => button?.focus()}
    />
    <Select
      multiple
      options={['React', 'Tailwind']}
      selectedValues={['React']}
      onSelectedValuesChange={(values, option) => [values, option?.label]}
    />
    <Accordion aria-label="Settings">
      <AccordionToolbar>Settings</AccordionToolbar>
      <AccordionItem title="Advanced settings" onChange={(expanded) => expanded}>
        Settings content
      </AccordionItem>
      <AccordionHelper>Choose a section</AccordionHelper>
    </Accordion>
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
    <TextField
      label="Search"
      startAdornment="Search"
      endAdornment={<button type="button">Clear</button>}
    />
  </>
);

export const subpathExports = (
  <>
    <AccordionOnly aria-label="Subpath settings">
      <AccordionToolbarOnly>Settings</AccordionToolbarOnly>
      <AccordionItemOnly title="Advanced settings" defaultExpanded>
        Settings content
      </AccordionItemOnly>
      <AccordionHelperOnly>Choose a section</AccordionHelperOnly>
    </AccordionOnly>
    <ButtonOnly size="small" />
    <CheckboxOnly defaultChecked />
    <ChipOnly variant="filled" />
    <IconGlyphOnly name="search" />
  </>
);

export const popperModifierProps: Pick<PopperProps, 'modifiers'> = {
  modifiers: [{ name: 'offset', options: { offset: [2, 12] } }],
};
