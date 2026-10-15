import { Checkbox, Table } from '@tailmantic/ui-components';
import { useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  Check,
  ChevronDown,
  Download,
} from 'lucide-react';
import { cx } from 'tailmantic';
import '@tailmantic/ui-components/checkbox/styles';
import '@tailmantic/ui-components/table/styles';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('table');
const TABLE_STYLES_NOTE =
  'Table styles and table example layouts are provided by @tailmantic/ui-components/table/styles.';
const INITIAL_ROWS = [
  { id: 'PRJ-2048', name: 'Mobile app redesign', owner: 'Olivia Martin', initials: 'OM', tone: 'tm-table-example-avatar-blue', status: 'In progress', updated: '2026-10-02', progress: 72 },
  { id: 'PRJ-2047', name: 'Design system v2', owner: 'Jackson Lee', initials: 'JL', tone: 'tm-table-example-avatar-violet', status: 'Review', updated: '2026-10-01', progress: 91 },
  { id: 'PRJ-2046', name: 'Customer insights', owner: 'Isabella Nguyen', initials: 'IN', tone: 'tm-table-example-avatar-green', status: 'Complete', updated: '2026-09-29', progress: 100 },
  { id: 'PRJ-2045', name: 'API documentation', owner: 'William Kim', initials: 'WK', tone: 'tm-table-example-avatar-amber', status: 'Planned', updated: '2026-09-26', progress: 18 },
];
const COLUMNS = [
  ['name', 'Project'],
  ['owner', 'Owner'],
  ['status', 'Status'],
  ['updated', 'Last updated'],
];
const USAGE_CODE = `import Table from '@tailmantic/ui-components/table';
import '@tailmantic/ui-components/table/styles';

<Table density="dense" hoverable striped>
  <caption>Project progress</caption>
  <thead><tr><th scope="col">Project</th></tr></thead>
  <tbody><tr><td>Design system v2</td></tr></tbody>
</Table>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/TablePage.jsx',
    'Dedicated examples for sorting, dense rows, and selectable data.',
  ],
  [
    'Component',
    'packages/ui-components/src/table/Table.jsx',
    'Semantic table element with density, hover, striped, and sticky-header variants.',
  ],
  [
    'Styles',
    'packages/ui-components/src/table/table.styles.js',
    'Package-owned table variants and example layout styles.',
  ],
];

function SortButton({ column, label, sort, onSort }) {
  const active = sort.key === column;
  const Icon = !active ? ArrowUpDown : sort.direction === 'asc' ? ArrowUp : ArrowDown;

  return (
    <button
      className={cx('tm-table-example-sort-button', active && 'tm-table-example-sort-button-active')}
      type="button"
      aria-label={`Sort by ${label}${active ? `, ${sort.direction === 'asc' ? 'ascending' : 'descending'}` : ''}`}
      aria-pressed={active}
      onClick={() => onSort(column)}
    >
      {label}<Icon size={12} aria-hidden="true" />
    </button>
  );
}

function TableGrid({ demoId }) {
  const [rows] = useState(INITIAL_ROWS);
  const [sort, setSort] = useState({ key: 'updated', direction: 'desc' });
  const [selected, setSelected] = useState([]);
  const [exportNotice, setExportNotice] = useState('');
  const isDense = demoId === 'table-dense';
  const hasSelection = demoId === 'table-selection';

  const sortedRows = useMemo(() => [...rows].sort((a, b) => {
    const result = String(a[sort.key]).localeCompare(String(b[sort.key]), undefined, {
      numeric: true,
      sensitivity: 'base',
    });
    return sort.direction === 'asc' ? result : -result;
  }), [rows, sort]);

  const allSelected = selected.length === rows.length;
  const someSelected = selected.length > 0 && !allSelected;

  const changeSort = (key) => {
    setSort((current) => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const toggleRow = (id) => {
    setSelected((current) => (
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    ));
  };

  const toggleAll = () => setSelected(allSelected ? [] : rows.map((row) => row.id));

  return (
    <div className="preview-stack">
      <div className="tm-table-example-toolbar">
        <span className="tm-table-example-result-count">
          {hasSelection ? `${selected.length} selected` : `${rows.length} projects`}
        </span>
        {hasSelection ? (
          <button
            className="tm-table-example-toolbar-button"
            type="button"
            disabled={!selected.length}
            onClick={() => setSelected([])}
          >
            <Check size={13} aria-hidden="true" /> Clear selection
          </button>
        ) : (
          <button className="tm-table-example-toolbar-button" type="button" onClick={() => changeSort('updated')}>
            Recently updated <ChevronDown size={13} aria-hidden="true" />
          </button>
        )}
      </div>
      <div className="tm-table-example-wrap">
        <Table
          className={cx('tm-table-example', isDense && 'tm-table-example-dense')}
          density="dense"
          hoverable
          aria-label="Projects"
        >
          <thead>
            <tr>
              {hasSelection && (
                <th className="tm-table-example-check-cell">
                  <Checkbox
                    checked={allSelected}
                    indeterminate={someSelected}
                    onChange={toggleAll}
                    aria-label="Select all projects"
                  />
                </th>
              )}
              {COLUMNS.map(([key, label]) => (
                <th
                  key={key}
                  scope="col"
                  aria-sort={sort.key === key ? (sort.direction === 'asc' ? 'ascending' : 'descending') : 'none'}
                >
                  <SortButton column={key} label={label} sort={sort} onSort={changeSort} />
                </th>
              ))}
              <th className="tm-table-example-progress-heading" scope="col">Progress</th>
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row) => (
              <tr
                className={cx(hasSelection && selected.includes(row.id) && 'tm-table-example-row-selected')}
                key={row.id}
              >
                {hasSelection && (
                  <td className="tm-table-example-check-cell">
                    <Checkbox
                      checked={selected.includes(row.id)}
                      onChange={() => toggleRow(row.id)}
                      aria-label={`Select ${row.name}`}
                    />
                  </td>
                )}
                <td>
                  <span className="tm-table-example-project">
                    <strong>{row.name}</strong>
                    <small>{row.id}</small>
                  </span>
                </td>
                <td>
                  <span className="tm-table-example-owner">
                    <span className={cx('tm-table-example-avatar', row.tone)} aria-hidden="true">{row.initials}</span>
                    {row.owner}
                  </span>
                </td>
                <td>
                  <span className={cx('tm-table-example-status', `tm-table-example-status-${row.status.toLowerCase().replace(' ', '-')}`)}>
                    {row.status}
                  </span>
                </td>
                <td>
                  <time dateTime={row.updated}>
                    {new Date(`${row.updated}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </time>
                </td>
                <td className="tm-table-example-progress-cell">
                  <span className="tm-table-example-progress-value">{row.progress}%</span>
                  <span className="tm-table-example-progress-track" aria-label={`${row.progress}% complete`}>
                    <i style={{ width: `${row.progress}%` }} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="tm-table-example-footer">
        <span>
          {hasSelection
            ? `${selected.length} of ${rows.length} rows selected`
            : `Showing ${rows.length} of ${rows.length} projects`}
        </span>
        <button
          className="tm-table-example-export-button"
          type="button"
          onClick={() => setExportNotice(`Export ready for ${hasSelection ? selected.length : rows.length} projects.`)}
        >
          <Download size={13} aria-hidden="true" /> Export
        </button>
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {exportNotice || (isDense
          ? 'Compact density · reduced row padding'
          : hasSelection
            ? `${selected.length} of ${rows.length} projects selected`
            : `Sorted by ${COLUMNS.find(([key]) => key === sort.key)?.[1].toLowerCase()}, ${sort.direction === 'asc' ? 'ascending' : 'descending'}`)}
      </span>
    </div>
  );
}

export default function TablePage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Use Table to render semantic tabular data with density, hover, striped, or sticky header styles."
      usageDescription="The Table component wraps a native table and provides consistent package styles. Sorting, selection, and other data behaviors remain controlled by your application."
    >
      <div className="component-showcase component-showcase-table">
        <DemoPanel
          title="Sortable project table"
          caption="Scan project owners, status, updates, and progress with sortable column headings."
          code={TABLE_STYLES_NOTE}
        >
          <TableGrid demoId="table" />
        </DemoPanel>
        <DemoPanel
          title="Compact density"
          caption="Reduce row padding to fit more information into a limited space."
          code={TABLE_STYLES_NOTE}
        >
          <TableGrid demoId="table-dense" />
        </DemoPanel>
        <DemoPanel
          title="Row selection"
          caption="Select individual rows or toggle the entire page with an accessible indeterminate state."
          code={TABLE_STYLES_NOTE}
        >
          <TableGrid demoId="table-selection" />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
