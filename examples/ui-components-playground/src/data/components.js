export const componentGroups = [
  {
    group: 'Inputs',
    items: [
      {
        name: 'Autocomplete',
        slug: 'autocomplete',
        description: 'Search and select one or more options.',
      },
      {
        name: 'Button',
        slug: 'button',
        description: 'Test button variants, sizes, and disabled behavior.',
      },
      {
        name: 'Button Group',
        slug: 'button-group',
        description: 'Compare grouped button orientations.',
      },
      {
        name: 'Checkbox',
        slug: 'checkbox',
        description: 'Test checked, unchecked, and indeterminate states.',
      },
      {
        name: 'Date Picker',
        slug: 'date-picker',
        description: 'Choose a date and constrain the available range.',
      },
      {
        name: 'Floating Action Button',
        slug: 'floating-action-button',
        description: 'Try compact and extended action buttons.',
      },
      {
        name: 'Number Field',
        slug: 'number-field',
        description: 'Increment, decrement, and constrain numeric values.',
      },
      { name: 'Radio Group', slug: 'radio-group', description: 'Select one option from a group.' },
      { name: 'Rating', slug: 'rating', description: 'Set ratings with different precisions.' },
      {
        name: 'Select',
        slug: 'select',
        description: 'Choose one or multiple options from a menu.',
      },
      { name: 'Slider', slug: 'slider', description: 'Adjust values and ranges.' },
      { name: 'Switch', slug: 'switch', description: 'Toggle settings on and off.' },
      {
        name: 'Text Field',
        slug: 'text-field',
        description: 'Enter text and test validation states.',
      },
      {
        name: 'Transfer List',
        slug: 'transfer-list',
        description: 'Move options between available and selected lists.',
      },
      {
        name: 'Toggle Button',
        slug: 'toggle-button',
        description: 'Toggle a single choice or selection.',
      },
    ],
  },
  {
    group: 'Data display',
    items: [
      {
        name: 'Avatar',
        slug: 'avatar',
        description: 'Display initials, images, and grouped identities.',
      },
      { name: 'Badge', slug: 'badge', description: 'Attach numeric or dot indicators to content.' },
      { name: 'Chip', slug: 'chip', description: 'Try selectable and removable compact labels.' },
      {
        name: 'Divider',
        slug: 'divider',
        description: 'Separate content horizontally or vertically.',
      },
      { name: 'Icons', slug: 'icons', description: 'Render custom SVG icon content.' },
      {
        name: 'Icon Glyph',
        slug: 'icon-glyph',
        description: 'Preview the library’s built-in icon glyphs.',
      },
      { name: 'List', slug: 'list', description: 'Render simple and interactive list items.' },
      {
        name: 'Table',
        slug: 'table',
        description: 'Inspect tabular content, density, and hover states.',
      },
      {
        name: 'Tooltip',
        slug: 'tooltip',
        description: 'Reveal contextual content on hover and focus.',
      },
      { name: 'Typography', slug: 'typography', description: 'Compare text variants and weights.' },
    ],
  },
  {
    group: 'Feedback',
    items: [
      { name: 'Alert', slug: 'alert', description: 'Show status messages with severity variants.' },
      {
        name: 'Dialog',
        slug: 'dialog',
        description: 'Open, dismiss, and interact with a modal dialog.',
      },
      {
        name: 'Progress',
        slug: 'progress',
        description: 'Test linear and circular progress indicators.',
      },
      {
        name: 'Snackbar',
        slug: 'snackbar',
        description: 'Show and dismiss transient notifications.',
      },
      {
        name: 'Skeleton',
        slug: 'skeleton',
        description: 'Preview loading placeholders and animations.',
      },
    ],
  },
  {
    group: 'Surfaces',
    items: [
      {
        name: 'Accordion',
        slug: 'accordion',
        description: 'Expand and collapse independent panels.',
      },
      { name: 'App Bar', slug: 'app-bar', description: 'Compose a responsive application header.' },
      { name: 'Card', slug: 'card', description: 'Combine content and actions on a card surface.' },
      { name: 'Paper', slug: 'paper', description: 'Compare surface elevations.' },
      {
        name: 'Popover',
        slug: 'popover',
        description: 'Open anchored content and test dismissal.',
      },
    ],
  },
  {
    group: 'Navigation',
    items: [
      {
        name: 'Bottom Navigation',
        slug: 'bottom-navigation',
        description: 'Switch between top-level destinations.',
      },
      { name: 'Breadcrumbs', slug: 'breadcrumbs', description: 'Show a navigational hierarchy.' },
      { name: 'Drawer', slug: 'drawer', description: 'Open and dismiss a navigation drawer.' },
      { name: 'Link', slug: 'link', description: 'Compare link appearances and destinations.' },
      { name: 'Menu', slug: 'menu', description: 'Open a menu and choose an action.' },
      {
        name: 'Pagination',
        slug: 'pagination',
        description: 'Navigate through a collection of pages.',
      },
      {
        name: 'Speed Dial',
        slug: 'speed-dial',
        description: 'Reveal a group of floating actions.',
      },
      { name: 'Stepper', slug: 'stepper', description: 'Move through an ordered multi-step flow.' },
      { name: 'Tabs', slug: 'tabs', description: 'Switch between tabbed content panels.' },
    ],
  },
  {
    group: 'Utilities',
    items: [
      {
        name: 'Click Away Listener',
        slug: 'click-away-listener',
        description: 'Detect clicks outside a contained element.',
      },
      { name: 'Modal', slug: 'modal', description: 'Test a modal overlay and close behavior.' },
      {
        name: 'Popper',
        slug: 'popper',
        description: 'Position floating content relative to an anchor.',
      },
      {
        name: 'Portal',
        slug: 'portal',
        description: 'Render content outside its parent DOM subtree.',
      },
    ],
  },
];

export const components = componentGroups.flatMap(({ items }) => items);
