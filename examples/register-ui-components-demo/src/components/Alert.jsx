import { CircleCheck, CircleX, Info, TriangleAlert, X } from 'lucide-react';
import { forwardRef } from 'react';
import { cx } from 'tailmantic';

const DEFAULT_ICONS = {
  info: <Info size={18} strokeWidth={2} aria-hidden="true" />,
  success: <CircleCheck size={18} strokeWidth={2} aria-hidden="true" />,
  warning: <TriangleAlert size={18} strokeWidth={2} aria-hidden="true" />,
  error: <CircleX size={18} strokeWidth={2} aria-hidden="true" />,
};

const Alert = forwardRef(function Alert(
  {
    action,
    children,
    className,
    closeLabel = 'Dismiss alert',
    icon,
    onClose,
    role,
    severity = 'info',
    title,
    variant = 'standard',
    ...props
  },
  ref,
) {
  const iconContent = icon === undefined ? DEFAULT_ICONS[severity] : icon;

  return (
    <div
      {...props}
      ref={ref}
      className={cx(
        'ui-alert',
        `ui-alert-${severity}`,
        variant === 'outlined' && 'ui-alert-outlined',
        className,
      )}
      role={role ?? (severity === 'error' ? 'alert' : 'status')}
    >
      {iconContent !== null && (
        <span className="ui-alert-icon" aria-hidden="true">
          {iconContent}
        </span>
      )}
      <div className="ui-alert-copy">
        {title != null && <strong className="ui-alert-title">{title}</strong>}
        {children != null && <span>{children}</span>}
        {action}
      </div>
      {onClose && (
        <button
          type="button"
          className="ui-alert-dismiss"
          aria-label={closeLabel}
          onClick={onClose}
        >
          <X size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      )}
    </div>
  );
});

export default Alert;
