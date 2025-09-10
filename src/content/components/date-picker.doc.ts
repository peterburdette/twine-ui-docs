import type { DocPage } from '../schema';

import {
  DatePickerBasicDemo,
  DatePickerMinMaxDisabledDemo,
  DatePickerVariantsDemo,
  DatePickerSizesDemo,
} from '@/components/demos/DatePicker';

import {
  DatePickerBasicDemoCode,
  DatePickerMinMaxDisabledDemoCode,
  DatePickerVariantsDemoCode,
  DatePickerSizesDemoCode,
} from '@/components/demos/DatePicker';

import { datePickerA11y } from '../a11y/DatePicker.a11y';
import { datePickerApi } from '../api/DatePicker.api';

export const doc: DocPage = {
  slug: 'date-picker',
  title: 'DatePicker',
  toc: true,
  tocTitle: 'Introduction',
  description:
    'A keyboard-accessible date-only picker built from Input, Popover, and a11y-friendly calendar controls. Supports multiple visual variants (including floating and inset), sizes, min/max, and disabled dates.',
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
          component: DatePickerBasicDemo,
          code: DatePickerBasicDemoCode,
        },
        {
          id: 'constraints',
          title: 'Min/Max & Disabled Dates',
          description:
            'Restrict selection to a specific range and disable specific days (e.g., holidays). Disabled days are non-interactive and announced with aria-disabled.',
          component: DatePickerMinMaxDisabledDemo,
          code: DatePickerMinMaxDisabledDemoCode,
        },
        {
          id: 'variants',
          title: 'Variants',
          description:
            'Switch between visual styles to match your form theme. Floating and inset render the label inside the input.',
          component: DatePickerVariantsDemo,
          code: DatePickerVariantsDemoCode,
        },
        {
          id: 'sizes',
          title: 'Sizes',
          description: 'Choose compact or spacious input sizes (xs–xl).',
          component: DatePickerSizesDemo,
          code: DatePickerSizesDemoCode,
        },
      ],
    },
    {
      kind: 'a11y',
      id: 'accessibility',
      title: 'Accessibility',
      description:
        'Keyboard navigation, ARIA attributes, and labeling considerations for the DatePicker.',
      a11y: datePickerA11y,
    },
    {
      kind: 'api',
      id: 'api',
      title: 'API',
      description: 'Props, types, and usage details for the DatePicker.',
      api: datePickerApi,
    },
  ],
};
