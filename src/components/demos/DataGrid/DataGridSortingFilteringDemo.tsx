'use client';
import * as React from 'react';
import { DataGrid } from 'twine-ui';

const rows = [
  { id: 1, product: 'Apple', category: 'Food', price: 1.25, stock: 120 },
  { id: 2, product: 'Banana', category: 'Food', price: 0.75, stock: 80 },
  { id: 3, product: 'Teddy Bear', category: 'Toys', price: 14.99, stock: 25 },
  { id: 4, product: 'Novel', category: 'Books', price: 9.5, stock: 60 },
  { id: 5, product: 'Hammer', category: 'Tools', price: 19.99, stock: 15 },
  { id: 6, product: 'Notebook', category: 'Books', price: 3.5, stock: 200 },
  { id: 7, product: 'Toy Car', category: 'Toys', price: 7.99, stock: 40 },
  { id: 8, product: 'Screwdriver', category: 'Tools', price: 5.25, stock: 70 },
];

const columns = [
  { field: 'product', headerName: 'Product', width: 200, sortable: true },
  { field: 'category', headerName: 'Category', width: 140, sortable: true },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 120,
    align: 'right' as const,
    sortable: true,
  },
  {
    field: 'stock',
    headerName: 'Stock',
    type: 'number',
    width: 120,
    align: 'right' as const,
    sortable: true,
  },
];

export const DataGridSortingFilteringDemo: React.FC = () => {
  return (
    <div className="w-full">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        showToolbar
        showFooter
        enableColumnFilters
        hideExport
        hideGridLines={false}
      />
    </div>
  );
};
