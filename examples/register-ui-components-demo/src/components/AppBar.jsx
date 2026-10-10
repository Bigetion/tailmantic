import { forwardRef } from 'react';
import { cx } from 'tailmantic';

const AppBar = forwardRef(function AppBar(
  { children, className, elevation = 1, position = 'static', ...props },
  ref,
) {
  return (
    <header
      {...props}
      ref={ref}
      className={cx(
        'demo-app-bar',
        `demo-app-bar-${position}`,
        `demo-app-bar-elevation-${elevation}`,
        className,
      )}
    >
      {children}
    </header>
  );
});

export default AppBar;
