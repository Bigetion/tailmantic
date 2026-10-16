import { Link } from 'react-router-dom';

export default function GuideLayout({ eyebrow, title, description, children }) {
  return (
    <article className="content-width docs-page">
      <nav className="app-breadcrumbs" aria-label="Breadcrumb">
        <Link to="/">Documentation</Link>
        <span>/</span>
        <span className="breadcrumb-current">{eyebrow}</span>
      </nav>
      <header className="docs-hero">
        <p className="component-count">{eyebrow}</p>
        <h1 className="page-heading">{title}</h1>
        <p className="page-intro">{description}</p>
      </header>
      <div className="docs-body">{children}</div>
    </article>
  );
}
