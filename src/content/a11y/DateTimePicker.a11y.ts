import { A11ySpec } from './types';

export const datetimePickerA11y: A11ySpec = {
  component: 'DateTimePicker',
  items: [
    {
      label: 'Semantics & roles',
      text: 'The trigger is wrapped in a combobox pattern with aria-haspopup="dialog" and aria-expanded. The popup content uses role="dialog". The calendar grid uses role="grid" with day cells as role="gridcell". Today is announced with aria-current="date". Disabled days have aria-disabled.',
    },
    {
      label: 'Keyboard navigation (calendar)',
      text: 'While the grid is active: Arrow keys move by day, Home/End jump to start/end of month, PageUp/PageDown jump by month, Enter/Space selects, and Escape closes.',
    },
    {
      label: 'Keyboard navigation (time)',
      text: 'Time selectors are standard listboxes (custom Select). Users can open with Enter/Space, navigate with Arrow keys/Home/End, and confirm with Enter or click.',
    },
    {
      label: 'Accessible labeling & descriptions',
      text: 'Supports an external <label htmlFor> or internal label for "floating"/"inset" variants. Announces helper/error text via aria-describedby. When no visible label is present, use ariaLabel.',
    },
    {
      label: 'Focus management',
      text: 'Focus remains on the input/trigger when opening. The dialog traps click interactions; keyboard users can Tab into the calendar/time controls. Closing returns focus to the trigger.',
    },
    {
      label: 'State & constraints',
      text: 'Disabled days are non-focusable and non-interactive, preventing accidental selection. Min/max bounds restrict navigation/selection and are conveyed via aria-disabled on blocked cells.',
    },
  ],
  notes: [
    'All interactive targets provide visible focus indication and meet WCAG 2.1 AA contrast guidelines (theme-dependent).',
    'Screen-reader-only text announces the full date for each cell to avoid ambiguity for users with assistive technologies.',
    'If you render without a visible label, provide ariaLabel for clarity.',
  ],
};
