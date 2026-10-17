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
const { default: DatePicker } = await import('../dist/date-picker.js');

test.after(() => dom.window.close());

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

test('DatePicker opens the selected month, selects a date, and updates its displayed value', async () => {
  const harness = await createHarness();
  const changes = [];

  try {
    await harness.render(
      React.createElement(DatePicker, {
        'aria-label': 'Due date',
        defaultValue: '2026-03-15',
        onChange: (value) => changes.push(value),
      }),
    );
    const trigger = harness.mount.querySelector('.tm-date-picker-trigger');
    assert.match(trigger.textContent, /15 March 2026/);

    await act(async () => trigger.click());
    const calendar = document.querySelector('[role="dialog"][aria-label="Choose date"]');
    assert.ok(calendar);
    assert.equal(calendar.querySelector('[aria-label="Select month"]'), null);
    assert.equal(calendar.querySelector('[aria-label="Select year"]'), null);
    assert.equal(calendar.querySelector('[aria-pressed="true"]')?.dataset.date, '2026-03-15');

    await act(async () => calendar.querySelector('[data-date="2026-03-16"]').click());
    assert.deepEqual(changes, ['2026-03-16']);
    assert.match(trigger.textContent, /16 March 2026/);
    assert.equal(document.querySelector('[role="dialog"]'), null);
  } finally {
    await harness.dispose();
  }
});

test('DatePicker disables dates outside minDate and maxDate and submits its ISO value', async () => {
  const harness = await createHarness();
  const changes = [];

  try {
    await harness.render(
      React.createElement(DatePicker, {
        'aria-label': 'Due date',
        name: 'dueDate',
        value: '2026-03-15',
        minDate: '2026-03-15',
        maxDate: '2026-03-16',
        onChange: (value) => changes.push(value),
      }),
    );
    assert.equal(harness.mount.querySelector('input[name="dueDate"]').value, '2026-03-15');
    const trigger = harness.mount.querySelector('.tm-date-picker-trigger');
    await act(async () => trigger.click());
    const calendar = document.querySelector('[role="dialog"]');
    assert.equal(calendar.querySelector('[data-date="2026-03-14"]').disabled, true);
    assert.equal(calendar.querySelector('[data-date="2026-03-17"]').disabled, true);
    assert.equal(calendar.querySelector('[data-date="2026-03-16"]').disabled, false);
    assert.equal(calendar.querySelector('[aria-label="Previous month"]').disabled, true);
    assert.equal(calendar.querySelector('[aria-label="Next month"]').disabled, true);

    await act(async () => calendar.querySelector('[data-date="2026-03-16"]').click());
    assert.deepEqual(changes, ['2026-03-16']);
    assert.equal(
      trigger.textContent.includes('15 March 2026'),
      true,
      'controlled value is unchanged',
    );
  } finally {
    await harness.dispose();
  }
});

test('DatePicker optionally shows month and year selectors and respects date bounds', async () => {
  const harness = await createHarness();

  try {
    await harness.render(
      React.createElement(DatePicker, {
        'aria-label': 'Due date',
        defaultValue: '2026-03-15',
        minDate: '2026-03-15',
        maxDate: '2027-02-05',
        showMonthYearSelect: true,
      }),
    );
    await act(async () => harness.mount.querySelector('.tm-date-picker-trigger').click());
    const calendar = document.querySelector('[role="dialog"]');
    const monthSelect = calendar.querySelector('.tm-date-picker-month-select [role="combobox"]');
    const yearSelect = calendar.querySelector('.tm-date-picker-year-select [role="combobox"]');

    assert.ok(monthSelect);
    assert.ok(yearSelect);
    assert.equal(monthSelect.getAttribute('aria-label'), 'Select month');
    assert.equal(yearSelect.getAttribute('aria-label'), 'Select year');
    assert.equal(calendar.querySelector('[role="status"]'), null);
    assert.equal(calendar.querySelector('select'), null);

    await act(async () => {
      monthSelect.click();
    });
    assert.ok(document.querySelector('.tm-date-picker-select-options'));
    const monthOptions = document.querySelectorAll(
      '.tm-date-picker-select-options [role="option"]',
    );
    assert.equal(
      Array.from(monthOptions).find((option) => option.textContent.includes('February'))
        .getAttribute('aria-disabled'),
      'true',
    );
    await act(async () => {
      const aprilOption = Array.from(monthOptions).find((option) =>
        option.textContent.includes('April'),
      );
      aprilOption.dispatchEvent(new window.Event('pointerdown', { bubbles: true }));
      aprilOption.click();
    });
    assert.ok(document.querySelector('[role="dialog"]'));
    assert.equal(
      calendar.querySelector('.tm-date-picker-grid').getAttribute('aria-label'),
      'April 2026',
    );

    await act(async () => {
      yearSelect.click();
    });
    const yearOptions = document.querySelectorAll(
      '.tm-date-picker-select-options [role="option"]',
    );
    assert.equal(
      Array.from(yearOptions).some((option) => option.textContent.includes('2025')),
      false,
    );
    await act(async () => {
      Array.from(yearOptions).find((option) => option.textContent.includes('2027')).click();
    });
    assert.equal(
      calendar.querySelector('.tm-date-picker-grid').getAttribute('aria-label'),
      'February 2027',
    );
    assert.match(monthSelect.textContent, /February/);
  } finally {
    await harness.dispose();
  }
});

test('DatePicker moves focus by keyboard and changes month with PageDown', async () => {
  const harness = await createHarness();

  try {
    await harness.render(
      React.createElement(DatePicker, {
        'aria-label': 'Due date',
        defaultValue: '2026-03-15',
        dateFormat: 'dd/MM/yyyy',
      }),
    );
    const trigger = harness.mount.querySelector('.tm-date-picker-trigger');
    assert.match(trigger.textContent, /15\/03\/2026/);
    await act(async () => trigger.click());
    const selectedDay = document.querySelector('[data-date="2026-03-15"]');
    assert.equal(document.activeElement, selectedDay);

    await act(async () => {
      selectedDay.dispatchEvent(
        new window.KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }),
      );
    });
    assert.equal(document.activeElement?.dataset.date, '2026-03-16');

    await act(async () => {
      document.activeElement.dispatchEvent(
        new window.KeyboardEvent('keydown', { key: 'PageDown', bubbles: true }),
      );
    });
    assert.equal(
      document.querySelector('.tm-date-picker-grid')?.getAttribute('aria-label'),
      'April 2026',
    );
    assert.equal(document.activeElement?.dataset.date, '2026-04-16');
  } finally {
    await harness.dispose();
  }
});

test('DatePicker formats the selected value using dateFormat tokens', async () => {
  const harness = await createHarness();

  try {
    await harness.render(
      React.createElement(DatePicker, {
        'aria-label': 'Due date',
        defaultValue: '2026-03-05',
        dateFormat: 'd/M/yy',
      }),
    );
    assert.match(harness.mount.querySelector('.tm-date-picker-trigger').textContent, /5\/3\/26/);
  } finally {
    await harness.dispose();
  }
});
