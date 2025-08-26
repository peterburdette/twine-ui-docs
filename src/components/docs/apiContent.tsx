'use client';

import * as React from 'react';
import { DataGrid } from 'twine-ui';
import { apiColumns } from './api-grid-columns';
import { ApiSpec } from '@/content/api/types';

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
        <code>{api.component}</code>
        {api.description ? <>{api.description}</> : null}
      </div>

      <DataGrid
        rows={rows}
        columns={apiColumns}
        hideToolbar
        hideFooter
        disableColumnResize
        className="rounded-lg border bg-background"
        noDataMessage="No props"
      />

      {!!api.notes?.length && (
        <div className="space-y-2">
          <h3 className="text-base font-medium">Notes</h3>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
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
