import { forwardRef } from 'react';
import { cx } from 'tailmantic';
import './paper.styles.js';

const Paper = forwardRef(function Paper(
  { children, className, elevation = 1, square = false, ...props },
  ref,
) {
  return (
    <div
      {...props}
      ref={ref}
      className={cx(
        'tm-paper',
        `tm-paper-elevation-${elevation}`,
        square && 'tm-paper-square',
        className,
      )}
    >
      {children}
    </div>
  );
});

export default Paper;
