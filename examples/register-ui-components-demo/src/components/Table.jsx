import { useMemo, useState } from 'react';

const INITIAL_ROWS = [
  { id: '1', project: 'Design system', status: 'Active', owner: 'A. Lee' },
  { id: '2', project: 'Mobile app', status: 'Review', owner: 'J. Miller' },
  { id: '3', project: 'Documentation', status: 'Draft', owner: 'R. Khan' },
  { id: '4', project: 'Admin portal', status: 'Active', owner: 'S. Chen' },
];

function Table({ children, dense }) {
  return (
    <div className="demo-table-wrap">
      <table className={`demo-table${dense ? ' demo-table-dense' : ''}`}>{children}</table>
    </div>
  );
}

export default function TableDemo() {
  const [rows, setRows] = useState(INITIAL_ROWS);
  const [selected, setSelected] = useState([]);
  const [sortAscending, setSortAscending] = useState(true);
  const [dense, setDense] = useState(false);
  const [notice, setNotice] = useState('');
  const visibleRows = useMemo(
    () =>
      [...rows].sort((a, b) => {
        const result = a.project.localeCompare(b.project);
        return sortAscending ? result : -result;
      }),
    [rows, sortAscending],
  );
  const allSelected = rows.length > 0 && selected.length === rows.length;

  function toggleAll(checked) {
    setSelected(checked ? rows.map((row) => row.id) : []);
  }

  function exportSelected() {
    if (selected.length === 0) {
      setNotice('Select at least one row to export.');
      return;
    }
    const selectedRows = rows.filter((row) => selected.includes(row.id));
    const csv = [
      'Project,Status,Owner',
      ...selectedRows.map((row) =>
        [row.project, row.status, row.owner]
          .map((cell) => `"${cell.replaceAll('"', '""')}"`)
          .join(','),
      ),
    ].join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'selected-projects.csv';
    anchor.click();
    URL.revokeObjectURL(url);
    setNotice(
      `${selectedRows.length} selected row${selectedRows.length === 1 ? '' : 's'} exported.`,
    );
  }

  return (
    <section className="demo-section">
      <div className="demo-row">
        <label className="demo-table-control">
          <input
            type="checkbox"
            checked={dense}
            onChange={(event) => setDense(event.target.checked)}
          />{' '}
          Dense rows
        </label>
        <button type="button" className="demo-table-control-button" onClick={exportSelected}>
          Export selected
        </button>
        <span className="demo-note" role="status">
          {notice || `${selected.length} of ${rows.length} selected`}
        </span>
      </div>
      <Table dense={dense}>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                aria-label="Select all projects"
                checked={allSelected}
                onChange={(event) => toggleAll(event.target.checked)}
              />
            </th>
            <th>
              <button
                type="button"
                className="demo-table-sort"
                onClick={() => setSortAscending((value) => !value)}
              >
                Project {sortAscending ? '↑' : '↓'}
              </button>
            </th>
            <th>Status</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {visibleRows.map((row) => (
            <tr key={row.id} className={selected.includes(row.id) ? 'demo-table-row-selected' : ''}>
              <td>
                <input
                  type="checkbox"
                  aria-label={`Select ${row.project}`}
                  checked={selected.includes(row.id)}
                  onChange={(event) =>
                    setSelected((current) =>
                      event.target.checked
                        ? [...current, row.id]
                        : current.filter((id) => id !== row.id),
                    )
                  }
                />
              </td>
              <td>{row.project}</td>
              <td>
                <span
                  className={`demo-badge demo-badge-${row.status === 'Active' ? 'success' : row.status === 'Review' ? 'warning' : 'primary'}`}
                >
                  {row.status}
                </span>
              </td>
              <td>{row.owner}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button
        type="button"
        className="demo-table-control-button"
        onClick={() =>
          setRows((current) => [
            ...current,
            { id: String(Date.now()), project: 'New project', status: 'Draft', owner: 'You' },
          ])
        }
      >
        Add row
      </button>
    </section>
  );
}
