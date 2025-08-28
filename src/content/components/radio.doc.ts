import type { DocPage } from '../schema';
import {
  RadioBasicDemo,
  RadioLabelDemo,
  RadioLabelPlacementDemo,
  RadioControlledDemo,
  RadioSizesDemo,
  RadioVariantsDemo,
  RadioOrientationDemo,
  RadioGroupErrorDemo,
} from '@/components/demos/Radio';
import {
  RadioBasicDemoCode,
  RadioLabelDemoCode,
  RadioLabelPlacementDemoCode,
  RadioControlledDemoCode,
  RadioSizesDemoCode,
  RadioVariantsDemoCode,
  RadioOrientationDemoCode,
  RadioGroupErrorDemoCode,
} from '@/components/demos/Radio';
import { radioA11y } from '../a11y/Radio.a11y';
import { radioApi } from '../api/Radio.api';

export const doc: DocPage = {
  slug: 'radio',
  title: 'Radio',
  toc: true,
  tocTitle: 'Introduction',
  description:
    'A flexible radio input built with Tailwind CSS. Supports controlled and uncontrolled usage, size and variant customization, and seamless grouping via shared names or a RadioGroup.',
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
            'A minimal set without visible labels—useful for icon-only choices or compact UIs.',
          component: RadioBasicDemo,
          code: RadioBasicDemoCode,
        },
        {
          id: 'labels',
          title: 'Labels',
          description:
            'Pair with a label for clarity and a larger click target in most scenarios.',
          component: RadioLabelDemo,
          code: RadioLabelDemoCode,
        },
        {
          id: 'label-placement',
          title: 'Label Placement',
          description:
            'Position text before, after, above, or below the control using FormControlLabel.',
          component: RadioLabelPlacementDemo,
          code: RadioLabelPlacementDemoCode,
        },
        {
          id: 'controlled',
          title: 'Controlled',
          description:
            'Bind selection to state for validation, conditional UI, or syncing with form libraries.',
          component: RadioControlledDemo,
          code: RadioControlledDemoCode,
        },
        {
          id: 'sizes',
          title: 'Sizes',
          description:
            'Choose small, medium, or large to match layout density and target sizes.',
          component: RadioSizesDemo,
          code: RadioSizesDemoCode,
        },
        {
          id: 'variants',
          title: 'Variants',
          description:
            'Swap visual accents (default, success, warning, error) and optionally show a focus ring.',
          component: RadioVariantsDemo,
          code: RadioVariantsDemoCode,
        },
        {
          id: 'orientation',
          title: 'Orientation',
          description:
            'Use horizontal for short sets in wide layouts, and vertical for longer lists or narrow columns to match natural reading flow.',
          component: RadioOrientationDemo,
          code: RadioOrientationDemoCode,
        },
        {
          id: 'group-error',
          title: 'Group Error',
          description:
            'Mark an entire set as required/invalid and display an error until a choice is made.',
          component: RadioGroupErrorDemo,
          code: RadioGroupErrorDemoCode,
        },
      ],
    },
    {
      kind: 'a11y',
      id: 'accessibility',
      title: 'Accessibility',
      description:
        'Key considerations for grouping, labeling, state announcements, and keyboard movement within a set.',
      a11y: radioA11y,
    },
    {
      kind: 'api',
      id: 'api',
      title: 'API',
      description: 'Props, types, and usage details for the Radio component.',
      api: radioApi,
    },
  ],
};
