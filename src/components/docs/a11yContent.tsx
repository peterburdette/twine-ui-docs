'use client';

import * as React from 'react';
import { A11ySpec } from '@/content/a11y/types';

export const A11yContent = ({ a11y }: { a11y: A11ySpec }) => {
  return (
    <section className="rounded-xl border bg-muted/30 p-4 md:p-6">
      {/* Bulleted list */}
      <ul className="mt-4 list-disc pl-6 text-sm space-y-2 marker:text-muted-foreground/70">
        {a11y.items.map((it, i) => (
          <li
            key={i}
            className="leading-relaxed"
          >
            {it.label ? (
              <>
                <span className="font-medium">{it.label}:</span>{' '}
                <span>{it.text}</span>
              </>
            ) : (
              <span>{it.text}</span>
            )}
          </li>
        ))}
      </ul>

      {/* Notes */}
      {!!a11y.notes?.length && (
        <div className="mt-5 rounded-lg border bg-background/60 p-3 md:p-4 shadow-sm">
          <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-yellow-500"
            />
            Notes
          </h4>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1 marker:text-muted-foreground/70">
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
