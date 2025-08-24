'use client';

import * as React from 'react';
import { Checkbox, DataGrid, FormControlLabel } from 'twine-ui';
import { demoData } from '../data';
import { demoColumns } from '../columns';
import { useState } from 'react';

export const AdvancedDataGridDemo = () => {
  const [showCheckboxColumnSelection, setShowCheckboxColumnSelection] =
    useState(false);
  const [enableColumnReorder, setEnableColumnReorder] = useState(false);
  const [enableColumnFilters, setEnableColumnFilters] = useState(false);
  const [hideToolbar, setHideToolbar] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);
  const [hideSearch, setHideSearch] = useState(false);
  const [hideFilters, setHideFilters] = useState(false);
  const [hideExport, setHideExport] = useState(false);
  const [hideManageColumns, setHideManageColumns] = useState(false);
  const [hideRowsPerPage, setHideRowsPerPage] = useState(false);
  const [hideGridLines, setHideGridLines] = useState(false);
  const [hideLabels, setHideLabels] = useState(false);

  return (
    <div className="flex flex-col w-64 flex-1">
      {/* Options grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 mb-10">
        <FormControlLabel
          label={`${
            showCheckboxColumnSelection ? 'Hide' : 'Show'
          } Checkbox Column`}
        >
          <Checkbox
            checked={showCheckboxColumnSelection}
            onChange={() =>
              setShowCheckboxColumnSelection(!showCheckboxColumnSelection)
            }
          />
        </FormControlLabel>

        <FormControlLabel
          label={`${enableColumnReorder ? 'Disable' : 'Enable'} Column Reorder`}
        >
          <Checkbox
            checked={enableColumnReorder}
            onChange={() => setEnableColumnReorder(!enableColumnReorder)}
          />
        </FormControlLabel>

        <FormControlLabel
          label={`${enableColumnFilters ? 'Disable' : 'Enable'} Column Filters`}
        >
          <Checkbox
            checked={enableColumnFilters}
            onChange={() => setEnableColumnFilters(!enableColumnFilters)}
          />
        </FormControlLabel>

        <FormControlLabel label={`${hideToolbar ? 'Show' : 'Hide'} Toolbar`}>
          <Checkbox
            checked={hideToolbar}
            onChange={() => setHideToolbar(!hideToolbar)}
          />
        </FormControlLabel>

        <FormControlLabel label={`${hideFooter ? 'Show' : 'Hide'} Footer`}>
          <Checkbox
            checked={hideFooter}
            onChange={() => setHideFooter(!hideFooter)}
          />
        </FormControlLabel>

        <FormControlLabel label={`${hideSearch ? 'Show' : 'Hide'} Search`}>
          <Checkbox
            checked={hideSearch}
            onChange={() => setHideSearch(!hideSearch)}
          />
        </FormControlLabel>

        <FormControlLabel label={`${hideFilters ? 'Show' : 'Hide'} Filters`}>
          <Checkbox
            checked={hideFilters}
            onChange={() => setHideFilters(!hideFilters)}
          />
        </FormControlLabel>

        <FormControlLabel label={`${hideExport ? 'Show' : 'Hide'} Export`}>
          <Checkbox
            checked={hideExport}
            onChange={() => setHideExport(!hideExport)}
          />
        </FormControlLabel>

        <FormControlLabel
          label={`${hideManageColumns ? 'Show' : 'Hide'} Manage Columns`}
        >
          <Checkbox
            checked={hideManageColumns}
            onChange={() => setHideManageColumns(!hideManageColumns)}
          />
        </FormControlLabel>

        <FormControlLabel
          label={`${hideRowsPerPage ? 'Show' : 'Hide'} Rows Per Page`}
        >
          <Checkbox
            checked={hideRowsPerPage}
            onChange={() => setHideRowsPerPage(!hideRowsPerPage)}
          />
        </FormControlLabel>

        <FormControlLabel
          label={`${hideGridLines ? 'Show' : 'Hide'} Grid Lines`}
        >
          <Checkbox
            checked={hideGridLines}
            onChange={() => setHideGridLines(!hideGridLines)}
          />
        </FormControlLabel>

        <FormControlLabel
          label={`${hideLabels ? 'Show' : 'Hide'} Button Labels`}
        >
          <Checkbox
            checked={hideLabels}
            onChange={() => setHideLabels(!hideLabels)}
          />
        </FormControlLabel>
      </div>

      {/* DataGrid */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <DataGrid
          rows={demoData}
          columns={demoColumns}
          checkboxSelection={showCheckboxColumnSelection}
          enableColumnReorder={enableColumnReorder}
          enableColumnFilters={enableColumnFilters}
          hideToolbar={hideToolbar}
          hideFooter={hideFooter}
          hideSearch={hideSearch}
          hideFilters={hideFilters}
          hideExport={hideExport}
          hideColumns={hideManageColumns}
          hideRowsPerPage={hideRowsPerPage}
          hideFilterLabel={hideLabels}
          hideExportLabel={hideLabels}
          hideColumnsLabel={hideLabels}
          hideGridLines={hideGridLines}
          pageSize={5}
        />
      </div>
    </div>
  );
};
