'use client';

import * as React from 'react';
import { DataGrid } from 'twine-ui';

type Row = { id: number; name: string; team: string; tickets: number };

const rows: Row[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name:
    ['Alex', 'Bri', 'Chris', 'Dana', 'Eli', 'Finn', 'Gia'][i % 7] +
    ' ' +
    (100 + i),
  team: ['Alpha', 'Beta', 'Gamma'][i % 3],
  tickets: Math.floor(Math.random() * 200),
}));

const columns = [
  { field: 'id', headerName: 'ID', width: 70, sortable: true },
  {
    field: 'name',
    headerName: 'Assignee',
    minWidth: 160,
    sortable: true,
    filterable: true,
  },
  {
    field: 'team',
    headerName: 'Team',
    minWidth: 120,
    sortable: true,
    filterable: true,
  },
  { field: 'tickets', headerName: 'Tickets', width: 110, sortable: true },
];

export const SortingFilteringDemo: React.FC = () => {
  return (
    <div className="w-full">
      <DataGrid
        rows={rows}
        columns={columns}
        enableColumnFilters
      />
    </div>
  );
};
