import { A11ySpec } from './types';

export const checkboxA11y: A11ySpec = {
  component: 'Checkbox',
  items: [
    {
      label: 'Built-in semantics & keyboard',
      text: 'Uses the native <input type="checkbox"> element for correct roles and keyboard interaction (Tab to focus, Space/Enter to toggle).',
    },
    {
      label: 'Accessible labeling & descriptions',
      text: 'Works with <FormControlLabel> for id ↔ htmlFor association, and supports aria-describedby for helper or error text so screen readers announce context.',
    },
    {
      label: 'State handling',
      text: 'Supports controlled and uncontrolled usage, indeterminate (aria-checked="mixed"), and inherits disabled, required, and error states from <FormControl>.',
    },
    {
      label: 'Focus & usability',
      text: 'Provides visible focus indication that meets WCAG 2.1 AA and ensures consistent sizing with larger click targets when paired with labels.',
    },
  ],
  notes: [
    'When the checkbox is indeterminate, keep aria-checked="mixed" until a user action changes it.',
    'Prefer <FormControlLabel> to provide a larger, accessible click target.',
  ],
};
