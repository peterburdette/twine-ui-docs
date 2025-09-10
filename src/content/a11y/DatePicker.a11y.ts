import { A11ySpec } from '../a11y/types';

export const datePickerA11y: A11ySpec = {
  component: 'DatePicker',
  items: [
    {
      label: 'Semantics & roles',
      text: 'Uses a text input with an attached dialog. Calendar grid uses role="grid" with gridcell buttons, and aria-current="date" for today.',
    },
    {
      label: 'Labeling',
      text: 'Supports external labels, and internal labels for "floating"/"inset" variants. When no visible label is present, you can pass `ariaLabel`.',
    },
    {
      label: 'Keyboard navigation',
      text: 'Arrow keys move the active day, Home/End jump to month edges, PageUp/PageDown change months, Enter/Space selects, Escape closes.',
    },
    {
      label: 'Disabled dates',
      text: 'Disabled days have aria-disabled, are not focusable, and do not show hover cursors.',
    },
    {
      label: 'Error & helper text',
      text: 'Error text is associated via aria-describedby so screen readers announce it.',
    },
  ],
  notes: [
    'Focus is placed on the active day within the grid. The input remains operable with screen readers.',
    'The Today / Clear actions are regular buttons and announced accordingly.',
  ],
};
