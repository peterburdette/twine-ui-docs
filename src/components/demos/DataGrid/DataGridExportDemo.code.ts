export const DataGridExportDemoCode = `'use client';
import * as React from 'react';
import { DataGrid } from 'twine-ui';

const rows = [
  {
    id: 1,
    first: 'Ada',
    last: 'Lovelace',
    role: 'Analyst',
    team: 'R&D',
    location: 'London',
  },
  {
    id: 2,
    first: 'Alan',
    last: 'Turing',
    role: 'Cryptanalyst',
    team: 'Bletchley',
    location: 'Bucks',
  },
  {
    id: 3,
    first: 'Grace',
    last: 'Hopper',
    role: 'Rear Admiral',
    team: 'USN',
    location: 'Arlington',
  },
  {
    id: 4,
    first: 'Katherine',
    last: 'Johnson',
    role: 'Mathematician',
    team: 'NASA',
    location: 'Hampton',
  },
  {
    id: 5,
    first: 'Margaret',
    last: 'Hamilton',
    role: 'Lead Engineer',
    team: 'Apollo',
    location: 'Cambridge',
  },
];

const columns = [
  { field: 'first', headerName: 'First Name', width: 160 },
  { field: 'last', headerName: 'Last Name', width: 160 },
  { field: 'role', headerName: 'Role', width: 180 },
  { field: 'team', headerName: 'Team', width: 140 },
  { field: 'location', headerName: 'Location', width: 160 },
];

export const DataGridExportOnlyDemo: React.FC = () => {
  return (
    <div className="w-full">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        showToolbar
        hideSearch
        hideFilters
        hideColumns
      />
    </div>
  );
};
`;
