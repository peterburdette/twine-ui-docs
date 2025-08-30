export const DataGridColumnDragResizeDemoCode = `'use client';
import * as React from 'react';
import { DataGrid } from 'twine-ui';
import { columns } from './columns';
import { rows } from './rows';

export const DataGridColumnDragResizeDemo: React.FC = () => {
  const [rows] = React.useState(rows);

  return (
    <div className="w-full">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        enableColumnReorder
        enableColumnResize
        showFooter
      />
    </div>
  );
};
`;
