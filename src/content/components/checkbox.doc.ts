import type { DocPage } from '../schema';
import {
  CheckboxBasicDemo,
  CheckboxLabelsDemo,
  CheckboxControlledDemo,
  CheckboxSizesDemo,
  CheckboxDisabledDemo,
  CheckboxVariantsDemo,
} from '@/components/demos/Checkbox';

export const doc: DocPage = {
  slug: 'checkbox',
  title: 'Checkbox',
  description:
    'Multi-select input for toggling independent options, with labeling, sizes, and variants.',
  category: 'Form',
  toc: true,
  previews: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'Plain checkboxes.',
      component: CheckboxBasicDemo,
    },
    {
      id: 'labels',
      title: 'With labels',
      description:
        'You can provide a label to the Checkbox by using the FormControlLabel component.',
      component: CheckboxLabelsDemo,
    },
    {
      id: 'controlled',
      title: 'Controlled',
      description: 'Fully controlled checkbox state.',
      component: CheckboxControlledDemo,
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'sm / md / lg.',
      component: CheckboxSizesDemo,
    },
    {
      id: 'variants',
      title: 'Variants',
      description: 'default, success, warning, error.',
      component: CheckboxVariantsDemo,
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'Disabled states.',
      component: CheckboxDisabledDemo,
    },
  ],
};
