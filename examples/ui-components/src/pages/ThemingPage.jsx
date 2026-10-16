import GuideLayout from '../components/GuideLayout.jsx';

const LIGHT_THEME = `import '@tailmantic/ui-components/tokens/light';`;
const DARK_THEME = `import '@tailmantic/ui-components/tokens/dark';`;
const CUSTOM_TOKENS = `import { register } from 'tailmantic/collector';

register(':root', {
  '--tm-blue': '#6750a4',
  '--tm-blue-dark': '#513f83',
  '--tm-blue-soft': 'rgba(103, 80, 164, .12)',
  '--surface': '#ffffff',
  '--text': '#25232a',
  '--border': '#dedbe4',
});`;
const SELECTIVE = `import '@tailmantic/ui-components/tokens/light';
import '@tailmantic/ui-components/button/styles';
import '@tailmantic/ui-components/text-field/styles';`;

export default function ThemingPage() {
  return (
    <GuideLayout
      eyebrow="CUSTOMIZATION"
      title="Themes and styles"
      description="Tailmantic UI ships component-owned styles and light/dark token sets. Choose a theme once, then override tokens to align the library with your product."
    >
      <section className="docs-section">
        <h2>Choose a theme</h2>
        <p>
          Import one token set from your Tailmantic manifest. The selected tokens control shared
          surfaces, text, borders, and accent colors.
        </p>
        <pre className="docs-code">
          <code>{LIGHT_THEME}</code>
        </pre>
        <pre className="docs-code">
          <code>{DARK_THEME}</code>
        </pre>
      </section>
      <section className="docs-section">
        <h2>Customize design tokens</h2>
        <p>
          Register overrides in the same manifest after the theme import. Component styles read
          these CSS custom properties.
        </p>
        <pre className="docs-code">
          <code>{CUSTOM_TOKENS}</code>
        </pre>
        <p>
          Override only the tokens your brand needs; component-specific selectors should be an
          exception rather than the default integration method.
        </p>
      </section>
      <section className="docs-section">
        <h2>Load only the styles you use</h2>
        <p>
          For tree-shaken style registration, import individual style modules instead of the full
          library styles.
        </p>
        <pre className="docs-code">
          <code>{SELECTIVE}</code>
        </pre>
      </section>
    </GuideLayout>
  );
}
