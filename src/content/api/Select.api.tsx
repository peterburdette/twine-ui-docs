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
      name: 'noMinWidth',
      type: 'boolean',
      default: 'false',
      description:
        'Removes the built-in `min-w-[120px]` on the trigger. Useful for very compact layouts or when pairing with `maxTriggerWidth`. Ignored when `fixedTriggerWidth` or `fullWidth` are set.',
    },
    {
      name: 'fixedTriggerWidth',
      type: 'number',
      description:
        'Fixes the trigger width (in px) and prevents it from expanding with content. Also sets `minWidth` to the same value. Recommended with `truncateTriggerLabel` for caret-safe truncation.',
    },
    {
      name: 'maxTriggerWidth',
      type: 'number',
      description:
        'Applies a `max-width` (in px) to the trigger so it can grow with content up to a cap, then ellipsize (use with `truncateTriggerLabel`). Ignored if `fixedTriggerWidth` is provided.',
    },
    {
      name: 'truncateTriggerLabel',
      type: 'boolean',
      default: 'false',
      description:
        'Ellipsizes the selected option/placeholder inside the trigger. A reserved right padding ensures the text never underlaps the caret.',
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
      name: 'containerClassName',
      type: 'string',
      description:
        'Class name applied to the outer wrapper (around the trigger).',
    },
    {
      name: 'className',
      type: 'string',
      description:
        'Class name appended to the computed trigger class list for overrides.',
    },
  ],
  notes: [
    'Select extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> and forwards props to the root container.',
    'The trigger is a <button role="combobox"> controlling a portal listbox; focus remains on the trigger while navigating with aria-activedescendant.',
    'Provide an accessible name (label, aria-label, or aria-labelledby) for the combobox trigger when a visible label is not used.',
  ],
};
