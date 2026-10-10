import { forwardRef } from 'react';
import { cx } from 'tailmantic';

const ButtonGroup = forwardRef(function ButtonGroup(
  { children, className, orientation = 'horizontal', role, ...props },
  ref,
) {
  return (
    <div
      {...props}
      ref={ref}
      role={role ?? 'group'}
      className={cx(
        'ui-button-group',
        orientation === 'vertical' && 'ui-button-group-vertical',
        className,
      )}
    >
      {children}
    </div>
  );
});

export default ButtonGroup;
