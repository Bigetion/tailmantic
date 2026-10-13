import { Link, useParams } from 'react-router-dom';
import { componentCatalog } from '../data/components.js';
import AlertPage from './AlertPage.jsx';
import AccordionPage from './AccordionPage.jsx';
import AvatarPage from './AvatarPage.jsx';
import AutocompletePage from './AutocompletePage.jsx';
import BadgePage from './BadgePage.jsx';
import ButtonGroupPage from './ButtonGroupPage.jsx';
import ButtonPage from './ButtonPage.jsx';
import CheckboxPage from './CheckboxPage.jsx';
import ChipPage from './ChipPage.jsx';
import DividerPage from './DividerPage.jsx';
import DialogPage from './DialogPage.jsx';
import FloatingActionButtonPage from './FloatingActionButtonPage.jsx';
import IconsPage from './IconsPage.jsx';
import IconGlyphPage from './IconGlyphPage.jsx';
import ListPage from './ListPage.jsx';
import NumberFieldPage from './NumberFieldPage.jsx';
import RadioGroupPage from './RadioGroupPage.jsx';
import RatingPage from './RatingPage.jsx';
import SelectPage from './SelectPage.jsx';
import SliderPage from './SliderPage.jsx';
import SwitchPage from './SwitchPage.jsx';
import TextFieldPage from './TextFieldPage.jsx';
import TablePage from './TablePage.jsx';
import ToggleButtonPage from './ToggleButtonPage.jsx';
import TransferListPage from './TransferListPage.jsx';
import TooltipPage from './TooltipPage.jsx';
import TypographyPage from './TypographyPage.jsx';

const componentPages = import.meta.glob('./components/*/Page.jsx', {
  eager: true,
  import: 'default',
});

export default function ComponentPageRoute() {
  const { slug } = useParams();
  const Page = componentPages[`./components/${slug}/Page.jsx`];

  if (slug === 'alert') return <AlertPage />;
  if (slug === 'accordion') return <AccordionPage />;
  if (slug === 'avatar') return <AvatarPage />;
  if (slug === 'autocomplete') return <AutocompletePage />;
  if (slug === 'badge') return <BadgePage />;
  if (slug === 'button') return <ButtonPage />;
  if (slug === 'button-group') return <ButtonGroupPage />;
  if (slug === 'checkbox') return <CheckboxPage />;
  if (slug === 'chip') return <ChipPage />;
  if (slug === 'divider') return <DividerPage />;
  if (slug === 'dialog') return <DialogPage />;
  if (slug === 'floating-action-button') return <FloatingActionButtonPage />;
  if (slug === 'icons') return <IconsPage />;
  if (slug === 'icon-glyph') return <IconGlyphPage />;
  if (slug === 'list') return <ListPage />;
  if (slug === 'number-field') return <NumberFieldPage />;
  if (slug === 'radio-group') return <RadioGroupPage />;
  if (slug === 'rating') return <RatingPage />;
  if (slug === 'select') return <SelectPage />;
  if (slug === 'slider') return <SliderPage />;
  if (slug === 'switch') return <SwitchPage />;
  if (slug === 'table') return <TablePage />;
  if (slug === 'text-field') return <TextFieldPage />;
  if (slug === 'toggle-button') return <ToggleButtonPage />;
  if (slug === 'transfer-list') return <TransferListPage />;
  if (slug === 'tooltip') return <TooltipPage />;
  if (slug === 'typography') return <TypographyPage />;
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
