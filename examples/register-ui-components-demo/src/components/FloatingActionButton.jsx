import { MessageSquare, Plus } from 'lucide-react';
import { useState } from 'react';

export default function FloatingActionButton() {
  const [created, setCreated] = useState(0);
  const [notice, setNotice] = useState('');

  return (
    <section className="demo-section">
      <span className="demo-section-title">Primary action</span>
      <div className="demo-fab-stage">
        <span className="demo-note">
          {created ? `${created} draft${created === 1 ? '' : 's'} created` : 'Create a new draft.'}
        </span>
        <button
          type="button"
          className="demo-fab"
          aria-label="Create draft"
          onClick={() => setCreated((count) => count + 1)}
        >
          <Plus size={21} />
        </button>
      </div>
      <div className="demo-fab-examples">
        <button
          type="button"
          className="demo-fab demo-fab-small"
          aria-label="Add note"
          onClick={() => setNotice('Note action selected.')}
        >
          <Plus size={16} />
        </button>
        <button
          type="button"
          className="demo-fab"
          aria-label="Open chat"
          onClick={() => setNotice('Chat action selected.')}
        >
          <MessageSquare size={18} />
        </button>
        <button
          type="button"
          className="demo-fab demo-fab-large"
          aria-label="Create workspace"
          onClick={() => setNotice('Workspace action selected.')}
        >
          <Plus size={25} />
        </button>
        <span className="demo-note" role="status">
          {notice || 'Small, default, large, and grouped actions.'}
        </span>
      </div>
    </section>
  );
}
