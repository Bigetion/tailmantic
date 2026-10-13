import assert from 'node:assert/strict';
import test from 'node:test';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>', { pretendToBeVisual: true });
const { window } = dom;

Object.defineProperties(globalThis, {
  window: { configurable: true, value: window },
  document: { configurable: true, value: window.document },
  navigator: { configurable: true, value: window.navigator },
  HTMLElement: { configurable: true, value: window.HTMLElement },
  Element: { configurable: true, value: window.Element },
  Node: { configurable: true, value: window.Node },
  getComputedStyle: { configurable: true, value: window.getComputedStyle.bind(window) },
  IS_REACT_ACT_ENVIRONMENT: { configurable: true, value: true, writable: true },
});

const React = await import('react');
const { act } = React;
const { createRoot } = await import('react-dom/client');
const { default: Autocomplete } = await import('../dist/autocomplete.js');
const {
  default: Accordion,
  AccordionHelper,
  AccordionItem,
  AccordionToolbar,
} = await import('../dist/accordion.js');
const { default: Alert } = await import('../dist/alert.js');
const { default: Badge } = await import('../dist/badge.js');
const { default: Avatar } = await import('../dist/avatar.js');
const { AvatarGroup } = await import('../dist/avatar.js');
const { default: BottomNavigation } = await import('../dist/bottom-navigation.js');
const { BottomNavigationItem } = await import('../dist/bottom-navigation.js');
const { default: Breadcrumbs } = await import('../dist/breadcrumbs.js');
const { default: Button } = await import('../dist/button.js');
const { default: ButtonGroup } = await import('../dist/button-group.js');
const { default: Card } = await import('../dist/card.js');
const { default: Checkbox } = await import('../dist/checkbox.js');
const { default: ClickAwayListener } = await import('../dist/click-away-listener.js');
const { default: Chip } = await import('../dist/chip.js');
const { default: Divider } = await import('../dist/divider.js');
const { default: Icons } = await import('../dist/icons.js');
const { default: IconGlyph } = await import('../dist/icon-glyph.js');
const { default: Menu } = await import('../dist/menu.js');
const { MenuItem } = await import('../dist/menu.js');
const { default: NumberField } = await import('../dist/number-field.js');
const { default: Pagination } = await import('../dist/pagination.js');
const { default: Popover } = await import('../dist/popover.js');
const { default: Progress } = await import('../dist/progress.js');
const { default: Link } = await import('../dist/link.js');
const { default: List } = await import('../dist/list.js');
const { ListItem, ListItemText } = await import('../dist/list.js');
const { default: Paper } = await import('../dist/paper.js');
const { default: RadioGroup } = await import('../dist/radio-group.js');
const { default: Rating } = await import('../dist/rating.js');
const { default: Select } = await import('../dist/select.js');
const { default: Slider } = await import('../dist/slider.js');
const { default: Snackbar } = await import('../dist/snackbar.js');
const { default: Stepper, Step } = await import('../dist/stepper.js');
const { default: Switch } = await import('../dist/switch.js');
const { default: Skeleton } = await import('../dist/skeleton.js');
const { default: Tabs } = await import('../dist/tabs.js');
const { default: TextField } = await import('../dist/text-field.js');
const { default: ToggleButton } = await import('../dist/toggle-button.js');
const { default: Typography } = await import('../dist/typography.js');
const { default: TransferList } = await import('../dist/transfer-list.js');
const { default: SpeedDial } = await import('../dist/speed-dial.js');

test.after(() => dom.window.close());

test('Icons renders accessible titles and hides unlabeled decorative SVGs', async () => {
  const harness = await createHarness();

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Icons, { title: 'Search', size: 18 }, React.createElement('path', { d: 'M1 1' })),
        React.createElement(Icons, { 'aria-label': 'Close' }, React.createElement('path', { d: 'M2 2' })),
        React.createElement(Icons, null, React.createElement('path', { d: 'M3 3' })),
      ),
    );

    const [titled, labeled, decorative] = harness.mount.querySelectorAll('svg');
    assert.equal(titled.getAttribute('role'), 'img');
    assert.equal(titled.querySelector('title')?.textContent, 'Search');
    assert.equal(titled.getAttribute('width'), '18');
    assert.equal(labeled.getAttribute('role'), 'img');
    assert.equal(labeled.querySelector('title')?.textContent, 'Close');
    assert.equal(decorative.getAttribute('aria-hidden'), 'true');
  } finally {
    await harness.dispose();
  }
});

test('IconGlyph renders named glyphs with accessible titles and supports decorative use', async () => {
  const harness = await createHarness();

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(IconGlyph, { name: 'verified', size: 20 }),
        React.createElement(IconGlyph, { name: 'favorite', title: 'Save this item' }),
        React.createElement(IconGlyph, { name: 'home', title: '' }),
      ),
    );

    const [named, titled, decorative] = harness.mount.querySelectorAll('svg');
    assert.equal(named.getAttribute('role'), 'img');
    assert.equal(named.querySelector('title')?.textContent, 'verified');
    assert.equal(named.getAttribute('width'), '20');
    assert.equal(titled.querySelector('title')?.textContent, 'Save this item');
    assert.equal(decorative.getAttribute('aria-hidden'), 'true');
    assert.equal(decorative.querySelector('path')?.getAttribute('d'), 'm3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z');
  } finally {
    await harness.dispose();
  }
});

