export const DataGridEditingDemoCode = `'use client';
import * as React from 'react';
import { DataGrid } from 'twine-ui';

const initial = [
  { id: 1, first: 'Ada', last: 'Lovelace', age: 36 },
  { id: 2, first: 'Alan', last: 'Turing', age: 41 },
  { id: 3, first: 'Grace', last: 'Hopper', age: 85 },
];

const columns = [
  { field: 'first', headerName: 'First Name', width: 180, editable: true },
  { field: 'last', headerName: 'Last Name', width: 180, editable: true },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 120,
    align: 'right' as const,
    editable: true,
  },
];

export const DataGridEditingDemo: React.FC = () => {
  const [rows, setRows] = React.useState(initial);
  return (
    <DataGrid
      rows={rows}
      onRowsChange={setRows}
      columns={columns}
      pageSize={5}
      density="compact"
      hideGridLines={false}
      onCellValueChange={(p) => {
        console.log('Cell changed', p);
      }}
    />
  );
};
`;
