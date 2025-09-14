'use client';

import * as React from 'react';
import { A11ySpec } from '@/content/a11y/types';
import { ListChecks, AlertTriangle } from 'lucide-react';

export const A11yContent = ({ a11y }: { a11y: A11ySpec }) => {
  const headingId = React.useId();

  return (
    <section
      aria-labelledby={headingId}
      className="rounded-xl border bg-muted/30 p-5 md:p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <h3
            id={headingId}
            className="text-sm md:text-base font-semibold"
          >
            {a11y.component} Accessibility
          </h3>
        </div>

        <div className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <ListChecks
            size={16}
            aria-hidden="true"
          />
          <span>{a11y.items.length} guidelines</span>
        </div>
      </div>

      {/* Spec list */}
      <dl className="divide-y divide-border rounded-lg border bg-background/60 shadow-sm">
        {a11y.items.map((it, i) => (
          <div
            key={i}
            className="grid gap-2 p-3 md:p-4 md:grid-cols-12"
          >
            <dt className="md:col-span-4">
              {it.label ? (
                <span className="inline-flex items-center gap-2 rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground/80">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-foreground/40"
                  />
                  {it.label}
                </span>
              ) : (
                <span className="sr-only">Detail</span>
              )}
            </dt>
            <dd className="md:col-span-8 text-sm leading-relaxed text-foreground/90">
              {it.text}
            </dd>
          </div>
        ))}
      </dl>

      {/* Notes */}
      {!!a11y.notes?.length && (
        <div className="mt-5 rounded-lg border bg-yellow-50/50 p-3 md:p-4 dark:bg-yellow-950/20">
          <h4 className="mb-2 flex items-center gap-2 text-sm font-medium text-yellow-800 dark:text-yellow-200">
            <AlertTriangle
              size={16}
              aria-hidden="true"
            />
            Notes
          </h4>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 marker:text-muted-foreground/70">
            {a11y.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default A11yContent;
