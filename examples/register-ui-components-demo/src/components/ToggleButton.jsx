import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react';
import { useState } from 'react';
import { cx } from 'tailmantic';

function ToggleButton({ children, selected, onClick, size = 'medium', iconOnly = false, icon }) {
  return (
    <button
      type="button"
      className={cx(
        'demo-toggle',
        `demo-toggle-${size}`,
        iconOnly && 'demo-toggle-icon',
        selected && 'demo-toggle-selected',
      )}
      aria-pressed={selected}
      aria-label={iconOnly ? children : undefined}
      title={iconOnly ? children : undefined}
      onClick={onClick}
    >
      {icon}
      {!iconOnly && children}
    </button>
  );
}

export default function ToggleButtonDemo() {
  const [selected, setSelected] = useState('bold');
  const [size, setSize] = useState('medium');
  const [alignment, setAlignment] = useState('left');
  return (
    <div className="demo-col">
      <label className="demo-toggle-size-control">
        Size
        <select value={size} onChange={(event) => setSize(event.target.value)}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
      <fieldset className="demo-toggle-group">
        <legend className="sr-only">Text formatting</legend>
        <ToggleButton
          size={size}
          selected={selected === 'bold'}
          onClick={() => setSelected(selected === 'bold' ? '' : 'bold')}
        >
          Bold
        </ToggleButton>
        <ToggleButton
          size={size}
          selected={selected === 'italic'}
          onClick={() => setSelected(selected === 'italic' ? '' : 'italic')}
        >
          Italic
        </ToggleButton>
        <ToggleButton
          size={size}
          selected={selected === 'underline'}
          onClick={() => setSelected(selected === 'underline' ? '' : 'underline')}
        >
          Underline
        </ToggleButton>
      </fieldset>
      <fieldset className="demo-toggle-group">
        <legend className="sr-only">Text alignment</legend>
        {[
          ['left', 'Align left', AlignLeft],
          ['center', 'Align center', AlignCenter],
          ['right', 'Align right', AlignRight],
        ].map(([value, label, Icon]) => (
          <ToggleButton
            key={value}
            size={size}
            iconOnly
            icon={<Icon size={16} />}
            selected={alignment === value}
            onClick={() => setAlignment(value)}
          >
            {label}
          </ToggleButton>
        ))}
      </fieldset>
    </div>
  );
}
