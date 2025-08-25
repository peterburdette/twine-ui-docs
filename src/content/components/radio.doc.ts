import type { DocPage } from '../schema';
import {
  RadioBasicDemo,
  RadioLabelsDemo,
  RadioGroupVerticalDemo,
  RadioGroupHorizontalDemo,
  RadioSizesDemo,
  RadioVariantsDemo,
  RadioDisabledRequiredDemo,
} from '@/components/demos/Radio';

export const doc: DocPage = {
  slug: 'radio',
  title: 'Radio',
  description:
    'Single-choice input with accessible labeling, grouping, sizes, and color variants.',
  category: 'Form',
  toc: true,
  previews: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'Unlabeled radio inputs.',
      component: RadioBasicDemo,
    },
    {
      id: 'labels',
      title: 'With labels',
      description: 'Using FormControlLabel.',
      component: RadioLabelsDemo,
    },
    {
      id: 'group-vertical',
      title: 'Group (vertical)',
      description: 'Controlled RadioGroup with vertical layout.',
      component: RadioGroupVerticalDemo,
    },
    {
      id: 'group-horizontal',
      title: 'Group (horizontal)',
      description: 'Controlled RadioGroup with horizontal layout.',
      component: RadioGroupHorizontalDemo,
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'sm / md / lg',
      component: RadioSizesDemo,
    },
    {
      id: 'variants',
      title: 'Variants',
      description: 'default, success, warning, error with focus ring.',
      component: RadioVariantsDemo,
    },
    {
      id: 'states',
      title: 'Disabled & required',
      description: 'Common states for radios.',
      component: RadioDisabledRequiredDemo,
    },
  ],
};
