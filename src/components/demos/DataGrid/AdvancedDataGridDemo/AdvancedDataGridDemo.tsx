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
  const [hideRowsPerPage, sethideRowsPerPage] = useState(false);

  const handleShowCheckboxColumnSelectionChange = () => {
    setShowCheckboxColumnSelection(!showCheckboxColumnSelection);
  };

  const handleEnableColumnReorder = () => {
    setEnableColumnReorder(!enableColumnReorder);
  };

  const handleEnableColumnFilters = () => {
    setEnableColumnFilters(!enableColumnFilters);
  };

  const handleHideToolbar = () => {
    setHideToolbar(!hideToolbar);
  };

  const handleHideFooter = () => {
    setHideFooter(!hideFooter);
  };

  const handleHideSearch = () => {
    setHideSearch(!hideSearch);
  };

  const handleHideFilters = () => {
    setHideFilters(!hideFilters);
  };

  const handleHideExport = () => {
    setHideExport(!hideExport);
  };

  const handleHideManageColumns = () => {
    setHideManageColumns(!hideManageColumns);
  };

  const handleHideRowsPerPage = () => {
    sethideRowsPerPage(!hideRowsPerPage);
  };

  return (
    <>
      <div>
        <div className="flex flex-col w-64 flex-1">
          <FormControlLabel
            control={
              <Checkbox
                checked={showCheckboxColumnSelection}
                onChange={handleShowCheckboxColumnSelectionChange}
              />
            }
            label={`${
              showCheckboxColumnSelection ? 'Hide' : 'Show'
            } Checkbox Column`}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={enableColumnReorder}
                onChange={handleEnableColumnReorder}
              />
            }
            label={`${
              enableColumnReorder ? 'Disable' : 'Enable'
            } Column Reorder`}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={enableColumnFilters}
                onChange={handleEnableColumnFilters}
              />
            }
            label={`${
              enableColumnFilters ? 'Disable' : 'Enable'
            } Column Filters`}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={hideToolbar}
                onChange={handleHideToolbar}
              />
            }
            label={`${hideToolbar ? 'Show' : 'Hide'} Toolbar`}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={hideFooter}
                onChange={handleHideFooter}
              />
            }
            label={`${hideFooter ? 'Show' : 'Hide'} Footer`}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={hideSearch}
                onChange={handleHideSearch}
              />
            }
            label={`${hideSearch ? 'Show' : 'Hide'} Search`}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={hideFilters}
                onChange={handleHideFilters}
              />
            }
            label={`${hideFilters ? 'Show' : 'Hide'} Filters`}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={hideExport}
                onChange={handleHideExport}
              />
            }
            label={`${hideExport ? 'Show' : 'Hide'} Export`}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={hideManageColumns}
                onChange={handleHideManageColumns}
              />
            }
            label={`${hideManageColumns ? 'Show' : 'Hide'} Manage Columns`}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={hideRowsPerPage}
                onChange={handleHideRowsPerPage}
              />
            }
            label={`${hideRowsPerPage ? 'Show' : 'Hide'} Rows Per Page`}
          />
        </div>
      </div>

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
          hideFilterLabel
          hideExportLabel
          hideColumnsLabel
        />
      </div>
    </>
  );
};
