import { lazy, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { componentCatalog } from '../data/components.js';

const componentPages = {
  accordion: lazy(() => import('./AccordionPage.jsx')),
  alert: lazy(() => import('./AlertPage.jsx')),
  'app-bar': lazy(() => import('./AppBarPage.jsx')),
  autocomplete: lazy(() => import('./AutocompletePage.jsx')),
  avatar: lazy(() => import('./AvatarPage.jsx')),
  badge: lazy(() => import('./BadgePage.jsx')),
  'bottom-navigation': lazy(() => import('./BottomNavigationPage.jsx')),
  breadcrumbs: lazy(() => import('./BreadcrumbsPage.jsx')),
  button: lazy(() => import('./ButtonPage.jsx')),
  'button-group': lazy(() => import('./ButtonGroupPage.jsx')),
  card: lazy(() => import('./CardPage.jsx')),
  checkbox: lazy(() => import('./CheckboxPage.jsx')),
  chip: lazy(() => import('./ChipPage.jsx')),
  'click-away-listener': lazy(() => import('./ClickAwayListenerPage.jsx')),
  'date-picker': lazy(() => import('./DatePickerPage.jsx')),
  dialog: lazy(() => import('./DialogPage.jsx')),
  divider: lazy(() => import('./DividerPage.jsx')),
  drawer: lazy(() => import('./DrawerPage.jsx')),
  'floating-action-button': lazy(() => import('./FloatingActionButtonPage.jsx')),
  'icon-glyph': lazy(() => import('./IconGlyphPage.jsx')),
  icons: lazy(() => import('./IconsPage.jsx')),
  link: lazy(() => import('./LinkPage.jsx')),
  list: lazy(() => import('./ListPage.jsx')),
  menu: lazy(() => import('./MenuPage.jsx')),
  modal: lazy(() => import('./ModalPage.jsx')),
  'number-field': lazy(() => import('./NumberFieldPage.jsx')),
  pagination: lazy(() => import('./PaginationPage.jsx')),
  paper: lazy(() => import('./PaperPage.jsx')),
  popover: lazy(() => import('./PopoverPage.jsx')),
  popper: lazy(() => import('./PopperPage.jsx')),
  portal: lazy(() => import('./PortalPage.jsx')),
  progress: lazy(() => import('./ProgressPage.jsx')),
  'radio-group': lazy(() => import('./RadioGroupPage.jsx')),
  rating: lazy(() => import('./RatingPage.jsx')),
  select: lazy(() => import('./SelectPage.jsx')),
  skeleton: lazy(() => import('./SkeletonPage.jsx')),
  slider: lazy(() => import('./SliderPage.jsx')),
  snackbar: lazy(() => import('./SnackbarPage.jsx')),
  'speed-dial': lazy(() => import('./SpeedDialPage.jsx')),
  stepper: lazy(() => import('./StepperPage.jsx')),
  switch: lazy(() => import('./SwitchPage.jsx')),
  table: lazy(() => import('./TablePage.jsx')),
  tabs: lazy(() => import('./TabsPage.jsx')),
  'text-field': lazy(() => import('./TextFieldPage.jsx')),
  'toggle-button': lazy(() => import('./ToggleButtonPage.jsx')),
  tooltip: lazy(() => import('./TooltipPage.jsx')),
  'transfer-list': lazy(() => import('./TransferListPage.jsx')),
  typography: lazy(() => import('./TypographyPage.jsx')),
};

export default function ComponentPageRoute() {
  const { slug } = useParams();
  const ComponentPage = componentPages[slug];
  if (ComponentPage) {
    return (
      <Suspense fallback={<div className="content-width not-found">Loading component docs…</div>}>
        <ComponentPage />
      </Suspense>
    );
  }
  return (
    <div className="content-width not-found">
      <p className="component-count">404 / COMPONENT NOT FOUND</p>
      <h1 className="page-heading">That component is not in the library.</h1>
      <p className="page-intro">Choose a component from the navigation to explore its examples.</p>
      <Link
        className="tm-button tm-button-contained"
        to={`/components/${componentCatalog[0].slug}`}
      >
        Browse components
      </Link>
    </div>
  );
}
