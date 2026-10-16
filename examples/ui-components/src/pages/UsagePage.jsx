import { Link } from 'react-router-dom';
import GuideLayout from '../components/GuideLayout.jsx';

const ROOT_IMPORT = `import { Button, Select, TextField } from '@tailmantic/ui-components';`;
const SUBPATH_IMPORT = `import Button from '@tailmantic/ui-components/button';
import Select from '@tailmantic/ui-components/select';`;
const CONTROLLED = `import { useState } from 'react';
import { Select, TextField } from '@tailmantic/ui-components';

const priorities = ['Low', 'Medium', 'High'];

export function TaskFields() {
  const [priority, setPriority] = useState('Medium');

  return (
    <>
      <TextField label="Task name" placeholder="Write a task" />
      <Select
        label="Priority"
        options={priorities}
        value={priority}
        onValueChange={setPriority}
      />
    </>
  );
}`;

export default function UsagePage() {
  return (
    <GuideLayout
      eyebrow="GETTING STARTED"
      title="Using components"
      description="Import components from the package, compose them in React, and use controlled or uncontrolled state according to your application."
    >
      <section className="docs-section">
        <h2>Import from the package</h2>
        <p>The root entry is convenient for most apps and keeps imports discoverable.</p>
        <pre className="docs-code">
          <code>{ROOT_IMPORT}</code>
        </pre>
        <p>Subpath imports are available when you want to reference a component directly.</p>
        <pre className="docs-code">
          <code>{SUBPATH_IMPORT}</code>
        </pre>
      </section>
      <section className="docs-section">
        <h2>Controlled and uncontrolled state</h2>
        <p>
          Use a component's <code>defaultValue</code> for internal state, or pass a value and change
          handler when the application owns that state.
        </p>
        <pre className="docs-code">
          <code>{CONTROLLED}</code>
        </pre>
      </section>
      <section className="docs-section">
        <h2>Native attributes and refs</h2>
        <p>
          Where appropriate, components forward native HTML attributes and refs to their underlying
          element. Check each component's TypeScript props for the exact element type and supported
          props.
        </p>
      </section>
      <section className="docs-section">
        <h2>One-time style setup</h2>
        <p>
          Component styles are registered from your Tailmantic manifest, not from app-specific
          utility classes. See <Link to="/getting-started/installation">Installation</Link> for the
          full setup, or <Link to="/customization/theming">Theming</Link> to choose and customize
          design tokens.
        </p>
      </section>
    </GuideLayout>
  );
}
