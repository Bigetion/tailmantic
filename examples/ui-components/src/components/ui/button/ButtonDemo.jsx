import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, Info, Plus, Trash2 } from 'lucide-react';
import Button from '@tailmantic/ui-components/button';
import ButtonGroup from '@tailmantic/ui-components/button-group';

export default function ButtonDemo({ demoId }) {
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [pressed, setPressed] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  if (demoId === 'button-colors') {
    return (
      <div className="rgi-button-example">
        <span className="rgi-button-example-label">Semantic variants</span>
        <ButtonGroup className="rgi-button-example-row" variant="spaced">
          <Button color="success" uppercase={false}><Check size={14} /> Success</Button>
          <Button color="warning" uppercase={false}><Info size={14} /> Warning</Button>
          <Button color="danger" uppercase={false}><Trash2 size={14} /> Delete</Button>
        </ButtonGroup>
        <span className="rgi-button-example-note">Reserve semantic colors for actions where intent matters.</span>
      </div>
    );
  }

  if (demoId === 'button-sizes') {
    return (
      <div className="rgi-button-example">
        <span className="rgi-button-example-label">Adjust the visual density</span>
        <ButtonGroup className="rgi-button-example-row" variant="spaced">
          <Button variant="text" size="small" uppercase={false}>Small</Button>
          <Button variant="outlined" uppercase={false}>Medium</Button>
          <Button size="large" uppercase={false}>Large action</Button>
        </ButtonGroup>
        <span className="rgi-button-example-note">Use one consistent size within a related control group.</span>
      </div>
    );
  }

  if (demoId === 'button-icons') {
    return (
      <div className="rgi-button-example">
        <span className="rgi-button-example-label">Icon placement</span>
        <ButtonGroup className="rgi-button-example-row" variant="spaced">
          <Button uppercase={false}><Plus size={15} /> Create project</Button>
          <Button variant="outlined" uppercase={false}>Continue <ArrowRight size={15} /></Button>
          <Button iconOnly variant="text" aria-label="Add item"><Plus size={17} /></Button>
        </ButtonGroup>
        <span className="rgi-button-example-note">Icon-only actions include an accessible label.</span>
      </div>
    );
  }

  if (demoId === 'button-loading') {
    return (
      <div className="rgi-button-example">
        <span className="rgi-button-example-label">Async action state</span>
        <ButtonGroup className="rgi-button-example-row" variant="spaced">
          <Button
            type="button"
            loading={loading}
            uppercase={false}
            onClick={() => {
              setLoading(true);
              timerRef.current = window.setTimeout(() => {
                setLoading(false);
                setSaved(true);
              }, 1000);
            }}
          >
            {loading ? 'Saving changes…' : saved ? 'Saved' : 'Save changes'}
          </Button>
          <span className="rgi-button-example-status" role="status">
            {loading
              ? 'Please wait while your changes are saved.'
              : saved
                ? 'Your changes are saved.'
                : 'Click to preview a pending action.'}
          </span>
        </ButtonGroup>
      </div>
    );
  }

  return (
    <div className="rgi-button-example">
      <span className="rgi-button-example-label">Choose a visual hierarchy</span>
      <ButtonGroup className="rgi-button-example-row" variant="spaced">
        <Button uppercase={false} onClick={() => setPressed(true)}>Contained</Button>
        <Button variant="outlined" uppercase={false}>Outlined</Button>
        <Button variant="text" uppercase={false}>Text button</Button>
        <Button uppercase={false} disabled>Disabled</Button>
      </ButtonGroup>
      {pressed && <span className="rgi-button-example-note" role="status">Button action selected.</span>}
    </div>
  );
}
