import { forwardRef } from 'react';
import { cx } from 'tailmantic';
import './skeleton.styles.js';

const Skeleton = forwardRef(function Skeleton(
  { animation = 'pulse', className, height, variant = 'text', width, style, ...props },
  ref,
) {
  return (
    <span
      {...props}
      ref={ref}
      aria-hidden={props['aria-hidden'] ?? true}
      className={cx(
        'tm-skeleton',
        `tm-skeleton-${variant}`,
        animation !== 'none' && `tm-skeleton-${animation}`,
        className,
      )}
      style={{ width, height, ...style }}
    />
  );
});

export default Skeleton;
