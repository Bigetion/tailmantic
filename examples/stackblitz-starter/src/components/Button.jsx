import { cx } from 'tailmantic';

/**
 * Button component — uses semantic class names from tailmantic.
 * No utility strings here. The HTML will contain: "btn btn-primary btn-md"
 */
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  return (
    <button
      className={cx('btn', `btn-${variant}`, `btn-${size}`, className)}
      {...props}
    >
      {children}
    </button>
  );
}
