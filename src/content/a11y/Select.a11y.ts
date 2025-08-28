import { A11ySpec } from './types';

export const selectA11y: A11ySpec = {
  component: 'Select',
  items: [
    {
      label: 'Correct roles & announcements',
      text: 'Uses a button with role="combobox" that controls a role="listbox" popup. Expanded/collapsed state, active option, selection, and errors are announced via ARIA.',
    },
    {
      label: 'Labeling & descriptions',
      text: 'Associates a visible <label htmlFor> or accepts aria-label/aria-labelledby. Helper and error text are linked with aria-describedby, and errors via aria-errormessage.',
    },
    {
      label: 'Keyboard support',
      text: 'Supports Enter/Space to open/select, Escape to close, ArrowUp/ArrowDown to navigate, Home/End to jump, and type-to-search (typeahead) when open.',
    },
    {
      label: 'States & focus',
      text: 'Reflects required/disabled/invalid using aria-required, aria-disabled, aria-invalid; keeps focus on the trigger and uses aria-activedescendant to indicate the active option.',
    },
  ],
  //   notes: [
  //     'Ensure the component has an accessible name (visible label, aria-label, or aria-labelledby).',
  //     'Keep option values/ordering stable during navigation to avoid mismatches with aria-activedescendant.',
  //   ],
};
