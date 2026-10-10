import { forwardRef } from 'react';
import { cx } from 'tailmantic';

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
        'ui-divider',
        `ui-divider-${orientation}`,
        children && `ui-divider-text-${textAlign}`,
        inset && 'ui-divider-inset',
        inset && !vertical && 'ui-divider-inset-horizontal',
        flexItem && 'ui-divider-flex-item',
        className,
      )}
      role={children ? 'separator' : undefined}
      aria-orientation={vertical ? 'vertical' : undefined}
    >
      {children && <span className="ui-divider-content">{children}</span>}
    </Tag>
  );
});

export default Divider;
