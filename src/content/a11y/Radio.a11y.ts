import { A11ySpec } from './types';

export const radioA11y: A11ySpec = {
  component: 'Radio',
  items: [
    {
      label: 'Built-in semantics & keyboard',
      text: 'Uses native <input type="radio"> for correct roles and keyboard interaction (Tab to move focus, Arrow keys to move within the group, Space/Enter to select).',
    },
    {
      label: 'Grouping & labeling',
      text: 'Share the same name to form a group. Use <fieldset> + <legend> or a parent RadioGroup to provide a group label announced by screen readers.',
    },
    {
      label: 'State handling',
      text: 'Reflects required, disabled, and invalid states with aria-required, aria-disabled, and aria-invalid; shows an optional focus ring for clear keyboard focus.',
    },
    {
      label: 'Descriptions',
      text: 'Associate helper or error text via aria-describedby on the input or via a parent FormControl so assistive tech announces context.',
    },
  ],
  notes: [
    'Avoid replacing the native radio with a custom role unless necessary—native radios provide expected behaviors for free.',
    'Keep each radio’s label clickable by associating <label htmlFor> with the input id for a larger target.',
  ],
};