async function createHarness() {
  const mount = document.createElement('div');
  document.body.append(mount);
  const root = createRoot(mount);
  return {
    mount,
    async render(element) {
      await act(async () => {
        root.render(element);
        await new Promise((resolve) => setTimeout(resolve, 30));
      });
    },
    async dispose() {
      await act(async () => root.unmount());
      mount.remove();
    },
  };
}

test('Menu focuses and navigates enabled items, closes on item, Escape, and click-away', async () => {
  const harness = await createHarness();
  const anchor = document.createElement('button');
  document.body.append(anchor);
  const closeEvents = [];
  const menu = (open) =>
    React.createElement(
      Menu,
      {
        anchorEl: anchor,
        open,
        onClose: (event) => closeEvents.push(event.type),
      },
      React.createElement(MenuItem, null, 'First'),
      React.createElement(MenuItem, { disabled: true }, 'Disabled'),
      React.createElement(MenuItem, null, 'Last'),
    );

  try {
    await harness.render(menu(true));
    const items = [...document.querySelectorAll('[role="menuitem"]')];
    assert.equal(items.length, 3);
    assert.equal(document.activeElement, items[0]);

    items[0].dispatchEvent(
      new window.KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }),
    );
    assert.equal(document.activeElement, items[2], 'arrow navigation skips disabled items');
    items[2].click();
    assert.equal(closeEvents.at(-1), 'click');

    await harness.render(menu(false));
    await harness.render(menu(true));
    window.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    assert.equal(closeEvents.at(-1), 'keydown');

    await harness.render(menu(false));
    await harness.render(menu(true));
    document.body.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    assert.equal(closeEvents.at(-1), 'click', 'clicking outside dismisses the menu');
  } finally {
    await harness.dispose();
    anchor.remove();
  }
});

test('Popover ignores inside pointer events and reports outside and Escape reasons', async () => {
  const harness = await createHarness();
  const anchor = document.createElement('button');
  document.body.append(anchor);
  const closeReasons = [];

  try {
    await harness.render(
      React.createElement(
        Popover,
        {
          anchorEl: anchor,
          open: true,
          label: 'More information',
          onClose: (_event, reason) => closeReasons.push(reason),
        },
        React.createElement('button', null, 'Inside'),
      ),
    );
    const popover = document.querySelector('.rgi-popover');
    assert.ok(popover);
    assert.equal(popover.getAttribute('aria-label'), 'More information');
    popover.dispatchEvent(new window.MouseEvent('pointerdown', { bubbles: true }));
    assert.deepEqual(closeReasons, [], 'does not close for a pointer event inside');

    document.body.dispatchEvent(new window.MouseEvent('pointerdown', { bubbles: true }));
    document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    assert.deepEqual(closeReasons, ['backdropClick', 'escapeKeyDown']);
  } finally {
    await harness.dispose();
    anchor.remove();
  }
});

test('Autocomplete filters and selects with keyboard and pointer, preserving input ARIA state', async () => {
  const harness = await createHarness();
  const selected = [];
  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Apricot', value: 'apricot' },
    { label: 'Banana', value: 'banana' },
  ];

  try {
    await harness.render(
      React.createElement(Autocomplete, {
        options,
        name: 'fruit',
        onValueChange: (value, option) => selected.push([value, option?.label]),
      }),
    );
    const input = harness.mount.querySelector('[role="combobox"]');
    await act(async () => input.focus());
    await act(async () =>
      input.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true })),
    );
    assert.equal(input.getAttribute('aria-expanded'), 'true');
    assert.equal(input.getAttribute('aria-activedescendant'), `${input.id}-listbox-option-0`);

    await act(async () =>
      input.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true })),
    );
    assert.equal(input.value, 'Apple');
    assert.equal(input.getAttribute('aria-expanded'), 'false');
    assert.deepEqual(selected, [['apple', 'Apple']]);
    assert.equal(harness.mount.querySelector('input[type="hidden"]').value, 'apple');

    await harness.render(
      React.createElement(Autocomplete, {
        key: 'filtered',
        options,
        defaultInputValue: 'Ban',
        onValueChange: (value, selectedOption) => selected.push([value, selectedOption?.label]),
      }),
    );
    const filteredInput = harness.mount.querySelector('[role="combobox"]');
    await act(async () => filteredInput.focus());
    const option = document.getElementById(`${filteredInput.id}-listbox-option-0`);
    assert.equal(option.textContent, 'Banana');
    await act(async () => {
      option.dispatchEvent(new window.MouseEvent('mousedown', { bubbles: true }));
      option.click();
    });
    assert.deepEqual(selected.at(-1), ['banana', 'Banana']);
  } finally {
    await harness.dispose();
  }
});

