import { Icons } from '@tailmantic/ui-components';
import {
  Activity,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bell,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Copy,
  File,
  FileText,
  Filter,
  Heart,
  Home,
  Image,
  Mail,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Share2,
  ShieldCheck,
  Star,
  Trash2,
  User,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { cx } from 'tailmantic';
import '@tailmantic/ui-components/icons/styles';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('icons');
const CATEGORIES = ['All', 'Navigation', 'Actions', 'Files', 'People'];
const ICONS = [
  [Home, 'Home', 'Navigation'],
  [Search, 'Search', 'Actions'],
  [Settings, 'Settings', 'Actions'],
  [Bell, 'Notifications', 'Actions'],
  [User, 'Profile', 'People'],
  [Heart, 'Favorite', 'Actions'],
  [Star, 'Star', 'Actions'],
  [Mail, 'Mail', 'Files'],
  [FileText, 'Document', 'Files'],
  [Image, 'Image', 'Files'],
  [Cloud, 'Cloud', 'Files'],
  [ShieldCheck, 'Security', 'People'],
  [ArrowLeft, 'Arrow left', 'Navigation'],
  [ArrowRight, 'Arrow right', 'Navigation'],
  [ArrowUp, 'Arrow up', 'Navigation'],
  [ArrowDown, 'Arrow down', 'Navigation'],
  [ChevronLeft, 'Previous', 'Navigation'],
  [ChevronRight, 'Next', 'Navigation'],
  [ChevronDown, 'Expand', 'Navigation'],
  [Menu, 'Menu', 'Navigation'],
  [Plus, 'Add', 'Actions'],
  [X, 'Close', 'Actions'],
  [Check, 'Confirm', 'Actions'],
  [Copy, 'Copy', 'Actions'],
  [Share2, 'Share', 'Actions'],
  [Filter, 'Filter', 'Actions'],
  [Trash2, 'Delete', 'Actions'],
  [MoreHorizontal, 'More', 'Actions'],
  [Code2, 'Code', 'Files'],
  [File, 'File', 'Files'],
  [Activity, 'Activity', 'People'],
];
const USAGE_CODE = `import Icons from '@tailmantic/ui-components/icons';
import '@tailmantic/ui-components/icons/styles';

<Icons title="Search" size={20} color="currentColor">
  <circle cx="11" cy="11" r="7" />
  <path d="m20 20-4-4" />
</Icons>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/IconsPage.jsx',
    'Dedicated examples for the icon catalog, semantic colors, and accessible icon buttons.',
  ],
  [
    'Component',
    'packages/ui-components/src/icons/Icons.jsx',
    'Lightweight SVG primitive with size, color, viewBox, title, and forwarded ref support.',
  ],
  [
    'Styles',
    'packages/ui-components/src/icons/icons.styles.js',
    'Package-owned SVG and icon example layout styles.',
  ],
];

function IconLibrary() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('Home');
  const icons = ICONS.filter(([, name, group]) => (
    (category === 'All' || category === group)
    && name.toLowerCase().includes(query.trim().toLowerCase())
  ));

  return (
    <div className="preview-stack">
      <label className="tm-icons-search">
        <Search size={15} aria-hidden="true" />
        <input
          aria-label="Search icons"
          placeholder="Search icons"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {query && (
          <button type="button" aria-label="Clear search" onClick={() => setQuery('')}>
            <X size={13} aria-hidden="true" />
          </button>
        )}
      </label>
      <div className="tm-icons-category-list" role="group" aria-label="Filter icon category">
        {CATEGORIES.map((item) => (
          <button
            className={cx('tm-icons-category', category === item && 'tm-icons-category-active')}
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="tm-icons-library-grid" role="group" aria-label="Icon library">
        {icons.map(([Icon, name]) => (
          <button
            className={cx('tm-icons-library-item', selected === name && 'tm-icons-library-item-selected')}
            key={name}
            type="button"
            aria-pressed={selected === name}
            onClick={() => setSelected(name)}
          >
            <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
            <span>{name}</span>
          </button>
        ))}
        {!icons.length && <span className="tm-icons-empty-state">No icons match “{query}”.</span>}
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {icons.length} icons · Selected: {selected}
      </span>
    </div>
  );
}

function IconColors() {
  const examples = [
    ['Default', 'currentColor', 'tm-icons-tone-default', <circle key="default" cx="12" cy="12" r="8" />],
    ['Primary', '#a9c4ff', 'tm-icons-tone-primary', <path key="primary" d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />],
    ['Success', '#7bd2a9', 'tm-icons-tone-success', <path key="success" d="m5 12 4 4L19 6" />],
    ['Warning', '#f2c27b', 'tm-icons-tone-warning', <g key="warning"><path d="M12 3 2.8 19h18.4L12 3Z" /><path d="M12 9v4m0 3h.01" /></g>],
    ['Danger', '#f08b98', 'tm-icons-tone-danger', <g key="danger"><path d="M3 6h18" /><path d="m19 6-1 14H6L5 6" /><path d="M9 6V4h6v2m-5 4v6m4-6v6" /></g>],
  ];

  return (
    <div className="preview-stack">
      <div className="tm-icons-color-grid">
        {examples.map(([label, color, tone, shape]) => (
          <div className="tm-icons-color-item" key={label}>
            <span className={cx('tm-icons-color-swatch', tone)}>
              <Icons size={19} color={color} aria-label={`${label} example icon`}>
                {shape}
              </Icons>
            </span>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <span className="preview-note">Use color to reinforce meaning; keep decorative icons neutral.</span>
    </div>
  );
}

function IconButtons() {
  const [favorite, setFavorite] = useState(false);
  const [notice, setNotice] = useState('No action selected');
  const actions = [
    [Search, 'Search'],
    [Share2, 'Share'],
    [MoreHorizontal, 'More options'],
  ];

  return (
    <div className="preview-stack">
      <div className="tm-icons-action-row" role="group" aria-label="Icon button actions">
        {actions.map(([Icon, label]) => (
          <button
            className="tm-icons-action-button"
            key={label}
            type="button"
            aria-label={label}
            onClick={() => setNotice(`${label} action selected`)}
          >
            <Icon size={17} aria-hidden="true" />
          </button>
        ))}
        <button
          className={cx('tm-icons-action-button', favorite && 'tm-icons-action-button-active')}
          type="button"
          aria-label={favorite ? 'Remove favorite' : 'Add to favorites'}
          aria-pressed={favorite}
          onClick={() => {
            setFavorite((value) => !value);
            setNotice(favorite ? 'Removed from favorites' : 'Added to favorites');
          }}
        >
          <Heart size={17} fill={favorite ? 'currentColor' : 'none'} aria-hidden="true" />
        </button>
      </div>
      <span className="preview-note" role="status" aria-live="polite">{notice}</span>
    </div>
  );
}

export default function IconsPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Render custom SVG paths with the package Icons primitive, or choose icons from the example catalog."
      usageDescription="Icons provides consistent SVG sizing, stroke styling, accessible labels, and decorative defaults without bundling an icon library."
    >
      <div className="component-showcase component-showcase-icons">
        <DemoPanel
          title="Browse the icon library"
          caption="Search, filter, and select a symbol from a practical interface icon set."
          code={getExampleCode(component.slug, 'Browse the icon library')}
        >
          <IconLibrary />
        </DemoPanel>
        <DemoPanel
          title="Semantic icon colors"
          caption="Use restrained color to clarify status and reinforce meaning."
          code={getExampleCode(component.slug, 'Semantic icon colors')}
        >
          <IconColors />
        </DemoPanel>
        <DemoPanel
          title="Icon buttons"
          caption="Keep icon-only actions compact, keyboard accessible, and clearly labeled."
          code={getExampleCode(component.slug, 'Icon buttons')}
        >
          <IconButtons />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
