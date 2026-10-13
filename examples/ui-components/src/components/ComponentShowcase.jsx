import DemoPanel from './DemoPanel.jsx';
import DemoPreview from './DemoPreview.jsx';

const styleSources = import.meta.glob('../tailmantics/demo/*.js', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const COMPONENT_STYLE_NOTES = {
  autocomplete: 'Base component styles are provided by @tailmantic/ui-components/autocomplete/styles.',
  accordion: 'Base component styles are provided by @tailmantic/ui-components/accordion/styles.',
  'floating-action-button':
    'Base component styles are provided by @tailmantic/ui-components/floating-action-button/styles.',
};

const DIALOG_DEMOS = {
  dialog: {
    title: 'Confirmation dialog',
    caption: 'Help users confirm whether to save or discard pending changes.',
  },
  'dialog-confirmation': {
    title: 'Destructive confirmation',
    caption: 'Clearly explain an irreversible action and distinguish the destructive choice.',
  },
  'dialog-fullscreen': {
    title: 'Focused composition',
    caption: 'Use a larger dialog for a short multi-field task without navigating away.',
  },
};

const PROGRESS_DEMOS = {
  progress: {
    title: 'Linear progress',
    caption: 'Show a task’s current completion, with an indeterminate state for work whose duration is not known.',
  },
  'progress-circular': {
    title: 'Circular progress',
    caption: 'Use a compact circular indicator for ongoing work, either with a known value or without one.',
  },
  'progress-buffer': {
    title: 'Buffered progress',
    caption: 'Distinguish completed work from content that has been buffered and is ready to process.',
  },
};

const SNACKBAR_DEMOS = {
  snackbar: {
    title: 'Dismissible notification',
    caption: 'Show a brief status message, then dismiss it or let it disappear automatically.',
  },
  'snackbar-action': {
    title: 'Snackbar with action',
    caption: 'Offer a quick, reversible action while keeping the message concise and non-blocking.',
  },
  'snackbar-position': {
    title: 'Placement options',
    caption: 'Compare start, center, and end placement within a notification area.',
  },
};

const SKELETON_DEMOS = {
  skeleton: {
    title: 'Loading profile card',
    caption: 'Preview a content placeholder while profile data is loading, then reveal the finished content.',
  },
  'skeleton-variants': {
    title: 'Shape and content variants',
    caption: 'Combine text, circular, and rectangular placeholders to match the content being loaded.',
  },
  'skeleton-animation': {
    title: 'Animation styles',
    caption: 'Compare pulse and wave motion, or disable animation to reduce visual movement.',
  },
};

const APP_BAR_DEMOS = {
  'app-bar': {
    title: 'Workspace toolbar',
    caption: 'Keep the current destination and primary actions visible in a balanced application bar.',
  },
  'app-bar-search': {
    title: 'Search and actions',
    caption: 'Integrate an expandable search field and action buttons without crowding the toolbar.',
  },
  'app-bar-responsive': {
    title: 'Responsive navigation',
    caption: 'Adapt the toolbar at narrow widths and expose a compact navigation menu.',
  },
};

const CARD_DEMOS = {
  card: {
    title: 'Project overview',
    caption: 'Group a project summary, status, and a useful action into one clear content surface.',
  },
  'card-actions': {
    title: 'Interactive actions',
    caption: 'Provide useful card actions and update the interface with their current state.',
  },
  'card-media': {
    title: 'Media and content',
    caption: 'Combine a strong visual header with supporting text and a compact metadata row.',
  },
};

const PAPER_DEMOS = {
  paper: {
    title: 'Surface elevation',
    caption: 'Compare how subtle elevation levels separate content while keeping the same base surface.',
  },
  'paper-elevation': {
    title: 'Elevation scale',
    caption: 'Choose an elevation level to compare how shadow and surface contrast establish hierarchy.',
  },
  'paper-variants': {
    title: 'Surface variants',
    caption: 'Compare a contained surface, an outlined panel, and a softly raised content area.',
  },
};

const POPOVER_DEMOS = {
  popover: {
    title: 'Project details',
    caption: 'Anchor a compact project summary to a trigger and dismiss it with a click away or Escape.',
  },
  'popover-placements': {
    title: 'Placement controls',
    caption: 'Preview top, right, bottom, and left placements, with Popper keeping the surface in view.',
  },
  'popover-interactive': {
    title: 'Interactive options',
    caption: 'Choose a workspace color from the floating panel and see the selected value update immediately.',
  },
};

const BOTTOM_NAVIGATION_DEMOS = {
  'bottom-navigation': {
    title: 'Primary destinations',
    caption: 'Switch between the main sections of an application and reflect the active destination.',
  },
  'bottom-navigation-labels': {
    title: 'Label display behavior',
    caption: 'Compare labeled destinations with a compact mode that shows a label only for the selected item.',
  },
  'bottom-navigation-icons': {
    title: 'Badges and icon states',
    caption: 'Add a small notification count while keeping selection and unread state accessible.',
  },
};

const BREADCRUMBS_DEMOS = {
  breadcrumbs: {
    title: 'Page hierarchy',
    caption: 'Show the current location in context and let users return to an ancestor page.',
  },
  'breadcrumbs-separators': {
    title: 'Separator styles',
    caption: 'Compare chevron, slash, and dot separators while preserving the same navigation hierarchy.',
  },
  'breadcrumbs-collapsed': {
    title: 'Collapsed hierarchy',
    caption: 'Keep long paths compact and reveal hidden ancestors when the user needs them.',
  },
};

const DRAWER_DEMOS = {
  drawer: {
    title: 'Temporary navigation drawer',
    caption: 'Open a modal side panel for primary destinations and dismiss it with Escape or a backdrop click.',
  },
  'drawer-temporary': {
    title: 'Temporary drawer with sections',
    caption: 'Group related navigation destinations and close the drawer after selecting a page.',
  },
  'drawer-permanent': {
    title: 'Permanent navigation drawer',
    caption: 'Keep navigation visible beside the main content in a persistent application layout.',
  },
};

const LINK_DEMOS = {
  link: {
    title: 'Inline links',
    caption: 'Use links to navigate to related content while preserving familiar browser behavior.',
  },
  'link-variants': {
    title: 'Semantic link styles',
    caption: 'Apply subtle, primary, and external-link treatments without changing the anchor semantics.',
  },
  'link-accessibility': {
    title: 'Keyboard and disabled states',
    caption: 'Keep links discoverable to keyboard users and represent unavailable destinations clearly.',
  },
};

const MENU_DEMOS = {
  menu: {
    title: 'Context actions',
    caption: 'Open a compact action list anchored to its trigger and dismiss it with Escape or a click away.',
  },
  'menu-placements': {
    title: 'Placement options',
    caption: 'Position a menu around its trigger and let Popper keep it within the available viewport.',
  },
  'menu-selection': {
    title: 'Selectable options',
    caption: 'Choose a sort order from a keyboard-accessible menu and reflect the current selection.',
  },
};

const PAGINATION_DEMOS = {
  pagination: {
    title: 'Page navigation',
    caption: 'Move through a page range with clear current-page, previous, next, first, and last controls.',
  },
  'pagination-outlined': {
    title: 'Outlined pagination',
    caption: 'Use outlined page controls to distinguish navigation from the surrounding content.',
  },
  'pagination-sizes': {
    title: 'Rows per page',
    caption: 'Change how many results are shown and keep the current page within the new range.',
  },
};

const SPEED_DIAL_DEMOS = {
  'speed-dial': {
    title: 'Quick actions',
    caption: 'Group related shortcuts behind one floating action button and choose an action from the expanded dial.',
  },
  'speed-dial-directions': {
    title: 'Expansion directions',
    caption: 'Preview actions expanding up, right, down, or left from the primary floating button.',
  },
  'speed-dial-open': {
    title: 'Expanded actions',
    caption: 'Show an expanded speed dial with labeled, discoverable actions and a clear close control.',
  },
};

const STEPPER_DEMOS = {
  stepper: {
    title: 'Horizontal stepper',
    caption: 'Guide a checkout flow through ordered steps, showing progress and the active section.',
  },
  'stepper-vertical': {
    title: 'Vertical stepper',
    caption: 'Keep step details and controls together in a compact, expandable vertical flow.',
  },
  'stepper-alternative': {
    title: 'Alternative labels',
    caption: 'Place labels beneath step indicators and allow direct navigation between milestones.',
  },
};

const TABS_DEMOS = {
  tabs: {
    title: 'Workspace views',
    caption: 'Switch between related sections and keep each selected panel connected to its tab.',
  },
  'tabs-scrollable': {
    title: 'Scrollable filters',
    caption: 'Keep a larger set of filters in one tab row that can scroll on narrow screens.',
  },
  'tabs-centered': {
    title: 'Centered settings',
    caption: 'Center a compact group of settings tabs while preserving keyboard navigation.',
  },
};

const CLICK_AWAY_DEMOS = {
  'click-away': {
    title: 'Outside click',
    caption: 'Dismiss a panel with an outside interaction while clicks inside its content leave it open.',
  },
  'click-away-portal': {
    title: 'Portaled content',
    caption: 'Treat content rendered in a body portal as inside the listener and dismiss it from elsewhere.',
  },
  'click-away-touch': {
    title: 'Touch and pointer events',
    caption: 'Use one pointer listener for mouse, pen, and touch dismissal instead of separate event handlers.',
  },
};

const MODAL_DEMOS = {
  modal: {
    title: 'Project preview',
    caption: 'Present focused content above the page and return users to their context when it closes.',
  },
  'modal-basic': {
    title: 'Backdrop behavior',
    caption: 'Choose whether clicking the backdrop dismisses the modal; interactions inside remain contained.',
  },
  'modal-accessibility': {
    title: 'Keyboard accessibility',
    caption: 'Keep keyboard focus inside the modal, support Escape, and restore focus when it closes.',
  },
};

const POPPER_DEMOS = {
  popper: {
    title: 'Anchored surface',
    caption: 'Position content relative to a reference element, then dismiss it with a click away or Escape.',
  },
  'popper-placements': {
    title: 'Placement controls',
    caption: 'Compare top, right, bottom, and left placements and see when Popper flips to stay in view.',
  },
  'popper-offset': {
    title: 'Offset modifier',
    caption: 'Adjust skidding and distance to control how far the floating surface sits from its reference.',
  },
};

const PORTAL_DEMOS = {
  portal: {
    title: 'Portal to document.body',
    caption: 'Render a notification outside its React parent and verify that it is mounted directly under document.body.',
  },
  'portal-popover': {
    title: 'Custom portal target',
    caption: 'Mount content into a chosen DOM node while keeping React event propagation connected to its owner.',
  },
  'portal-layering': {
    title: 'Escape clipping',
    caption: 'Render a floating layer outside an overflow-hidden parent so it remains visible beyond the container.',
  },
};

function titleFromDemo(id) {
  return id
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default function ComponentShowcase({ component }) {
  const stylePath = `../tailmantics/demo/${component.slug}.js`;
  const styleSource = styleSources[stylePath] ?? COMPONENT_STYLE_NOTES[component.slug];

  if (typeof styleSource !== 'string') {
    throw new Error(`Missing Tailmantic style source for "${component.slug}" at ${stylePath}`);
  }

  return (
    <div className={`component-showcase component-showcase-${component.slug}`}>
      {component.demos.map((demoId) => {
        const demo = component.slug === 'dialog'
                                                                      ? DIALOG_DEMOS[demoId]
                                                                      : component.slug === 'progress'
                                                                        ? PROGRESS_DEMOS[demoId]
                                                                          : component.slug === 'snackbar'
                                                                            ? SNACKBAR_DEMOS[demoId]
                                                                              : component.slug === 'skeleton'
                                                                                ? SKELETON_DEMOS[demoId]
                                                                                  : component.slug === 'app-bar'
                                                                                        ? APP_BAR_DEMOS[demoId]
                                                                                          : component.slug === 'card'
                                                                                            ? CARD_DEMOS[demoId]
                                                                                              : component.slug === 'paper'
                                                                                                ? PAPER_DEMOS[demoId]
                                                                                                  : component.slug === 'popover'
                                                                                                    ? POPOVER_DEMOS[demoId]
                                                                                                      : component.slug === 'bottom-navigation'
                                                                                                        ? BOTTOM_NAVIGATION_DEMOS[demoId]
                                                                                                          : component.slug === 'breadcrumbs'
                                                                                                            ? BREADCRUMBS_DEMOS[demoId]
                                                                                                              : component.slug === 'drawer'
                                                                                                                ? DRAWER_DEMOS[demoId]
                                                                                                                  : component.slug === 'link'
                                                                                                                    ? LINK_DEMOS[demoId]
                                                                                                                      : component.slug === 'menu'
                                                                                                                        ? MENU_DEMOS[demoId]
                                                                                                                              : component.slug === 'pagination'
                                                                                                                                ? PAGINATION_DEMOS[demoId]
                                                                                                                                  : component.slug === 'speed-dial'
                                                                                                                                    ? SPEED_DIAL_DEMOS[demoId]
                                                                                                                                      : component.slug === 'stepper'
                                                                                                                                        ? STEPPER_DEMOS[demoId]
                                                                                                                                          : component.slug === 'tabs'
                                                                                                                                            ? TABS_DEMOS[demoId]
                                                                                                                                              : component.slug === 'click-away-listener'
                                                                                                                                                ? CLICK_AWAY_DEMOS[demoId]
                                                                                                                                                  : component.slug === 'modal'
                                                                                                                                                    ? MODAL_DEMOS[demoId]
                                                                                                                                                      : component.slug === 'popper'
                                                                                                                                                        ? POPPER_DEMOS[demoId]
                                                                                                                                                          : component.slug === 'portal'
                                                                                                                                                            ? PORTAL_DEMOS[demoId]
            : undefined;
        return (
          <DemoPanel
            key={demoId}
            title={demo?.title ?? titleFromDemo(demoId)}
            caption={demo?.caption ?? `Explore the ${titleFromDemo(demoId).toLowerCase()} example for ${component.name} with live controls.`}
            code={styleSource}
          >
            <DemoPreview component={component} demoId={demoId} />
          </DemoPanel>
        );
      })}
    </div>
  );
}
