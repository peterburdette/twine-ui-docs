import type { DocPage } from '../schema';
import {
  DateTimePickerBasicDemo,
  DateTimePickerWithTimeDemo,
  DateTimePicker24hDemo,
  DateTimePickerMinMaxDisabledDemo,
  DateTimePickerAdapterDemo,
  DateTimePickerControlledDemo,
  DateTimePickerQuickActionsOffDemo,
  DateTimePickerSizesDemo,
  DateTimePickerVariantsDemo,
} from '@/components/demos/DateTimePicker';
import {
  DateTimePickerBasicDemoCode,
  DateTimePickerWithTimeDemoCode,
  DateTimePicker24hDemoCode,
  DateTimePickerMinMaxDisabledDemoCode,
  DateTimePickerAdapterDemoCode,
  DateTimePickerControlledDemoCode,
  DateTimePickerQuickActionsOffDemoCode,
  DateTimePickerSizesDemoCode,
  DateTimePickerVariantsDemoCode,
} from '@/components/demos/DateTimePicker';

import { datetimePickerA11y } from '../a11y/DateTimePicker.a11y';
import { datetimePickerApi } from '../api/DateTimePicker.api';

export const doc: DocPage = {
  slug: 'date-time-picker',
  title: 'DateTimePicker',
  toc: true,
  tocTitle: 'Introduction',
  description:
    'A keyboard-accessible date & time picker with optional adapters for date-fns, Day.js, Moment, and Luxon — or a zero-dependency vanilla mode.',
  category: 'Form',
  sections: [
    {
      kind: 'usage',
      id: 'usage',
      title: 'Usage',
      previews: [
        {
          id: 'basic',
          title: 'Basic Usage',
          description:
            'A simple date-only picker. Uses the zero-dependency vanilla adapter by default.',
          component: DateTimePickerBasicDemo,
          code: DateTimePickerBasicDemoCode,
        },
        {
          id: 'with-time',
          title: 'Time 12-Hour Format',
          description:
            'Enable time selection alongside the calendar. Uses a 12-hour clock and customizable display format.',
          component: DateTimePickerWithTimeDemo,
          code: DateTimePickerWithTimeDemoCode,
        },
        {
          id: '24h',
          title: 'Time 24-Hour Format',
          description:
            'Switch the time controls into 24-hour mode. Great for international and technical UIs.',
          component: DateTimePicker24hDemo,
          code: DateTimePicker24hDemoCode,
        },
        {
          id: 'constraints',
          title: 'Min/Max & Disabled Dates',
          description:
            'Restrict selection to a specific range and disable specific days (e.g., weekends or holidays).',
          component: DateTimePickerMinMaxDisabledDemo,
          code: DateTimePickerMinMaxDisabledDemoCode,
        },
        {
          id: 'adapters',
          title: 'Adapters',
          description:
            'Plug in a different date library by passing an adapter. Supported adapters: vanillaAdapter (zero-dependency), dateFnsAdapter, dayjsAdapter, momentAdapter, luxonAdapter. Token strings depend on the adapter you choose.',
          component: DateTimePickerAdapterDemo,
          code: DateTimePickerAdapterDemoCode,
        },
        {
          id: 'controlled',
          title: 'Controlled',
          description:
            'Control the popover programmatically via the `open` and `onOpenChange` props (Open/Close/Toggle).',
          component: DateTimePickerControlledDemo,
          code: DateTimePickerControlledDemoCode,
        },
        {
          id: 'quick-actions',
          title: 'Quick Actions',
          description:
            'Hide the “Today / Clear / Done” footer with `enableQuickActions={false}` for a cleaner UI.',
          component: DateTimePickerQuickActionsOffDemo,
          code: DateTimePickerQuickActionsOffDemoCode,
        },
        {
          id: 'variants',
          title: 'Variants',
          description:
            'Switch between visual styles to match your form theme. Time selectors inherit the same variant.',
          component: DateTimePickerVariantsDemo,
          code: DateTimePickerVariantsDemoCode,
        },
        {
          id: 'sizes',
          title: 'Sizes',
          description:
            'Choose compact or spacious input sizes (xs–xl). Time dropdowns follow the same size.',
          component: DateTimePickerSizesDemo,
          code: DateTimePickerSizesDemoCode,
        },
      ],
    },
    {
      kind: 'a11y',
      id: 'accessibility',
      title: 'Accessibility',
      description:
        'Keyboard navigation, ARIA attributes, and labeling considerations for the DateTimePicker.',
      a11y: datetimePickerA11y,
    },
    {
      kind: 'api',
      id: 'api',
      title: 'API',
      description: 'Props, types, and usage details for the DateTimePicker.',
      api: datetimePickerApi,
    },
  ],
};
