import { ApiSpec } from './types';

export const dataGridApi: ApiSpec = {
  component: 'DataGrid',
  props: [
    {
      name: 'rows',
      type: 'GridRowModel[]',
      description:
        'Array of row objects. Each should have a unique id (or provide idField).',
    },
    {
      name: 'columns',
      type: 'Column[]',
      description:
        'Column definitions. Supports headerName, width, type, align, sortable, editable, valueGetter, renderCell.',
    },
    {
      name: 'idField',
      type: 'string',
      default: `'id'`,
      description: 'Alternate field to use as the unique row identifier.',
    },

    {
      name: 'pageSize',
      type: 'number',
      default: '10',
      description: 'Initial rows per page.',
    },
    {
      name: 'pageSizeOptions',
      type: 'number[]',
      default: '[5, 10, 25, 50, 100]',
      description: 'Rows-per-page menu options.',
    },
    {
      name: 'density',
      type: `'compact' | 'standard' | 'comfortable'`,
      default: `'standard'`,
      description: 'Cell and header spacing preset.',
    },

    {
      name: 'checkboxSelection',
      type: 'boolean',
      default: 'false',
      description: 'Show a checkbox column for selection.',
    },
    {
      name: 'checkboxSelectionOnRowClick',
      type: 'boolean',
      default: 'false',
      description:
        'Toggle selection by clicking anywhere on the row (non-interactive cells only).',
    },
    {
      name: 'onSelectionModelChange',
      type: '(ids: string[]) => void',
      description: 'Fires when selection changes (ids are strings).',
    },

    {
      name: 'onSortModelChange',
      type: 'SortModel[]',
      description: 'Fires when sorting changes.',
    },
    {
      name: 'onFilterModelChange',
      type: '(rules: FilterRule[]) => void',
      description: 'Fires when filter rules change.',
    },

    {
      name: 'enableColumnFilters',
      type: 'boolean',
      default: 'false',
      description: 'Adds per-column filter inputs below the header.',
    },
    {
      name: 'enableColumnReorder',
      type: 'boolean',
      default: 'false',
      description: 'Drag headers to reorder columns.',
    },
    {
      name: 'enableColumnResize',
      type: 'boolean',
      default: 'false',
      description: 'Enable manual column resizing from the right edge.',
    },

    {
      name: 'showToolbar',
      type: 'boolean',
      default: 'false',
      description:
        'Render the built-in toolbar (search, filters, export, columns controls).',
    },
    {
      name: 'showFooter',
      type: 'boolean',
      default: 'false',
      description: 'Render the footer with pagination controls.',
    },
    {
      name: 'hideSearch',
      type: 'boolean',
      default: 'false',
      description: 'Hide the search input in the toolbar.',
    },
    {
      name: 'hideFilters',
      type: 'boolean',
      default: 'false',
      description: 'Hide the filters button in the toolbar.',
    },
    {
      name: 'hideExport',
      type: 'boolean',
      default: 'false',
      description: 'Hide the export button in the toolbar.',
    },
    {
      name: 'hideColumns',
      type: 'boolean',
      default: 'false',
      description: 'Hide the columns button in the toolbar.',
    },
    {
      name: 'hideFilterLabel',
      type: 'boolean',
      default: 'false',
      description: 'Hide the “Filters” label next to the filters button.',
    },
    {
      name: 'hideExportLabel',
      type: 'boolean',
      default: 'false',
      description: 'Hide the “Export” label next to the export button.',
    },
    {
      name: 'hideColumnsLabel',
      type: 'boolean',
      default: 'false',
      description: 'Hide the “Columns” label next to the columns button.',
    },
    {
      name: 'hideRowsPerPage',
      type: 'boolean',
      default: 'false',
      description: 'Hide “Rows per page” selector in the footer.',
    },
    {
      name: 'hideGridLines',
      type: 'boolean',
      default: 'false',
      description: 'Hide inner cell borders.',
    },

    {
      name: 'noDataMessage',
      type: 'string | React.ReactNode',
      default: `'No data available'`,
      description: 'Content to display when no rows match.',
    },

    {
      name: 'apiRef',
      type: 'React.MutableRefObject<GridApiRef | null>',
      description: 'Access the grid API methods imperatively.',
    },
    {
      name: 'onCellValueChange',
      type: '({ id, field, value }: { id: string | number; field: string; value: any; }) => void',
      description: 'Called after an edit is committed for an editable cell.',
    },
    {
      name: 'onRowsChange',
      type: '(rows: GridRowModel[]) => void',
      description:
        'Called when the internal rows state changes (e.g., edits). Use to control rows from the outside.',
    },

    {
      name: 'className',
      type: 'string',
      description: 'Tailwind utility classes for the root container.',
    },
  ],
};