test('Autocomplete supports controlled multiple values and free-solo creation', async () => {
  const harness = await createHarness();
  const changes = [];
  const created = [];
  const options = [
    { label: 'React', value: 'react', description: 'UI library' },
    { label: 'Vue', value: 'vue', description: 'UI framework' },
  ];

  try {
    await harness.render(
      React.createElement(Autocomplete, {
        options,
        name: 'framework',
        multiple: true,
        defaultSelectedValues: ['react'],
        onSelectedValuesChange: (values, option) => changes.push([values, option?.value ?? null]),
      }),
    );
    const input = harness.mount.querySelector('[role="combobox"]');
    await act(async () => input.focus());
    const vueOption = document.getElementById(`${input.id}-listbox-option-0`);
    assert.match(vueOption.textContent, /Vue/);
    await act(async () => vueOption.click());
    assert.deepEqual(changes, [[['react', 'vue'], 'vue']]);
    assert.deepEqual(
      [...harness.mount.querySelectorAll('input[type="hidden"]')].map((item) => item.value),
      ['react', 'vue'],
    );

    const removeReact = harness.mount.querySelector('button[aria-label="Remove React"]');
    await act(async () => removeReact.click());
    assert.deepEqual(changes.at(-1), [['vue'], null]);

    await harness.render(
      React.createElement(Autocomplete, {
        key: 'free-solo',
        options,
        freeSolo: true,
        defaultInputValue: 'Solid',
        onValueChange: (value, option) => created.push([value, option?.label]),
      }),
    );
    const freeSoloInput = harness.mount.querySelector('[role="combobox"]');
    await act(async () => freeSoloInput.focus());
    await act(async () =>
      freeSoloInput.dispatchEvent(
        new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true }),
      ),
    );
    assert.deepEqual(created, [['Solid', 'Solid']]);
    assert.equal(freeSoloInput.value, 'Solid');
    assert.equal(freeSoloInput.getAttribute('aria-expanded'), 'false');
  } finally {
    await harness.dispose();
  }
});

test('Autocomplete keeps the typed query when clearing a controlled selection', async () => {
  const harness = await createHarness();

  function ControlledAutocomplete() {
    const [value, setValue] = React.useState('apple');
    return React.createElement(Autocomplete, {
      options: [{ label: 'Apple', value: 'apple' }],
      value,
      onValueChange: setValue,
    });
  }

  try {
    await harness.render(React.createElement(ControlledAutocomplete));
    const input = harness.mount.querySelector('[role="combobox"]');
    assert.equal(input.value, 'Apple');
    await act(async () => {
      Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(
        input,
        'App',
      );
      input.dispatchEvent(new window.Event('input', { bubbles: true }));
    });
    assert.equal(input.value, 'App');
  } finally {
    await harness.dispose();
  }
});

test('Tabs supports numeric values and manual keyboard activation', async () => {
  const harness = await createHarness();
  const changes = [];
  const tabs = [
    { value: 10, label: 'Overview', content: 'Overview panel' },
    { value: 20, label: 'Details', content: 'Details panel' },
    { value: 30, label: 'Disabled', content: 'Disabled panel', disabled: true },
  ];

  try {
    await harness.render(
      React.createElement(Tabs, {
        tabs,
        value: 20,
        activationMode: 'manual',
        onChange: (_event, value) => changes.push(value),
      }),
    );
    let tabButtons = [...harness.mount.querySelectorAll('[role="tab"]')];
    assert.equal(tabButtons[1].getAttribute('aria-selected'), 'true');
    assert.equal(tabButtons[0].getAttribute('tabindex'), '-1');

    await act(async () => {
      tabButtons[1].focus();
      tabButtons[1].dispatchEvent(
        new window.KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }),
      );
    });
    assert.equal(document.activeElement, tabButtons[0]);
    assert.deepEqual(changes, [], 'manual activation only moves focus');

    await harness.render(
      React.createElement(Tabs, {
        tabs,
        defaultValue: 10,
        onChange: (_event, value) => changes.push(value),
      }),
    );
    tabButtons = [...harness.mount.querySelectorAll('[role="tab"]')];
    await act(async () => tabButtons[0].click());
    assert.deepEqual(changes, [10]);
    assert.equal(
      harness.mount.querySelector('[role="tabpanel"]:not([hidden])').textContent,
      'Overview panel',
    );
  } finally {
    await harness.dispose();
  }
});

test('Select supports custom single and multiple combobox interactions', async () => {
  const harness = await createHarness();
  const singleChanges = [];
  const multipleChanges = [];
  const options = [
    { value: 'engineering', label: 'Engineering', detail: 'Product and platform teams' },
    { value: 'design', label: 'Design', detail: 'Research and user experience' },
    { value: 'research', label: 'Research', disabled: true },
  ];

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Select, {
          label: 'Department',
          name: 'department',
          options,
          defaultValue: 'engineering',
          helperText: 'Choose your department.',
          error: true,
          onValueChange: (value, option) => singleChanges.push([value, option?.label]),
        }),
        React.createElement(Select, {
          label: 'Project teams',
          name: 'teams',
          options,
          multiple: true,
          defaultSelectedValues: ['design'],
          onSelectedValuesChange: (values, option) =>
            multipleChanges.push([values, option?.value ?? null]),
        }),
      ),
    );

    const [single, multiple] = harness.mount.querySelectorAll('[role="combobox"]');
    assert.equal(single.getAttribute('aria-expanded'), 'false');
    assert.equal(single.textContent, 'Engineering');
    assert.equal(single.getAttribute('aria-invalid'), 'true');
    assert.ok(document.getElementById(single.getAttribute('aria-describedby')));
    assert.equal(harness.mount.querySelector('input[name="department"]').value, 'engineering');

    await act(async () => {
      single.focus();
      single.dispatchEvent(
        new window.KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }),
      );
    });
    assert.equal(single.getAttribute('aria-expanded'), 'true');
    assert.equal(single.getAttribute('aria-activedescendant'), `${single.id}-listbox-option-0`);
    const singleOptions = document.getElementById(`${single.id}-listbox`);
    assert.equal(singleOptions.getAttribute('role'), 'listbox');
    const design = document.getElementById(`${single.id}-listbox-option-1`);
    await act(async () => design.click());
    assert.equal(single.textContent, 'Design');
    assert.equal(single.getAttribute('aria-expanded'), 'false');
    assert.deepEqual(singleChanges, [['design', 'Design']]);
    assert.equal(harness.mount.querySelector('input[name="department"]').value, 'design');

    await act(async () => {
      multiple.click();
    });
    const multiListbox = document.getElementById(`${multiple.id}-listbox`);
    const engineering = document.getElementById(`${multiple.id}-listbox-option-0`);
    await act(async () => engineering.click());
    assert.equal(multiple.getAttribute('aria-expanded'), 'true');
    assert.deepEqual(multipleChanges.at(-1), [['design', 'engineering'], 'engineering']);
    assert.deepEqual(
      [...harness.mount.querySelectorAll('input[name="teams"]')].map((input) => input.value),
      ['design', 'engineering'],
    );
    assert.equal(
      multiListbox.querySelector('[aria-disabled="true"]').getAttribute('aria-selected'),
      'false',
    );
    await act(async () => harness.mount.querySelector('[aria-label="Remove Design"]').click());
    assert.deepEqual(multipleChanges.at(-1), [['engineering'], null]);
    assert.equal(multiple.getAttribute('aria-expanded'), 'true');

    await act(async () => {
      multiple.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    assert.equal(multiple.getAttribute('aria-expanded'), 'false');
  } finally {
    await harness.dispose();
  }
});

