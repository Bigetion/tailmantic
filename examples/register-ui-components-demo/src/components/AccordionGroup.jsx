import { forwardRef } from 'react';
import { cx } from 'tailmantic';

const AccordionGroup = forwardRef(function AccordionGroup({ children, className, ...props }, ref) {
  return (
    <div {...props} ref={ref} className={cx('ui-accordion-group', className)}>
      {children}
    </div>
  );
});

export default AccordionGroup;
