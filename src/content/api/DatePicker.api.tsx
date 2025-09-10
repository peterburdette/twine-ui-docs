import { ApiSpec } from './types';

export const datePickerApi: ApiSpec = {
  component: 'DatePicker',
  props: [
    {
      name: 'value',
      type: 'Date | undefined',
      default: 'undefined',
      description: 'Controlled value for the picker.',
    },
    {
      name: 'onChange',
      type: '(date: Date | undefined) => void',
      default: '—',
      description: 'Called when a date is selected or cleared.',
    },

    {
      name: 'dateFormat',
      type: 'string',
      default: '"MMM dd, yyyy"',
      description:
        'Format pattern used for input display and parsing (adapter-dependent tokens).',
    },
    {
      name: 'placeholder',
      type: 'string',
      default: '"Select date"',
      description:
        'Input placeholder. For "floating"/"inset" a single-space placeholder may be injected to enable :placeholder-shown.',
    },

    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disable the input & trigger.',
    },
    {
      name: 'minDate',
      type: 'Date',
      default: '—',
      description: 'Earliest selectable date (inclusive).',
    },
    {
      name: 'maxDate',
      type: 'Date',
      default: '—',
      description: 'Latest selectable date (inclusive).',
    },
    {
      name: 'disabledDates',
      type: 'Date[]',
      default: '[]',
      description: 'Specific dates that cannot be selected (by calendar day).',
    },

    {
      name: 'label',
      type: 'string',
      default: '—',
      description:
        'Visible label. For "floating"/"inset", this renders inside the field.',
    },
    {
      name: 'error',
      type: 'string',
      default: '—',
      description: 'Error message displayed below the input.',
    },
    {
      name: 'required',
      type: 'boolean',
      default: 'false',
      description:
        'Marks the field as required (adds asterisk and ARIA attributes).',
    },
    {
      name: 'className',
      type: 'string',
      default: '—',
      description: 'Additional class names for the container.',
    },

    {
      name: 'inputSize',
      type: '"xs" | "sm" | "md" | "lg" | "xl"',
      default: '"md"',
      description:
        'Visual size for the input. Internal controls map to nearest supported size.',
    },
    {
      name: 'variant',
      type: '"default" | "filled" | "outlined" | "ghost" | "underline" | "floating" | "inset"',
      default: '"default"',
      description:
        'Visual variant. "floating"/"inset" render the label inside the field.',
    },

    {
      name: 'dateAdapter',
      type: 'DateAdapter',
      default: 'vanillaAdapter',
      description:
        'Pluggable date adapter (date-fns/Day.js/Moment/Luxon or custom).',
    },
    {
      name: 'weekStartsOn',
      type: '0 | 1 | 2 | 3 | 4 | 5 | 6',
      default: '0',
      description:
        'Index of the first day of the week (0 = Sunday … 6 = Saturday).',
    },
    {
      name: 'localeMonthNames',
      type: 'string[]',
      default: 'DEFAULT_MONTHS',
      description: 'Month labels used for the year/month pickers.',
    },
    {
      name: 'localeWeekdayShort',
      type: 'string[]',
      default: 'DEFAULT_DAYS',
      description: 'Short weekday labels shown in the grid header.',
    },

    {
      name: 'open',
      type: 'boolean',
      default: '—',
      description: 'Controls the popover open state (controlled mode).',
    },
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      default: '—',
      description: 'Called when the popover requests to open/close.',
    },

    {
      name: 'enableQuickActions',
      type: 'boolean',
      default: 'true',
      description: 'Show the Today / Clear row at the bottom.',
    },
    {
      name: 'readOnly',
      type: 'boolean',
      default: 'false',
      description:
        'Make the input readOnly (disable typing; calendar UI still works).',
    },
    {
      name: 'ariaLabel',
      type: 'string',
      default: '—',
      description: 'Accessible label when no visible label is provided.',
    },

    {
      name: 'deferInitialRender',
      type: 'boolean',
      default: 'true',
      description:
        'Prevents SSR/CSR mismatch when no `value` is provided and the component would otherwise format `now()`.',
    },
  ],
  notes: [
    'The component accepts and emits plain JavaScript Date objects.',
    'If you need a default value, pass a stable Date (e.g., from props or server) or keep `deferInitialRender` enabled to avoid hydration mismatches.',
    'Disabled dates are non-interactive (no hover cursor), non-focusable, and carry aria-disabled for assistive tech.',
    'Format tokens depend on the adapter in use (e.g., Luxon vs date-fns tokens).',
  ],
};
