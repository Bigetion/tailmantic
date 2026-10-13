import type { PopperProps } from '@tailmantic/ui-components';
import {
  Accordion,
  AccordionHelper,
  AccordionItem,
  AccordionToolbar,
  Avatar,
  AvatarGroup,
  Autocomplete,
  Button,
  Checkbox,
  Chip,
  IconGlyph,
  Icons,
  Select,
  TextField,
  TransferList,
} from '@tailmantic/ui-components';
import AccordionOnly, {
  AccordionHelper as AccordionHelperOnly,
  AccordionItem as AccordionItemOnly,
  AccordionToolbar as AccordionToolbarOnly,
} from '@tailmantic/ui-components/accordion';
import AvatarOnly, { AvatarGroup as AvatarGroupOnly } from '@tailmantic/ui-components/avatar';
import ButtonOnly from '@tailmantic/ui-components/button';
import CheckboxOnly from '@tailmantic/ui-components/checkbox';
import ChipOnly from '@tailmantic/ui-components/chip';
import IconGlyphOnly from '@tailmantic/ui-components/icon-glyph';
import IconsOnly from '@tailmantic/ui-components/icons';

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
    <Avatar alt="Jordan Davis" color="indigo" size="xs" />
    <AvatarGroup aria-label="Project team" max={4}>
      <Avatar alt="Jordan Davis">JD</Avatar>
    </AvatarGroup>
    <IconGlyph name="home" />
    <Icons title="Search"><circle cx="12" cy="12" r="8" /></Icons>
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
    <TransferList
      items={[{ id: 'react', label: 'React' }]}
      showAllActions
      showSelectAll
      onChange={(value, movedItems) => [value, movedItems]}
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
    <AvatarOnly alt="Morgan Kim" size="sm" />
    <AvatarGroupOnly aria-label="Team" total={3}>
      <AvatarOnly alt="Morgan Kim">MK</AvatarOnly>
    </AvatarGroupOnly>
    <ChipOnly variant="filled" />
    <IconGlyphOnly name="search" />
    <IconsOnly title="Search"><circle cx="12" cy="12" r="8" /></IconsOnly>
  </>
);

export const popperModifierProps: Pick<PopperProps, 'modifiers'> = {
  modifiers: [{ name: 'offset', options: { offset: [2, 12] } }],
};
