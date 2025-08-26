import type { Column } from 'twine-ui';

export const apiColumns: Column[] = [
  {
    field: 'name',
    headerName: 'Prop',
    sortable: false,
    renderCell: (params) => {
      const { value, row } = params;
      return (
        <div className="whitespace-normal break-words">
          <span className="font-medium">{String(value)}</span>
          {row.required ? (
            <span className="ml-2 inline-block rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              required
            </span>
          ) : null}
        </div>
      );
    },
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 150,
    sortable: false,
    renderCell: (params) => (
      <div className="whitespace-normal break-words text-xs">
        <code className="rounded bg-muted/40 px-1.5 py-0.5">
          {String(params.value)}
        </code>
      </div>
    ),
  },
  {
    field: 'default',
    headerName: 'Default',
    sortable: false,
    renderCell: (params) =>
      params.value ? (
        <code className="rounded bg-muted/40 px-1.5 py-0.5 whitespace-normal break-words text-xs">
          {String(params.value)}
        </code>
      ) : (
        <span className="text-muted-foreground">—</span>
      ),
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 340,
    sortable: false,
    renderCell: (params) => (
      <div className="whitespace-normal break-words">
        {String(params.value ?? '')}
      </div>
    ),
  },
];
