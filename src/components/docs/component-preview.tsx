'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';
import { Button, Tooltip } from 'twine-ui';
import { Code as CodeIcon, Copy, Check, Share2 } from 'lucide-react';
import { slugify } from '@/lib/utils';
import { useClipboard } from '@/hooks/useClipboard';
import { useAutoHeight } from '@/hooks/useAutoHeight';

// Lazy-load CodeBlock to keep the initial docs bundle lean
const CodeBlock = dynamic(() => import('./CodeBlock'), { ssr: false });

export type ComponentPreviewProps = {
  id?: string;
  title?: string;
  description?: string;
  showTitle?: boolean;
  tocSkip?: boolean;
  className?: string;
  padded?: boolean;
  children?: React.ReactNode;
  code?: string;
  language?: string;
};

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  id,
  title,
  description,
  showTitle = true,
  tocSkip = false,
  className = '',
  padded = true,
  children,
  code,
  language = 'tsx',
}) => {
  const [showCode, setShowCode] = React.useState(false);

  const headingId = React.useMemo(
    () => id ?? (title ? slugify(title) : undefined),
    [id, title]
  );

  const { copiedKey, copy } = useClipboard({ timeoutMs: 1200 });
  const { ref: codeRef, maxHeight } = useAutoHeight(showCode);

  const handleShare = React.useCallback(async () => {
    const base = `${window.location.origin}${window.location.pathname}`;
    const link = headingId ? `${base}#${headingId}` : base;
    const titleText = title ?? 'Component';

    // Narrow Web Share API for TS
    const nav = navigator as Navigator & {
      share?: (data: ShareData) => Promise<void>;
      canShare?: (data?: ShareData) => boolean;
    };

    const shareData: ShareData = { title: titleText, url: link };

    if (
      typeof nav.share === 'function' &&
      (!nav.canShare || nav.canShare(shareData))
    ) {
      try {
        await nav.share(shareData);
        return;
      } catch (err: unknown) {
        const name =
          typeof err === 'object' && err !== null && 'name' in err
            ? String(err.name)
            : '';
        const message =
          typeof err === 'object' && err !== null && 'message' in err
            ? String(err.message)
            : String(err);

        const userCancelled = name === 'AbortError' || /cancel/i.test(message);

        if (userCancelled) return;

        await copy(link, 'link');
        return;
      }
    }

    await copy(link, 'link');
  }, [headingId, title, copy]);

  const codeRegionId = headingId ? `${headingId}__code` : undefined;

  return (
    <section
      className={`mb-8 ${className}`}
      aria-labelledby={showTitle && title && headingId ? headingId : undefined}
    >
      {(showTitle ? !!title : !!description) && (
        <header className="mb-3">
          {showTitle && title ? (
            <h3
              id={headingId}
              className="text-lg font-semibold scroll-mt-16"
              data-toc-skip={tocSkip ? '' : undefined}
              data-toc-title={title}
            >
              {title}
            </h3>
          ) : headingId ? (
            <span
              id={headingId}
              aria-hidden="true"
            />
          ) : null}

          {description ? (
            <p className="mt-1 text-md text-gray-600">{description}</p>
          ) : null}
        </header>
      )}

      <div className="relative rounded-lg overflow-hidden border border-gray-200 bg-white">
        <div className="flex items-center justify-end gap-1 px-2 py-1 border-b border-gray-100 bg-gray-50">
          <Tooltip
            placement="bottom"
            content={copiedKey === 'link' ? 'Link copied' : 'Copy link'}
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={handleShare}
              aria-label="Copy share link"
            >
              {copiedKey === 'link' ? (
                <Check className="h-4 w-4" />
              ) : (
                <Share2 className="h-4 w-4" />
              )}
            </Button>
          </Tooltip>

          {code && (
            <Tooltip
              placement="bottom"
              content={showCode ? 'Hide code' : 'Show code'}
            >
              <Button
                size="icon"
                variant="ghost"
                aria-expanded={showCode}
                aria-controls={codeRegionId}
                onClick={() => setShowCode((p) => !p)}
                aria-label={showCode ? 'Hide code' : 'Show code'}
              >
                <CodeIcon className="h-4 w-4" />
              </Button>
            </Tooltip>
          )}
        </div>

        <div
          className={`flex min-h-[120px] items-center justify-center ${
            padded ? 'p-6' : ''
          }`}
        >
          {children ?? (
            <div className="flex items-center justify-center text-gray-500">
              No preview available
            </div>
          )}
        </div>

        {code && (
          <div
            id={codeRegionId}
            className="overflow-hidden transition-[max-height] duration-200 ease-out motion-reduce:transition-none"
            style={{ maxHeight }}
            aria-hidden={!showCode}
          >
            <div
              ref={codeRef}
              className="relative bg-neutral-900 text-neutral-100"
            >
              <button
                type="button"
                onClick={() => copy(code, 'code')}
                className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md p-2
                  bg-white/10 text-white backdrop-blur-sm ring-1 ring-white/20
                  opacity-80 hover:opacity-100 focus-visible:opacity-100 transition-opacity"
                aria-label="Copy code"
              >
                {copiedKey === 'code' ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </button>

              <div className="max-h-[450px] overflow-y-auto">
                <CodeBlock
                  code={code}
                  language={language}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ComponentPreview;
