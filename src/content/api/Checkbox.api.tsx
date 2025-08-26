import { ApiSpec } from './types';

export const checkboxApi: ApiSpec = {
  component: 'Checkbox',
  description:
    'The following documentation includes a complete reference to all supported props and classes for the components described above.',
  props: [
    {
      name: 'size',
      type: `'sm' | 'md' | 'lg'`,
      default: `'md'`,
      description: 'Visual size...',
    },
    {
      name: 'variant',
      type: `'default' | 'success' | 'warning' | 'error'`,
      default: `'default' (or 'error' if inherited FormControl error is true)`,
      description: 'Sets the accent color...',
    },
    {
      name: 'showFocusRing',
      type: 'boolean',
      default: 'false',
      description: 'Adds a visible focus ring...',
    },
    {
      name: 'indeterminate',
      type: 'boolean',
      description: 'Renders a mixed/tri-state...',
    },
    {
      name: 'clearIndeterminateOnChange',
      type: 'boolean',
      default: 'true',
      description: 'For uncontrolled indeterminate...',
    },
    {
      name: 'id',
      type: 'string',
      default: '`checkbox-${useId()}`',
      description: 'Stable ID...',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Disables the checkbox...',
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'Marks the field as required...',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Appended to the computed class list...',
    },
    {
      name: 'onChange',
      type: '(e: React.ChangeEvent<HTMLInputElement>) => void',
      description: 'Called when the user toggles...',
    },
    {
      name: 'checked / defaultChecked',
      type: 'boolean',
      description: 'Standard input control props...',
    },
  ],
  // notes: [
  //   "Checkbox extendsOmit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>",
  //   'The component forwards its ref to the underlying <input>.',
  //   'When indeterminate is provided, the component also sets aria-checked="mixed".',
  // ],
};
