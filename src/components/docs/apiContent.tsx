'use client';

import * as React from 'react';
import { DataGrid } from 'twine-ui';
import { apiColumns } from './api-grid-columns';
import { ApiSpec } from '@/content/api/types';
import { AlertTriangle } from 'lucide-react';

export const ApiContent = ({ api }: { api: ApiSpec }) => {
  const rows = React.useMemo(
    () =>
      api.props.map((p) => ({
        id: p.name,
        name: p.name,
        type: p.type,
        default: p.default ?? '',
        description: p.description,
        required: !!p.required,
      })),
    [api.props]
  );

  return (
    <section className="space-y-4">
      <div className="text-sm text-muted-foreground">
        {api.description ? <>{api.description}</> : null}
      </div>

      <DataGrid
        rows={rows}
        columns={apiColumns}
        className="rounded-lg border bg-background"
        noDataMessage="No props"
      />

      {!!api.notes?.length && (
        <div className="mt-5 rounded-lg border bg-yellow-50/50 p-3 md:p-4 dark:bg-yellow-950/20">
          <h3 className="mb-2 flex items-center gap-2 text-sm font-medium text-yellow-800 dark:text-yellow-200">
            <AlertTriangle
              size={16}
              aria-hidden="true"
            />
            Notes
          </h3>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 marker:text-muted-foreground/70">
            {api.notes.map((n, i) => (
              <li
                key={i}
                className="whitespace-normal break-words"
              >
                {n}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
