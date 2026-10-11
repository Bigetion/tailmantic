import { forwardRef } from 'react';
import { cx } from 'tailmantic';
import './divider.styles.js';

const Divider = forwardRef(function Divider(
  {
    children,
    className,
    flexItem = false,
    inset = false,
    orientation = 'horizontal',
    textAlign = 'center',
    ...props
  },
  ref,
) {
  const vertical = orientation === 'vertical';
  const Tag = children ? 'div' : 'hr';

  return (
    <Tag
      {...props}
      ref={ref}
      className={cx(
        'tm-divider',
        `tm-divider-${orientation}`,
        children && `tm-divider-text-${textAlign}`,
        inset && 'tm-divider-inset',
        flexItem && 'tm-divider-flex-item',
        className,
      )}
      role={children ? 'separator' : undefined}
      aria-orientation={vertical ? 'vertical' : undefined}
    >
      {children && <span className="tm-divider-content">{children}</span>}
    </Tag>
  );
});

export default Divider;
