import { TransferList } from '@tailmantic/ui-components';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('transfer-list');
const TRANSFER_LIST_STYLES_NOTE =
  'Base and bulk-selection styles are provided by @tailmantic/ui-components/transfer-list/styles.';
const ITEMS = [
  { id: 'wifi', label: 'Wi-Fi', description: 'Network access' },
  { id: 'bluetooth', label: 'Bluetooth', description: 'Nearby devices' },
  { id: 'notifications', label: 'Notifications', description: 'Alerts and reminders' },
  { id: 'location', label: 'Location', description: 'Location-based services' },
  { id: 'camera', label: 'Camera', description: 'Photo and video capture' },
];
const USAGE_CODE = `import { TransferList } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/transfer-list/styles';

<TransferList
  items={permissions}
  value={grantedIds}
  onChange={(nextIds, movedItems) => setGrantedIds(nextIds)}
  showSelectAll
  showAllActions
/>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/TransferListPage.jsx',
    'Dedicated page with selection, bulk selection, and controlled transfer examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/transfer-list/TransferList.jsx',
    'Accessible controlled or uncontrolled dual-list transfer with selection and move actions.',
  ],
  [
    'Styles',
    'packages/ui-components/src/transfer-list/transfer-list.styles.js',
    'Tailmantic panel, item, bulk-selection, and action styles bundled with the package.',
  ],
];

function ControlledTransferList() {
  const [value, setValue] = useState(['wifi']);

  return (
    <div className="preview-stack">
      <TransferList
        items={ITEMS}
        sourceTitle="Available permissions"
        targetTitle="Granted permissions"
        showAllActions
        value={value}
        onChange={setValue}
      />
      <span className="preview-note" role="status" aria-live="polite">
        {value.length} permissions granted.
      </span>
    </div>
  );
}

const EXAMPLES = [
  {
    id: 'transfer-list',
    title: 'Move selected items',
    caption: 'Choose items from either side and move them between available and selected lists.',
    component: (
      <TransferList
        items={ITEMS}
        defaultValue={['wifi']}
        sourceTitle="Available"
        targetTitle="Selected"
      />
    ),
  },
  {
    id: 'transfer-list-selection',
    title: 'Bulk selection',
    caption: 'Select all items at once or toggle individual items on either side.',
    component: (
      <TransferList
        items={ITEMS}
        defaultValue={['wifi']}
        showSelectAll
        sourceTitle="Available"
        targetTitle="Selected"
      />
    ),
  },
  {
    id: 'transfer-list-actions',
    title: 'Move all items',
    caption: 'Move selected items or transfer an entire list with dedicated actions.',
    component: <ControlledTransferList />,
  },
];

export default function TransferListPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Import TransferList and control the selected IDs from application state."
      usageDescription="TransferList supports controlled and uncontrolled selection, optional select-all controls, accessible move actions, and package styles."
    >
      <div className="component-showcase component-showcase-transfer-list">
        {EXAMPLES.map(({ id, title, caption, component: example }) => (
          <DemoPanel key={id} title={title} caption={caption} code={TRANSFER_LIST_STYLES_NOTE}>
            {example}
          </DemoPanel>
        ))}
      </div>
    </ComponentPageLayout>
  );
}
