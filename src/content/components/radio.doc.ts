import type { DocPage } from '../schema';
import {
  RadioBasicDemo,
  RadioControlledDemo,
  RadioSizesDemo,
  RadioVariantsDemo,
} from '@/components/demos/Radio';
import {
  RadioBasicDemoCode,
  RadioControlledDemoCode,
  RadioSizesDemoCode,
  RadioVariantsDemoCode,
} from '@/components/demos/Radio';
import { radioA11y } from '../a11y/Radio.a11y';
import { radioApi } from '../api/Radio.api';

export const doc: DocPage = {
  slug: 'radio',
  title: 'Radio',
  toc: true,
  tocTitle: 'Introduction',
  description:
    'A flexible and accessible radio input built with Tailwind CSS. Supports controlled and uncontrolled usage, size and variant customization, and seamless grouping via shared names or a RadioGroup.',
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
            'Use when users must choose exactly one option from a small set.',
          component: RadioBasicDemo,
          code: RadioBasicDemoCode,
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
            'Pick a size that matches your layout density and target sizes.',
          component: RadioSizesDemo,
          code: RadioSizesDemoCode,
        },
        {
          id: 'variants',
          title: 'Variants',
          description:
            'Choose a visual style to indicate emphasis or contextual meaning.',
          component: RadioVariantsDemo,
          code: RadioVariantsDemoCode,
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
