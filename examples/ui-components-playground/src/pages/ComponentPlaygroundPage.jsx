import * as UI from '@tailmantic/ui-components';
import { Button } from '@tailmantic/ui-components';
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  ChevronDown,
  CircleHelp,
  Home,
  Mail,
  Plus,
  Search,
  Settings,
  Star,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { componentGroups, components } from '../data/components.js';

const selectOptions = [
  { label: 'Design', value: 'design', description: 'Product and visual design' },
  { label: 'Engineering', value: 'engineering', description: 'Build and maintain products' },
  { label: 'Research', value: 'research', description: 'Learn from users and data' },
];

const transferItems = [
  { id: 'alpha', label: 'Alpha', description: 'First available item' },
  { id: 'beta', label: 'Beta', description: 'Second available item' },
  { id: 'gamma', label: 'Gamma', description: 'Third available item' },
];

function DemoSection({ title, description, children }) {
  return (
    <section className="test-case">
      <header className="test-case-heading">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </header>
      <div className="test-case-content">{children}</div>
    </section>
  );
}

function ComponentTests({ slug }) {
  const [checked, setChecked] = useState(true);
  const [alertVisible, setAlertVisible] = useState(true);
  const [choice, setChoice] = useState('design');
  const [multiChoice, setMultiChoice] = useState(['design']);
  const [rating, setRating] = useState(3.5);
  const [progress, setProgress] = useState(62);
  const [page, setPage] = useState(2);
  const [step, setStep] = useState(1);
  const [tab, setTab] = useState('one');
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [noticeOpen, setNoticeOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const [message, setMessage] = useState('Ready to test');
  const demoButton = (label, onClick = () => setMessage(`${label} clicked`)) => (
    <Button onClick={onClick}>{label}</Button>
  );

  switch (slug) {
    case 'accordion':
      return (
        <DemoSection
          title="Independent panels"
          description="Expand panels and verify content visibility."
        >
          <UI.Accordion>
            <UI.AccordionItem title="Account details" defaultExpanded>
              Profile settings and account preferences.
            </UI.AccordionItem>
            <UI.AccordionItem title="Notifications">
              Email and product notification settings.
            </UI.AccordionItem>
          </UI.Accordion>
        </DemoSection>
      );
    case 'alert':
      return (
        <DemoSection
          title="Severity and variant"
          description="Compare status colors and dismissible alerts."
        >
          <div className="test-stack">
            <UI.Alert severity="success" title="Saved">
              Your changes have been saved.
            </UI.Alert>
            <UI.Alert severity="warning" variant="outlined" title="Review required">
              Check the highlighted fields before continuing.
            </UI.Alert>
            {alertVisible && (
              <UI.Alert severity="info" onClose={() => setAlertVisible(false)}>
                This alert can be dismissed.
              </UI.Alert>
            )}
          </div>
          <output className="test-output">{message}</output>
        </DemoSection>
      );
    case 'app-bar':
      return (
        <DemoSection
          title="Header composition"
          description="Try a sticky application header with navigation actions."
        >
          <UI.AppBar position="sticky" elevation={1} className="demo-app-bar">
            <span className="demo-app-bar-title">Workspace</span>
            <Button variant="text" aria-label="Search">
              <Search size={17} />
            </Button>
            <Button variant="text" aria-label="Notifications">
              <Bell size={17} />
            </Button>
          </UI.AppBar>
        </DemoSection>
      );
    case 'autocomplete':
      return (
        <DemoSection
          title="Search options"
          description="Type to filter choices and select a result."
        >
          <div className="test-control-width">
            <UI.Autocomplete
              label="Team"
              options={selectOptions}
              value={choice}
              onValueChange={(value) => {
                setChoice(value);
                setMessage(`Selected ${value || 'nothing'}`);
              }}
              placeholder="Search teams"
            />
          </div>
          <output className="test-output">{message}</output>
        </DemoSection>
      );
    case 'avatar':
      return (
        <DemoSection
          title="Sizes and group"
          description="Preview initials and overlapping avatar groups."
        >
          <div className="test-row">
            <UI.Avatar aria-label="Ada Lovelace">AL</UI.Avatar>
            <UI.Avatar size="small" aria-label="Grace Hopper">
              GH
            </UI.Avatar>
            <UI.AvatarGroup>
              <UI.Avatar>AL</UI.Avatar>
              <UI.Avatar>GH</UI.Avatar>
              <UI.Avatar>KM</UI.Avatar>
            </UI.AvatarGroup>
          </div>
        </DemoSection>
      );
    case 'badge':
      return (
        <DemoSection title="Badge content" description="Test numeric, capped, and dot indicators.">
          <div className="test-row">
            <UI.Badge badgeContent={4} badgeLabel="4 unread messages">
              <Button variant="outlined">Inbox</Button>
            </UI.Badge>
            <UI.Badge badgeContent={120} max={99} color="danger" badgeLabel="120 alerts">
              <Button variant="outlined">Alerts</Button>
            </UI.Badge>
            <UI.Badge variant="dot" color="success" badgeLabel="Online">
              <Bell aria-hidden="true" />
            </UI.Badge>
          </div>
        </DemoSection>
      );
    case 'bottom-navigation':
      return (
        <DemoSection
          title="Destination selection"
          description="Select destinations and verify the active value."
        >
          <div className="demo-bottom-navigation-preview">
            <UI.BottomNavigation
              value={tab}
              onChange={(_, value) => {
                setTab(value);
                setMessage(`Destination: ${value}`);
              }}
              className="demo-bottom-navigation"
            >
              <UI.BottomNavigationItem value="one" label="Home" icon={<Home size={18} />} />
              <UI.BottomNavigationItem value="two" label="Search" icon={<Search size={18} />} />
              <UI.BottomNavigationItem value="three" label="Settings" icon={<Settings size={18} />} />
            </UI.BottomNavigation>
          </div>
          <output className="test-output">{message}</output>
        </DemoSection>
      );
    case 'breadcrumbs':
      return (
        <DemoSection
          title="Hierarchy"
          description="Inspect separators and nested navigation context."
        >
          <UI.Breadcrumbs aria-label="Breadcrumb">
            <a href="#home">Workspace</a>
            <a href="#projects">Projects</a>
            <span>Component lab</span>
          </UI.Breadcrumbs>
        </DemoSection>
      );
    case 'button':
      return (
        <DemoSection
          title="Variants and states"
          description="Exercise click, disabled, color, and size variants."
        >
          <div className="test-row">
            <Button onClick={() => setMessage('Contained clicked')}>Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
            <Button color="success">Success</Button>
            <Button size="small">Small</Button>
            <Button disabled>Disabled</Button>
          </div>
          <output className="test-output">{message}</output>
        </DemoSection>
      );
    case 'button-group':
      return (
        <DemoSection
          title="Group layout"
          description="Compare connected actions and keyboard focus."
        >
          <UI.ButtonGroup aria-label="Text alignment">
            <Button variant="outlined">
              <ArrowLeft size={15} />
              Left
            </Button>
            <Button variant="outlined">Center</Button>
            <Button variant="outlined">
              Right
              <ArrowRight size={15} />
            </Button>
          </UI.ButtonGroup>
        </DemoSection>
      );
    case 'card':
      return (
        <DemoSection
          title="Content and actions"
          description="Combine a surface, supporting copy, and an action."
        >
          <UI.Card className="demo-card">
            <h3>Component release</h3>
            <p>Review the latest changes before publishing the package.</p>
            <Button onClick={() => setMessage('Release review opened')}>Review release</Button>
          </UI.Card>
          <output className="test-output">{message}</output>
        </DemoSection>
      );
    case 'checkbox':
      return (
        <DemoSection
          title="Checked states"
          description="Toggle a checkbox and inspect disabled and indeterminate states."
        >
          <div className="test-stack">
            <div className="test-labeled-control">
              <UI.Checkbox
                aria-label="Enable notifications"
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
              />{' '}
              Enable notifications
            </div>
            <div className="test-labeled-control">
              <UI.Checkbox aria-label="Select all items" indeterminate /> Select all items
            </div>
            <div className="test-labeled-control">
              <UI.Checkbox aria-label="Locked preference" checked disabled /> Locked preference
            </div>
          </div>
        </DemoSection>
      );
    case 'chip':
      return (
        <DemoSection
          title="Selection and deletion"
          description="Select a chip or remove it from the set."
        >
          <div className="test-row">
            <UI.Chip selected={checked} onClick={() => setChecked(!checked)}>
              Interactive
            </UI.Chip>
            <UI.Chip color="success" variant="outlined">
              Published
            </UI.Chip>
            <UI.Chip onDelete={() => setMessage('Removable chip deleted')}>Remove me</UI.Chip>
          </div>
          <output className="test-output">{message}</output>
        </DemoSection>
      );
    case 'click-away-listener':
      return (
        <DemoSection
          title="Outside interaction"
          description="Click the surrounding area to trigger click-away."
        >
          <UI.ClickAwayListener onClickAway={() => setMessage('Click detected outside the target')}>
            <button
              type="button"
              className="click-away-target"
              onClick={() => setMessage('Clicked inside the target')}
            >
              Click inside this panel, then click outside it.
            </button>
          </UI.ClickAwayListener>
          <output className="test-output">{message}</output>
        </DemoSection>
      );
    case 'dialog':
      return (
        <DemoSection
          title="Open and dismiss"
          description="Test close button, Escape, and backdrop behavior."
        >
          {demoButton('Open dialog', () => setOverlayOpen(true))}
          <UI.Dialog
            open={overlayOpen}
            title="Confirm changes"
            description="Save your component configuration?"
            onClose={() => setOverlayOpen(false)}
            actions={
              <>
                <Button variant="text" onClick={() => setOverlayOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setOverlayOpen(false)}>Save</Button>
              </>
            }
          >
            This dialog is rendered from the local component package.
          </UI.Dialog>
        </DemoSection>
      );
    case 'divider':
      return (
        <DemoSection
          title="Orientations"
          description="Separate content in horizontal and vertical layouts."
        >
          <div className="test-stack">
            <span>First section</span>
            <UI.Divider />
            <span>Second section</span>
            <div className="test-row">
              <span>Left</span>
              <UI.Divider orientation="vertical" flexItem />
              <span>Right</span>
            </div>
          </div>
        </DemoSection>
      );
    case 'drawer':
      return (
        <DemoSection
          title="Temporary drawer"
          description="Open the drawer and dismiss it with Escape or backdrop."
        >
          {demoButton('Open drawer', () => setOverlayOpen(true))}
          <UI.Drawer
            open={overlayOpen}
            onClose={() => setOverlayOpen(false)}
            aria-label="Playground navigation"
          >
            <div className="demo-drawer-content">
              <h3>Navigation</h3>
              <Button variant="text" onClick={() => setOverlayOpen(false)}>
                Close drawer
              </Button>
            </div>
          </UI.Drawer>
        </DemoSection>
      );
    case 'floating-action-button':
      return (
        <DemoSection
          title="Action button variants"
          description="Try compact and extended action buttons."
        >
          <div className="test-row">
            <UI.FloatingActionButton aria-label="Add item">
              <Plus size={19} />
            </UI.FloatingActionButton>
            <UI.FloatingActionButton
              variant="extended"
              onClick={() => setMessage('New item action')}
            >
              <Plus size={17} /> Create item
            </UI.FloatingActionButton>
          </div>
          <output className="test-output">{message}</output>
        </DemoSection>
      );
    case 'icon-glyph':
      return (
        <DemoSection
          title="Glyph names and sizes"
          description="Preview built-in names from the icon glyph set."
        >
          <div className="test-row">
            {['home', 'search', 'notifications', 'favorite', 'settings', 'check'].map((name) => (
              <span className="icon-preview" key={name}>
                <UI.IconGlyph name={name} size={22} />
                <small>{name}</small>
              </span>
            ))}
          </div>
        </DemoSection>
      );
    case 'icons':
      return (
        <DemoSection
          title="Custom SVG content"
          description="Pass SVG paths and accessible title content."
        >
          <div className="test-row">
            <UI.Icons title="Check mark" size={28} color="var(--tm-blue)">
              <path
                d="m5 12 4 4L19 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </UI.Icons>
            <UI.Icons title="Help" size={28} color="var(--tm-success)">
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
              <path
                d="M9.6 9a2.5 2.5 0 1 1 4.3 1.7c-1.1 1.1-1.9 1.4-1.9 3"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <circle cx="12" cy="17" r="1" />
            </UI.Icons>
          </div>
        </DemoSection>
      );
    case 'link':
      return (
        <DemoSection
          title="Link states"
          description="Navigate to a local hash and inspect link variants."
        >
          <div className="test-row">
            <UI.Link href="#link-target">Default link</UI.Link>
            <UI.Link href="#link-target" target="_blank" rel="noreferrer">
              External-style link
            </UI.Link>
          </div>
          <span id="link-target" className="test-output">
            Link target
          </span>
        </DemoSection>
      );
    case 'list':
      return (
        <DemoSection
          title="List item content"
          description="Render primary and secondary text with dividers."
        >
          <UI.List className="demo-list">
            <UI.ListItem divider>
              <UI.ListItemText primary="Design system" secondary="Updated 2 minutes ago" />
            </UI.ListItem>
            <UI.ListItem>
              <UI.ListItemText primary="Component package" secondary="Version 0.2.2" />
            </UI.ListItem>
          </UI.List>
        </DemoSection>
      );
    case 'menu':
      return (
        <DemoSection
          title="Menu selection"
          description="Open the menu, choose an item, or dismiss it."
        >
          <Button
            onClick={(event) => {
              setAnchor(event.currentTarget);
              setOverlayOpen(!overlayOpen);
            }}
          >
            Actions <ChevronDown size={15} />
          </Button>
          <UI.Menu
            open={overlayOpen}
            anchorEl={anchor}
            onClose={() => setOverlayOpen(false)}
            aria-label="Component actions"
          >
            <UI.MenuItem
              onClick={() => {
                setMessage('Edit selected');
                setOverlayOpen(false);
              }}
            >
              Edit
            </UI.MenuItem>
            <UI.MenuItem
              onClick={() => {
                setMessage('Duplicate selected');
                setOverlayOpen(false);
              }}
            >
              Duplicate
            </UI.MenuItem>
          </UI.Menu>
          <output className="test-output">{message}</output>
        </DemoSection>
      );
    case 'modal':
      return (
        <DemoSection title="Modal overlay" description="Test modal focus and close interactions.">
          {demoButton('Open modal', () => setOverlayOpen(true))}
          <UI.Modal
            open={overlayOpen}
            onClose={() => setOverlayOpen(false)}
            aria-label="Test modal"
          >
            <div className="demo-modal-content">
              <h3>Modal content</h3>
              <p>Interact with this content or dismiss the overlay.</p>
              <Button onClick={() => setOverlayOpen(false)}>Close</Button>
            </div>
          </UI.Modal>
        </DemoSection>
      );
    case 'number-field':
      return (
        <DemoSection
          title="Limits and steps"
          description="Change the value using the controls or keyboard."
        >
          <div className="test-control-width">
            <UI.NumberField
              aria-label="Quantity"
              min={0}
              max={20}
              step={2}
              defaultValue={6}
              unit="items"
            />
          </div>
        </DemoSection>
      );
    case 'pagination':
      return (
        <DemoSection
          title="Page navigation"
          description="Change pages and inspect boundary controls."
        >
          <UI.Pagination
            count={8}
            page={page}
            onChange={(_, value) => setPage(value)}
            showFirstButton
            showLastButton
          />
          <output className="test-output">Page {page} of 8</output>
        </DemoSection>
      );
    case 'paper':
      return (
        <DemoSection
          title="Elevation surfaces"
          description="Compare surfaces with different elevation levels."
        >
          <div className="test-row">
            {[0, 1, 3].map((elevation) => (
              <UI.Paper key={elevation} elevation={elevation} className="demo-paper">
                Elevation {elevation}
              </UI.Paper>
            ))}
          </div>
        </DemoSection>
      );
    case 'popover':
      return (
        <DemoSection
          title="Anchored content"
          description="Open the popover, then dismiss it with Escape or backdrop."
        >
          <Button
            onClick={(event) => {
              setAnchor(event.currentTarget);
              setOverlayOpen(!overlayOpen);
            }}
          >
            Toggle popover
          </Button>
          <UI.Popover
            open={overlayOpen}
            anchorEl={anchor}
            onClose={() => setOverlayOpen(false)}
            label="Quick details"
          >
            <div className="demo-floating-content">
              <strong>Quick details</strong>
              <p>Anchored content from the package.</p>
            </div>
          </UI.Popover>
        </DemoSection>
      );
    case 'popper':
      return (
        <DemoSection title="Positioning" description="Open floating content next to the trigger.">
          <Button
            onClick={(event) => {
              setAnchor(event.currentTarget);
              setOverlayOpen(!overlayOpen);
            }}
          >
            Toggle popper
          </Button>
          <UI.Popper open={overlayOpen} anchorEl={anchor} placement="bottom" offset={8}>
            <div className="demo-floating-content">Positioned with Popper</div>
          </UI.Popper>
        </DemoSection>
      );
    case 'portal':
      return (
        <DemoSection
          title="Portal rendering"
          description="Toggle content rendered through a portal."
        >
          <Button onClick={() => setOverlayOpen(!overlayOpen)}>
            {overlayOpen ? 'Hide portal' : 'Show portal'}
          </Button>
          {overlayOpen && (
            <UI.Portal>
              <div className="demo-portal-content">Rendered through Portal</div>
            </UI.Portal>
          )}
        </DemoSection>
      );
    case 'progress':
      return (
        <DemoSection
          title="Progress values"
          description="Adjust a determinate indicator and compare shapes."
        >
          <div className="test-row">
            <UI.Progress value={progress} label={`Upload ${progress}%`} />
            <UI.Progress variant="circular" value={progress} label={`Upload ${progress}%`} />
          </div>
          <input
            aria-label="Progress value"
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(event) => setProgress(Number(event.target.value))}
          />
        </DemoSection>
      );
    case 'radio-group':
      return (
        <DemoSection
          title="Single selection"
          description="Choose a team and inspect the current value."
        >
          <UI.RadioGroup
            legend="Assign to"
            options={selectOptions.map(({ value, label, description }) => ({
              value,
              label,
              description,
            }))}
            value={choice}
            onChange={(event) => setChoice(event.target.value)}
          />
          <output className="test-output">Selected: {choice}</output>
        </DemoSection>
      );
    case 'rating':
      return (
        <DemoSection
          title="Interactive rating"
          description="Change the value and compare read-only precision."
        >
          <UI.Rating value={rating} onChange={setRating} precision={0.5} label="Product rating" />
          <UI.Rating value={4.5} readOnly precision={0.5} label="Read-only rating" />
          <output className="test-output">Rating: {rating}</output>
        </DemoSection>
      );
    case 'select':
      return (
        <DemoSection
          title="Single and multiple values"
          description="Select options and inspect controlled values."
        >
          <div className="test-stack test-control-width">
            <UI.Select
              label="Team"
              options={selectOptions}
              value={choice}
              onValueChange={setChoice}
            />
            <UI.Select
              label="Teams"
              options={selectOptions}
              multiple
              selectedValues={multiChoice}
              onSelectedValuesChange={setMultiChoice}
            />
          </div>
          <output className="test-output">
            Single: {choice}; multiple: {multiChoice.join(', ') || 'none'}
          </output>
        </DemoSection>
      );
    case 'skeleton':
      return (
        <DemoSection
          title="Loading placeholders"
          description="Compare text, circular, and rectangular skeletons."
        >
          <div className="test-stack">
            <UI.Skeleton variant="text" width="65%" />
            <UI.Skeleton variant="circular" width={44} height={44} />
            <UI.Skeleton variant="rectangular" width="100%" height={72} />
          </div>
        </DemoSection>
      );
    case 'slider':
      return (
        <DemoSection
          title="Range adjustment"
          description="Change the value using pointer or keyboard input."
        >
          <div className="test-control-width">
            <UI.Slider
              aria-label="Volume"
              min={0}
              max={100}
              value={progress}
              onChange={(event) => setProgress(Number(event.target.value))}
            />
          </div>
          <output className="test-output">Value: {progress}</output>
        </DemoSection>
      );
    case 'snackbar':
      return (
        <DemoSection
          title="Transient message"
          description="Open and dismiss a snackbar notification."
        >
          <Button onClick={() => setNoticeOpen(true)}>Show snackbar</Button>
          <UI.Snackbar
            open={noticeOpen}
            severity="success"
            autoHideDuration={null}
            onClose={() => setNoticeOpen(false)}
          >
            Settings saved successfully.
          </UI.Snackbar>
        </DemoSection>
      );
    case 'speed-dial':
      return (
        <DemoSection
          title="Floating actions"
          description="Expand the action menu and activate an action."
        >
          <UI.SpeedDial
            ariaLabel="Create"
            icon={<Plus size={20} />}
            actions={[
              { name: 'New message', icon: <Mail size={16} /> },
              { name: 'Add contact', icon: <Plus size={16} /> },
            ]}
            onActionClick={(_, action) => setMessage(`${action.name} selected`)}
          />
          <output className="test-output">{message}</output>
        </DemoSection>
      );
    case 'stepper':
      return (
        <DemoSection
          title="Step navigation"
          description="Select a step and inspect active and completed states."
        >
          <UI.Stepper nonLinear activeStep={step} onStepClick={(_, index) => setStep(index)}>
            <UI.Step label="Details" description="Add information" />
            <UI.Step label="Review" description="Check your input" />
            <UI.Step label="Finish" description="Complete setup" />
          </UI.Stepper>
          <output className="test-output">Active step: {step + 1}</output>
        </DemoSection>
      );
    case 'switch':
      return (
        <DemoSection
          title="Controlled switch"
          description="Toggle a setting and inspect the checked state."
        >
          <div className="test-labeled-control">
            <UI.Switch
              aria-label="Enable notifications"
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
            />{' '}
            Enable notifications
          </div>
          <output className="test-output">{checked ? 'Enabled' : 'Disabled'}</output>
        </DemoSection>
      );
    case 'table':
      return (
        <DemoSection
          title="Density and interaction"
          description="Inspect row content, striping, and hover feedback."
        >
          <UI.Table striped hoverable density="dense" className="demo-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Status</th>
                <th>Version</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Button</td>
                <td>Ready</td>
                <td>0.2.2</td>
              </tr>
              <tr>
                <td>Select</td>
                <td>Testing</td>
                <td>0.2.2</td>
              </tr>
              <tr>
                <td>Switch</td>
                <td>Ready</td>
                <td>0.2.2</td>
              </tr>
            </tbody>
          </UI.Table>
        </DemoSection>
      );
    case 'tabs':
      return (
        <DemoSection
          title="Tabbed panels"
          description="Switch tabs with pointer and keyboard navigation."
        >
          <UI.Tabs
            value={tab}
            onChange={(_, value) => setTab(String(value))}
            tabs={[
              {
                id: 'one',
                value: 'one',
                label: 'Overview',
                content: <p>Overview panel content.</p>,
              },
              {
                id: 'two',
                value: 'two',
                label: 'Activity',
                content: <p>Recent activity panel content.</p>,
              },
              {
                id: 'three',
                value: 'three',
                label: 'Settings',
                content: <p>Settings panel content.</p>,
              },
            ]}
          />
        </DemoSection>
      );
    case 'text-field':
      return (
        <DemoSection
          title="Input and validation"
          description="Enter a value and inspect helper and error states."
        >
          <div className="test-stack test-control-width">
            <UI.TextField
              label="Email address"
              type="email"
              placeholder="you@example.com"
              helperText="Used for account updates."
            />
            <UI.TextField
              label="Required field"
              required
              error
              helperText="This field is required."
            />
          </div>
        </DemoSection>
      );
    case 'toggle-button':
      return (
        <DemoSection
          title="Toggle state"
          description="Toggle the action and inspect its selected state."
        >
          <div className="test-row">
            <UI.ToggleButton
              selected={checked}
              onClick={() => setChecked(!checked)}
              aria-label="Toggle favorite"
            >
              <Star size={17} fill={checked ? 'currentColor' : 'none'} /> Favorite
            </UI.ToggleButton>
          </div>
          <output className="test-output">{checked ? 'Selected' : 'Not selected'}</output>
        </DemoSection>
      );
    case 'tooltip':
      return (
        <DemoSection
          title="Trigger behavior"
          description="Hover or focus the control to reveal its tooltip."
        >
          <UI.Tooltip content="Additional information about this action." placement="top">
            <Button variant="outlined">
              <CircleHelp size={16} /> Hover or focus me
            </Button>
          </UI.Tooltip>
        </DemoSection>
      );
    case 'transfer-list':
      return (
        <DemoSection
          title="Move list items"
          description="Transfer options between the source and destination."
        >
          <UI.TransferList
            items={transferItems}
            defaultValue={['gamma']}
            showAllActions
            showSelectAll
          />
        </DemoSection>
      );
    case 'typography':
      return (
        <DemoSection
          title="Text hierarchy"
          description="Compare headings, body text, and semantic colors."
        >
          <div className="test-stack">
            <UI.Typography variant="h4">Component typography</UI.Typography>
            <UI.Typography variant="body1">Body text for clear and readable content.</UI.Typography>
            <UI.Typography variant="caption" color="muted">
              Caption and supporting metadata
            </UI.Typography>
          </div>
        </DemoSection>
      );
    default:
      return <p className="empty-search">No test case is available for this component.</p>;
  }
}

export default function ComponentPlaygroundPage() {
  const { slug } = useParams();
  const component = useMemo(() => components.find((item) => item.slug === slug), [slug]);

  if (!component) {
    return (
      <div className="component-test-page">
        <p className="eyebrow">404 / COMPONENT NOT FOUND</p>
        <h1>Choose a component to test.</h1>
        <Link className="tm-button tm-button-contained" to="/">
          Browse the catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="component-test-page">
      <header className="component-test-header">
        <p className="eyebrow">{componentGroupsLabel(slug)}</p>
        <h1>{component.name}</h1>
        <p>{component.description}</p>
      </header>
      <div className="component-package-info">
        <span>Package</span>
        <code>@tailmantic/ui-components</code>
        <span>·</span>
        <span>local workspace · 0.2.2</span>
      </div>
      <ComponentTests key={slug} slug={slug} />
    </div>
  );
}

function componentGroupsLabel(slug) {
  return (
    componentGroups.find(({ items }) => items.some((item) => item.slug === slug))?.group ??
    'Components'
  );
}
