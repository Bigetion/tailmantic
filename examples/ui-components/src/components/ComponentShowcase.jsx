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
        return (
          <DemoPanel
            key={demoId}
            title={titleFromDemo(demoId)}
            caption={`Explore the ${titleFromDemo(demoId).toLowerCase()} example for ${component.name} with live controls.`}
            code={styleSource}
          >
            <DemoPreview component={component} demoId={demoId} />
          </DemoPanel>
        );
      })}
    </div>
  );
}
