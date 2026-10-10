import { useState } from 'react';

function Breadcrumbs({ items, separator, collapsible, expanded, onExpand }) {
  const visibleItems =
    collapsible && !expanded && items.length > 3
      ? [items[0], { label: '…', collapsed: true, onClick: onExpand }, ...items.slice(-2)]
      : items;
  return (
    <nav className="demo-breadcrumbs" aria-label="Breadcrumb">
      {visibleItems.map((item, index) => (
        <span className="demo-breadcrumb-entry" key={item.label}>
          {index > 0 && (
            <span className="demo-breadcrumb-separator" aria-hidden="true">
              {separator}
            </span>
          )}
          {item.collapsed ? (
            <button
              type="button"
              className="demo-breadcrumb-expand"
              aria-label="Expand breadcrumb path"
              onClick={item.onClick}
            >
              …
            </button>
          ) : item.href && index < visibleItems.length - 1 ? (
            <a className="demo-breadcrumb-link" href={item.href}>
              {item.label}
            </a>
          ) : (
            <span className="demo-breadcrumb-current" aria-current="page">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

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
      <Breadcrumbs
        items={items}
        separator={separator}
        collapsible
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
