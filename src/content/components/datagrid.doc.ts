import type { DocPage } from '../schema';
import {
  DataGridBasicDemo,
  DataGridSortingFilteringDemo,
  DataGridExportDemo,
  DataGridEditingDemo,
  DataGridColumnDragResizeDemo,
  DataGridPlaygroundDemo,
} from '@/components/demos/DataGrid';
import {
  DataGridBasicDemoCode,
  DataGridSortingFilteringDemoCode,
  DataGridExportDemoCode,
  DataGridEditingDemoCode,
  DataGridColumnDragResizeDemoCode,
} from '@/components/demos/DataGrid/';
import { dataGridApi } from '../api/DataGrid.api';
import { dataGridA11y } from '../a11y/DataGrid.a11y';

export const doc: DocPage = {
  slug: 'data-grid',
  title: 'Data Grid',
  toc: true,
  tocTitle: 'Introduction',
  description:
    'A fast, accessible data grid with sorting, filtering, pagination, selection, inline editing, column reordering, and export — built with Tailwind CSS.',
  category: 'Data Display',
  sections: [
    {
      kind: 'usage',
      id: 'usage',
      title: 'Usage',
      previews: [
        {
          id: 'basic',
          title: 'Basic Usage',
          description:
            'Render rows with common column types. Enable checkbox selection and paging.',
          component: DataGridBasicDemo,
          code: DataGridBasicDemoCode,
        },
        {
          id: 'sorting-filtering',
          title: 'Sorting & Filtering',
          description:
            'Enable column sorting and per-column filters for quick narrowing.',
          component: DataGridSortingFilteringDemo,
          code: DataGridSortingFilteringDemoCode,
        },
        {
          id: 'export',
          title: 'Export',
          description: 'Export rows to CSV or JSON using the toolbar menu.',
          component: DataGridExportDemo,
          code: DataGridExportDemoCode,
        },
        {
          id: 'column-drag-resize',
          title: 'Column Drag & Resize',
          description:
            'Drag headers to reorder columns and resize via the right-edge handle.',
          component: DataGridColumnDragResizeDemo,
          code: DataGridColumnDragResizeDemoCode,
        },
        {
          id: 'editing',
          title: 'Inline Editing',
          description:
            'Double-click a cell in an editable column to edit. Press Enter to save, Esc to cancel.',
          component: DataGridEditingDemo,
          code: DataGridEditingDemoCode,
        },
        {
          id: 'playground',
          title: 'Playground',
          description:
            'Flip checkboxes and selects to tweak selection, toolbar sections, density, and column features live.',
          component: DataGridPlaygroundDemo,
        },
      ],
    },
    {
      kind: 'a11y',
      id: 'accessibility',
      title: 'Accessibility',
      description:
        'Keyboard navigation (arrow keys, Home/End, PageUp/PageDown), focus management, roles, and header associations for assistive tech.',
      a11y: dataGridA11y,
    },
    {
      kind: 'api',
      id: 'api',
      title: 'API',
      description:
        'Props, events, and types for integrating the DataGrid component.',
      api: dataGridApi,
    },
  ],
};
