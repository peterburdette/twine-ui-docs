import type { DocPage } from '../schema';
import {
  CheckboxBasicDemo,
  CheckboxLabelsDemo,
  CheckboxControlledDemo,
  CheckboxIntermediateDemo,
  CheckboxSizesDemo,
  CheckboxVariantsDemo,
} from '@/components/demos/Checkbox';
import {
  CheckboxBasicDemoCode,
  CheckboxLabelsDemoCode,
  CheckboxControlledDemoCode,
  CheckboxIntermediateDemoCode,
  CheckboxSizesDemoCode,
  CheckboxVariantsDemoCode,
} from '@/components/demos/Checkbox/';
import { CheckboxLabelPlacementDemo } from '@/components/demos/Checkbox/CheckboxLabelPlacementDemo';
import { CheckboxLabelPlacementDemoCode } from '@/components/demos/Checkbox/CheckboxLabelPlacementDemo.code';
import { checkboxApi } from '../api/Checkbox.api';
import { checkboxA11y } from '../a11y/Checkbox.a11y';

export const doc: DocPage = {
  slug: 'checkbox',
  title: 'Checkbox',
  toc: true,
  tocTitle: 'Introduction',
  description:
    'A fully accessible and customizable checkbox built with Tailwind CSS. Supports single or multiple selections with controlled and uncontrolled usage, indeterminate (mixed) state, and seamless integration with labels. Inherits disabled, required, and error states for consistent form behavior, while offering flexible sizes, variants, and focus ring options for both usability and accessibility.',
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
          component: CheckboxBasicDemo,
          code: CheckboxBasicDemoCode,
        },
        {
          id: 'label',
          title: 'Label',
          component: CheckboxLabelsDemo,
          code: CheckboxLabelsDemoCode,
        },
        {
          id: 'label-placement',
          title: 'Label Placement',
          component: CheckboxLabelPlacementDemo,
          code: CheckboxLabelPlacementDemoCode,
        },
        {
          id: 'controlled',
          title: 'Controlled',
          component: CheckboxControlledDemo,
          code: CheckboxControlledDemoCode,
        },
        {
          id: 'intermediate',
          title: 'Intermediate',
          component: CheckboxIntermediateDemo,
          code: CheckboxIntermediateDemoCode,
        },
        {
          id: 'sizes',
          title: 'Size',
          component: CheckboxSizesDemo,
          code: CheckboxSizesDemoCode,
        },
        {
          id: 'variants',
          title: 'Variants',
          component: CheckboxVariantsDemo,
          code: CheckboxVariantsDemoCode,
        },
      ],
    },
    {
      kind: 'a11y',
      id: 'accessibility',
      title: 'Accessibility',
      a11y: checkboxA11y,
    },
    {
      kind: 'api',
      id: 'api',
      title: 'API',
      api: checkboxApi,
    },
  ],
};
