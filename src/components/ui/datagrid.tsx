'use client';

import type React from 'react';
import { useState, useMemo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ChevronUp,
  ChevronDown,
  Search,
  Filter,
  Download,
  Settings,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { X, Plus, Eye, EyeOff } from 'lucide-react';

export interface FilterRule {
  id: string;
  field: string;
  operator: string;
  value: string;
}

export interface ColumnVisibility {
  [key: string]: boolean;
}

export interface Column {
  field: string;
  headerName: string;
  width?: number;
  minWidth?: number;
  flex?: number;
  sortable?: boolean;
  filterable?: boolean;
  resizable?: boolean;
  renderCell?: (params: {
    value: any;
    row: any;
    field: string;
  }) => React.ReactNode;
  type?: 'string' | 'number' | 'date' | 'boolean';
  align?: 'left' | 'center' | 'right';
}

export interface DataGridProps {
  rows: any[];
  columns: Column[];
  pageSize?: number;
  pageSizeOptions?: number[];
  checkboxSelection?: boolean;
  disableSelectionOnClick?: boolean;
  loading?: boolean;
  onSelectionModelChange?: (selectionModel: string[]) => void;
  onSortModelChange?: (
    sortModel: { field: string; sort: 'asc' | 'desc' }[]
  ) => void;
  onFilterModelChange?: (filterModel: FilterRule[]) => void;
  className?: string;
  // New props for toolbar and footer control
  hideToolbar?: boolean;
  hideFooter?: boolean;
  hideSearch?: boolean;
  hideFilters?: boolean;
  hideExport?: boolean;
  hideColumns?: boolean;
  hidePagination?: boolean;
  density?: 'compact' | 'standard' | 'comfortable';
  disableColumnFilter?: boolean;
  disableColumnMenu?: boolean;
  // New props for hiding button labels
  hideFilterLabel?: boolean;
  hideExportLabel?: boolean;
  hideColumnsLabel?: boolean;
}

interface SortModel {
  field: string;
  sort: 'asc' | 'desc';
}

export function DataGrid({
  rows,
  columns,
  pageSize = 10,
  pageSizeOptions = [5, 10, 25, 50],
  checkboxSelection = false,
  disableSelectionOnClick = false,
  loading = false,
  onSelectionModelChange,
  onSortModelChange,
  onFilterModelChange,
  className = '',
  hideToolbar = false,
  hideFooter = false,
  hideSearch = false,
  hideFilters = false,
  hideExport = false,
  hideColumns = false,
  hidePagination = false,
  density = 'standard',
  disableColumnFilter = false,
  disableColumnMenu = false,
  hideFilterLabel = false,
  hideExportLabel = false,
  hideColumnsLabel = false,
}: DataGridProps) {
  const [page, setPage] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(pageSize);
  const [sortModel, setSortModel] = useState<SortModel[]>([]);
  const [filterModel, setFilterModel] = useState<Record<string, string>>({});
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});

  const [filterRules, setFilterRules] = useState<FilterRule[]>([]);
  const [tempFilterRules, setTempFilterRules] = useState<FilterRule[]>([]);
  const [columnVisibility, setColumnVisibility] = useState<ColumnVisibility>(
    columns.reduce((acc, col) => ({ ...acc, [col.field]: true }), {})
  );
  const [showFilterDialog, setShowFilterDialog] = useState(false);
  const [showColumnDialog, setShowColumnDialog] = useState(false);
  const [tempColumnVisibility, setTempColumnVisibility] =
    useState<ColumnVisibility>({});

  const getDensityClasses = () => {
    switch (density) {
      case 'compact':
        return 'text-xs';
      case 'comfortable':
        return 'text-base';
      default:
        return 'text-sm';
    }
  };

  const getCellPadding = () => {
    switch (density) {
      case 'compact':
        return 'p-1';
      case 'comfortable':
        return 'p-3';
      default:
        return 'p-2';
    }
  };

  // Filter and sort data
  const processedRows = useMemo(() => {
    let filtered = rows;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter((row) =>
        Object.values(row).some((value) =>
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Apply advanced filter rules - only apply rules with values
    filterRules
      .filter((rule) => rule.value && rule.value.trim() !== '') // Only apply non-empty filters
      .forEach((rule) => {
        filtered = filtered.filter((row) => {
          const cellValue = String(row[rule.field]).toLowerCase();
          const filterValue = rule.value.toLowerCase();

          switch (rule.operator) {
            case 'contains':
              return cellValue.includes(filterValue);
            case 'equals':
              return cellValue === filterValue;
            case 'startsWith':
              return cellValue.startsWith(filterValue);
            case 'endsWith':
              return cellValue.endsWith(filterValue);
            case 'isEmpty':
              return !cellValue || cellValue.trim() === '';
            case 'isNotEmpty':
              return cellValue && cellValue.trim() !== '';
            default:
              return cellValue.includes(filterValue);
          }
        });
      });

    // Apply column filters (keep existing logic)
    Object.entries(filterModel).forEach(([field, filterValue]) => {
      if (filterValue) {
        filtered = filtered.filter((row) =>
          String(row[field]).toLowerCase().includes(filterValue.toLowerCase())
        );
      }
    });

    // Apply sorting (keep existing logic)
    if (sortModel.length > 0) {
      filtered = [...filtered].sort((a, b) => {
        for (const sort of sortModel) {
          const aVal = a[sort.field];
          const bVal = b[sort.field];

          let comparison = 0;
          if (aVal < bVal) comparison = -1;
          if (aVal > bVal) comparison = 1;

          if (comparison !== 0) {
            return sort.sort === 'asc' ? comparison : -comparison;
          }
        }
        return 0;
      });
    }

    return filtered;
  }, [rows, searchQuery, filterModel, sortModel, filterRules]);

  // Pagination
  const paginatedRows = useMemo(() => {
    const startIndex = page * currentPageSize;
    return processedRows.slice(startIndex, startIndex + currentPageSize);
  }, [processedRows, page, currentPageSize]);

  const totalPages = Math.ceil(processedRows.length / currentPageSize);

  // Handle sorting
  const handleSort = useCallback(
    (field: string) => {
      const existingSort = sortModel.find((s) => s.field === field);
      let newSortModel: SortModel[];

      if (!existingSort) {
        newSortModel = [{ field, sort: 'asc' }];
      } else if (existingSort.sort === 'asc') {
        newSortModel = [{ field, sort: 'desc' }];
      } else {
        newSortModel = sortModel.filter((s) => s.field !== field);
      }

      setSortModel(newSortModel);
      onSortModelChange?.(newSortModel);
    },
    [sortModel, onSortModelChange]
  );

  // Handle row selection
  const handleRowSelection = useCallback(
    (rowId: string, checked: boolean) => {
      const newSelection = new Set(selectedRows);
      if (checked) {
        newSelection.add(rowId);
      } else {
        newSelection.delete(rowId);
      }
      setSelectedRows(newSelection);
      onSelectionModelChange?.(Array.from(newSelection));
    },
    [selectedRows, onSelectionModelChange]
  );

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (checked) {
        const allIds = new Set(paginatedRows.map((row) => row.id));
        setSelectedRows(allIds);
        onSelectionModelChange?.(Array.from(allIds));
      } else {
        setSelectedRows(new Set());
        onSelectionModelChange?.([]);
      }
    },
    [paginatedRows, onSelectionModelChange]
  );

  // Handle column resizing
  const handleColumnResize = useCallback((field: string, width: number) => {
    setColumnWidths((prev) => ({ ...prev, [field]: width }));
  }, []);

  const getColumnWidth = (column: Column) => {
    return columnWidths[column.field] || column.width || 150;
  };

  const getSortIcon = (field: string) => {
    const sort = sortModel.find((s) => s.field === field);
    if (!sort) return null;
    return sort.sort === 'asc' ? (
      <ChevronUp className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    );
  };

  // Export functions
  const exportToCSV = useCallback(() => {
    const visibleColumns = columns.filter(
      (col) => columnVisibility[col.field] && col.field !== 'actions'
    );
    const dataToExport =
      selectedRows.size > 0
        ? processedRows.filter((row) => selectedRows.has(row.id))
        : processedRows;

    const headers = visibleColumns.map((col) => col.headerName).join(',');
    const csvContent = dataToExport
      .map((row) =>
        visibleColumns
          .map((col) => {
            const value = row[col.field];
            return typeof value === 'string' && value.includes(',')
              ? `"${value}"`
              : value;
          })
          .join(',')
      )
      .join('\n');

    const blob = new Blob([headers + '\n' + csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data-export.csv';
    a.click();
    URL.revokeObjectURL(url);
  }, [columns, columnVisibility, processedRows, selectedRows]);

  const exportToJSON = useCallback(() => {
    const visibleColumns = columns.filter(
      (col) => columnVisibility[col.field] && col.field !== 'actions'
    );
    const dataToExport =
      selectedRows.size > 0
        ? processedRows.filter((row) => selectedRows.has(row.id))
        : processedRows;

    const jsonData = dataToExport.map((row) =>
      visibleColumns.reduce(
        (acc, col) => ({
          ...acc,
          [col.field]: row[col.field],
        }),
        {}
      )
    );

    const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data-export.json';
    a.click();
    URL.revokeObjectURL(url);
  }, [columns, columnVisibility, processedRows, selectedRows]);

  // Filter functions
  const addTempFilterRule = useCallback(() => {
    const newRule: FilterRule = {
      id: Date.now().toString(),
      field: columns[0]?.field || '',
      operator: 'contains',
      value: '',
    };
    setTempFilterRules((prev) => [...prev, newRule]);
  }, [columns]);

  const updateTempFilterRule = useCallback(
    (id: string, updates: Partial<FilterRule>) => {
      setTempFilterRules((prev) =>
        prev.map((rule) => (rule.id === id ? { ...rule, ...updates } : rule))
      );
    },
    []
  );

  const removeTempFilterRule = useCallback((id: string) => {
    setTempFilterRules((prev) => prev.filter((rule) => rule.id !== id));
  }, []);

  const applyFilterChanges = useCallback(() => {
    // Only apply filters that have values
    const validFilters = tempFilterRules.filter(
      (rule) => rule.value && rule.value.trim() !== ''
    );
    setFilterRules(validFilters);
    onFilterModelChange?.(validFilters);
    setShowFilterDialog(false);
  }, [tempFilterRules, onFilterModelChange]);

  const cancelFilterChanges = useCallback(() => {
    setTempFilterRules(filterRules);
    setShowFilterDialog(false);
  }, [filterRules]);

  const handleFilterDialogOpen = useCallback(
    (open: boolean) => {
      if (open) {
        // Initialize temp state with current filter rules when opening
        setTempFilterRules(filterRules);
      }
      setShowFilterDialog(open);
    },
    [filterRules]
  );

  const clearAllTempFilters = useCallback(() => {
    setTempFilterRules([]);
    // Don't clear the actual filters here, only temp ones
  }, []);

  const clearAllFilters = useCallback(() => {
    setFilterRules([]);
    setTempFilterRules([]);
    setFilterModel({});
    setSearchQuery('');
  }, []);

  // Column visibility functions
  const toggleColumnVisibility = useCallback((field: string) => {
    setColumnVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  }, []);

  const showAllColumns = useCallback(() => {
    setColumnVisibility(
      columns.reduce((acc, col) => ({ ...acc, [col.field]: true }), {})
    );
  }, [columns]);

  const hideAllColumns = useCallback(() => {
    setColumnVisibility(
      columns.reduce((acc, col) => ({ ...acc, [col.field]: false }), {})
    );
  }, [columns]);

  const toggleTempColumnVisibility = useCallback((field: string) => {
    setTempColumnVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  }, []);

  const showAllTempColumns = useCallback(() => {
    setTempColumnVisibility(
      columns.reduce((acc, col) => ({ ...acc, [col.field]: true }), {})
    );
  }, [columns]);

  const hideAllTempColumns = useCallback(() => {
    setTempColumnVisibility(
      columns.reduce((acc, col) => ({ ...acc, [col.field]: false }), {})
    );
  }, [columns]);

  const applyColumnChanges = useCallback(() => {
    setColumnVisibility(tempColumnVisibility);
    setShowColumnDialog(false);
  }, [tempColumnVisibility]);

  const cancelColumnChanges = useCallback(() => {
    setTempColumnVisibility(columnVisibility);
    setShowColumnDialog(false);
  }, [columnVisibility]);

  const handleColumnDialogOpen = useCallback(
    (open: boolean) => {
      if (open) {
        // Initialize temp state with current visibility when opening
        setTempColumnVisibility(columnVisibility);
      }
      setShowColumnDialog(open);
    },
    [columnVisibility]
  );

  const handleFilterDialogClose = useCallback(() => {
    // Remove any filter rules that don't have values
    setFilterRules((prev) =>
      prev.filter((rule) => rule.value && rule.value.trim() !== '')
    );
    setShowFilterDialog(false);
  }, []);

  if (loading) {
    return (
      <div className={`border rounded-lg ${className}`}>
        <div className="p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`border rounded-lg bg-background ${className}`}>
      {/* Toolbar */}
      {!hideToolbar && (
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            {!hideSearch && (
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 w-64"
                />
              </div>
            )}

            {!hideFilters && (
              <Dialog
                open={showFilterDialog}
                onOpenChange={(open) => {
                  if (!open) {
                    cancelFilterChanges();
                  } else {
                    handleFilterDialogOpen(true);
                  }
                }}
              >
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                  >
                    <Filter
                      className={hideFilterLabel ? 'w-4 h-4' : 'w-4 h-4 mr-2'}
                    />
                    {!hideFilterLabel && 'Filters'}
                    {filterRules.filter(
                      (rule) => rule.value && rule.value.trim() !== ''
                    ).length > 0 && (
                      <Badge
                        variant="secondary"
                        className="ml-2 h-5 px-1.5 text-xs"
                      >
                        {
                          filterRules.filter(
                            (rule) => rule.value && rule.value.trim() !== ''
                          ).length
                        }
                      </Badge>
                    )}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Advanced Filters</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    {tempFilterRules.map((rule) => (
                      <div
                        key={rule.id}
                        className="flex items-center gap-2 p-3 border rounded-lg"
                      >
                        <Select
                          value={rule.field}
                          onValueChange={(value) =>
                            updateTempFilterRule(rule.id, { field: value })
                          }
                        >
                          <SelectTrigger className="w-40">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {columns
                              .filter((col) => col.field !== 'actions')
                              .map((column) => (
                                <SelectItem
                                  key={column.field}
                                  value={column.field}
                                >
                                  {column.headerName}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>

                        <Select
                          value={rule.operator}
                          onValueChange={(value) =>
                            updateTempFilterRule(rule.id, { operator: value })
                          }
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="contains">Contains</SelectItem>
                            <SelectItem value="equals">Equals</SelectItem>
                            <SelectItem value="startsWith">
                              Starts with
                            </SelectItem>
                            <SelectItem value="endsWith">Ends with</SelectItem>
                            <SelectItem value="isEmpty">Is empty</SelectItem>
                            <SelectItem value="isNotEmpty">
                              Is not empty
                            </SelectItem>
                          </SelectContent>
                        </Select>

                        {!['isEmpty', 'isNotEmpty'].includes(rule.operator) && (
                          <Input
                            placeholder="Filter value"
                            value={rule.value}
                            onChange={(e) =>
                              updateTempFilterRule(rule.id, {
                                value: e.target.value,
                              })
                            }
                            className="flex-1"
                          />
                        )}

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeTempFilterRule(rule.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}

                    <div className="flex items-center justify-between pt-4 border-t">
                      <Button
                        variant="outline"
                        onClick={addTempFilterRule}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Filter
                      </Button>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          onClick={clearAllTempFilters}
                        >
                          Clear All
                        </Button>
                        <Button
                          variant="outline"
                          onClick={cancelFilterChanges}
                        >
                          Cancel
                        </Button>
                        <Button onClick={applyFilterChanges}>
                          Apply Filters
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>

          <div className="flex items-center gap-2">
            {!hideExport && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                  >
                    <Download
                      className={hideExportLabel ? 'w-4 h-4' : 'w-4 h-4 mr-2'}
                    />
                    {!hideExportLabel && 'Export'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Export Options</div>
                    <div className="space-y-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={exportToCSV}
                      >
                        Export as CSV
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={exportToJSON}
                      >
                        Export as JSON
                      </Button>
                    </div>
                    {selectedRows.size > 0 && (
                      <div className="pt-2 border-t text-xs text-muted-foreground">
                        {selectedRows.size} selected row(s) will be exported
                      </div>
                    )}
                  </div>
                </PopoverContent>
              </Popover>
            )}

            {!hideColumns && (
              <Dialog
                open={showColumnDialog}
                onOpenChange={handleColumnDialogOpen}
              >
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                  >
                    <Settings
                      className={hideColumnsLabel ? 'w-4 h-4' : 'w-4 h-4 mr-2'}
                    />
                    {!hideColumnsLabel && 'Columns'}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Column Settings</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">
                        Column Visibility
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={showAllTempColumns}
                        >
                          Show All
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={hideAllTempColumns}
                        >
                          Hide All
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {columns
                        .filter((col) => col.field !== 'actions')
                        .map((column) => (
                          <div
                            key={column.field}
                            className="flex items-center justify-between p-2 hover:bg-muted/50 rounded"
                          >
                            <div className="flex items-center gap-2">
                              {tempColumnVisibility[column.field] ? (
                                <Eye className="w-4 h-4 text-green-600" />
                              ) : (
                                <EyeOff className="w-4 h-4 text-muted-foreground" />
                              )}
                              <span className="text-sm">
                                {column.headerName}
                              </span>
                            </div>
                            <Checkbox
                              checked={tempColumnVisibility[column.field]}
                              onCheckedChange={() =>
                                toggleTempColumnVisibility(column.field)
                              }
                            />
                          </div>
                        ))}
                    </div>

                    <div className="flex justify-between pt-4 border-t">
                      <Button
                        variant="outline"
                        onClick={cancelColumnChanges}
                      >
                        Cancel
                      </Button>
                      <Button onClick={applyColumnChanges}>Done</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      )}

      {/* Data Grid */}
      <div className="overflow-auto">
        <table className={`w-full ${getDensityClasses()}`}>
          <thead className="bg-muted/50">
            <tr>
              {checkboxSelection && (
                <th className={`w-12 ${getCellPadding()} text-left`}>
                  <Checkbox
                    checked={
                      selectedRows.size === paginatedRows.length &&
                      paginatedRows.length > 0
                    }
                    onCheckedChange={handleSelectAll}
                  />
                </th>
              )}
              {columns
                .filter((col) => columnVisibility[col.field])
                .map((column) => (
                  <th
                    key={column.field}
                    className={`${getCellPadding()} text-left font-medium border-r last:border-r-0 relative group`}
                    style={{ width: getColumnWidth(column) }}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex items-center gap-1 ${
                          column.sortable !== false
                            ? 'cursor-pointer hover:text-primary'
                            : ''
                        }`}
                        onClick={() =>
                          column.sortable !== false && handleSort(column.field)
                        }
                      >
                        <span className="truncate">{column.headerName}</span>
                        {column.sortable !== false && getSortIcon(column.field)}
                      </div>
                      {column.resizable !== false && (
                        <div
                          className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-primary opacity-0 group-hover:opacity-100"
                          onMouseDown={(e) => {
                            const startX = e.clientX;
                            const startWidth = getColumnWidth(column);

                            const handleMouseMove = (e: MouseEvent) => {
                              const newWidth = Math.max(
                                50,
                                startWidth + (e.clientX - startX)
                              );
                              handleColumnResize(column.field, newWidth);
                            };

                            const handleMouseUp = () => {
                              document.removeEventListener(
                                'mousemove',
                                handleMouseMove
                              );
                              document.removeEventListener(
                                'mouseup',
                                handleMouseUp
                              );
                            };

                            document.addEventListener(
                              'mousemove',
                              handleMouseMove
                            );
                            document.addEventListener('mouseup', handleMouseUp);
                          }}
                        />
                      )}
                    </div>
                    {column.filterable !== false && !disableColumnFilter && (
                      <Input
                        placeholder={`Filter ${column.headerName}`}
                        value={filterModel[column.field] || ''}
                        onChange={(e) =>
                          setFilterModel((prev) => ({
                            ...prev,
                            [column.field]: e.target.value,
                          }))
                        }
                        className="mt-1 h-7 text-xs"
                        onClick={(e) => e.stopPropagation()}
                      />
                    )}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {paginatedRows.length === 0 ? (
              <tr>
                <td
                  colSpan={
                    columns.filter((col) => columnVisibility[col.field])
                      .length + (checkboxSelection ? 1 : 0)
                  }
                  className={`${getCellPadding()} text-center text-muted-foreground`}
                >
                  No rows found
                </td>
              </tr>
            ) : (
              paginatedRows.map((row, index) => (
                <tr
                  key={row.id || index}
                  className={`border-b hover:bg-muted/50 ${
                    selectedRows.has(row.id) ? 'bg-muted/30' : ''
                  }`}
                  onClick={() => {
                    if (!disableSelectionOnClick && checkboxSelection) {
                      handleRowSelection(row.id, !selectedRows.has(row.id));
                    }
                  }}
                >
                  {checkboxSelection && (
                    <td className={getCellPadding()}>
                      <Checkbox
                        checked={selectedRows.has(row.id)}
                        onCheckedChange={(checked) =>
                          handleRowSelection(row.id, checked as boolean)
                        }
                        onClick={(e) => e.stopPropagation()}
                      />
                    </td>
                  )}
                  {columns
                    .filter((col) => columnVisibility[col.field])
                    .map((column) => (
                      <td
                        key={column.field}
                        className={`${getCellPadding()} border-r last:border-r-0 truncate ${
                          column.align === 'center'
                            ? 'text-center'
                            : column.align === 'right'
                            ? 'text-right'
                            : 'text-left'
                        }`}
                        style={{ width: getColumnWidth(column) }}
                      >
                        {column.renderCell
                          ? column.renderCell({
                              value: row[column.field],
                              row,
                              field: column.field,
                            })
                          : row[column.field]}
                      </td>
                    ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {!hideFooter && !hidePagination && (
        <div className="flex items-center justify-between p-4 border-t">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Rows per page:
            </span>
            <Select
              value={currentPageSize.toString()}
              onValueChange={(value) => {
                setCurrentPageSize(Number(value));
                setPage(0);
              }}
            >
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {pageSizeOptions.map((size) => (
                  <SelectItem
                    key={size}
                    value={size.toString()}
                  >
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {processedRows.length === 0 ? '0' : page * currentPageSize + 1}-
              {Math.min((page + 1) * currentPageSize, processedRows.length)} of{' '}
              {processedRows.length}
            </span>
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(0)}
                disabled={page === 0}
              >
                <ChevronsLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(page - 1)}
                disabled={page === 0}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(page + 1)}
                disabled={page >= totalPages - 1}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(totalPages - 1)}
                disabled={page >= totalPages - 1}
              >
                <ChevronsRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
