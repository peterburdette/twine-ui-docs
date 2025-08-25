'use client';

import * as React from 'react';
import { DataGrid } from 'twine-ui';
import type { Column, GridRenderCellParams } from 'twine-ui';

type Row = { id: number; product: string; price: number; stock: number };
type EditableKey = Exclude<keyof Row, 'id'>;

type CellEditUpdate = {
  id: Row['id'];
  field: EditableKey;
  value: Row[EditableKey];
};

const rowsInitial: Row[] = [
  { id: 1, product: 'Keyboard', price: 49.99, stock: 120 },
  { id: 2, product: 'Mouse', price: 29.99, stock: 340 },
  { id: 3, product: 'Monitor', price: 199.0, stock: 42 },
];

/** runtime type guard for cell-edit payloads */
const isCellEditUpdates = (u: unknown): u is CellEditUpdate[] => {
  return (
    Array.isArray(u) &&
    u.length > 0 &&
    typeof u[0] === 'object' &&
    u[0] !== null &&
    'id' in (u[0] as Record<string, unknown>) &&
    'field' in (u[0] as Record<string, unknown>) &&
    'value' in (u[0] as Record<string, unknown>)
  );
};

export const EditableCellsDemo: React.FC = () => {
  const [rows, setRows] = React.useState<Row[]>(rowsInitial);

  const columns: Column[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'product', headerName: 'Product', editable: true },
    {
      field: 'price',
      headerName: 'Price',
      width: 120,
      editable: true,
      renderCell: ({ value }: GridRenderCellParams) =>
        typeof value === 'number' ? `$${value.toFixed(2)}` : String(value),
    },
    { field: 'stock', headerName: 'In Stock', width: 110, editable: true },
  ];

  const handleRowsChange = (updates: unknown) => {
    if (isCellEditUpdates(updates)) {
      setRows((prev) => {
        const byId = new Map(prev.map((r) => [r.id, r]));
        for (const u of updates) {
          const current = byId.get(u.id);
          if (!current) continue;
          // u.field is guaranteed to be an editable key, u.value matches that key's type
          byId.set(u.id, { ...current, [u.field]: u.value });
        }
        return Array.from(byId.values());
      });
    } else if (Array.isArray(updates)) {
      // assume it's a full replacement of rows
      setRows(updates as Row[]);
    }
  };

  return (
    <div className="w-full">
      <DataGrid
        rows={rows}
        columns={columns}
        onRowsChange={handleRowsChange}
      />
    </div>
  );
};