test('Checkbox, RadioGroup, and TextField expose native form and validation behavior', async () => {
  const harness = await createHarness();
  const radioChanges = [];
  const adornmentClicks = [];

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Checkbox, { 'aria-label': 'Select all', indeterminate: true }),
        React.createElement(RadioGroup, {
          name: 'plan',
          legend: 'Choose a plan',
          defaultValue: 'basic',
          options: [
            { value: 'basic', label: 'Basic' },
            { value: 'pro', label: 'Pro' },
          ],
          onChange: (event) => radioChanges.push(event.currentTarget.value),
        }),
        React.createElement(TextField, {
          label: 'Email',
          type: 'email',
          errorText: 'Enter a valid email',
          required: true,
        }),
        React.createElement(TextField, {
          label: 'Search',
          startAdornment: React.createElement('span', { 'aria-hidden': true }, 'Search'),
          endAdornment: React.createElement(
            'button',
            {
              type: 'button',
              'aria-label': 'Clear search',
              onClick: () => adornmentClicks.push(true),
            },
            'Clear',
          ),
        }),
      ),
    );

    const checkbox = harness.mount.querySelector('input[type="checkbox"]');
    assert.equal(checkbox.indeterminate, true);
    assert.equal(checkbox.getAttribute('aria-checked'), 'mixed');
    assert.equal(checkbox.labels.length, 0);

    const radios = [...harness.mount.querySelectorAll('input[type="radio"]')];
    assert.equal(radios[0].checked, true);
    await act(async () => radios[1].click());
    assert.deepEqual(radioChanges, ['pro']);
    assert.equal(radios[1].checked, true);

    const input = harness.mount.querySelector('input[type="email"]');
    const label = harness.mount.querySelector('.rgi-text-field-label');
    assert.equal(label.htmlFor, input.id);
    assert.equal(input.getAttribute('aria-invalid'), 'true');
    assert.ok(document.getElementById(input.getAttribute('aria-describedby')));
    assert.equal(input.required, true);

    const searchInput = harness.mount.querySelector('.rgi-text-field-shell input');
    assert.ok(searchInput.classList.contains('rgi-text-field-control-leading'));
    assert.ok(searchInput.classList.contains('rgi-text-field-control-trailing'));
    assert.equal(harness.mount.querySelector('.rgi-text-field-adornment-start').textContent, 'Search');
    await act(async () => harness.mount.querySelector('[aria-label="Clear search"]').click());
    assert.deepEqual(adornmentClicks, [true]);
  } finally {
    await harness.dispose();
  }
});

test('Switch, Slider, and NumberField preserve native constraints and callbacks', async () => {
  const harness = await createHarness();
  const numberChanges = [];
  const sliderChanges = [];

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Switch, { label: 'Email alerts', defaultChecked: true }),
        React.createElement(Slider, {
          'aria-label': 'Volume',
          min: 0,
          max: 10,
          defaultValue: 5,
          onChange: (event) => sliderChanges.push(event.currentTarget.value),
        }),
        React.createElement(NumberField, {
          label: 'Quantity',
          min: 0,
          max: 2,
          step: 0.25,
          defaultValue: 1.5,
          onValueChange: (value) => numberChanges.push(value),
        }),
      ),
    );

    const switchInput = harness.mount.querySelector('[role="switch"]');
    assert.equal(switchInput.checked, true);
    assert.equal(switchInput.getAttribute('aria-checked'), 'true');
    assert.equal(switchInput.labels[0].textContent, 'Email alerts');
    await act(async () => switchInput.click());
    assert.equal(switchInput.checked, false);
    assert.equal(switchInput.getAttribute('aria-checked'), 'false');

    const slider = harness.mount.querySelector('input[type="range"]');
    assert.equal(slider.min, '0');
    assert.equal(slider.max, '10');
    assert.equal(slider.value, '5');
    assert.equal(slider.type, 'range');
    await act(async () => {
      Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(
        slider,
        '7',
      );
      slider.dispatchEvent(new window.Event('input', { bubbles: true }));
    });
    assert.deepEqual(sliderChanges, ['7']);

    const numberInput = harness.mount.querySelector('input[type="number"]');
    const increment = harness.mount.querySelector('[aria-label="Increase value"]');
    const decrement = harness.mount.querySelector('[aria-label="Decrease value"]');
    assert.equal(numberInput.value, '1.5');
    assert.ok(increment.classList.contains('rgi-number-field-button'));
    assert.ok(increment.classList.contains('rgi-number-field-increment'));
    assert.ok(decrement.classList.contains('rgi-number-field-button'));
    assert.ok(decrement.classList.contains('rgi-number-field-decrement'));
    await act(async () => increment.click());
    assert.equal(numberInput.value, '1.75');
    await act(async () => increment.click());
    assert.equal(numberInput.value, '2');
    assert.equal(increment.disabled, true, 'does not increment beyond max');
    assert.deepEqual(numberChanges, ['1.75', '2']);
  } finally {
    await harness.dispose();
  }
});

