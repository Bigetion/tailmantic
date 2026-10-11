import { forwardRef } from 'react';
import { cx } from 'tailmantic';
import './alert.styles.js';

const Alert = forwardRef(function Alert(
  {
    children,
    className,
    icon,
    onClose,
    severity = 'info',
    title,
    variant = 'standard',
    closeLabel = 'Dismiss alert',
    ...props
  },
  ref,
) {
  const defaultIcons = { info: 'i', success: '✓', warning: '!', error: '!' };

  return (
    <div
      {...props}
      ref={ref}
      className={cx('tm-alert', `tm-alert-${severity}`, `tm-alert-${variant}`, className)}
      role={severity === 'error' ? 'alert' : 'status'}
    >
      {icon !== null && (
        <span className="tm-alert-icon" aria-hidden="true">
          {icon === undefined ? defaultIcons[severity] : icon}
        </span>
      )}
      <div className="tm-alert-content">
        {title != null && <strong className="tm-alert-title">{title}</strong>}
        {children != null && <div className="tm-alert-message">{children}</div>}
      </div>
      {onClose && (
        <button type="button" className="tm-alert-close" aria-label={closeLabel} onClick={onClose}>
          <span aria-hidden="true">×</span>
        </button>
      )}
    </div>
  );
});

export default Alert;
