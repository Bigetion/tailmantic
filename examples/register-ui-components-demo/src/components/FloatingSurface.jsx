import { createPopper } from '@popperjs/core';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const DEFAULT_MODIFIERS = [
  { name: 'offset', options: { offset: [0, 8] } },
  { name: 'flip', options: { fallbackPlacements: ['top', 'right', 'left'] } },
  { name: 'preventOverflow', options: { padding: 8 } },
];

export function useClickAway(open, referenceRef, floatingRef, onDismiss) {
  useLayoutEffect(() => {
    if (!open) return undefined;
    function handlePointerDown(event) {
      if (referenceRef.current?.contains(event.target)) return;
      if (floatingRef.current?.contains(event.target)) return;
      onDismiss();
    }
    document.addEventListener('pointerdown', handlePointerDown, true);
    return () => document.removeEventListener('pointerdown', handlePointerDown, true);
  }, [floatingRef, onDismiss, open, referenceRef]);
}

export default function FloatingSurface({
  open,
  referenceRef,
  floatingRef,
  placement = 'bottom-start',
  modifiers = DEFAULT_MODIFIERS,
  className,
  role,
  onEscape,
  children,
}) {
  const internalRef = useRef(null);
  const [positioned, setPositioned] = useState(false);
  const setRef = (node) => {
    internalRef.current = node;
    if (typeof floatingRef === 'function') floatingRef(node);
    else if (floatingRef) floatingRef.current = node;
  };

  useLayoutEffect(() => {
    const reference = referenceRef.current;
    const floating = internalRef.current;
    if (!open || !reference || !floating) return undefined;

    setPositioned(false);
    const instance = createPopper(reference, floating, {
      placement,
      strategy: 'fixed',
      modifiers,
      onFirstUpdate: () => setPositioned(true),
    });
    return () => instance.destroy();
  }, [modifiers, open, placement, referenceRef]);

  useEffect(() => {
    if (!open || !onEscape) return undefined;
    function handleKeyDown(event) {
      if (event.key === 'Escape') onEscape();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onEscape, open]);

  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className={className}
      ref={setRef}
      role={role}
      style={{ visibility: positioned ? 'visible' : 'hidden' }}
    >
      {children}
    </div>,
    document.body,
  );
}
