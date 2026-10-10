import { cx } from 'tailmantic';

function Link({
  children,
  className,
  href,
  underline = 'always',
  external = false,
  disabled = false,
  target,
  rel,
  ...props
}) {
  if (disabled) {
    return (
      <span className={cx('ui-link', 'ui-link-disabled', className)} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a
      {...props}
      className={cx('ui-link', underline === 'hover' && 'ui-link-hover', className)}
      href={href}
      target={external ? '_blank' : target}
      rel={external ? 'noopener noreferrer' : rel}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

export default Link;
