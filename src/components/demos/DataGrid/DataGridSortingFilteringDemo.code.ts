export const DataGridSortingFilteringDemoCode = `
'use client';
import * as React from 'react';
import { DataGrid, Input } from 'twine-ui';

const rows = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  product: \`Item \${i + 1}\`,
  category: ['Food', 'Toys', 'Books', 'Tools'][i % 4],
  price: Number((Math.random() * 100 + 5).toFixed(2)),
}));

const columns = [
  { field: 'product', headerName: 'Product', width: 200, sortable: true },
  { field: 'category', headerName: 'Category', width: 160, sortable: true },
  { field: 'price', headerName: 'Price', type: 'number', width: 140, align: 'right' as const, sortable: true },
];

export const DataGridSortingFilteringDemo: React.FC = () => {
  const [search, setSearch] = React.useState('');

  const filteredRows = React.useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) =>
      r.product.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      String(r.price).toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="space-y-3">
      <div className="max-w-sm">
        <Input
          placeholder="Search…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={8}
        hideToolbar
        enableColumnFilters
        hideGridLines={false}
      />
    </div>
  );
};
`;
