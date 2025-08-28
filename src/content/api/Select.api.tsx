import { ApiSpec } from './types';

export const selectApi: ApiSpec = {
  component: 'Select',
  props: [
    {
      name: 'options',
      type: '{ value: string; label: string; disabled?: boolean; }[]',
      description: 'Menu options to display in the listbox.',
    },
    {
      name: 'value / onChange',
      type: `value?: string; onChange?: (value: string) => void`,
      description:
        'Controlled value and change handler. If omitted, the component is uncontrolled visually but still navigable.',
    },
    {
      name: 'placeholder',
      type: 'string',
      default: `'Select an option...'`,
      description: 'Text shown when no value is selected.',
    },
    {
      name: 'label',
      type: 'string',
      description:
        'Visible label associated to the control. If omitted, provide an accessible name via aria-label or aria-labelledby.',
    },
    {
      name: 'helperText',
      type: 'string',
      description:
        'Optional helper/description text rendered below the field and referenced by aria-describedby.',
    },
    {
      name: 'error',
      type: 'string',
      description:
        'Shows an error message and applies error styles. Announced via aria-errormessage and included in aria-describedby.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disables the trigger and prevents opening/selecting.',
    },
    {
      name: 'required',
      type: 'boolean',
      default: 'false',
      description: 'Marks the field as required for forms and ARIA.',
    },
    {
      name: 'size',
      type: `'sm' | 'md' | 'lg'`,
      default: `'md'`,
      description: 'Adjusts padding and text size of the trigger.',
    },
    {
      name: 'variant',
      type: `'default' | 'filled' | 'outlined' | 'ghost' | 'underline'`,
      default: `'default'`,
      description: 'Controls the visual style of the trigger.',
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      default: 'false',
      description: 'Expands the component to the width of its container.',
    },
    {
      name: 'showFocusRing',
      type: 'boolean',
      default: 'false',
      description: 'Adds a focus ring to the trigger when focused.',
    },
    {
      name: 'id',
      type: 'string',
      description:
        'Control id used for the button (role="combobox") and for associating the visible label.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Appended to the computed trigger class list for overrides.',
    },
  ],
  notes: [
    'Select extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> and forwards props to the root container.',
    'The trigger is a <button role="combobox"> controlling a portal listbox; focus remains on the trigger while navigating with aria-activedescendant.',
    'Provide an accessible name (label, aria-label, or aria-labelledby) for the combobox trigger when a visible label is not used.',
  ],
};
