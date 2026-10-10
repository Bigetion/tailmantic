function Link({
  children,
  href = '#components',
  underline = 'always',
  external = false,
  disabled = false,
}) {
  if (disabled) {
    return (
      <span className="demo-link demo-link-disabled" aria-disabled="true">
        {children}
      </span>
    );
  }
  return (
    <a
      className={`demo-link demo-link-${underline}`}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

export default function LinkDemo() {
  return (
    <div className="demo-col">
      <div className="demo-row">
        <Link>Default link</Link>
        <Link underline="hover">Hover underline</Link>
      </div>
      <div className="demo-row">
        <Link href="https://example.com" external>
          External link
        </Link>
        <Link disabled>Unavailable link</Link>
      </div>
    </div>
  );
}
