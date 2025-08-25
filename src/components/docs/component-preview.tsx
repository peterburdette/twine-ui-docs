'use client';

import * as React from 'react';

type ComponentPreviewProps = {
  id?: string;
  title?: string;
  description?: string;
  className?: string;
  padded?: boolean;
  children?: React.ReactNode;
};

// simple, stable slug fallback if no id was provided
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
}) => {
  const headingId = id ?? (title ? slugify(title) : undefined);

  return (
    <section
      id={headingId}
      className={`mb-8 ${className}`}
      aria-labelledby={headingId}
    >
      {(title || description) && (
        <header className="mb-4">
          {title && (
            <h2
              id={headingId}
              className="text-2xl font-semibold scroll-mt-32"
            >
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-1 text-md text-gray-600 text-muted-foreground">
              {description}
            </p>
          )}
        </header>
      )}
      <div className={`rounded-md border ${padded ? 'p-6' : ''}`}>
        {children ?? (
          <div className="flex min-h-[100px] items-center justify-center text-gray-500">
            No preview available
          </div>
        )}
      </div>
    </section>
  );
};

export default ComponentPreview;
