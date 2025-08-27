import { ApiSpec } from './types';

export const inputApi: ApiSpec = {
  component: 'Input',
  props: [
    {
      name: 'variant',
      type: `'default' | 'underline' | 'filled' | 'outlined' | 'ghost' | 'floating' | 'inset'`,
      default: `'default'`,
      description:
        'Controls the visual style and focus treatment. Floating/inset variants render an internal label that shrinks on focus or when populated.',
    },
    {
      name: 'inputSize',
      type: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`,
      default: `'md'`,
      description:
        'Adjusts padding, font size, and icon sizing to fit dense or spacious layouts.',
    },
    {
      name: 'label',
      type: 'string',
      description:
        'Visible label for the input. With `floating` and `inset` variants, the label appears inside the field and animates on focus/value.',
    },
    {
      name: 'helperText',
      type: 'string',
      description:
        'Optional helper/description text displayed below the field. Automatically associated via `aria-describedby`.',
    },
    {
      name: 'error',
      type: 'string',
      description:
        'Shows an error message and applies error styles. Automatically announced via `aria-errormessage` and included in `aria-describedby`.',
    },
    {
      name: 'showFocusRing',
      type: 'boolean',
      default: 'false',
      description:
        'When enabled, provides an explicit focus ring treatment (in addition to border focus).',
    },
    {
      name: 'disableFocusStyles',
      type: 'boolean',
      default: 'false',
      description:
        'Disables built-in focus styles if you prefer to provide your own.',
    },
    {
      name: 'startIcon',
      type: 'React.ReactNode',
      description:
        'Decorative icon rendered at the start of the field. Hidden from assistive tech via `aria-hidden`.',
    },
    {
      name: 'endIcon',
      type: 'React.ReactNode',
      description:
        'Decorative icon rendered at the end of the field. Hidden from assistive tech via `aria-hidden`.',
    },
    {
      name: 'inlineSelect',
      type: `{ options: { value: string; label: string; disabled?: boolean }[]; value?: string; onChange?: (value: string) => void; placeholder?: string; position?: 'left' | 'right'; }`,
      description:
        'Embeds a small Select inside the input on the left or right, useful for units, filters, or prefixes.',
    },
    {
      name: 'inlineButton',
      type: `{ label: string; icon?: React.ReactNode; onClick: () => void; variant?: 'default' | 'outline' | 'ghost' }`,
      description:
        'Adds a compact button attached to the right side (e.g., Copy). If the label is "Copy", clicking attempts to copy the current value.',
    },
    {
      name: 'inlineLabel',
      type: `{ text: string; position?: 'left' | 'right' }`,
      description:
        'Non-interactive inline text inside the field (e.g., protocol or unit).',
    },
    {
      name: 'inlineAddOn',
      type: `{ content: React.ReactNode; position?: 'left' | 'right' }`,
      description:
        'Attached add-on element rendered inside the field container with appropriate borders (e.g., currency symbol).',
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      default: 'false',
      description: 'Expands the input to fill the width of its container.',
    },
    {
      name: 'width',
      type: 'string',
      default: `'w-64' (when fullWidth is false and no width is provided)`,
      description:
        'Tailwind width utility for the container (e.g., "w-80"). Ignored when `fullWidth` is true.',
    },
    {
      name: 'type',
      type: 'React.InputHTMLAttributes<HTMLInputElement>["type"]',
      default: `'text'`,
      description: 'Native input type (e.g., text, email, number, password).',
    },
    {
      name: 'id',
      type: 'string',
      default: '`input-${useId()}` or inherited from FormControl',
      description:
        'Stable input id. If used inside <FormControl>, inherits its generated id.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description:
        'Disables the field and prevents interaction. Inherits from FormControl when present.',
    },
    {
      name: 'required',
      type: 'boolean',
      description:
        'Marks the field as required. Inherits from FormControl when present.',
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Native placeholder text.',
    },
    {
      name: 'className',
      type: 'string',
      description:
        'Appended to the computed class list of the input element for custom styling.',
    },
    {
      name: 'value / defaultValue',
      type: 'string',
      description:
        'Standard controlled/uncontrolled input props for managing the field value.',
    },
    {
      name: 'onChange',
      type: '(e: React.ChangeEvent<HTMLInputElement>) => void',
      description: 'Fired when the input value changes.',
    },
    {
      name: 'onFocus / onBlur',
      type: '(e: React.FocusEvent<HTMLInputElement>) => void',
      description: 'Focus and blur event handlers.',
    },
  ],
  //   notes: [
  //     'Input extends React.InputHTMLAttributes<HTMLInputElement>, so all native attributes are supported.',
  //     'The component forwards its ref to the underlying <input>.',
  //     'Accessibility: `aria-invalid`, `aria-disabled`, `aria-required`, `aria-describedby`, and `aria-errormessage` are applied automatically based on `error`, `helperText`, `disabled`, and `required`.',
  //     'When used with a FormControl, `disabled`, `required`, `error`, and `id` are inherited unless explicitly overridden.',
  //   ],
};
