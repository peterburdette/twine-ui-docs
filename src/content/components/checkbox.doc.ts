import type { DocPage } from '../schema';
import {
  CheckboxBasicDemo,
  CheckboxLabelsDemo,
  CheckboxLabelPlacementDemo,
  CheckboxControlledDemo,
  CheckboxIntermediateDemo,
  CheckboxSizesDemo,
  CheckboxVariantsDemo,
} from '@/components/demos/Checkbox';
import {
  CheckboxBasicDemoCode,
  CheckboxLabelsDemoCode,
  CheckboxLabelPlacementDemoCode,
  CheckboxControlledDemoCode,
  CheckboxIntermediateDemoCode,
  CheckboxSizesDemoCode,
  CheckboxVariantsDemoCode,
} from '@/components/demos/Checkbox/';
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
          description:
            'Use for simple on/off selection or to introduce the checkbox in a form.',
          component: CheckboxBasicDemo,
          code: CheckboxBasicDemoCode,
        },
        {
          id: 'label',
          title: 'Label',
          description:
            'Pair with a label for clarity and a larger click target in most scenarios.',
          component: CheckboxLabelsDemo,
          code: CheckboxLabelsDemoCode,
        },
        {
          id: 'label-placement',
          title: 'Label Placement',
          description:
            'Choose your label placement to match layout and reading flow.',
          component: CheckboxLabelPlacementDemo,
          code: CheckboxLabelPlacementDemoCode,
        },
        {
          id: 'controlled',
          title: 'Controlled',
          description:
            'Manage state externally for sync with form libraries, validation, or complex logic.',
          component: CheckboxControlledDemo,
          code: CheckboxControlledDemoCode,
        },
        {
          id: 'intermediate',
          title: 'Intermediate',
          description:
            'Use the indeterminate (mixed) state to represent partial selection in a group.',
          component: CheckboxIntermediateDemo,
          code: CheckboxIntermediateDemoCode,
        },
        {
          id: 'sizes',
          title: 'Size',
          description:
            'Select a size that fits density and touch targets across your UI.',
          component: CheckboxSizesDemo,
          code: CheckboxSizesDemoCode,
        },
        {
          id: 'variants',
          title: 'Variants',
          description:
            'Choose a visual style that aligns with emphasis, theme, or context.',
          component: CheckboxVariantsDemo,
          code: CheckboxVariantsDemoCode,
        },
      ],
    },
    {
      kind: 'a11y',
      id: 'accessibility',
      title: 'Accessibility',
      description:
        'Key considerations for keyboard use, labeling, and mixed state announcements.',
      a11y: checkboxA11y,
    },
    {
      kind: 'api',
      id: 'api',
      title: 'API',
      description:
        'Props, events, and types for integrating the Checkbox component.',
      api: checkboxApi,
    },
  ],
};
