import { ApiSpec } from './types';

export const timePickerApi: ApiSpec = {
  component: 'TimePicker',
  props: [
    {
      name: 'value',
      type: 'Date | undefined',
      default: 'undefined',
      description:
        'Controlled value carrying the selected time (date part is retained/ignored).',
    },
    {
      name: 'onChange',
      type: '(date: Date | undefined) => void',
      default: '—',
      description:
        'Called when the time changes via dropdowns or manual typing, or when cleared.',
    },
    {
      name: 'timeFormat',
      type: '"12" | "24"',
      default: '"12"',
      description: '12-hour or 24-hour mode for hours control.',
    },
    {
      name: 'displayFormat',
      type: 'string',
      default: 'timeFormat === "12" ? "h:mm a" : "HH:mm"',
      description:
        'Format string used for input display & parsing (adapter dependent).',
    },
    {
      name: 'minuteStep',
      type: 'number',
      default: '1',
      description: 'Minute options step.',
    },
    {
      name: 'showSeconds',
      type: 'boolean',
      default: 'false',
      description: 'Show seconds control.',
    },
    {
      name: 'secondStep',
      type: 'number',
      default: '1',
      description: 'Seconds options step (requires showSeconds).',
    },
    {
      name: 'placeholder',
      type: 'string',
      default: '"Select time"',
      description: 'Input placeholder text.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disable the input & trigger.',
    },
    {
      name: 'label',
      type: 'string',
      default: '—',
      description:
        'Visible label for the input (external label). For "floating" or "inset", this renders inside the input.',
    },
    {
      name: 'error',
      type: 'string',
      default: '—',
      description: 'Error text displayed below the input.',
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
        'Visual size for the input. Internal dropdowns map to the nearest supported size.',
    },
    {
      name: 'variant',
      type: '"default" | "filled" | "outlined" | "ghost" | "underline" | "floating" | "inset"',
      default: '"default"',
      description:
        'Visual style for the input. Time dropdowns adopt a compatible variant.',
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
      description:
        'Show the Now / Clear / Done row at the bottom of the popover.',
    },
    {
      name: 'readOnly',
      type: 'boolean',
      default: 'false',
      description: 'Prevents manual typing while keeping the dropdowns usable.',
    },
    {
      name: 'ariaLabel',
      type: 'string',
      default: '—',
      description: 'Accessible label when no visible label is rendered.',
    },
    {
      name: 'dateAdapter',
      type: 'DateAdapter',
      default: 'vanillaAdapter',
      description:
        'Adapter for parsing/formatting and date math. Works with your existing adapters.',
    },
    {
      name: 'deferInitialRender',
      type: 'boolean',
      default: 'true',
      description:
        'Avoid hydration mismatches when value is undefined by rendering an empty shell on the server and formatting after mount.',
    },
  ],
  notes: [
    'The component accepts and emits a Date; only the time portion is edited.',
    'Formatting/parsing tokens depend on the adapter you pass.',
    'Use `deferInitialRender` to prevent SSR/CSR mismatches if you rely on “now”.',
  ],
};
