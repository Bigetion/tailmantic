import { useState } from 'react';
import { AlignCenter, AlignLeft, AlignRight, Code2, Eye, History, Save } from 'lucide-react';
import Button from '@tailmantic/ui-components/button';
import ButtonGroup, { SplitButtonGroup } from '@tailmantic/ui-components/button-group';

const views = [
  { label: 'Preview', Icon: Eye },
  { label: 'Source', Icon: Code2 },
  { label: 'History', Icon: History },
];

const alignments = [
  { label: 'Align left', Icon: AlignLeft },
  { label: 'Align center', Icon: AlignCenter },
  { label: 'Align right', Icon: AlignRight },
];

export default function ButtonGroupDemo({ demoId }) {
  const [view, setView] = useState('Preview');
  const [alignment, setAlignment] = useState('Align left');
  const [announcement, setAnnouncement] = useState('');

  if (demoId === 'button-group-split') {
    return (
      <div className="rgi-button-group-example">
        <SplitButtonGroup
          primaryLabel="Save draft"
          primaryIcon={<Save size={14} />}
          aria-label="Save actions"
          actions={[
            { value: 'publish', label: 'Publish now' },
            { value: 'schedule', label: 'Schedule publish' },
          ]}
          onPrimaryClick={() => setAnnouncement('Draft saved.')}
          onAction={(action) => {
            setAnnouncement(`${action === 'publish' ? 'Publish now' : 'Schedule publish'} selected.`);
          }}
        />
        <span className="rgi-button-group-example-status" role="status">
          {announcement || 'Save now or choose another publishing action.'}
        </span>
      </div>
    );
  }

  if (demoId === 'button-group-vertical') {
    return (
      <div className="rgi-button-group-example">
        <ButtonGroup
          variant="segmented"
          orientation="vertical"
          aria-label="Text alignment"
        >
          {alignments.map(({ label, Icon }) => (
            <Button
              key={label}
              variant="text"
              size="small"
              uppercase={false}
              aria-label={label}
              aria-pressed={alignment === label}
              onClick={() => setAlignment(label)}
            >
              <Icon size={15} />
            </Button>
          ))}
        </ButtonGroup>
        <span className="rgi-button-group-example-status" role="status">{alignment} selected</span>
      </div>
    );
  }

  return (
    <div className="rgi-button-group-example">
      <ButtonGroup variant="segmented" aria-label="Editor view">
        {views.map(({ label, Icon }) => (
          <Button
            key={label}
            variant="text"
            size="small"
            uppercase={false}
            aria-pressed={view === label}
            onClick={() => setView(label)}
          >
            <Icon size={14} />
            {label}
          </Button>
        ))}
      </ButtonGroup>
      <span className="rgi-button-group-example-status" role="status">{view} view selected</span>
    </div>
  );
}
