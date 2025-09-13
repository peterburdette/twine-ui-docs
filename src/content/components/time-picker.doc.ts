import type { DocPage } from '../schema';

import {
  TimePickerBasicDemo,
  TimePicker24hDemo,
  TimePickerSecondsStepDemo,
  TimePickerControlledDemo,
  TimePickerSizesDemo,
  TimePickerVariantsDemo,
  TimePickerBasicDemoCode,
  TimePicker24hDemoCode,
  TimePickerSecondsStepDemoCode,
  TimePickerControlledDemoCode,
  TimePickerSizesDemoCode,
  TimePickerVariantsDemoCode,
} from '@/components/demos/TimePicker';

import { timePickerA11y } from '../a11y/TimePicker.a11y';
import { timePickerApi } from '../api/TimePicker.api';

export const doc: DocPage = {
  slug: 'time-picker',
  title: 'TimePicker',
  toc: true,
  tocTitle: 'Introduction',
  description:
    'A keyboard-accessible time picker with 12/24-hour modes, optional seconds, steps, and adapter-based parsing/formatting.',
  category: 'Form',
  sections: [
    {
      kind: 'usage',
      id: 'usage',
      title: 'Usage',
      previews: [
        {
          id: 'basic',
          title: 'Basic (12-hour)',
          description:
            'A simple 12-hour time picker. Uses the zero-dependency vanilla adapter by default.',
          component: TimePickerBasicDemo,
          code: TimePickerBasicDemoCode,
        },
        {
          id: '24h',
          title: '24-Hour',
          description: 'Switch to a 24-hour clock and custom display format.',
          component: TimePicker24hDemo,
          code: TimePicker24hDemoCode,
        },
        {
          id: 'seconds-step',
          title: 'Seconds & Steps',
          description:
            'Enable seconds and set minute/second steps for precise input.',
          component: TimePickerSecondsStepDemo,
          code: TimePickerSecondsStepDemoCode,
        },
        {
          id: 'controlled',
          title: 'Controlled',
          description:
            'Control the popover programmatically via the `open` and `onOpenChange` props.',
          component: TimePickerControlledDemo,
          code: TimePickerControlledDemoCode,
        },
        {
          id: 'variants',
          title: 'Variants',
          description:
            'Switch visual styles to match your form theme. Dropdowns adopt a compatible variant.',
          component: TimePickerVariantsDemo,
          code: TimePickerVariantsDemoCode,
        },
        {
          id: 'sizes',
          title: 'Sizes',
          description:
            'Choose compact or spacious input sizes (xs–xl). Dropdowns follow the same size.',
          component: TimePickerSizesDemo,
          code: TimePickerSizesDemoCode,
        },
      ],
    },
    {
      kind: 'a11y',
      id: 'accessibility',
      title: 'Accessibility',
      description:
        'Keyboard navigation, ARIA attributes, and labeling considerations for the TimePicker.',
      a11y: timePickerA11y,
    },
    {
      kind: 'api',
      id: 'api',
      title: 'API',
      description: 'Props, types, and usage details for the TimePicker.',
      api: timePickerApi,
    },
  ],
};
