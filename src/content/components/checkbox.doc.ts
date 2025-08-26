import type { DocPage } from '../schema';
import {
  CheckboxBasicDemo,
  CheckboxLabelsDemo,
  CheckboxControlledDemo,
  CheckboxIntermediateDemo,
  CheckboxSizesDemo,
  CheckboxVariantsDemo,
} from '@/components/demos/Checkbox';
import { CheckboxBasicDemoCode } from '@/components/demos/Checkbox/CheckboxBasicDemo.code';
import { CheckboxControlledDemoCode } from '@/components/demos/Checkbox/CheckboxControlledDemo.code';
import { CheckboxIntermediateDemoCode } from '@/components/demos/Checkbox/CheckboxIntermediateDemo.code';
import { CheckboxLabelsDemoCode } from '@/components/demos/Checkbox/CheckboxLabelsDemo.code';
import { CheckboxSizesDemoCode } from '@/components/demos/Checkbox/CheckboxSizesDemo.code';
import { CheckboxVariantsDemoCode } from '@/components/demos/Checkbox/CheckboxVariantsDemo.code';

export const doc: DocPage = {
  slug: 'checkbox',
  title: 'Checkbox',
  description:
    'An accessible, customizable checkbox component for selecting one or multiple options. Supports controlled and uncontrolled usage, built-in label integration, different sizes and variants, and disabled or validation states all styled with Tailwind CSS.',

  category: 'Form',
  toc: true,
  tocTitle: 'Introduction',
  previews: [
    {
      id: 'basic-usage',
      title: 'Basic Usage',
      description:
        'A simple example of unchecked, checked, and disabled checkboxes without labels or styling variations.',
      component: CheckboxBasicDemo,
      code: CheckboxBasicDemoCode,
    },
    {
      id: 'label',
      title: 'Label',
      description:
        'Add descriptive text to a Checkbox by wrapping it with the FormControlLabel component.',
      component: CheckboxLabelsDemo,
      code: CheckboxLabelsDemoCode,
    },
    {
      id: 'controlled',
      title: 'Controlled',
      description:
        'Manage the checked state through React state for predictable and controlled behavior.',
      component: CheckboxControlledDemo,
      code: CheckboxControlledDemoCode,
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
      description:
        'Use a parent checkbox to toggle all children and show an indeterminate state when partially selected.',
      component: CheckboxIntermediateDemo,
      code: CheckboxIntermediateDemoCode,
    },
    {
      id: 'size',
      title: 'Size',
      description:
        'Control checkbox dimensions with the size prop (`sm`, `md`, or `lg`).',

      component: CheckboxSizesDemo,
      code: CheckboxSizesDemoCode,
    },
    {
      id: 'variants',
      title: 'Variants',
      description:
        'Change the visual style using the variant prop (`default`, `success`, `warning`, or `error`).',
      component: CheckboxVariantsDemo,
      code: CheckboxVariantsDemoCode,
    },
  ],
};
