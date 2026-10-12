import { Link, useParams } from 'react-router-dom';
import { componentCatalog } from '../data/components.js';
import AccordionPage from './AccordionPage.jsx';
import AutocompletePage from './AutocompletePage.jsx';
import ButtonGroupPage from './ButtonGroupPage.jsx';
import ButtonPage from './ButtonPage.jsx';
import CheckboxPage from './CheckboxPage.jsx';
import FloatingActionButtonPage from './FloatingActionButtonPage.jsx';
import NumberFieldPage from './NumberFieldPage.jsx';

const componentPages = import.meta.glob('./components/*/Page.jsx', {
  eager: true,
  import: 'default',
});

export default function ComponentPageRoute() {
  const { slug } = useParams();
  const Page = componentPages[`./components/${slug}/Page.jsx`];

  if (slug === 'accordion') return <AccordionPage />;
  if (slug === 'autocomplete') return <AutocompletePage />;
  if (slug === 'button') return <ButtonPage />;
  if (slug === 'button-group') return <ButtonGroupPage />;
  if (slug === 'checkbox') return <CheckboxPage />;
  if (slug === 'floating-action-button') return <FloatingActionButtonPage />;
  if (slug === 'number-field') return <NumberFieldPage />;
  if (Page) return <Page />;

  return (
    <div className="content-width not-found">
      <p className="component-count">404 / COMPONENT NOT FOUND</p>
      <h1 className="page-heading">That component is not in the library.</h1>
      <p className="page-intro">Choose a component from the navigation to explore its examples.</p>
      <Link
        className="rgi-button rgi-button-contained"
        to={`/components/${componentCatalog[0].slug}`}
      >
        Browse components
      </Link>
    </div>
  );
}
