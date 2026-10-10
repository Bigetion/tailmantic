import { useState } from 'react';
import { cx } from 'tailmantic';

function Pagination({ count, page, onChange, size }) {
  return (
    <nav className={`demo-pagination demo-pagination-${size}`} aria-label="Pagination">
      <button
        className="demo-page-button"
        type="button"
        aria-label="Previous page"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
      >
        ‹
      </button>
      {Array.from({ length: count }, (_, index) => index + 1).map((number) => (
        <button
          className={cx('demo-page-button', page === number && 'demo-page-active')}
          type="button"
          key={number}
          aria-current={page === number ? 'page' : undefined}
          onClick={() => onChange(number)}
        >
          {number}
        </button>
      ))}
      <button
        className="demo-page-button"
        type="button"
        aria-label="Next page"
        disabled={page >= count}
        onClick={() => onChange(page + 1)}
      >
        ›
      </button>
    </nav>
  );
}

export default function PaginationDemo() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [size, setSize] = useState('medium');
  const rows = Array.from({ length: 23 }, (_, index) => `Workspace item ${index + 1}`);
  const pageCount = Math.ceil(rows.length / rowsPerPage);
  return (
    <div className="demo-col">
      <label className="demo-pagination-control">
        Rows per page
        <select
          value={rowsPerPage}
          onChange={(event) => {
            setRowsPerPage(Number(event.target.value));
            setPage(1);
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </label>
      <label className="demo-pagination-control">
        Control size
        <select value={size} onChange={(event) => setSize(event.target.value)}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
      <div className="demo-pagination-table" aria-live="polite">
        {rows.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row) => (
          <div key={row}>{row}</div>
        ))}
      </div>
      <span className="demo-note">Outlined page controls · {rows.length} total rows</span>
      <Pagination count={pageCount} page={page} size={size} onChange={setPage} />
    </div>
  );
}