test('Accordion supports controlled state, disabled state, and accessible panel relationships', async () => {
  const harness = await createHarness();
  const changes = [];

  try {
    await harness.render(
      React.createElement(
        Accordion,
        null,
        React.createElement(AccordionToolbar, null, 'Settings'),
        React.createElement(
          AccordionItem,
          {
            title: 'Advanced settings',
            expanded: false,
            onChange: (expanded) => changes.push(expanded),
          },
          'Settings content',
        ),
        React.createElement(AccordionHelper, null, 'Choose a section'),
      ),
    );
    const trigger = harness.mount.querySelector('.tm-accordion-trigger');
    const panel = harness.mount.querySelector('.tm-accordion-panel');
    assert.equal(harness.mount.querySelector('.tm-accordion-toolbar').textContent, 'Settings');
    assert.equal(
      harness.mount.querySelector('.tm-accordion-helper').textContent,
      'Choose a section',
    );
    assert.equal(trigger.getAttribute('aria-expanded'), 'false');
    assert.equal(trigger.getAttribute('aria-controls'), panel.id);
    assert.equal(panel.tagName, 'SECTION');
    assert.equal(panel.getAttribute('aria-labelledby'), trigger.id);
    assert.equal(panel.hidden, true);
    await act(async () => trigger.click());
    assert.deepEqual(changes, [true]);
    assert.equal(
      trigger.getAttribute('aria-expanded'),
      'false',
      'controlled state changes only when the owner updates it',
    );

    await harness.render(
      React.createElement(
        Accordion,
        null,
        React.createElement(
          AccordionItem,
          {
            key: 'disabled',
            title: 'Disabled section',
            defaultExpanded: true,
            disabled: true,
          },
          'Still visible',
        ),
      ),
    );
    const disabledTrigger = harness.mount.querySelector('.tm-accordion-trigger');
    assert.equal(disabledTrigger.disabled, true);
    assert.equal(harness.mount.querySelector('.tm-accordion-panel').hidden, false);
  } finally {
    await harness.dispose();
  }
});

test('Alert and Snackbar expose severity semantics and explicit/timeout dismissal', async () => {
  const harness = await createHarness();
  const alertClose = [];
  const snackbarClose = [];

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(
          Alert,
          {
            severity: 'error',
            title: 'Request failed',
            icon: null,
            onClose: () => alertClose.push('closed'),
          },
          'Try again',
        ),
        React.createElement(
          Snackbar,
          {
            open: true,
            severity: 'error',
            autoHideDuration: 20,
            onClose: (reason) => snackbarClose.push(reason),
          },
          'Connection lost',
        ),
      ),
    );
    const alert = harness.mount.querySelector('.rgi-alert');
    const snackbar = harness.mount.querySelector('.rgi-snackbar');
    assert.equal(alert.getAttribute('role'), 'alert');
    assert.equal(alert.querySelector('.rgi-alert-icon'), null);
    assert.equal(snackbar.getAttribute('role'), 'alert');
    assert.equal(snackbar.getAttribute('aria-live'), 'assertive');
    await act(async () => harness.mount.querySelector('.rgi-alert-close').click());
    assert.deepEqual(alertClose, ['closed']);
    await act(async () => new Promise((resolve) => setTimeout(resolve, 40)));
    assert.deepEqual(snackbarClose, ['timeout']);

    await harness.render(
      React.createElement(
        Snackbar,
        {
          open: true,
          autoHideDuration: null,
          onClose: (reason) => snackbarClose.push(reason),
        },
        'Persistent',
      ),
    );
    await act(async () => harness.mount.querySelector('.rgi-snackbar-close').click());
    assert.deepEqual(snackbarClose, ['timeout', 'closeButtonClick']);
  } finally {
    await harness.dispose();
  }
});

