import { forwardRef } from 'react';
import { cx } from 'tailmantic';
import './app-bar.styles.js';

const AppBar = forwardRef(function AppBar(
  { children, className, elevation = 1, position = 'static', ...props },
  ref,
) {
  return (
    <header
      {...props}
      ref={ref}
      className={cx(
        'tm-app-bar',
        `tm-app-bar-${position}`,
        `tm-app-bar-elevation-${elevation}`,
        className,
      )}
    >
      {children}
    </header>
  );
});

export default AppBar;
