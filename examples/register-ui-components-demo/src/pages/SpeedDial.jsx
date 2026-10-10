import { Check, FilePlus2, Plus, Settings, Share2, UserPlus } from 'lucide-react';
import { useState } from 'react';

export default function SpeedDial() {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('');
  const [direction, setDirection] = useState('up');
  const actions = [
    { label: 'New task', icon: FilePlus2 },
    { label: 'Invite teammate', icon: UserPlus },
    { label: 'Share workspace', icon: Share2 },
    { label: 'Workspace settings', icon: Settings },
    { label: 'Mark complete', icon: Check },
  ];

  return (
    <section className="demo-section">
      <span className="demo-section-title">Directional workspace shortcuts</span>
      <label className="demo-speed-dial-control">
        Action direction
        <select value={direction} onChange={(event) => setDirection(event.target.value)}>
          <option value="up">Up</option>
          <option value="down">Down</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </label>
      <div className={`demo-speed-dial demo-speed-dial-${direction}`}>
        {open && (
          <div className={`demo-speed-dial-actions demo-speed-dial-actions-${direction}`}>
            {actions.map(({ label, icon: Icon }) => (
              <button
                type="button"
                key={label}
                onClick={() => {
                  setAction(label);
                  setOpen(false);
                }}
              >
                <span>{label}</span>
                <Icon size={16} />
              </button>
            ))}
          </div>
        )}
        <button
          type="button"
          className={
            open
              ? 'demo-speed-dial-trigger demo-speed-dial-trigger-open'
              : 'demo-speed-dial-trigger'
          }
          aria-label={open ? 'Close quick actions' : 'Open quick actions'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Plus size={20} />
        </button>
      </div>
      <span className="demo-note">
        {action ? `Action selected: ${action}` : 'Open the speed dial to reveal shortcuts.'}
      </span>
    </section>
  );
}
