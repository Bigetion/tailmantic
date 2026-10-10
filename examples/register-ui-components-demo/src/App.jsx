import {
  Activity,
  AlignLeft,
  Bell,
  BookOpen,
  CheckSquare,
  ChevronDown,
  ChevronsUpDown,
  Circle,
  CircleHelp,
  Command,
  CreditCard,
  Ellipsis,
  FileText,
  Gauge,
  Layers,
  ListFilter,
  ListTodo,
  Menu as MenuIcon,
  MousePointerClick,
  Navigation,
  PanelLeft,
  PanelsTopLeft,
  Plus,
  Rows3,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
  StepForward,
  Tag,
  TextCursorInput,
  ToggleLeft,
  Type,
  UserRound,
  WandSparkles,
} from 'lucide-react';
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Link as RouterLink,
  Routes,
  useParams,
} from 'react-router-dom';
import { DEMOS } from './pages/index.js';

const NAV = [
  {
    group: 'Inputs',
    items: [
      { id: 'autocomplete', label: 'Autocomplete', icon: Search },
      { id: 'button', label: 'Button', icon: MousePointerClick },
      { id: 'button-group', label: 'Button group', icon: Rows3 },
      { id: 'checkbox', label: 'Checkbox', icon: CheckSquare },
      { id: 'floating-action-button', label: 'Floating action button', icon: Plus },
      { id: 'number-field', label: 'Number field', icon: Plus },
      { id: 'radio-group', label: 'Radio group', icon: CircleHelp },
      { id: 'rating', label: 'Rating', icon: Star },
      { id: 'select', label: 'Select', icon: ListFilter },
      { id: 'slider', label: 'Slider', icon: SlidersHorizontal },
      { id: 'switch', label: 'Switch', icon: ToggleLeft },
      { id: 'text-field', label: 'Text field', icon: TextCursorInput },
      { id: 'transfer-list', label: 'Transfer list', icon: ListTodo },
      { id: 'toggle-button', label: 'Toggle button', icon: ToggleLeft },
    ],
  },
  {
    group: 'Data display',
    items: [
      { id: 'avatar', label: 'Avatar', icon: UserRound },
      { id: 'badge', label: 'Badge', icon: Tag },
      { id: 'chip', label: 'Chip', icon: Sparkles },
      { id: 'divider', label: 'Divider', icon: AlignLeft },
      { id: 'icon-glyph', label: 'Icon glyph', icon: Circle },
      { id: 'icons', label: 'Icons', icon: WandSparkles },
      { id: 'list', label: 'List', icon: ListTodo },
      { id: 'table', label: 'Table', icon: Rows3 },
      { id: 'tooltip', label: 'Tooltip', icon: CircleHelp },
      { id: 'typography', label: 'Typography', icon: Type },
    ],
  },
  {
    group: 'Feedback',
    items: [
      { id: 'alert', label: 'Alert', icon: Bell },
      { id: 'progress', label: 'Progress', icon: Gauge },
      { id: 'skeleton', label: 'Skeleton', icon: Layers },
      { id: 'snackbar', label: 'Snackbar', icon: Activity },
    ],
  },
  {
    group: 'Surfaces',
    items: [
      { id: 'accordion', label: 'Accordion', icon: ChevronDown },
      { id: 'app-bar', label: 'App bar', icon: PanelLeft },
      { id: 'card', label: 'Card', icon: CreditCard },
      { id: 'paper', label: 'Paper', icon: FileText },
      { id: 'popover', label: 'Popover', icon: PanelsTopLeft },
    ],
  },
  {
    group: 'Navigation',
    items: [
      { id: 'bottom-navigation', label: 'Bottom navigation', icon: Navigation },
      { id: 'breadcrumbs', label: 'Breadcrumbs', icon: Navigation },
      { id: 'drawer', label: 'Drawer', icon: PanelLeft },
      { id: 'link', label: 'Link', icon: Navigation },
      { id: 'menu', label: 'Menu', icon: MenuIcon },
      { id: 'pagination', label: 'Pagination', icon: PanelsTopLeft },
      { id: 'speed-dial', label: 'Speed dial', icon: Ellipsis },
      { id: 'stepper', label: 'Stepper', icon: StepForward },
      { id: 'tabs', label: 'Tabs', icon: BookOpen },
    ],
  },
  {
    group: 'Utils',
    items: [
      { id: 'click-away-listener', label: 'Click away listener', icon: MousePointerClick },
      { id: 'dialog', label: 'Dialog', icon: PanelsTopLeft },
      { id: 'modal', label: 'Modal', icon: PanelsTopLeft },
      { id: 'popper', label: 'Popper', icon: ChevronsUpDown },
      { id: 'portal', label: 'Portal', icon: Command },
    ],
  },
];