test('Rating, Pagination, ToggleButton, and Stepper honor keyboard, boundary, and state semantics', async () => {
  const harness = await createHarness();
  const ratings = [];
  const precisionRatings = [];
  const pages = [];
  const stepClicks = [];

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Rating, {
          max: 5,
          defaultValue: 2,
          name: 'score',
          onChange: (value) => ratings.push(value),
        }),
        React.createElement(Rating, {
          precision: 0.5,
          defaultValue: 3.5,
          onChange: (value) => precisionRatings.push(value),
        }),
        React.createElement(Pagination, {
          count: 5,
          page: 2,
          siblingCount: 1,
          onChange: (_event, page) => pages.push(page),
        }),
        React.createElement(ToggleButton, { selected: true }, 'Bold'),
        React.createElement(
          Stepper,
          {
            activeStep: 1,
            onStepClick: (_event, index) => stepClicks.push(index),
          },
          React.createElement(Step, { label: 'Account' }),
          React.createElement(Step, { label: 'Review' }),
          React.createElement(Step, { label: 'Confirm' }),
        ),
      ),
    );

    const ratingButtons = [...harness.mount.querySelectorAll('[role="radio"]')];
    assert.equal(ratingButtons[1].getAttribute('aria-checked'), 'true');
    assert.equal(harness.mount.querySelector('input[name="score"]').value, '2');
    await act(async () =>
      ratingButtons[1].dispatchEvent(
        new window.KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }),
      ),
    );
    assert.deepEqual(ratings, [3]);
    assert.equal(document.activeElement, ratingButtons[2]);

    const precisionSlider = harness.mount.querySelector('[role="slider"]');
    assert.equal(precisionSlider.getAttribute('aria-valuenow'), '3.5');
    await act(async () =>
      precisionSlider.dispatchEvent(
        new window.KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }),
      ),
    );
    assert.equal(precisionSlider.getAttribute('aria-valuenow'), '4');
    assert.deepEqual(precisionRatings, [4]);

    const pagination = harness.mount.querySelector('nav[aria-label="Pagination"]');
    assert.equal(pagination.querySelector('[aria-current="page"]').textContent, '2');
    await act(async () => pagination.querySelector('[aria-label="Go to next page"]').click());
    assert.deepEqual(pages, [3]);

    const toggle = harness.mount.querySelector('.rgi-toggle-button');
    assert.equal(toggle.getAttribute('aria-pressed'), 'true');

    const steps = [...harness.mount.querySelectorAll('.rgi-step')];
    assert.equal(steps[0].getAttribute('aria-current'), null);
    assert.equal(steps[1].getAttribute('aria-current'), 'step');
    assert.equal(steps[0].querySelector('.rgi-step-indicator').textContent, '✓');
    assert.equal(steps[2].querySelector('button').disabled, true);
    await act(async () => steps[1].querySelector('button').click());
    assert.deepEqual(stepClicks, [1]);
  } finally {
    await harness.dispose();
  }
});

test('SpeedDial and TransferList update state and announce user actions', async () => {
  const harness = await createHarness();
  const actions = [];
  const changes = [];
  const items = [
    { id: 'alpha', label: 'Alpha' },
    { id: 'beta', label: 'Beta' },
  ];

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(SpeedDial, {
          actions: [{ name: 'Create', onClick: () => actions.push('Create') }],
          onActionClick: (_event, action) => actions.push(action.name),
        }),
        React.createElement(TransferList, {
          items,
          showAllActions: true,
          showSelectAll: true,
          onChange: (value, moved) => changes.push([value, moved.map(({ id }) => id)]),
        }),
      ),
    );

    const speedDial = harness.mount.querySelector('.rgi-speed-dial');
    const trigger = speedDial.querySelector('.rgi-speed-dial-trigger');
    assert.equal(trigger.getAttribute('aria-expanded'), 'false');
    await act(async () => trigger.click());
    assert.equal(trigger.getAttribute('aria-expanded'), 'true');
    await act(async () => speedDial.querySelector('[aria-label="Create"]').click());
    assert.deepEqual(actions, ['Create', 'Create']);
    assert.equal(speedDial.querySelector('.rgi-speed-dial-actions').hidden, true);

    const transfer = harness.mount.querySelector('.rgi-transfer-list');
    const sourceCheckbox = transfer.querySelector('.rgi-transfer-item input[type="checkbox"]');
    const selectAllSource = transfer.querySelector('[aria-label="Select all available items"]');
    assert.equal(sourceCheckbox.getAttribute('aria-label'), 'Alpha Available');
    assert.equal(transfer.querySelector('.rgi-transfer-item .sr-only'), null);
    await act(async () => sourceCheckbox.click());
    assert.equal(selectAllSource.indeterminate, true);
    assert.equal(selectAllSource.getAttribute('aria-checked'), 'mixed');
    const moveButton = transfer.querySelector('[aria-label="Move selected to Selected"]');
    assert.equal(moveButton.disabled, false);
    await act(async () => moveButton.click());
    assert.deepEqual(changes, [[['alpha'], ['alpha']]]);
    assert.equal(
      transfer.querySelector('[aria-label="Selected"] .rgi-transfer-item-label').textContent,
      'Alpha',
    );
    assert.match(transfer.querySelector('[role="status"]').textContent, /1 item moved to Selected/);
    assert.equal(selectAllSource.checked, false);
    await act(async () => selectAllSource.click());
    assert.equal(selectAllSource.checked, true);
    await act(async () =>
      transfer.querySelector('[aria-label="Move selected to Selected"]').click(),
    );
    assert.deepEqual(changes[1], [['alpha', 'beta'], ['beta']]);
    await act(async () => transfer.querySelector('[aria-label="Move all to Available"]').click());
    assert.deepEqual(changes[2], [[], ['alpha', 'beta']]);
    assert.equal(transfer.querySelector('[aria-label="Move all to Available"]').disabled, true);
  } finally {
    await harness.dispose();
  }
});

