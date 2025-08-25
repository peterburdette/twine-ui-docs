import type { DocPage } from '../schema';
import {
  ButtonBasicDemo,
  ButtonVariantsDemo,
  ButtonSizesDemo,
  ButtonIconsDemo,
  ButtonDisabledLoadingDemo,
  ButtonGroupDemo,
} from '@/components/demos/Button';

export const doc: DocPage = {
  slug: 'button',
  title: 'Button',
  description:
    'Buttons trigger actions and are available in multiple variants, sizes, and states.',
  category: 'Form',
  toc: true,
  previews: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'Default button styles.',
      component: ButtonBasicDemo,
    },
    {
      id: 'variants',
      title: 'Variants',
      description: 'Solid, outline, ghost, link, and more.',
      component: ButtonVariantsDemo,
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Small, medium, large, and icon-only.',
      component: ButtonSizesDemo,
    },
    {
      id: 'icons',
      title: 'With icons',
      description: 'Leading and trailing icons.',
      component: ButtonIconsDemo,
    },
    {
      id: 'states',
      title: 'Disabled & loading',
      description: 'Disabled and async loading states.',
      component: ButtonDisabledLoadingDemo,
    },
    {
      id: 'group',
      title: 'Button group',
      description: 'Adjacent buttons styled as a group.',
      component: ButtonGroupDemo,
    },
  ],
};
