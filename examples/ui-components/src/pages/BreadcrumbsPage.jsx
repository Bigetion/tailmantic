import { Breadcrumbs } from '@tailmantic/ui-components';
import { ChevronRight, Dot } from 'lucide-react';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('breadcrumbs');
const PATH = ['Workspace', 'Engineering', 'Projects', 'Website refresh', 'Design system'];
const USAGE_CODE = `import { Breadcrumbs } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/breadcrumbs/styles';

<Breadcrumbs separator={<ChevronRight size={14} aria-hidden="true" />} maxItems={4}>
  <a href="/workspace">Workspace</a>
  <a href="/workspace/projects">Projects</a>
  <span aria-current="page">Design system</span>
</Breadcrumbs>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/BreadcrumbsPage.jsx',
    'Dedicated hierarchy, separator, and collapsed-path examples using the package component.',
  ],
  [
    'Component',
    'packages/ui-components/src/breadcrumbs/Breadcrumbs.jsx',
    'Accessible breadcrumb navigation with custom separators and compact item display.',
  ],
  [
    'Styles',
    'packages/ui-components/src/breadcrumbs/breadcrumbs.styles.js',
    'Package-owned breadcrumb presentation and example layouts.',
  ],
];

function createPathItems(currentIndex, onNavigate) {
  return PATH.slice(0, currentIndex + 1).map((label, index) =>
    index === currentIndex ? (
      <span key={label}>{label}</span>
    ) : (
      <a
        key={label}
        href={`#${label.toLowerCase().replaceAll(' ', '-')}`}
        onClick={(event) => {
          event.preventDefault();
          onNavigate(index);
        }}
      >
        {label}
      </a>
    ),
  );
}

function HierarchyExample() {
  const [currentIndex, setCurrentIndex] = useState(PATH.length - 1);

  return (
    <div className="tm-breadcrumbs-example">
      <div className="tm-breadcrumbs-example-panel">
        <div className="tm-breadcrumbs-example-context">
          <span className="tm-breadcrumbs-example-eyebrow">Current location</span>
          <strong className="tm-breadcrumbs-example-title">{PATH[currentIndex]}</strong>
          <span className="tm-breadcrumbs-example-description">
            Select any parent to move back through the project hierarchy.
          </span>
        </div>
        <Breadcrumbs aria-label="Project location">
          {createPathItems(currentIndex, setCurrentIndex)}
        </Breadcrumbs>
        <span className="tm-breadcrumbs-example-status" role="status">
          Current page: <strong>{PATH[currentIndex]}</strong>
        </span>
      </div>
    </div>
  );
}

function SeparatorExamples() {
  const [currentIndex, setCurrentIndex] = useState(PATH.length - 1);
  const separators = [
    { label: 'Chevron', value: <ChevronRight aria-hidden="true" /> },
    { label: 'Slash', value: '/' },
    { label: 'Dot', value: <Dot aria-hidden="true" /> },
  ];

  return (
    <div className="tm-breadcrumbs-example tm-breadcrumbs-example-separators">
      {separators.map(({ label, value }) => (
        <div className="tm-breadcrumbs-example-separator-row" key={label}>
          <span className="tm-breadcrumbs-example-separator-label">{label} separator</span>
          <Breadcrumbs aria-label={`${label} separated project location`} separator={value}>
            {createPathItems(currentIndex, setCurrentIndex)}
          </Breadcrumbs>
        </div>
      ))}
      <span className="tm-breadcrumbs-example-status" role="status">
        Current page: <strong>{PATH[currentIndex]}</strong>
      </span>
    </div>
  );
}

function CollapsedExample() {
  const [currentIndex, setCurrentIndex] = useState(PATH.length - 1);
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="tm-breadcrumbs-example">
      <div className="tm-breadcrumbs-example-panel">
        <div className="tm-breadcrumbs-example-context">
          <span className="tm-breadcrumbs-example-eyebrow">Long page path</span>
          <strong className="tm-breadcrumbs-example-title">{PATH[currentIndex]}</strong>
          <span className="tm-breadcrumbs-example-description">
            Collapse older ancestors to preserve room on narrow layouts.
          </span>
        </div>
        <Breadcrumbs aria-label="Compact project location" maxItems={collapsed ? 3 : undefined}>
          {createPathItems(currentIndex, setCurrentIndex)}
        </Breadcrumbs>
        <div className="tm-breadcrumbs-example-collapse-controls">
          <span className="tm-breadcrumbs-example-status" role="status">
            {collapsed ? 'Showing a compact path.' : 'All parent locations are visible.'}
          </span>
          <button
            className="tm-breadcrumbs-example-collapse-button"
            type="button"
            onClick={() => setCollapsed((value) => !value)}
          >
            {collapsed ? 'Show full path' : 'Collapse path'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BreadcrumbsPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Place navigable ancestors before the current page and choose a separator that fits your interface."
      usageDescription="Breadcrumbs renders semantic navigation, marks the current location, supports custom separators, and can collapse long paths with maxItems."
    >
      <div className="component-showcase component-showcase-breadcrumbs">
        <DemoPanel
          title="Page hierarchy"
          caption="Show the current location in context and let users return to an ancestor page."
          code={getExampleCode(component.slug, 'Page hierarchy')}
        >
          <HierarchyExample />
        </DemoPanel>
        <DemoPanel
          title="Separator styles"
          caption="Compare chevron, slash, and dot separators across the same navigable path."
          code={getExampleCode(component.slug, 'Separator styles')}
        >
          <SeparatorExamples />
        </DemoPanel>
        <DemoPanel
          title="Collapsed hierarchy"
          caption="Keep long paths compact and reveal hidden ancestors when needed."
          code={getExampleCode(component.slug, 'Collapsed hierarchy')}
        >
          <CollapsedExample />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
