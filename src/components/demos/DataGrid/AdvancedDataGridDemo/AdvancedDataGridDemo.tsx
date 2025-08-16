'use client';

import * as React from 'react';
import { DataGrid } from 'twine-ui';
import { demoData } from '../data';
import { demoColumns } from '../columns';

export const AdvancedDataGridDemo = () => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <DataGrid
        rows={demoData}
        columns={demoColumns}
        enableColumnReorder
        hideFilterLabel
        hideExportLabel
        hideColumnsLabel
      />
    </div>
  );
};
