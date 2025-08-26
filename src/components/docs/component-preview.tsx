'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Code as CodeIcon, Copy, Check } from 'lucide-react';
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
  const [copied, setCopied] = React.useState(false);
  const [maxHeight, setMaxHeight] = React.useState<number>(0);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const headingId = id ?? (title ? slugify(title) : undefined);

  // Measure content height so both opening and closing animate smoothly
  const recalc = React.useCallback(() => {
    if (!contentRef.current) return;
    const h = contentRef.current.scrollHeight;
    setMaxHeight(showCode ? h : 0);
  }, [showCode]);

  React.useEffect(() => {
    recalc();
  }, [recalc, code]);

  // Keep animation accurate on resize
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

  const handleCopy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <section
      id={headingId}
      className={`mb-8 ${className}`}
      aria-labelledby={headingId}
    >
      {(title || description) && (
        <header className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
          <div className="min-w-0">
            {title && (
              <h3
                id={headingId}
                className="text-lg font-semibold scroll-mt-32"
              >
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-1 text-md text-gray-600 text-muted-foreground">
                {description}
              </p>
            )}
          </div>

          {code && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => setShowCode((p) => !p)}
              className="whitespace-nowrap shrink-0 self-start md:self-auto mt-1 md:mt-0"
            >
              <CodeIcon className="h-4 w-4 mr-2" />
              {showCode ? 'Hide code' : 'Show code'}
            </Button>
          )}
        </header>
      )}

      {/* Attached container for demo + code */}
      <div className="rounded-md border overflow-hidden">
        {/* Demo */}
        <div
          className={`flex items-center justify-center min-h-[120px] ${
            padded ? 'p-6' : ''
          }`}
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
              {/* Copy button fixed in top-right corner of preview */}
              <button
                type="button"
                onClick={handleCopy}
                className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm
                   bg-white/10 text-white backdrop-blur-sm ring-1 ring-white/20
                   opacity-70 hover:opacity-100 focus-visible:opacity-100 transition-opacity"
                aria-label="Copy code"
                title="Copy code"
              >
                {copied ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
                <span className="sr-only">Copy</span>
              </button>

              {/* Make only the code scrollable */}
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
