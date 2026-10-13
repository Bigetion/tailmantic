import type { PopperProps } from '@tailmantic/ui-components';
import {
  Accordion,
  AccordionHelper,
  AccordionItem,
  AccordionToolbar,
  Alert,
  AppBar,
  Autocomplete,
  Avatar,
  AvatarGroup,
  Button,
  Card,
  Checkbox,
  Chip,
  Dialog,
  IconGlyph,
  type IconGlyphName,
  Icons,
  Progress,
  Select,
  Skeleton,
  Snackbar,
  Table,
  TextField,
  Tooltip,
  TransferList,
  Typography,
} from '@tailmantic/ui-components';
import AccordionOnly, {
  AccordionHelper as AccordionHelperOnly,
  AccordionItem as AccordionItemOnly,
  AccordionToolbar as AccordionToolbarOnly,
} from '@tailmantic/ui-components/accordion';
import AlertOnly from '@tailmantic/ui-components/alert';
import AppBarOnly from '@tailmantic/ui-components/app-bar';
import AvatarOnly, { AvatarGroup as AvatarGroupOnly } from '@tailmantic/ui-components/avatar';
import ButtonOnly from '@tailmantic/ui-components/button';
import CardOnly from '@tailmantic/ui-components/card';
import CheckboxOnly from '@tailmantic/ui-components/checkbox';
import ChipOnly from '@tailmantic/ui-components/chip';
import DialogOnly from '@tailmantic/ui-components/dialog';
import type { IconGlyphName as IconGlyphNameOnly } from '@tailmantic/ui-components/icon-glyph';
import IconGlyphOnly from '@tailmantic/ui-components/icon-glyph';
import IconsOnly from '@tailmantic/ui-components/icons';
import ProgressOnly from '@tailmantic/ui-components/progress';
import SkeletonOnly from '@tailmantic/ui-components/skeleton';
import SnackbarOnly from '@tailmantic/ui-components/snackbar';
import TableOnly from '@tailmantic/ui-components/table';
import TooltipOnly from '@tailmantic/ui-components/tooltip';
import TypographyOnly from '@tailmantic/ui-components/typography';

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
    <Card variant="outlined" elevation={2} interactive>
      Project summary
    </Card>
    <Alert severity="success" variant="outlined" onClose={(event) => event.currentTarget.remove()}>
      Saved
    </Alert>
    <AppBar position="sticky" elevation={2} aria-label="Workspace">
      Workspace
    </AppBar>
    <Avatar alt="Jordan Davis" color="indigo" size="xs" />
    <AvatarGroup aria-label="Project team" max={4}>
      <Avatar alt="Jordan Davis">JD</Avatar>
    </AvatarGroup>
    <IconGlyph name="home" />
    <Icons title="Search">
      <circle cx="12" cy="12" r="8" />
    </Icons>
    <Table density="dense" hoverable striped>
      <tbody>
        <tr>
          <td>Project</td>
        </tr>
      </tbody>
    </Table>
    <Tooltip content="Helpful information" placement="right">
      <button type="button">Help</button>
    </Tooltip>
    <Typography variant="h2" weight="bold">
      Heading
    </Typography>
    <Typography color="muted">Muted text</Typography>
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
    <Dialog
      open
      title="Confirm"
      description="Confirm this operation."
      actions={<button type="button">Continue</button>}
      onClose={(_event, reason) => reason}
    >
      Dialog content
    </Dialog>
    <Progress label="Project upload" max={200} value={116} />
    <Snackbar
      open
      severity="success"
      action={<button type="button">Undo</button>}
      onClose={(reason) => reason}
    >
      Saved
    </Snackbar>
    <Skeleton variant="circular" width={40} height={40} animation="wave" />
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

export const glyphNames: [IconGlyphName, IconGlyphNameOnly] = ['home', 'verified'];

export const subpathExports = (
  <>
    <AccordionOnly aria-label="Subpath settings">
      <AccordionToolbarOnly>Settings</AccordionToolbarOnly>
      <AccordionItemOnly title="Advanced settings" defaultExpanded>
        Settings content
      </AccordionItemOnly>
      <AccordionHelperOnly>Choose a section</AccordionHelperOnly>
    </AccordionOnly>
    <AlertOnly severity="warning" icon={null}>
      Storage is almost full.
    </AlertOnly>
    <AppBarOnly position="fixed" elevation={3}>
      Subpath workspace
    </AppBarOnly>
    <ButtonOnly size="small" />
    <CardOnly as="section" variant="flat" elevation={0}>
      Subpath project summary
    </CardOnly>
    <CheckboxOnly defaultChecked />
    <AvatarOnly alt="Morgan Kim" size="sm" />
    <AvatarGroupOnly aria-label="Team" total={3}>
      <AvatarOnly alt="Morgan Kim">MK</AvatarOnly>
    </AvatarGroupOnly>
    <ChipOnly variant="filled" />
    <DialogOnly open title="Details" closeLabel="Dismiss details" />
    <IconGlyphOnly name="search" />
    <IconsOnly title="Search">
      <circle cx="12" cy="12" r="8" />
    </IconsOnly>
    <ProgressOnly label="Subpath loading" variant="circular" />
    <SnackbarOnly open severity="warning" autoHideDuration={5000}>
      Pending
    </SnackbarOnly>
    <SkeletonOnly variant="text" width={160} animation="none" />
    <TableOnly stickyHeader>
      <tbody>
        <tr>
          <td>Project</td>
        </tr>
      </tbody>
    </TableOnly>
    <TooltipOnly content="Help" placement="bottom">
      <button type="button">Help</button>
    </TooltipOnly>
    <TypographyOnly variant="caption" color="secondary">
      Caption
    </TypographyOnly>
    <TypographyOnly color="muted">Muted text</TypographyOnly>
  </>
);

export const popperModifierProps: Pick<PopperProps, 'modifiers'> = {
  modifiers: [{ name: 'offset', options: { offset: [2, 12] } }],
};
