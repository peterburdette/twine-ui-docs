import { A11ySpec } from './types';

export const timePickerA11y: A11ySpec = {
  component: 'TimePicker',
  items: [
    {
      label: 'Keyboard & roles',
      text: 'The input acts as the combobox trigger; dropdowns are native-like selects with proper labels (Hours, Minutes, Seconds, AM/PM). Tab to move focus; arrow keys and Enter/Space operate the selects.',
    },
    {
      label: 'Accessible labeling',
      text: 'Use the `label` prop (external) or variants "floating"/"inset" to render an internal label. When no visible label is present, provide `ariaLabel`.',
    },
    {
      label: 'Error/help text',
      text: '`aria-describedby` links the input to helper/error text so screen readers announce context.',
    },
    {
      label: 'Focus management',
      text: 'Visible focus state is preserved; the popover traps only while interacting with the controls.',
    },
  ],
  notes: [
    'Respect `required` and `disabled` for ARIA and visual states.',
    'Prefer clearly labeled controls for Hours/Minutes (and Seconds) to improve screen reader usability.',
  ],
};
