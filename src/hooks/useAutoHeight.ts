'use client';

import * as React from 'react';

/**
 * Measures a container's scrollHeight and exposes a maxHeight style for smooth
 * open/close transitions. Includes a ResizeObserver to follow content changes.
 */
export function useAutoHeight(open: boolean) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = React.useState<number>(0);

  const recalc = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setMaxHeight(open ? el.scrollHeight : 0);
  }, [open]);

  React.useLayoutEffect(() => {
    recalc();
  }, [recalc]);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => recalc());
    ro.observe(el);
    return () => ro.disconnect();
  }, [recalc]);

  return { ref, maxHeight } as const;
}