const DESCRIPTIONS = {
  autocomplete: 'Search and select a value from a filtered list of options.',
  button: 'Actions with contained, outlined, and text styles, sizes, and states.',
  'button-group': 'Group related actions into a connected set of buttons.',
  'text-field': 'Text input with helper, error, and disabled states.',
  select: 'Native select control with dark theme and clear focus states.',
  checkbox: 'Checkbox input with checked, indeterminate, and disabled states.',
  'floating-action-button': 'A prominent floating control for the primary screen action.',
  'number-field': 'A numeric input with increment and decrement controls.',
  switch: 'Toggle settings using a keyboard-accessible switch control.',
  'radio-group': 'Choose a single option from a related set.',
  rating: 'Capture and display a star rating.',
  slider: 'Adjust numeric values with a keyboard-accessible range control.',
  'transfer-list': 'Move selected items between available and chosen lists.',
  'toggle-button': 'Compact button controls for selected and unselected states.',
  avatar: 'User identity with color and size variations.',
  badge: 'Status and count labels using semantic colors.',
  chip: 'Compact labels with filled, outlined, and disabled states.',
  'icon-glyph': 'Explore familiar interface symbols at several sizes.',
  icons: 'Browse a small set of icons used throughout the interface.',
  list: 'Present related items in a compact, selectable vertical list.',
  table: 'Structured tabular content with package table styles.',
  divider: 'Separate related content and show typography hierarchy.',
  typography: 'Compare heading, body, caption, and emphasized text styles.',
  alert: 'Inline feedback for informational and status messages.',
  progress: 'Determinate and indeterminate progress indicators.',
  skeleton: 'Loading placeholders for text, avatar, and content.',
  snackbar: 'Transient feedback that can be dismissed automatically.',
  accordion: 'Expandable content panels, with one panel open at a time.',
  'app-bar': 'A responsive top bar that combines navigation and screen actions.',
  card: 'Content surfaces using elevated and outlined variants.',
  paper: 'A reusable surface with subtle elevation and border treatments.',
  popover: 'Show contextual content beside its trigger.',
  'bottom-navigation': 'Switch between top-level views using a compact navigation bar.',
  breadcrumbs: 'Show the current location in a navigation hierarchy.',
  drawer: 'Reveal a dismissible navigation panel from the side of the screen.',
  link: 'Navigation links styled with clear hover and focus states.',
  menu: 'Present a short list of actions from a trigger.',
  pagination: 'Navigate between pages of a result set.',
  'speed-dial': 'Expand a floating action into a set of related shortcuts.',
  stepper: 'Show progress through a sequence of steps.',
  tabs: 'Switch between related views with accessible tab controls.',
  'click-away-listener': 'Dismiss a floating surface when interaction happens outside it.',
  dialog: 'Modal confirmation with backdrop and Escape-key handling.',
  modal: 'Present focused content above the current page.',
  popper: 'Position a floating panel relative to a trigger.',
  portal: 'Render temporary content outside the normal component tree.',
};

function DemoRoute() {
  const { componentId } = useParams();
  const item = NAV.flatMap((group) => group.items).find(({ id }) => id === componentId);
  const Component = DEMOS[componentId];

  if (!item || !Component) {
    return (
      <section className="demo-stage" aria-labelledby="not-found-title">
        <h1 className="demo-title" id="not-found-title">
          Component not found
        </h1>
        <p className="demo-desc">The requested component page does not exist.</p>
        <RouterLink className="ui-button ui-button-contained" to="/button">
          Back to Button
        </RouterLink>
      </section>
    );
  }

  const activeGroup = NAV.find((group) => group.items.some(({ id }) => id === componentId));
  const componentNumber = String(
    NAV.flatMap((group) => group.items).findIndex(({ id }) => id === componentId) + 1,
  ).padStart(2, '0');

  return (
    <>
      <header className="demo-header">
        <div>
          <span className="demo-eyebrow">
            {activeGroup.group} / {componentNumber}
          </span>
          <h1 className="demo-title">{item.label}</h1>
          <p className="demo-desc">{DESCRIPTIONS[componentId]}</p>
        </div>
      </header>
      <section className="demo-stage" aria-label={`${item.label} examples`}>
        <Component />
      </section>
    </>
  );
}

function NotFoundRoute() {
  return (
    <section className="demo-stage" aria-labelledby="not-found-title">
      <h1 className="demo-title" id="not-found-title">
        Page not found
      </h1>
      <p className="demo-desc">The requested page does not exist.</p>
      <RouterLink className="ui-button ui-button-contained" to="/button">
        Back to Button
      </RouterLink>
    </section>
  );
}

export default function App() {
  const componentCount = NAV.reduce((count, group) => count + group.items.length, 0);

  return (
    <BrowserRouter>
      <div className="app-shell">
        <aside className="sidebar">
          <RouterLink className="sidebar-brand" to="/button">
            <span className="brand-mark">t</span> tailmantic
          </RouterLink>
          <nav className="sidebar-nav" aria-label="Component examples">
            {NAV.map((group) => (
              <div className="sidebar-group" key={group.group}>
                <span className="sidebar-group-label">{group.group}</span>
                {group.items.map(({ id, label, icon: Icon }) => (
                  <NavLink
                    key={id}
                    to={`/${id}`}
                    end
                    className={({ isActive }) =>
                      isActive ? 'sidebar-item-active' : 'sidebar-item'
                    }
                  >
                    <Icon size={15} aria-hidden="true" />
                    {label}
                  </NavLink>
                ))}
              </div>
            ))}
          </nav>
        </aside>
        <main className="main-content">
          <div className="content-frame">
            <div className="demo-topline">
              <span>Tailmantic / UI components</span>
              <span>{componentCount} components</span>
            </div>
            <Routes>
              <Route path="/" element={<Navigate to="/button" replace />} />
              <Route path="/:componentId" element={<DemoRoute />} />
              <Route path="*" element={<NotFoundRoute />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
