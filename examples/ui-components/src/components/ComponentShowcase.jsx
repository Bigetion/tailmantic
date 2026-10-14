import DemoPanel from './DemoPanel.jsx';
import DemoPreview from './DemoPreview.jsx';

const styleSources = import.meta.glob('../tailmantics/demo/*.js', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const COMPONENT_STYLE_NOTES = {
  autocomplete:
    'Base component styles are provided by @tailmantic/ui-components/autocomplete/styles.',
  accordion: 'Base component styles are provided by @tailmantic/ui-components/accordion/styles.',
  'floating-action-button':
    'Base component styles are provided by @tailmantic/ui-components/floating-action-button/styles.',
};

const POPPER_DEMOS = {
  popper: {
    title: 'Anchored surface',
    caption:
      'Position content relative to a reference element, then dismiss it with a click away or Escape.',
  },
  'popper-placements': {
    title: 'Placement controls',
    caption:
      'Compare top, right, bottom, and left placements and see when Popper flips to stay in view.',
  },
  'popper-offset': {
    title: 'Offset modifier',
    caption:
      'Adjust skidding and distance to control how far the floating surface sits from its reference.',
  },
};

const PORTAL_DEMOS = {
  portal: {
    title: 'Portal to document.body',
    caption:
      'Render a notification outside its React parent and verify that it is mounted directly under document.body.',
  },
  'portal-popover': {
    title: 'Custom portal target',
    caption:
      'Mount content into a chosen DOM node while keeping React event propagation connected to its owner.',
  },
  'portal-layering': {
    title: 'Escape clipping',
    caption:
      'Render a floating layer outside an overflow-hidden parent so it remains visible beyond the container.',
  },
};

const DEMOS_BY_COMPONENT = {
  popper: POPPER_DEMOS,
  portal: PORTAL_DEMOS,
};

function titleFromDemo(id) {
  return id
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default function ComponentShowcase({ component }) {
  const stylePath = `../tailmantics/demo/${component.slug}.js`;
  const styleSource = styleSources[stylePath] ?? COMPONENT_STYLE_NOTES[component.slug];

  if (typeof styleSource !== 'string') {
    throw new Error(`Missing Tailmantic style source for "${component.slug}" at ${stylePath}`);
  }

  return (
    <div className={`component-showcase component-showcase-${component.slug}`}>
      {component.demos.map((demoId) => {
        const demo = DEMOS_BY_COMPONENT[component.slug]?.[demoId];
        return (
          <DemoPanel
            key={demoId}
            title={demo?.title ?? titleFromDemo(demoId)}
            caption={
              demo?.caption ??
              `Explore the ${titleFromDemo(demoId).toLowerCase()} example for ${component.name} with live controls.`
            }
            code={styleSource}
          >
            <DemoPreview component={component} demoId={demoId} />
          </DemoPanel>
        );
      })}
    </div>
  );
}
