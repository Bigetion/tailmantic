import DemoPanel from './DemoPanel.jsx';
import DemoPreview from './DemoPreview.jsx';

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
  const styleSource =
    COMPONENT_STYLE_NOTES[component.slug] ??
    'Shared example styles are registered in examples/ui-components/src/tailmantics/app.js.';

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
