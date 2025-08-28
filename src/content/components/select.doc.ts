import type { DocPage } from '../schema';
import {
  SelectBasicDemo,
  SelectControlledDemo,
  SelectSizesDemo,
  SelectAutoWidthDemo,
  SelectFullWidthDemo,
  SelectVariantsDemo,
} from '@/components/demos/Select';
import {
  SelectBasicDemoCode,
  SelectControlledDemoCode,
  SelectSizesDemoCode,
  SelectAutoWidthDemoCode,
  SelectFullWidthDemoCode,
  SelectVariantsDemoCode,
} from '@/components/demos/Select';
import { selectA11y } from '../a11y/Select.a11y';
import { selectApi } from '../api/Select.api';

export const doc: DocPage = {
  slug: 'select',
  title: 'Select',
  toc: true,
  tocTitle: 'Introduction',
  description:
    'An accessible Select built with Tailwind CSS. Features keyboard navigation, typeahead, disabled options, focus ring styling, sizes, and variants.',
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
            'Use when users need to pick one option from a known list.',
          component: SelectBasicDemo,
          code: SelectBasicDemoCode,
        },
        {
          id: 'controlled',
          title: 'Controlled',
          description:
            'Bind the selected value to state for validation, conditional UI, and form submission.',
          component: SelectControlledDemo,
          code: SelectControlledDemoCode,
        },
        {
          id: 'sizes',
          title: 'Sizes',
          description:
            'Choose a trigger size that matches the density and emphasis of the layout.',
          component: SelectSizesDemo,
          code: SelectSizesDemoCode,
        },
        {
          id: 'variants',
          title: 'Variants',
          description:
            'Apply a visual style to match the surface it sits on; optionally show a focus ring for stronger keyboard visibility.',
          component: SelectVariantsDemo,
          code: SelectVariantsDemoCode,
        },
        {
          id: 'auto-width',
          title: 'Auto Width',
          description:
            'Shrink the trigger to fit its content using the `autoWidth` prop. Useful for compact UIs or inline forms.',
          component: SelectAutoWidthDemo,
          code: SelectAutoWidthDemoCode,
        },
        {
          id: 'full-width',
          title: 'Full Width',
          description:
            'Make the trigger fill the width of its container using the `fullWidth` prop. Ideal for responsive forms and grids.',
          component: SelectFullWidthDemo,
          code: SelectFullWidthDemoCode,
        },
      ],
    },
    {
      kind: 'a11y',
      id: 'accessibility',
      title: 'Accessibility',
      description:
        'Key considerations for roles, announcements, keyboard behavior, and state management.',
      a11y: selectA11y,
    },
    {
      kind: 'api',
      id: 'api',
      title: 'API',
      description: 'Props, types, and usage details for the Select component.',
      api: selectApi,
    },
  ],
};
