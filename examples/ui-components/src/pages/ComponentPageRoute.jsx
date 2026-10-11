import { Link, useParams } from 'react-router-dom';
import { componentCatalog } from '../data/components.js';

// Match every flattened component page (pages/<PascalCase>Page.jsx).
// NotFoundPage.jsx also matches the glob but is a top-level 404 page,
// not a component demo, so it is filtered out to keep unknown slugs
// falling through to the in-route 404 fallback.
const componentPages = Object.fromEntries(
  Object.entries(
    import.meta.glob('./*Page.jsx', { eager: true, import: 'default' }),
  ).filter(([key]) => key !== './NotFoundPage.jsx'),
);

const toPascalCase = (slug) =>
  slug
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('') + 'Page';

export default function ComponentPageRoute() {
  const { slug } = useParams();
  const Page = componentPages[`./${toPascalCase(slug)}.jsx`];

  if (Page) return <Page />;

  return (
    <div className="content-width not-found">
      <p className="component-count">404 / COMPONENT NOT FOUND</p>
      <h1 className="page-heading">That component is not in the library.</h1>
      <p className="page-intro">Choose a component from the navigation to explore its examples.</p>
      <Link className="rgi-button rgi-button-contained" to={`/components/${componentCatalog[0].slug}`}>
        Browse components
      </Link>
    </div>
  );
}
