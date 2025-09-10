export const datetimePickerApi = {
  component: 'DateTimePicker',
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
      description:
        'Called when a date (and time, if enabled) is selected or cleared.',
    },

    // Range mode
    {
      name: 'isRange',
      type: 'boolean',
      default: 'false',
      description: 'Enable range selection (start → end).',
    },
    {
      name: 'rangeValue',
      type: '{ start?: Date; end?: Date }',
      default: '{ start: undefined, end: undefined }',
      description: 'Controlled value for range mode.',
    },
    {
      name: 'onRangeChange',
      type: '(range: { start?: Date; end?: Date }) => void',
      default: '—',
      description: 'Called when the user completes or clears a range.',
    },
    {
      name: 'rangePlaceholder',
      type: '{ start?: string; end?: string }',
      default: '{ start: "Start date", end: "End date" }',
      description:
        'Optional placeholders for range inputs (when using a split input UI).',
    },

    // Time
    {
      name: 'showTime',
      type: 'boolean',
      default: 'true',
      description: 'Show time controls below the calendar.',
    },
    {
      name: 'timeFormat',
      type: '"12" | "24"',
      default: '"12"',
      description: 'Switch hours selector between 12-hour and 24-hour.',
    },

    // Formatting / parsing
    {
      name: 'dateFormat',
      type: 'string',
      default: 'showTime ? "MMM dd, yyyy HH:mm" : "MMM dd, yyyy"',
      description:
        'Format pattern used for input display and parsing. Token rules depend on the chosen date adapter.',
    },
    {
      name: 'placeholder',
      type: 'string',
      default: '"Select date and time"',
      description:
        'Input placeholder. For "floating" and "inset" variants a single space placeholder is applied automatically to drive :placeholder-shown.',
    },

    // Limits / disabled
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
      description:
        'List of specific dates that cannot be selected (by calendar day). Disabled days are non-focusable, have aria-disabled and no hover cursor.',
    },

    // Labeling / errors
    {
      name: 'label',
      type: 'string',
      default: '—',
      description:
        'Visible label for the input. For "floating" and "inset" variants, this renders inside the field.',
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

    // Visuals
    {
      name: 'inputSize',
      type: '"xs" | "sm" | "md" | "lg" | "xl"',
      default: '"md"',
      description:
        'Visual size for the input. Internal controls (Selects) map to nearest supported size.',
    },
    {
      name: 'variant',
      type: '"default" | "filled" | "outlined" | "ghost" | "underline" | "floating" | "inset"',
      default: '"default"',
      description:
        'Visual variant for the input. "floating" and "inset" render the label inside the field.',
    },
    {
      name: 'className',
      type: 'string',
      default: '—',
      description: 'Additional class names for the container.',
    },

    // Adapter / locale
    {
      name: 'dateAdapter',
      type: 'DateAdapter',
      default: 'vanillaAdapter',
      description:
        'Pluggable date adapter. Use provided adapters (date-fns, Day.js, Moment, Luxon) or bring your own.',
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

    // Popover control
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

    // Misc
    {
      name: 'enableQuickActions',
      type: 'boolean',
      default: 'true',
      description: 'Show the Today / Clear / Done row at the bottom.',
    },
    {
      name: 'readOnly',
      type: 'boolean',
      default: 'false',
      description:
        'Make the input readOnly (prevents manual typing but still allows using the calendar/time UI).',
    },
    {
      name: 'ariaLabel',
      type: 'string',
      default: '—',
      description:
        'Accessible label for the input when no visible label is provided.',
    },

    // SSR / hydration
    {
      name: 'deferInitialRender',
      type: 'boolean',
      default: 'true',
      description:
        'Prevents SSR/CSR mismatch when no `value` is provided and the component would otherwise format `now()`. Renders a stable shell on the server and hydrates the real value on mount.',
    },
  ],
  types: [
    {
      name: 'DateAdapter',
      description:
        'Adapter contract used by the picker to perform date math, parse, and format across different libraries.',
      snippet: `
export interface DateAdapter {
  now(): Date;
  clone(d: Date): Date;
  addMonths(d: Date, n: number): Date;
  addYears(d: Date, n: number): Date;
  startOfDay(d: Date): Date;
  endOfDay(d: Date): Date;
  startOfWeek(d: Date, weekStartsOn: number): Date;
  isValid(d: Date): boolean;
  isBefore(a: Date, b: Date): boolean;
  isAfter(a: Date, b: Date): boolean;
  isSameDay(a: Date, b: Date): boolean;
  parse(value: string, pattern: string, referenceDate: Date): Date;
  format(d: Date, pattern: string): string;
  getYear(d: Date): number;
  getMonth(d: Date): number;
  getDate(d: Date): number;
  getDay(d: Date): number;
  setHoursMinutes(d: Date, h: number, m: number): Date;
}
      `,
    },
    {
      name: 'DateTimeRange',
      description: 'Shape used for range selection.',
      snippet: `
export interface DateTimeRange {
  start?: Date;
  end?: Date;
}
      `,
    },
  ],
  notes: [
    'Format tokens depend on the adapter in use (e.g., Luxon vs date-fns tokens).',
    'The component accepts and emits plain JavaScript Date objects.',
    'To use a specific date library, install it in your app and pass the matching adapter.',
    'If you need a default value, pass a stable Date (e.g., from props or server) or keep `deferInitialRender` enabled to avoid hydration mismatches.',
    'For "floating" and "inset" variants, the component injects a single-space placeholder so the internal label can float using :placeholder-shown.',
    'Disabled dates are non-interactive (no hover cursor), non-focusable, and carry aria-disabled for assistive tech.',
  ],
};
