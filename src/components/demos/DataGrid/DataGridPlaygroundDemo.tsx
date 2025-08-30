'use client';
import * as React from 'react';
import {
  DataGrid,
  Checkbox,
  Select,
  FormControlLabel,
  Input,
  Button,
} from 'twine-ui';

type Density = 'compact' | 'standard' | 'comfortable';
type PresetKey = 'default' | 'readonlyCompact' | 'spreadsheet' | 'minimal';

const baseColumns = [
  { field: 'id', headerName: 'ID', width: 80, align: 'right' as const },
  { field: 'first', headerName: 'First', width: 160, editable: true },
  { field: 'last', headerName: 'Last', width: 160, editable: true },
  { field: 'role', headerName: 'Role', width: 160 },
  { field: 'team', headerName: 'Team', width: 160 },
  { field: 'location', headerName: 'Location', width: 180 },
];

const seedRows = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  first: ['Ada', 'Alan', 'Grace', 'Linus', 'Margaret', 'Katherine'][i % 6],
  last: ['Lovelace', 'Turing', 'Hopper', 'Torvalds', 'Hamilton', 'Johnson'][
    i % 6
  ],
  role: ['Engineer', 'Analyst', 'Manager', 'Designer'][i % 4],
  team: ['Core', 'Platform', 'UI', 'Data'][i % 4],
  location: ['Austin, TX', 'Denver, CO', 'Raleigh, NC', 'Portland, OR'][i % 4],
}));

// Centralized defaults so Reset/Preset can reuse them
const DEFAULTS = {
  showToolbar: true,
  showFooter: true,
  checkboxSelection: true,
  selectOnRowClick: false,
  enableColumnReorder: true,
  enableColumnResize: true,
  enableColumnFilters: true,
  editingEnabled: false as boolean, // OFF by default
  hideSearch: false,
  hideFilters: false,
  hideExport: false,
  hideColumns: false,
  hideFilterLabel: false,
  hideExportLabel: false,
  hideColumnsLabel: false,
  density: 'standard' as Density,
  pageSize: 10,
  hideGridLines: false,
  hideRowsPerPage: false,
  noDataMessage: 'No data available',
};

