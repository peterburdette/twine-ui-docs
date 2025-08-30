import type { DocPage } from '../schema';
import {
  InputBasicDemo,
  InputControlledDemo,
  InputSizesDemo,
  InputVariantsDemo,
  InputWithIconDemo,
  InputAdornmentsDemo,
} from '@/components/demos/Input';
import {
  InputBasicDemoCode,
  InputControlledDemoCode,
  InputSizesDemoCode,
  InputVariantsDemoCode,
  InputWithIconDemoCode,
  InputAdornmentsDemoCode,
} from '@/components/demos/Input';
import { inputApi } from '../api/Input.api';
import { inputA11y } from '../a11y/Input.a11y';

export const doc: DocPage = {
  slug: 'input',
  title: 'Input',
  toc: true,
  tocTitle: 'Introduction',
  description:
    'A fully accessible and customizable input built with Tailwind CSS. Supports controlled and uncontrolled usage, flexible sizes and variants, and seamless integration with form labels, descriptions, and validation.',
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
            'Use for capturing text, numbers, or other simple input values.',
          component: InputBasicDemo,
          code: InputBasicDemoCode,
        },
        {
          id: 'controlled',
          title: 'Controlled',
          description:
            'Bind the input value to state for full control and validation handling.',
          component: InputControlledDemo,
          code: InputControlledDemoCode,
        },
        {
          id: 'sizes',
          title: 'Sizes',
          description:
            'Choose a size that fits the density of your layout and context.',
          component: InputSizesDemo,
          code: InputSizesDemoCode,
        },
        {
          id: 'variants',
          title: 'Variants',
          description:
            'Apply different visual styles to match intent or theme.',
          component: InputVariantsDemo,
          code: InputVariantsDemoCode,
        },
        {
          id: 'icons',
          title: 'Icons',
          description:
            'Include icons inside the input for search, actions, or context cues.',
          component: InputWithIconDemo,
          code: InputWithIconDemoCode,
        },
        {
          id: 'adornments',
          title: 'Adornments',
          description:
            'Showcases start/end adornments, inline labels, inline add-ons, and fixed-width inline selects with truncation-safe triggers.',
          component: InputAdornmentsDemo,
          code: InputAdornmentsDemoCode,
        },
      ],
    },
    {
      kind: 'a11y',
      id: 'accessibility',
      title: 'Accessibility',
      description:
        'Key considerations for labels, descriptions, focus handling, and validation states.',
      a11y: inputA11y,
    },
    {
      kind: 'api',
      id: 'api',
      title: 'API',
      description: 'Props, types, and usage details for the Input component.',
      api: inputApi,
    },
  ],
};
