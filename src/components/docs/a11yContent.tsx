'use client';

import * as React from 'react';
import { A11ySpec } from '@/content/a11y/types';

export const A11yContent = ({ a11y }: { a11y: A11ySpec }) => {
  return (
    <section className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Accessibility notes for <code>{a11y.component}</code>:
      </p>

      {/* Bulleted list */}
      <ul className="list-disc pl-6 space-y-2 text-sm">
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

      {!!a11y.notes?.length && (
        <div className="space-y-2">
          <h3 className="text-base font-medium">Notes</h3>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
            {a11y.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      )}
      <hr />
    </section>
  );
};

export default A11yContent;
