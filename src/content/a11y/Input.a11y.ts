import { A11ySpec } from './types';

export const inputA11y: A11ySpec = {
  component: 'Input',
  items: [
    {
      label: 'Built-in semantics & keyboard',
      text: 'Uses the native <input> element for correct roles and keyboard interaction (Tab to focus; text editing shortcuts behave as expected).',
    },
    {
      label: 'Labeling',
      text: 'Associates a visible <label htmlFor> with the input id; when no visible label is present, supports aria-label or aria-labelledby for an accessible name.',
    },
    {
      label: 'Descriptions & errors',
      text: 'Helper and error text are linked via aria-describedby, with errors also referenced by aria-errormessage; changes are announced with a polite live region.',
    },
    {
      label: 'State handling & focus',
      text: 'Reflects required, disabled, and invalid states with aria-required, aria-disabled, and aria-invalid; provides a visible focus indicator that meets WCAG 2.1 AA.',
    },
  ],
  notes: [
    'Decorative icons and inline add-ons should be aria-hidden="true"; include meaningful inline text (e.g., units) in aria-describedby if it adds context.',
    'Avoid using placeholder as the sole label; always provide a visible label or an accessible name via aria-label/aria-labelledby.',
    'Use appropriate autocomplete, inputMode, and pattern attributes to improve virtual keyboard, autofill, and validation experiences.',
  ],
};
