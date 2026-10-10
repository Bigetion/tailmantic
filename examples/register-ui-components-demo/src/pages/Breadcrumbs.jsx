import { useState } from 'react';
import BreadcrumbsComponent from '../components/Breadcrumbs.jsx';

export default function BreadcrumbsDemo() {
  const [separator, setSeparator] = useState('/');
  const [expanded, setExpanded] = useState(false);
  const items = [
    { label: 'Home', href: '#home' },
    { label: 'Workspace', href: '#workspace' },
    { label: 'Projects', href: '#projects' },
    { label: 'Components', href: '#components' },
    { label: 'Accordion' },
  ];
  return (
    <div className="demo-col">
      <label className="demo-breadcrumb-control">
        Separator
        <select value={separator} onChange={(event) => setSeparator(event.target.value)}>
          <option value="/">Slash</option>
          <option value="›">Chevron</option>
          <option value="·">Dot</option>
        </select>
      </label>
      <BreadcrumbsComponent
        items={items}
        separator={separator}
        collapsible
        maxItems={3}
        expanded={expanded}
        onExpand={() => setExpanded(true)}
      />
      {expanded && (
        <button
          className="demo-breadcrumb-control"
          type="button"
          onClick={() => setExpanded(false)}
        >
          Collapse breadcrumb path
        </button>
      )}
    </div>
  );
}
