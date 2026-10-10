import { forwardRef, useEffect, useRef } from 'react';

const EMPTY_REFS = [];

const ClickAwayListener = forwardRef(function ClickAwayListener(
  { children, className, ignoreRefs = EMPTY_REFS, onClickAway, ...props },
  forwardedRef,
) {
  const rootRef = useRef(null);

  function setRef(node) {
    rootRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  }

  useEffect(() => {
    function handlePointerDown(event) {
      const path = event.composedPath();
      const target = event.target;
      const insideRoot = path.includes(rootRef.current);
      const insideIgnoredRef = ignoreRefs.some((ref) => {
        const ignoredElement = ref.current;
        return ignoredElement && (path.includes(ignoredElement) || ignoredElement.contains(target));
      });

      if (!insideRoot && !insideIgnoredRef) onClickAway?.(event);
    }

    document.addEventListener('pointerdown', handlePointerDown, true);
    return () => document.removeEventListener('pointerdown', handlePointerDown, true);
  }, [ignoreRefs, onClickAway]);

  return (
    <div {...props} ref={setRef} className={className}>
      {children}
    </div>
  );
});

export default ClickAwayListener;
