'use client';

import * as React from 'react';
import { Button, Tooltip } from 'twine-ui';
import { Code as CodeIcon, Copy, Check, Share2 } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type ComponentPreviewProps = {
  id?: string;
  title?: string;
  description?: string;
  className?: string;
  padded?: boolean;
  children?: React.ReactNode;
  code?: string;
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  id,
  title,
  description,
  className = '',
  padded = true,
  children,
  code,
}) => {
  const [showCode, setShowCode] = React.useState(false);
  const [copied, setCopied] = React.useState<string | null>(null);
  const [maxHeight, setMaxHeight] = React.useState<number>(0);

  const contentRef = React.useRef<HTMLDivElement>(null);
  const headingId = id ?? (title ? slugify(title) : undefined);

  const recalc = React.useCallback(() => {
    if (!contentRef.current) return;
    const h = contentRef.current.scrollHeight;
    setMaxHeight(showCode ? h : 0);
  }, [showCode]);

  React.useEffect(() => {
    recalc();
  }, [recalc, code]);

  React.useEffect(() => {
    const ro = new ResizeObserver(() => recalc());
    if (contentRef.current) ro.observe(contentRef.current);
    const onWinResize = () => recalc();
    window.addEventListener('resize', onWinResize);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', onWinResize);
    };
  }, [recalc]);

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 1200);
    } catch {}
  };

  const handleShare = () => {
    const link = `${window.location.origin}${window.location.pathname}#${headingId}`;
    handleCopy(link, 'link');
  };

  return (
    <section
      className={`mb-8 ${className}`}
      aria-labelledby={headingId}
    >
      {(title || description) && (
        <header className="mb-4">
          {title && (
            <h3
              id={headingId}
              className="text-lg font-semibold scroll-mt-16"
            >
              {title}
            </h3>
          )}
          {description && (
            <p className="mt-1 text-md text-gray-600 text-muted-foreground">
              {description}
            </p>
          )}
        </header>
      )}

      {/* Container for toolbar + demo + code */}
      <div className="rounded-md border overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center justify-end gap-2 bg-gray-100 border-b px-3 py-2">
          <Tooltip
            placement="bottom"
            content={copied === 'link' ? 'Link copied' : 'Copy share link'}
          >
            <Button
              size="icon"
              variant="outlined"
              onClick={handleShare}
              aria-label="Copy share link"
            >
              {copied === 'link' ? (
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
                variant="outlined"
                onClick={() => setShowCode((p) => !p)}
                aria-label={showCode ? 'Hide code' : 'Show code'}
              >
                <CodeIcon className="h-4 w-4" />
              </Button>
            </Tooltip>
          )}
        </div>

        {/* Demo */}
        <div
          className={`flex items-center justify-center min-h-[120px] ${
            padded ? 'p-6' : ''
          } bg-white`}
        >
          {children ?? (
            <div className="flex items-center justify-center text-gray-500">
              No preview available
            </div>
          )}
        </div>

        {/* Code */}
        {code && (
          <div
            className="overflow-hidden transition-[max-height] duration-200 ease-out"
            style={{ maxHeight }}
            aria-hidden={!showCode}
          >
            <div
              ref={contentRef}
              className="relative bg-neutral-900 text-neutral-100"
            >
              {/* Copy button (inside code) */}
              <button
                type="button"
                onClick={() => handleCopy(code!, 'code')}
                className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-md p-2
                  bg-white/10 text-white backdrop-blur-sm ring-1 ring-white/20
                  opacity-70 hover:opacity-100 focus-visible:opacity-100 transition-opacity"
                aria-label="Copy code"
              >
                {copied === 'code' ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </button>

              <div className="max-h-[450px] overflow-y-auto">
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: 0,
                    background: 'transparent',
                    padding: '1rem',
                  }}
                  showLineNumbers={false}
                >
                  {code}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ComponentPreview;
