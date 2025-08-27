import { A11ySpec } from './types';

export const buttonA11y: A11ySpec = {
  component: 'Button',
  items: [
    {
      label: 'Built-in semantics & keyboard',
      text: 'Uses the native <button> element for correct roles and built-in keyboard interaction (Enter/Space activate the button, Tab moves focus).',
    },
    {
      label: 'Accessible states',
      text: 'Adds aria-disabled and aria-busy when disabled or loading, so assistive technologies announce unavailable or in-progress actions correctly.',
    },
    {
      label: 'Icon-only buttons',
      text: 'Require aria-label or title to provide a text alternative when no visible text is present, ensuring screen readers can announce the action.',
    },
    {
      label: 'Focus visibility',
      text: 'Optional showFocusRing prop provides a clear visible outline to meet WCAG 2.1 AA for users navigating via keyboard.',
    },
  ],
  notes: [
    'Keep icon-only buttons labeled with aria-label or title attributes.',
    'Ensure destructive or high-impact actions use clear labeling and variant styling so they are distinguishable for all users.',
  ],
};
