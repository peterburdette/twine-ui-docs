import { ApiSpec } from './types';

export const radioApi: ApiSpec = {
  component: 'Radio',
  props: [
    {
      name: 'size',
      type: `'sm' | 'md' | 'lg'`,
      default: `'md'`,
      description: 'Adjusts the visual size of the control.',
    },
    {
      name: 'variant',
      type: `'default' | 'success' | 'warning' | 'error'`,
      default: `'default'`,
      description:
        'Sets the accent color to communicate intent (e.g., success, warning, or error).',
    },
    {
      name: 'showFocusRing',
      type: 'boolean',
      default: 'false',
      description: 'Adds a visible focus ring to emphasize keyboard focus.',
    },
    {
      name: 'name',
      type: 'string',
      description:
        'Shared name groups radios together. Only one radio with the same name can be selected.',
    },
    {
      name: 'value',
      type: 'string | number',
      description: 'Value submitted with the form when the radio is selected.',
    },
    {
      name: 'checked / defaultChecked',
      type: 'boolean',
      description:
        'Standard controlled/uncontrolled selection state for the radio.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Disables the radio and prevents interaction.',
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'Marks the radio as required for form validation.',
    },
    {
      name: 'id',
      type: 'string',
      description:
        'Input id used to associate a <label htmlFor> for a larger click target.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Appended to the computed class list for styling overrides.',
    },
    {
      name: 'onChange',
      type: '(e: React.ChangeEvent<HTMLInputElement>) => void',
      description:
        'Called when the user selects the radio. When inside a RadioGroup, the group handler is also invoked with the selected value.',
    },
  ],
  //   notes: [
  //     'Radio extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange">, so native input props are supported.',
  //     'When used inside a RadioGroup or FormControl, the radio can inherit name, value/onChange, size, variant, disabled, required, and error state.',
  //     'The component forwards its ref to the underlying <input type="radio"> element.',
  //   ],
};
