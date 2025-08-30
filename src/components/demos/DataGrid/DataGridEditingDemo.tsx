'use client';
import * as React from 'react';
import { DataGrid } from 'twine-ui';

const initial = [
  {
    id: 1,
    first: 'Ada',
    last: 'Lovelace',
    age: 36,
    email: 'ada@math.org',
    role: 'Analyst',
  },
  {
    id: 2,
    first: 'Alan',
    last: 'Turing',
    age: 41,
    email: 'alan@crypto.uk',
    role: 'Researcher',
  },
  {
    id: 3,
    first: 'Grace',
    last: 'Hopper',
    age: 85,
    email: 'grace@navy.mil',
    role: 'Engineer',
  },
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
  { field: 'email', headerName: 'Email', width: 240, editable: true },
  { field: 'role', headerName: 'Role', width: 160, editable: true },
];

export const DataGridEditingDemo: React.FC = () => {
  const [rows, setRows] = React.useState(initial);

  return (
    <div className="w-full">
      <DataGrid
        rows={rows}
        onRowsChange={setRows}
        columns={columns}
        pageSize={5}
        onCellValueChange={(p) => {
          console.log('Cell changed', p);
        }}
      />
    </div>
  );
};
