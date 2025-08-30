'use client';
import * as React from 'react';
import { DataGrid, Checkbox } from 'twine-ui';

const rows = [
  { id: 1, name: 'Alice Johnson', role: 'Engineer', age: 31, active: true },
  { id: 2, name: 'Brian Cooper', role: 'Designer', age: 28, active: false },
  { id: 3, name: 'Chloe Kim', role: 'PM', age: 35, active: true },
  { id: 4, name: 'Daniel Lee', role: 'Engineer', age: 26, active: true },
  { id: 5, name: 'Emma Davis', role: 'Support', age: 29, active: false },
];

const columns = [
  { field: 'name', headerName: 'Name of Person', width: 200 },
  { field: 'role', headerName: 'Role', width: 160 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 120,
    align: 'right' as const,
  },
  {
    field: 'active',
    headerName: 'Active',
    type: 'boolean',
    width: 120,
    align: 'center' as const,
    renderCell: ({ value }) => (
      <Checkbox
        checked={!!value}
        disabled
      />
    ),
  },
];

export const DataGridBasicDemo: React.FC = () => {
  return (
    <div className="w-full">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
};