export const DataGridPlaygroundDemo: React.FC = () => {
  // Data (kept editable)
  const [rows, setRows] = React.useState(seedRows);

  // ==== Top-level “Basics” (always visible) ====
  const [showToolbar, setShowToolbar] = React.useState(DEFAULTS.showToolbar);
  const [showFooter, setShowFooter] = React.useState(DEFAULTS.showFooter);
  const [density, setDensity] = React.useState<Density>(DEFAULTS.density);
  const [pageSize, setPageSize] = React.useState<number>(DEFAULTS.pageSize);

  // Common quick toggles (kept up-top)
  const [checkboxSelection, setCheckboxSelection] = React.useState(
    DEFAULTS.checkboxSelection
  );
  const [enableColumnFilters, setEnableColumnFilters] = React.useState(
    DEFAULTS.enableColumnFilters
  );
  const [editingEnabled, setEditingEnabled] = React.useState(
    DEFAULTS.editingEnabled
  );

  // ==== Advanced (collapsed by default) ====
  const [showAdvanced, setShowAdvanced] = React.useState(false);

  // Column features
  const [enableColumnReorder, setEnableColumnReorder] = React.useState(
    DEFAULTS.enableColumnReorder
  );
  const [enableColumnResize, setEnableColumnResize] = React.useState(
    DEFAULTS.enableColumnResize
  );

  // Selection behavior
  const [selectOnRowClick, setSelectOnRowClick] = React.useState(
    DEFAULTS.selectOnRowClick
  );

  // Toolbar sections visibility
  const [hideSearch, setHideSearch] = React.useState(DEFAULTS.hideSearch);
  const [hideFilters, setHideFilters] = React.useState(DEFAULTS.hideFilters);
  const [hideExport, setHideExport] = React.useState(DEFAULTS.hideExport);
  const [hideColumns, setHideColumns] = React.useState(DEFAULTS.hideColumns);

  // Toolbar label visibility
  const [hideFilterLabel, setHideFilterLabel] = React.useState(
    DEFAULTS.hideFilterLabel
  );
  const [hideExportLabel, setHideExportLabel] = React.useState(
    DEFAULTS.hideExportLabel
  );
  const [hideColumnsLabel, setHideColumnsLabel] = React.useState(
    DEFAULTS.hideColumnsLabel
  );

  // Visual & footer & empty-state
  const [hideGridLines, setHideGridLines] = React.useState(
    DEFAULTS.hideGridLines
  );
  const [hideRowsPerPage, setHideRowsPerPage] = React.useState(
    DEFAULTS.hideRowsPerPage
  );
  const [noDataMessage, setNoDataMessage] = React.useState(
    DEFAULTS.noDataMessage
  );

  // Column visibility (+ global editing toggle)
  const [visibleFields, setVisibleFields] = React.useState<string[]>(
    baseColumns.map((c) => c.field)
  );

  // Derived columns (apply global editing switch)
  const columns = React.useMemo(() => {
    const filtered = baseColumns.filter((c) => visibleFields.includes(c.field));
    return filtered.map((c) => ({ ...c, editable: editingEnabled }));
  }, [visibleFields, editingEnabled]);

  const toggleField = (field: string) => {
    setVisibleFields((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]
    );
  };

  // ==== Presets ====
  const [preset, setPreset] = React.useState<PresetKey>('default');

  const applyPreset = (p: PresetKey) => {
    setPreset(p);
    switch (p) {
      case 'default': {
        // Reset to defaults
        setShowToolbar(DEFAULTS.showToolbar);
        setShowFooter(DEFAULTS.showFooter);
        setDensity(DEFAULTS.density);
        setPageSize(DEFAULTS.pageSize);
        setCheckboxSelection(DEFAULTS.checkboxSelection);
        setEnableColumnFilters(DEFAULTS.enableColumnFilters);
        setEditingEnabled(DEFAULTS.editingEnabled);
        setEnableColumnReorder(DEFAULTS.enableColumnReorder);
        setEnableColumnResize(DEFAULTS.enableColumnResize);
        setSelectOnRowClick(DEFAULTS.selectOnRowClick);
        setHideSearch(DEFAULTS.hideSearch);
        setHideFilters(DEFAULTS.hideFilters);
        setHideExport(DEFAULTS.hideExport);
        setHideColumns(DEFAULTS.hideColumns);
        setHideFilterLabel(DEFAULTS.hideFilterLabel);
        setHideExportLabel(DEFAULTS.hideExportLabel);
        setHideColumnsLabel(DEFAULTS.hideColumnsLabel);
        setHideGridLines(DEFAULTS.hideGridLines);
        setHideRowsPerPage(DEFAULTS.hideRowsPerPage);
        setNoDataMessage(DEFAULTS.noDataMessage);
        setVisibleFields(baseColumns.map((c) => c.field));
        break;
      }
      case 'readonlyCompact': {
        setShowToolbar(true);
        setShowFooter(true);
        setDensity('compact');
        setPageSize(10);
        setCheckboxSelection(false);
        setEnableColumnFilters(false);
        setEditingEnabled(false);
        setEnableColumnReorder(true);
        setEnableColumnResize(true);
        setSelectOnRowClick(false);
        setHideSearch(false);
        setHideFilters(true);
        setHideExport(false);
        setHideColumns(true);
        setHideFilterLabel(true);
        setHideExportLabel(true);
        setHideColumnsLabel(true);
        setHideGridLines(false);
        setHideRowsPerPage(false);
        setNoDataMessage(DEFAULTS.noDataMessage);
        setVisibleFields(baseColumns.map((c) => c.field));
        break;
      }
      case 'spreadsheet': {
        setShowToolbar(true);
        setShowFooter(true);
        setDensity('comfortable');
        setPageSize(25);
        setCheckboxSelection(true);
        setEnableColumnFilters(false);
        setEditingEnabled(true);
        setEnableColumnReorder(true);
        setEnableColumnResize(true);
        setSelectOnRowClick(false);
        setHideSearch(true);
        setHideFilters(true);
        setHideExport(true);
        setHideColumns(true);
        setHideFilterLabel(true);
        setHideExportLabel(true);
        setHideColumnsLabel(true);
        setHideGridLines(false);
        setHideRowsPerPage(false);
        setNoDataMessage(DEFAULTS.noDataMessage);
        setVisibleFields(baseColumns.map((c) => c.field));
        break;
      }
      case 'minimal': {
        setShowToolbar(false);
        setShowFooter(false);
        setDensity('standard');
        setPageSize(10);
        setCheckboxSelection(false);
        setEnableColumnFilters(false);
        setEditingEnabled(false);
        setEnableColumnReorder(false);
        setEnableColumnResize(false);
        setSelectOnRowClick(false);
        setHideSearch(true);
        setHideFilters(true);
        setHideExport(true);
        setHideColumns(true);
        setHideFilterLabel(true);
        setHideExportLabel(true);
        setHideColumnsLabel(true);
        setHideGridLines(true);
        setHideRowsPerPage(true);
        setNoDataMessage('No data');
        setVisibleFields(['id', 'first', 'last']);
        break;
      }
    }
  };

  const resetAll = () => applyPreset('default');

  return (
    <div className="w-full space-y-4">
      {/* Control bar (compact): Preset + Show Advanced + Reset */}
      <div className="rounded-lg border p-3 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">Preset</span>
          <Select
            options={[
              { value: 'default', label: 'Default' },
              { value: 'readonlyCompact', label: 'Read-only Compact' },
              { value: 'spreadsheet', label: 'Spreadsheet' },
              { value: 'minimal', label: 'Minimal' },
            ]}
            value={preset}
            onChange={(v) => applyPreset(v as PresetKey)}
          />
        </div>

        <FormControlLabel label="Show advanced controls">
          <Checkbox
            checked={showAdvanced}
            onChange={(e) => setShowAdvanced(e.target.checked)}
            size="md"
          />
        </FormControlLabel>

        <Button
          variant="outlined"
          onClick={resetAll}
          className="ml-auto inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50"
          aria-label="Reset all settings to defaults"
        >
          Reset
        </Button>
      </div>

      {/* Basics row: frequently used controls, always visible */}
      <div className="rounded-lg border p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Grid basics */}
        <fieldset className="space-y-3 flex flex-col">
          <div className="font-medium">Basics</div>
          <FormControlLabel label="Show toolbar">
            <Checkbox
              checked={showToolbar}
              onChange={(e) => setShowToolbar(e.target.checked)}
              size="md"
            />
          </FormControlLabel>
          <FormControlLabel label="Show footer">
            <Checkbox
              checked={showFooter}
              onChange={(e) => setShowFooter(e.target.checked)}
              size="md"
            />
          </FormControlLabel>
          <FormControlLabel label="Enable editing">
            <Checkbox
              checked={editingEnabled}
              onChange={(e) => setEditingEnabled(e.target.checked)}
              size="md"
            />
          </FormControlLabel>
        </fieldset>

        {/* Quick selection & filters */}
        <fieldset className="space-y-3 flex flex-col">
          <div className="font-medium">Selection & Filters</div>
          <FormControlLabel label="Checkbox selection">
            <Checkbox
              checked={checkboxSelection}
              onChange={(e) => setCheckboxSelection(e.target.checked)}
              size="md"
            />
          </FormControlLabel>
          <FormControlLabel label="Toggle on row click">
            <Checkbox
              checked={selectOnRowClick}
              onChange={(e) => setSelectOnRowClick(e.target.checked)}
              size="md"
            />
          </FormControlLabel>
          <FormControlLabel label="Per-column filters row">
            <Checkbox
              checked={enableColumnFilters}
              onChange={(e) => setEnableColumnFilters(e.target.checked)}
              size="md"
            />
          </FormControlLabel>
        </fieldset>

        {/* Layout essentials */}
        <fieldset className="space-y-3 flex flex-col">
          <div className="font-medium">Layout</div>

          <div className="flex items-center justify-between gap-3">
            <span>Density</span>
            <Select
              options={[
                { value: 'compact', label: 'compact' },
                { value: 'standard', label: 'standard' },
                { value: 'comfortable', label: 'comfortable' },
              ]}
              value={density}
              onChange={(v) => setDensity(v as Density)}
              fixedTriggerWidth={160}
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            <span>Page size</span>
            <Select
              options={[5, 10, 25, 50].map((n) => ({
                value: String(n),
                label: String(n),
              }))}
              value={String(pageSize)}
              onChange={(v) => setPageSize(Number(v))}
              fixedTriggerWidth={160}
            />
          </div>
        </fieldset>
      </div>

      {/* Advanced controls (collapsible) */}
      {showAdvanced && (
        <div className="rounded-lg border p-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Columns */}
          <fieldset className="space-y-3 flex flex-col">
            <div className="font-medium">Columns</div>
            <FormControlLabel label="Enable column reorder">
              <Checkbox
                checked={enableColumnReorder}
                onChange={(e) => setEnableColumnReorder(e.target.checked)}
                size="md"
              />
            </FormControlLabel>
            <FormControlLabel label="Enable column resize">
              <Checkbox
                checked={enableColumnResize}
                onChange={(e) => setEnableColumnResize(e.target.checked)}
                size="md"
              />
            </FormControlLabel>

            <div className="pt-1 space-y-2">
              <div className="text-sm text-gray-600">Visible columns</div>
              <div className="flex flex-wrap gap-2">
                {baseColumns.map((c) => (
                  <label
                    key={c.field}
                    className="inline-flex items-center gap-2 border px-2 py-1 rounded"
                  >
                    <Checkbox
                      checked={visibleFields.includes(c.field)}
                      onChange={() => toggleField(c.field)}
                      size="sm"
                    />
                    <span className="text-sm">{c.headerName}</span>
                  </label>
                ))}
              </div>
            </div>
          </fieldset>

          {/* Toolbar */}
          <fieldset className="space-y-3 flex flex-col">
            <div className="font-medium">Toolbar</div>

            <div className="space-y-3 flex flex-col">
              <div className="text-sm text-gray-600">Sections</div>
              <FormControlLabel label="Hide search">
                <Checkbox
                  checked={hideSearch}
                  onChange={(e) => setHideSearch(e.target.checked)}
                  size="md"
                />
              </FormControlLabel>
              <FormControlLabel label="Hide filters menu">
                <Checkbox
                  checked={hideFilters}
                  onChange={(e) => setHideFilters(e.target.checked)}
                  size="md"
                />
              </FormControlLabel>
              <FormControlLabel label="Hide export menu">
                <Checkbox
                  checked={hideExport}
                  onChange={(e) => setHideExport(e.target.checked)}
                  size="md"
                />
              </FormControlLabel>
              <FormControlLabel label="Hide columns menu">
                <Checkbox
                  checked={hideColumns}
                  onChange={(e) => setHideColumns(e.target.checked)}
                  size="md"
                />
              </FormControlLabel>
            </div>

            <div className="pt-2 border-t space-y-3 flex flex-col">
              <div className="text-sm text-gray-600">Labels</div>
              <FormControlLabel label="Hide filter label">
                <Checkbox
                  checked={hideFilterLabel}
                  onChange={(e) => setHideFilterLabel(e.target.checked)}
                  size="md"
                />
              </FormControlLabel>
              <FormControlLabel label="Hide export label">
                <Checkbox
                  checked={hideExportLabel}
                  onChange={(e) => setHideExportLabel(e.target.checked)}
                  size="md"
                />
              </FormControlLabel>
              <FormControlLabel label="Hide columns label">
                <Checkbox
                  checked={hideColumnsLabel}
                  onChange={(e) => setHideColumnsLabel(e.target.checked)}
                  size="md"
                />
              </FormControlLabel>
            </div>
          </fieldset>

          {/* Visuals */}
          <fieldset className="space-y-3 flex flex-col">
            <div className="font-medium">Visuals</div>
            <FormControlLabel label="Hide grid lines">
              <Checkbox
                checked={hideGridLines}
                onChange={(e) => setHideGridLines(e.target.checked)}
                size="md"
              />
            </FormControlLabel>
          </fieldset>

          {/* Footer & Empty state */}
          <fieldset className="space-y-3 flex flex-col">
            <div className="font-medium">Footer & Empty State</div>
            <FormControlLabel label="Hide rows-per-page selector">
              <Checkbox
                checked={hideRowsPerPage}
                onChange={(e) => setHideRowsPerPage(e.target.checked)}
                size="md"
              />
            </FormControlLabel>

            <FormControlLabel
              label="No data message"
              labelPlacement="top"
              className="w-full"
            >
              <Input
                value={noDataMessage}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNoDataMessage(e.target.value)
                }
                fullWidth
              />
            </FormControlLabel>
          </fieldset>
        </div>
      )}

      {/* Live Grid */}
      <div className="w-full">
        <DataGrid
          key={`pg-${pageSize}`} // ensure pageSize changes take effect
          rows={rows}
          onRowsChange={setRows}
          columns={columns}
          pageSize={pageSize}
          pageSizeOptions={[5, 10, 25, 50]}
          density={density}
          showToolbar={showToolbar}
          showFooter={showFooter}
          checkboxSelection={checkboxSelection}
          checkboxSelectionOnRowClick={selectOnRowClick}
          enableColumnReorder={enableColumnReorder}
          enableColumnResize={enableColumnResize}
          enableColumnFilters={enableColumnFilters}
          hideSearch={hideSearch}
          hideFilters={hideFilters}
          hideExport={hideExport}
          hideColumns={hideColumns}
          hideFilterLabel={hideFilterLabel}
          hideExportLabel={hideExportLabel}
          hideColumnsLabel={hideColumnsLabel}
          hideGridLines={hideGridLines}
          hideRowsPerPage={hideRowsPerPage}
          noDataMessage={noDataMessage}
        />
      </div>
    </div>
  );
};
