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
  BottomNavigation,
  BottomNavigationItem,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Chip,
  ClickAwayListener,
  Dialog,
  Drawer,
  IconGlyph,
  type IconGlyphName,
  Icons,
  Link,
  Menu,
  MenuItem,
  Modal,
  Pagination,
  Paper,
  Popover,
  Progress,
  Select,
  Skeleton,
  Snackbar,
  SpeedDial,
  Step,
  Stepper,
  Table,
  Tabs,
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
import BottomNavigationOnly, {
  BottomNavigationItem as BottomNavigationItemOnly,
} from '@tailmantic/ui-components/bottom-navigation';
import BreadcrumbsOnly from '@tailmantic/ui-components/breadcrumbs';
import ButtonOnly from '@tailmantic/ui-components/button';
import CardOnly from '@tailmantic/ui-components/card';
import CheckboxOnly from '@tailmantic/ui-components/checkbox';
import ChipOnly from '@tailmantic/ui-components/chip';
import ClickAwayListenerOnly from '@tailmantic/ui-components/click-away-listener';
import DialogOnly from '@tailmantic/ui-components/dialog';
import DrawerOnly from '@tailmantic/ui-components/drawer';
import type { IconGlyphName as IconGlyphNameOnly } from '@tailmantic/ui-components/icon-glyph';
import IconGlyphOnly from '@tailmantic/ui-components/icon-glyph';
import IconsOnly from '@tailmantic/ui-components/icons';
import LinkOnly from '@tailmantic/ui-components/link';
import MenuOnly, { MenuItem as MenuItemOnly } from '@tailmantic/ui-components/menu';
import ModalOnly from '@tailmantic/ui-components/modal';
import PaginationOnly from '@tailmantic/ui-components/pagination';
import PaperOnly from '@tailmantic/ui-components/paper';
import PopoverOnly from '@tailmantic/ui-components/popover';
import ProgressOnly from '@tailmantic/ui-components/progress';
import SkeletonOnly from '@tailmantic/ui-components/skeleton';
import SnackbarOnly from '@tailmantic/ui-components/snackbar';
import SpeedDialOnly from '@tailmantic/ui-components/speed-dial';
import StepperOnly, { Step as StepOnly } from '@tailmantic/ui-components/stepper';
import TableOnly from '@tailmantic/ui-components/table';
import TabsOnly from '@tailmantic/ui-components/tabs';
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
    <BottomNavigation
      aria-label="Primary navigation"
      value="home"
      onChange={(_event, value) => value}
    >
      <BottomNavigationItem value="home" label="Home" />
    </BottomNavigation>
    <Breadcrumbs separator="/" maxItems={3} aria-label="Project location">
      <a href="/workspace">Workspace</a>
      <span aria-current="page">Project</span>
    </Breadcrumbs>
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
    <Link href="/workspace" underline="always" color="secondary">
      Workspace
    </Link>
    <Menu open={false} aria-label="Workspace actions" onClose={(event) => event.preventDefault()}>
      <MenuItem disabled>Unavailable</MenuItem>
    </Menu>
    <Modal open aria-label="Workspace details" onClose={(_event, reason) => reason}>
      Details
    </Modal>
    <Paper elevation={3} square>
      Surface content
    </Paper>
    <Pagination
      count={12}
      page={3}
      showFirstButton
      showLastButton
      getItemAriaLabel={(type, page) => `${type}: ${page}`}
      onChange={(_event, page) => page}
    />
    <Popover open={false} placement="bottom" label="Project details" />
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
    <ClickAwayListener
      onClickAway={(event) => event.type}
      mouseEvent="mousedown"
      touchEvent="touchend"
    >
      <button type="button">Dismiss from outside</button>
    </ClickAwayListener>
    <Dialog
      open
      title="Confirm"
      description="Confirm this operation."
      actions={<button type="button">Continue</button>}
      onClose={(_event, reason) => reason}
    >
      Dialog content
    </Dialog>
    <Drawer open variant="temporary" anchor="left" onClose={(event) => event.preventDefault()}>
      Navigation
    </Drawer>
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
    <SpeedDial
      ariaLabel="Open workspace actions"
      actions={[{ name: 'Create', icon: '+' }]}
      direction="right"
      onActionClick={(_event, action) => action.name}
    />
    <Stepper activeStep={1} aria-label="Workspace setup" onStepClick={(_event, index) => index}>
      <Step label="Account" description="Create your profile." />
      <Step label="Review" />
    </Stepper>
    <Tabs
      ariaLabel="Workspace views"
      tabs={[
        { label: 'Overview', value: 'overview', content: 'Workspace summary' },
        { label: 'Activity', value: 'activity', content: 'Recent updates' },
      ]}
      variant="scrollable"
      onChange={(_event, value) => value}
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
    <BottomNavigationOnly value="home">
      <BottomNavigationItemOnly value="home" label="Home" />
    </BottomNavigationOnly>
    <BreadcrumbsOnly separator="›" aria-label="Subpath location">
      <a href="/workspace">Workspace</a>
      <span aria-current="page">Project</span>
    </BreadcrumbsOnly>
    <CardOnly as="section" variant="flat" elevation={0}>
      Subpath project summary
    </CardOnly>
    <CheckboxOnly defaultChecked />
    <AvatarOnly alt="Morgan Kim" size="sm" />
    <AvatarGroupOnly aria-label="Team" total={3}>
      <AvatarOnly alt="Morgan Kim">MK</AvatarOnly>
    </AvatarGroupOnly>
    <ChipOnly variant="filled" />
    <ClickAwayListenerOnly onClickAway={(event) => event.type}>
      <button type="button">Subpath click-away</button>
    </ClickAwayListenerOnly>
    <DialogOnly open title="Details" closeLabel="Dismiss details" />
    <DrawerOnly open variant="permanent" anchor="right" aria-label="Subpath navigation" />
    <IconGlyphOnly name="search" />
    <IconsOnly title="Search">
      <circle cx="12" cy="12" r="8" />
    </IconsOnly>
    <LinkOnly href="/workspace" underline="none" color="inherit">
      Workspace
    </LinkOnly>
    <MenuOnly open={false} placement="bottom-end">
      <MenuItemOnly>Open</MenuItemOnly>
    </MenuOnly>
    <ModalOnly open aria-labelledby="subpath-modal-title">
      <h2 id="subpath-modal-title">Workspace details</h2>
    </ModalOnly>
    <PaperOnly elevation={5}>Subpath surface</PaperOnly>
    <PaginationOnly count={8} page={2} showFirstButton showLastButton />
    <PopoverOnly open={false} placement="top-start" label="Subpath details" />
    <ProgressOnly label="Subpath loading" variant="circular" />
    <SnackbarOnly open severity="warning" autoHideDuration={5000}>
      Pending
    </SnackbarOnly>
    <SkeletonOnly variant="text" width={160} animation="none" />
    <SpeedDialOnly actions={[{ name: 'Create' }]} defaultOpen />
    <StepperOnly orientation="vertical" activeStep={0}>
      <StepOnly label="Account" />
      <StepOnly label="Review" />
    </StepperOnly>
    <TabsOnly
      ariaLabel="Settings sections"
      defaultValue="profile"
      tabs={[
        { label: 'Profile', value: 'profile', content: 'Account details' },
        { label: 'Notifications', value: 'notifications', content: 'Alert preferences' },
      ]}
      variant="centered"
    />
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
