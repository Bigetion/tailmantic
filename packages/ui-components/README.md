# @tailmantic/ui-components

Standalone React components styled with Tailmantic. All 47 Tailmantic UI components and their base styles live in this package; interactive showcase content and demo-only styles remain in the example application.

Install the package and its peer dependencies:

```sh
npm install @tailmantic/ui-components tailmantic react react-dom
```

Install `@popperjs/core` too if you use Popper, Popover, or Menu:

```sh
npm install @popperjs/core
```

```jsx
import { Button, Checkbox, Chip, Dialog, Tabs, TextField } from '@tailmantic/ui-components';

function Example() {
  return (
    <>
      <Button variant="outlined">Cancel</Button>
      <Button color="success">Save</Button>
      <label><Checkbox defaultChecked /> Receive product updates</label>
      <Chip color="primary">React</Chip>
      <TextField label="Project name" />
      <Tabs
        tabs={[{ label: 'Overview', content: 'Project overview' }, { label: 'Activity', content: 'Recent activity' }]}
      />
      <Dialog open={false} onClose={() => {}}>Dialog content</Dialog>
    </>
  );
}
```

The package requires Node.js 20+ to build or publish. Consuming applications must provide React and React DOM 18+, Tailmantic 1.0+, and `@popperjs/core` 2.11.8+ when using Popper, Popover, or Menu. Configure the Tailmantic Vite plugin and import `virtual:tailmantic.css`; add `@tailmantic/ui-components/styles` to the application's Tailmantic manifest to register the package's base styles. Every component is available from the root entry, has its own subpath export, and includes TypeScript props:

```jsx
import Button from '@tailmantic/ui-components/button';
import Tabs from '@tailmantic/ui-components/tabs';
```

For example, `Checkbox` supports native input props, controlled or uncontrolled state, and an `indeterminate` state. Its `ref` points to the native input element.

## Standalone component usage

Each component ships its own style file and a corresponding token file so you can load only what you need.

```js
// Load tokens (design variables) and styles for a single component
import '@tailmantic/ui-components/tokens/dark';  // or /tokens/light
import '@tailmantic/ui-components/button/styles';

// Or register every component's styles at once (existing approach)
import '@tailmantic/ui-components/styles';
```

**Token files** (`/tokens/dark`, `/tokens/light`) set CSS custom properties — colors, spacing, border radii, shadows — on `:root`. They are the design-token layer that all component styles reference via `var(--...)` variables. Import exactly one token file per page.

**Customizing tokens** — override any CSS variable in your own stylesheet after the token import:

```css
:root {
  --color-primary: #7c3aed;
  --radius-md: 0.5rem;
}
```

**Mix and match** — you can import styles for only the components your page uses. Each `*/styles` file is self-contained and registers its tokens with Tailmantic's collector independently.

**ButtonGroup dependency** — `ButtonGroup` renders `Button` children and its styles target `rgi-button` descendants. Always import `button/styles` alongside `button-group/styles`:

```js
import '@tailmantic/ui-components/button/styles';
import '@tailmantic/ui-components/button-group/styles';
```
