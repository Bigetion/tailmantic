import { forwardRef } from 'react';
import { cx } from 'tailmantic';
import './table.styles.js';

const Table = forwardRef(function Table(
  {
    children,
    className,
    density = 'standard',
    hoverable = false,
    stickyHeader = false,
    striped = false,
    ...props
  },
  ref,
) {
  return (
    <table
      {...props}
      ref={ref}
      className={cx(
        'tm-table',
        `tm-table-${density}`,
        hoverable && 'tm-table-hoverable',
        stickyHeader && 'tm-table-sticky-header',
        striped && 'tm-table-striped',
        className,
      )}
    >
      {children}
    </table>
  );
});

export default Table;