test('BottomNavigation, Badge, Progress, and Card expose expected semantic output', async () => {
  const harness = await createHarness();
  const selected = [];

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(
          BottomNavigation,
          {
            value: 'home',
            onChange: (_event, value) => selected.push(value),
          },
          React.createElement(BottomNavigationItem, { value: 'home', label: 'Home' }),
          React.createElement(BottomNavigationItem, { value: 'settings', label: 'Settings' }),
        ),
        React.createElement(
          Badge,
          { badgeContent: 120, max: 99 },
          React.createElement('span', null, 'Inbox'),
        ),
        React.createElement(Progress, { value: 25, max: 50, label: 'Upload' }),
        React.createElement(Card, { as: 'section', elevation: 2 }, 'Card content'),
      ),
    );

    const navItems = [...harness.mount.querySelectorAll('.rgi-bottom-navigation-item')];
    assert.equal(navItems[0].getAttribute('aria-current'), 'page');
    await act(async () => navItems[1].click());
    assert.deepEqual(selected, ['settings']);
    assert.equal(harness.mount.querySelector('.rgi-badge').textContent, '99+');
    const progress = harness.mount.querySelector('[role="progressbar"]');
    assert.equal(progress.getAttribute('aria-valuenow'), '25');
    assert.equal(progress.getAttribute('aria-valuemax'), '50');
    assert.equal(harness.mount.querySelector('.rgi-card').tagName, 'SECTION');
  } finally {
    await harness.dispose();
  }
});

test('Badge supports zero counts, labeled dots, and hidden state', async () => {
  const harness = await createHarness();

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Badge, { badgeContent: 0 }, React.createElement('span', null, 'Inbox')),
        React.createElement(
          Badge,
          { badgeContent: 0, badgeLabel: 'No unread messages', showZero: true, color: 'default' },
          React.createElement('span', null, 'Messages'),
        ),
        React.createElement(
          Badge,
          { variant: 'dot', badgeLabel: 'Morgan is online', color: 'success' },
          React.createElement('span', null, 'Morgan'),
        ),
        React.createElement(
          Badge,
          { badgeContent: 3, badgeLabel: '3 tasks', invisible: true },
          React.createElement('span', null, 'Tasks'),
        ),
      ),
    );

    const badges = [...harness.mount.querySelectorAll('.rgi-badge')];
    assert.equal(badges.length, 2);
    assert.equal(badges[0].textContent, '0');
    assert.equal(badges[0].getAttribute('aria-label'), 'No unread messages');
    assert.equal(badges[1].textContent, '');
    assert.equal(badges[1].getAttribute('aria-label'), 'Morgan is online');
    assert.equal(harness.mount.querySelectorAll('.rgi-badge-root')[3].children.length, 1);
  } finally {
    await harness.dispose();
  }
});

test('click-away, menu, popover, and snackbar release listeners and timers on close', async () => {
  const documentListeners = new Map();
  const windowListeners = new Map();
  const originalDocumentAdd = document.addEventListener;
  const originalDocumentRemove = document.removeEventListener;
  const originalWindowAdd = window.addEventListener;
  const originalWindowRemove = window.removeEventListener;
  const track = (listeners, type, listener, add) => {
    if (!listeners.has(type)) listeners.set(type, new Set());
    if (add) listeners.get(type).add(listener);
    else listeners.get(type).delete(listener);
  };
  document.addEventListener = function addTracked(type, listener, ...args) {
    track(documentListeners, type, listener, true);
    return originalDocumentAdd.call(this, type, listener, ...args);
  };
  document.removeEventListener = function removeTracked(type, listener, ...args) {
    track(documentListeners, type, listener, false);
    return originalDocumentRemove.call(this, type, listener, ...args);
  };
  window.addEventListener = function addTracked(type, listener, ...args) {
    track(windowListeners, type, listener, true);
    return originalWindowAdd.call(this, type, listener, ...args);
  };
  window.removeEventListener = function removeTracked(type, listener, ...args) {
    track(windowListeners, type, listener, false);
    return originalWindowRemove.call(this, type, listener, ...args);
  };

  const anchor = document.createElement('button');
  document.body.append(anchor);
  const harness = await createHarness();
  const closeReasons = [];
  let snackbarCloseCount = 0;
  const baseline = (listeners, type) => listeners.get(type)?.size ?? 0;

  try {
    const clickAwayBaseline = baseline(documentListeners, 'click');
    await harness.render(React.createElement(ClickAwayListener, { onClickAway() {} }, 'Inside'));
    assert.equal(baseline(documentListeners, 'click'), clickAwayBaseline + 1);
    await harness.render(null);
    assert.equal(baseline(documentListeners, 'click'), clickAwayBaseline);

    const menuBaseline = baseline(windowListeners, 'keydown');
    await harness.render(
      React.createElement(
        Menu,
        {
          anchorEl: anchor,
          open: true,
          onClose: (event) => closeReasons.push(event.type),
        },
        React.createElement(MenuItem, null, 'Item'),
      ),
    );
    assert.equal(baseline(windowListeners, 'keydown'), menuBaseline + 1);
    await harness.render(null);
    assert.equal(baseline(windowListeners, 'keydown'), menuBaseline);

    const popoverPointerBaseline = baseline(documentListeners, 'pointerdown');
    const popoverKeyBaseline = baseline(documentListeners, 'keydown');
    await harness.render(
      React.createElement(
        Popover,
        {
          anchorEl: anchor,
          open: true,
          onClose: (_event, reason) => closeReasons.push(reason),
        },
        'Content',
      ),
    );
    assert.equal(baseline(documentListeners, 'pointerdown'), popoverPointerBaseline + 1);
    assert.equal(baseline(documentListeners, 'keydown'), popoverKeyBaseline + 1);
    await harness.render(null);
    assert.equal(baseline(documentListeners, 'pointerdown'), popoverPointerBaseline);
    assert.equal(baseline(documentListeners, 'keydown'), popoverKeyBaseline);

    await harness.render(
      React.createElement(
        Snackbar,
        {
          open: true,
          autoHideDuration: 200,
          onClose: () => (snackbarCloseCount += 1),
        },
        'Temporary',
      ),
    );
    await harness.render(null);
    await new Promise((resolve) => setTimeout(resolve, 220));
    assert.equal(snackbarCloseCount, 0, 'does not invoke a stale timeout callback after unmount');
  } finally {
    await harness.dispose();
    anchor.remove();
    document.addEventListener = originalDocumentAdd;
    document.removeEventListener = originalDocumentRemove;
    window.addEventListener = originalWindowAdd;
    window.removeEventListener = originalWindowRemove;
  }
});

