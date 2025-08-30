import { A11ySpec } from './types';

export const dataGridA11y: A11ySpec = {
  component: 'DataGrid',
  items: [
    {
      label: 'Native table semantics',
      text: 'Renders a semantic <table> with <thead>/<tbody>, <th scope="col">, and <td>. Screen readers can use built-in table navigation without ARIA grid complexity.',
    },
    {
      label: 'Column ↔ cell association',
      text: 'Each header cell has a stable id; data cells use the headers attribute to associate with their column, improving announcements of context.',
    },
    {
      label: 'Sortable headers',
      text: 'Sortable <th> cells expose aria-sort (ascending, descending, or none) and a button with an informative aria-label describing the next sort action.',
    },
    {
      label: 'Selection semantics',
      text: 'Rows reflect selection via aria-selected. The header checkbox exposes “Select all rows on this page,” and each row checkbox is labeled, e.g. “Select row 12.”',
    },
    {
      label: 'Keyboard editing',
      text: 'Cells are focusable (tabIndex=0) and support Enter to begin editing when editable. Editors keep focus and support Enter to save / Escape to cancel.',
    },
    {
      label: 'Live updates',
      text: 'A polite aria-live region announces sorting, selection counts, pagination changes, filter application/clear, and edit confirmations.',
    },
    {
      label: 'Non-essential UI hidden from SR',
      text: 'Purely visual resize handles are marked aria-hidden so they do not distract screen reader users.',
    },
    {
      label: 'Filters and inputs',
      text: 'Per-column filter inputs have descriptive aria-labels (e.g., “Filter Quantity”).',
    },
  ],
  notes: [
    'Prefer native table semantics for read-heavy grids; use ARIA grid only if you must emulate application-like behavior for every cell.',
    'Ensure focus styles meet WCAG 2.1 AA contrast requirements and remain visible against selected row backgrounds.',
    'If you virtualize rows/columns in the future, consider additional aria-rowcount/aria-colcount and focus management nuances.',
  ],
};
