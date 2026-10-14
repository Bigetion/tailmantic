import { Activity, ChevronDown, Copy, Home, Layers, Settings, Trash2, X } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';
import { cx } from 'tailmantic';
import { PopperSurface, useClickAway } from './Popper.jsx';
import PortalDemo from './ui/portal/PortalDemo.jsx';

function FloatingDemo({ demoId }) {
  const anchorRef = useRef(null);
  const surfaceRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState(
    demoId.includes('placements') ? 'right' : 'bottom-start',
  );
  const [selected, setSelected] = useState('');
  const dismiss = useCallback(() => setOpen(false), []);
  useClickAway(open, anchorRef, surfaceRef, dismiss);

  const isTooltip = demoId.startsWith('tooltip');
  const isMenu = demoId.startsWith('menu');
  const isClickAway = demoId.startsWith('click-away');
  const isPortal = demoId.startsWith('portal');
  const label = isTooltip
    ? 'Hover or focus to see tooltip'
    : isMenu
      ? 'Open actions'
      : isClickAway
        ? 'Open click-away panel'
        : isPortal
          ? 'Open portal content'
          : 'Open popover';

  return (
    <div className={cx('floating-demo', isClickAway && 'click-away-demo')}>
      <button
        className={cx('rgi-button', 'rgi-button-outlined', 'floating-trigger')}
        type="button"
        ref={anchorRef}
        aria-expanded={open}
        aria-haspopup={isTooltip ? undefined : 'dialog'}
        onClick={() => !isTooltip && setOpen((value) => !value)}
        onMouseEnter={() => isTooltip && setOpen(true)}
        onMouseLeave={() => isTooltip && setOpen(false)}
        onFocus={() => isTooltip && setOpen(true)}
        onBlur={() => isTooltip && setOpen(false)}
      >
        {label}
        {!isTooltip && <ChevronDown size={14} />}
      </button>
      <PopperSurface
        open={open}
        anchorRef={anchorRef}
        surfaceRef={surfaceRef}
        placement={placement}
        className={cx('popper-surface', isTooltip && 'tooltip-surface')}
        role={isTooltip ? 'tooltip' : 'dialog'}
        onEscape={dismiss}
      >
        {isTooltip ? (
          <span>Popper keeps this tooltip in view.</span>
        ) : isMenu ? (
          <div className="floating-menu">
            {[
              [Copy, 'Duplicate'],
              [Settings, 'Settings'],
              [Trash2, 'Delete'],
            ].map(([Icon, name]) => (
              <button
                key={name}
                type="button"
                onClick={() => {
                  setSelected(name);
                  dismiss();
                }}
              >
                <Icon size={14} /> {name}
              </button>
            ))}
          </div>
        ) : (
          <div className={cx('floating-card', isPortal && 'portal-card')}>
            <div className="floating-card-heading">
              <div className="rgi-avatar rgi-avatar-green">
                <Layers size={17} />
              </div>
              <div>
                <strong>
                  {isPortal
                    ? 'Portal layer'
                    : isClickAway
                      ? 'Click-away listener'
                      : 'Popover content'}
                </strong>
                <span>Anchored with Popper.js</span>
              </div>
              <button
                className="floating-close"
                type="button"
                onClick={dismiss}
                aria-label="Close popover"
              >
                <X size={14} />
              </button>
            </div>
            <p>
              Floating content is rendered in a portal and automatically repositions to stay inside
              the viewport.
            </p>
            <div className="floating-card-actions">
              <button className="rgi-button rgi-button-text" type="button" onClick={dismiss}>
                Dismiss
              </button>
              <button className="rgi-button rgi-button-contained" type="button" onClick={dismiss}>
                Got it
              </button>
            </div>
          </div>
        )}
      </PopperSurface>
      {selected && !open && <span className="floating-selected">Selected: {selected}</span>}
      {isClickAway && (
        <span className="floating-hint">Click outside or press Escape to dismiss.</span>
      )}
    </div>
  );
}

function SelectionPreview({ demoId }) {
  const [checked, setChecked] = useState(true);
  return (
    <div className="preview-stack">
      <div className="selection-list">
        <label className="selection-option">
          <input
            className="rgi-checkbox"
            type="checkbox"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
          />
          <span>Send me product updates</span>
        </label>
        <label className="selection-option">
          <input className="rgi-checkbox" type="checkbox" />
          <span>Subscribe to newsletter</span>
        </label>
        <label className="selection-option is-disabled">
          <input className="rgi-checkbox" type="checkbox" disabled />
          <span>Disabled option</span>
        </label>
      </div>
      {demoId.startsWith('checkbox') && demoId.includes('group') && (
        <p className="preview-note">Selected: {checked ? 'product updates' : 'none'}</p>
      )}
    </div>
  );
}

function DisplayPreview({ demoId }) {
  return (
    <div className="preview-row">
      <span className="rgi-chip rgi-chip-filled">Data display</span>
      <span className="rgi-chip rgi-chip-primary">Tailmantic UI</span>
      <span className="preview-note">Responsive component preview</span>
    </div>
  );
}

function SurfacePreview({ demoId }) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="preview-row">
      <span className="rgi-chip rgi-chip-filled">
        <Layers size={14} /> Surface
      </span>
      <span className="preview-note">Composable content surface</span>
    </div>
  );
}

function NavigationPreview({ demoId }) {
  const [selected, setSelected] = useState(0);
  if (demoId.startsWith('bottom-navigation'))
    return (
      <div
        className={cx(
          'tab-demo',
          demoId.startsWith('bottom-navigation') && 'bottom-navigation-demo',
        )}
      >
        {['Overview', 'Activity', 'Settings'].map((name, index) => (
          <button
            className={cx(selected === index && 'tab-active')}
            key={name}
            type="button"
            onClick={() => setSelected(index)}
          >
            {demoId.startsWith('bottom') &&
              [Home, Activity, Settings].map(
                (Icon, iconIndex) => iconIndex === index && <Icon key={name} size={16} />,
              )}
            {name}
          </button>
        ))}
      </div>
    );
  return (
    <div className="preview-row">
      <button
        className="rgi-button rgi-button-outlined"
        type="button"
        onClick={() => setSelected((value) => value + 1)}
      >
        <Menu size={14} /> Open navigation
      </button>
      <span className="preview-note">
        Selected destination: {selected ? 'Components' : 'Overview'}
      </span>
    </div>
  );
}

function DemoPreview({ component, demoId }) {
  if (component.slug === 'portal') return <PortalDemo demoId={demoId} />;
  if (demoId.startsWith('popover') || demoId.startsWith('autocomplete'))
    return <FloatingDemo demoId={demoId} />;
  if (demoId.startsWith('checkbox')) return <SelectionPreview demoId={demoId} />;
  if (demoId.startsWith('avatar') || demoId.startsWith('badge') || demoId.startsWith('chip'))
    return <DisplayPreview demoId={demoId} />;
  if (
    demoId.startsWith('accordion') ||
    demoId.startsWith('app-bar') ||
    demoId.startsWith('card') ||
    demoId.startsWith('paper')
  )
    return <SurfacePreview demoId={demoId} />;
  if (demoId.startsWith('bottom-navigation')) return <NavigationPreview demoId={demoId} />;
  return (
    <div className="preview-row">
      <span className="rgi-chip rgi-chip-primary">{component.name}</span>
      <span className="preview-note">Interactive {component.name.toLowerCase()} example</span>
    </div>
  );
}

export default DemoPreview;