test('buttons, chips, navigation, and presentational primitives preserve semantic DOM contracts', async () => {
  const harness = await createHarness();
  const deleted = [];

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Button, { type: 'button', variant: 'outlined', size: 'small' }, 'Save'),
        React.createElement(
          ButtonGroup,
          { orientation: 'vertical', 'aria-label': 'Formatting' },
          React.createElement(ToggleButton, { selected: true }, 'Bold'),
        ),
        React.createElement(Chip, { onClick() {}, selected: true }, 'React'),
        React.createElement(Chip, { onDelete: () => deleted.push('React') }, 'React'),
        React.createElement(
          Breadcrumbs,
          { maxItems: 2 },
          React.createElement(Link, { href: '/home' }, 'Home'),
          React.createElement(Link, { href: '/projects' }, 'Projects'),
          React.createElement('span', null, 'Current'),
        ),
        React.createElement(Typography, { variant: 'h2' }, 'Heading'),
        React.createElement(Divider, { orientation: 'vertical', flexItem: true }),
        React.createElement(Divider, { inset: true }),
        React.createElement(Skeleton, { width: 80, height: 12 }),
        React.createElement(
          List,
          { ordered: true, dense: true },
          React.createElement(
            ListItem,
            { divider: true },
            React.createElement(ListItemText, { primary: 'Primary', secondary: 'Secondary' }),
          ),
        ),
        React.createElement(Avatar, { alt: 'Jordan Davis', color: 'indigo', size: 'xs' }),
        React.createElement(
          AvatarGroup,
          { 'aria-label': 'Project team', max: 2, total: 5 },
          React.createElement(Avatar, { key: 'jordan', alt: 'Jordan Davis' }, 'JD'),
          React.createElement(Avatar, { key: 'morgan', alt: 'Morgan Kim' }, 'MK'),
          React.createElement(Avatar, { key: 'alex', alt: 'Alex Lee' }, 'AL'),
        ),
        React.createElement(Paper, { square: true }, 'Paper'),
      ),
    );

    const button = harness.mount.querySelector('.rgi-button');
    assert.equal(button.type, 'button');
    assert.ok(button.className.includes('rgi-button-outlined'));
    assert.ok(button.className.includes('rgi-button-small'));
    assert.equal(harness.mount.querySelector('.rgi-button-group').getAttribute('role'), 'group');

    const chips = harness.mount.querySelectorAll('.rgi-chip');
    assert.equal(chips[0].tagName, 'BUTTON');
    assert.equal(chips[0].getAttribute('aria-pressed'), 'true');
    await act(async () => chips[1].querySelector('.rgi-chip-delete').click());
    assert.deepEqual(deleted, ['React']);

    const crumbs = harness.mount.querySelectorAll('.rgi-breadcrumbs-item');
    assert.equal(crumbs.length, 3);
    assert.equal(crumbs[0].textContent.includes('Home'), true);
    assert.equal(
      harness.mount.querySelector('.rgi-breadcrumbs-ellipsis .sr-only').textContent,
      'More breadcrumb items',
    );
    assert.equal(
      harness.mount
        .querySelector('.rgi-breadcrumbs-item:last-child > span')
        .getAttribute('aria-current'),
      'page',
    );

    assert.equal(harness.mount.querySelector('h2').textContent, 'Heading');
    assert.equal(harness.mount.querySelector('[aria-orientation="vertical"]').tagName, 'HR');
    assert.ok(
      harness.mount
        .querySelector('[aria-orientation="vertical"]')
        .className.includes('rgi-divider-flex-item'),
    );
    assert.ok(
      harness.mount.querySelector('.rgi-divider-inset').className.includes('rgi-divider-horizontal'),
    );
    assert.equal(harness.mount.querySelector('.rgi-skeleton').getAttribute('aria-hidden'), 'true');
    assert.equal(harness.mount.querySelector('ol.rgi-list').tagName, 'OL');
    assert.equal(harness.mount.querySelector('.rgi-list-primary').textContent, 'Primary');
    const avatar = harness.mount.querySelector('[aria-label="Jordan Davis"]');
    assert.equal(avatar.textContent, 'JD');
    assert.ok(avatar.className.includes('rgi-avatar-indigo'));
    assert.ok(avatar.className.includes('rgi-avatar-xs'));
    const avatarGroup = harness.mount.querySelector('[aria-label="Project team"]');
    assert.equal(avatarGroup.getAttribute('role'), 'group');
    assert.equal(avatarGroup.querySelectorAll(':scope > .rgi-avatar').length, 3);
    assert.equal(avatarGroup.querySelector('.rgi-avatar-overflow').textContent, '+3');
    assert.equal(
      avatarGroup.querySelector('.rgi-avatar-overflow').getAttribute('aria-label'),
      '3 additional members',
    );
    assert.ok(harness.mount.querySelector('.rgi-paper').className.includes('rgi-paper-square'));
  } finally {
    await harness.dispose();
  }
});
