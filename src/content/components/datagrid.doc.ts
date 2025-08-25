import type { DocPage } from '../schema';
import { BasicDataGridDemo } from '@/components/demos/DataGrid/BasicDataGridDemo';
import { SortingFilteringDemo } from '@/components/demos/DataGrid/SortingFilteringDemo';
import { EditableCellsDemo } from '@/components/demos/DataGrid/EditableCellsDemo';

export const doc: DocPage = {
  slug: 'datagrid',
  title: 'Data Grid',
  description:
    'A fast, flexible grid with sorting, filtering, selection, pagination, and editable cells.',
  category: 'DataGrid',
  toc: true,
  previews: [
    {
      id: 'basic',
      title: 'Basic grid',
      description: 'Minimal setup with rows and columns.',
      component: BasicDataGridDemo,
    },
    {
      id: 'sort-filter',
      title: 'Sorting & filtering',
      description: 'Column sorting and simple filter UI.',
      component: SortingFilteringDemo,
    },
    {
      id: 'editable',
      title: 'Editable cells',
      description: 'Inline cell editing with a custom render.',
      component: EditableCellsDemo,
    },
  ],
};
