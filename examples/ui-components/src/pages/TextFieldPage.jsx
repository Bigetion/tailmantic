import { TextField } from '@tailmantic/ui-components';
import { Search, X } from 'lucide-react';
import { useId, useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('text-field');
const USAGE_CODE = `import { TextField } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/text-field/styles';

<TextField
  label="Work email"
  type="email"
  value={email}
  onChange={(event) => setEmail(event.target.value)}
  helperText="We’ll use this to send your account updates."
/>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/TextFieldPage.jsx',
    'Dedicated page with basic, validated, and adorned TextField examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/text-field/TextField.jsx',
    'Accessible native input with labels, helper and error messages, and adornment slots.',
  ],
  [
    'Styles',
    'packages/ui-components/src/text-field/text-field.styles.js',
    'Tailmantic control, validation, and adornment styles bundled with the package.',
  ],
];

function BasicTextField() {
  const id = useId();
  const [name, setName] = useState('');

  return (
    <div className="preview-stack">
      <TextField
        id={id}
        name="name"
        type="text"
        autoComplete="name"
        placeholder="e.g. Alex Morgan"
        label="Full name"
        helperText="Enter the name you use at work."
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
}

function ValidationTextField() {
  const id = useId();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const inputIsInvalid = email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const hasError = submitted && (!email || inputIsInvalid);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleChange(event) {
    setEmail(event.target.value);
    if (submitted) setSubmitted(false);
  }

  return (
    <form className="preview-stack" noValidate onSubmit={handleSubmit}>
      <TextField
        id={id}
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@company.com"
        label="Work email"
        helperText={hasError ? undefined : 'We’ll use this to send your account updates.'}
        error={hasError}
        errorText={
          hasError ? (!email ? 'Email is required.' : 'Enter a valid email address.') : undefined
        }
        value={email}
        required
        onChange={handleChange}
      />
      <div className="preview-row">
        <button className="tm-button tm-button-contained" type="submit">
          Continue
        </button>
        <span className="preview-note" role="status" aria-live="polite">
          {submitted && !hasError ? 'Email looks good.' : ''}
        </span>
      </div>
    </form>
  );
}

function AdornedTextField() {
  const id = useId();
  const [query, setQuery] = useState('');

  return (
    <div className="preview-stack">
      <TextField
        id={id}
        label="Search settings"
        type="text"
        inputMode="search"
        placeholder="Search preferences"
        helperText="Search across your preferences."
        startAdornment={<Search size={16} aria-hidden="true" />}
        endAdornment={
          query ? (
            <button
              aria-label="Clear search"
              className="tm-text-field-clear"
              type="button"
              onClick={() => setQuery('')}
            >
              <X size={14} aria-hidden="true" />
            </button>
          ) : null
        }
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
}

const EXAMPLES = [
  {
    id: 'text-field',
    title: 'Basic field',
    caption: 'Collect a short text value with a clear label and helpful guidance.',
    component: BasicTextField,
  },
  {
    id: 'text-field-validation',
    title: 'Validation',
    caption: 'Show a useful email error when submitted and confirm valid input.',
    component: ValidationTextField,
  },
  {
    id: 'text-field-adornments',
    title: 'Search adornment',
    caption: 'Add a leading icon and a clear action without obscuring the input.',
    component: AdornedTextField,
  },
];

export default function TextFieldPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Import TextField from the package and pass native input props."
      usageDescription="TextField preserves native input behavior and adds accessible labels, helper and error messages, adornment slots, and package styles."
    >
      <div className="component-showcase component-showcase-text-field">
        {EXAMPLES.map(({ id, title, caption, component: Example }) => (
          <DemoPanel key={id} title={title} caption={caption} code={getExampleCode(component.slug, title)}>
            <Example />
          </DemoPanel>
        ))}
      </div>
    </ComponentPageLayout>
  );
}
