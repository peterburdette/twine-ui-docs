'use client';

import * as React from 'react';

interface Options {
  /** How long to keep `copiedKey` set before clearing (ms). */
  timeoutMs?: number;
  /**
   * Called when async clipboard isn't available or fails.
   * Use this to show a modal/toast with the text so the user can copy manually.
   */
  onManualFallback?: (text: string) => void;
}

export function useClipboard(options: Options = {}) {
  const { timeoutMs = 1000, onManualFallback } = options;
  const [copiedKey, setCopiedKey] = React.useState<string | null>(null);
  const timerRef = React.useRef<number | null>(null);

  const clearTimer = React.useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const copy = React.useCallback(
    async (text: string, key: string): Promise<boolean> => {
      // Guard for SSR and feature detection
      if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        onManualFallback?.(text);
        return false;
      }

      try {
        // Only works in secure contexts (https or localhost)
        if (window.isSecureContext && navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
          setCopiedKey(key);
          clearTimer();
          timerRef.current = window.setTimeout(() => {
            setCopiedKey(null);
            timerRef.current = null;
          }, timeoutMs);
          return true;
        }
      } catch {
        // fall through to manual fallback
      }

      // Manual fallback: let the UI present the text to the user to copy
      onManualFallback?.(text);
      return false;
    },
    [timeoutMs, onManualFallback, clearTimer]
  );

  React.useEffect(() => clearTimer, [clearTimer]);

  return { copiedKey, copy } as const;
}
