import { forwardRef, useState } from 'react';
import { cx } from 'tailmantic';

const Avatar = forwardRef(function Avatar(
  { alt, children, className, color = 'default', size = 'medium', src, ...props },
  ref,
) {
  const [failedSource, setFailedSource] = useState(null);
  const showImage = Boolean(src) && failedSource !== src;
  const accessibleLabel = alt ?? (typeof children === 'string' ? children : undefined);
  const accessibleProps = accessibleLabel ? { role: 'img', 'aria-label': accessibleLabel } : {};

  return (
    <span
      {...props}
      ref={ref}
      className={cx('demo-avatar', `demo-avatar-${color}`, `demo-avatar-${size}`, className)}
      {...accessibleProps}
    >
      {showImage ? <img src={src} alt="" onError={() => setFailedSource(src)} /> : children}
    </span>
  );
});

export default Avatar;
