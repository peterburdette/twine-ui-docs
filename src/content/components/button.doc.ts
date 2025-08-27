import type { DocPage } from '../schema';
import {
  ButtonBasicDemo,
  ButtonVariantsDemo,
  ButtonSizesDemo,
  ButtonIconsDemo,
  ButtonIconOnlyDemo,
  ButtonLoadingDemo,
} from '@/components/demos/Button';
import {
  ButtonBasicDemoCode,
  ButtonVariantsDemoCode,
  ButtonSizesDemoCode,
  ButtonIconsDemoCode,
  ButtonIconOnlyDemoCode,
  ButtonLoadingDemoCode,
} from '@/components/demos/Button';
import { buttonA11y } from '../a11y/Button.a11y';
import { buttonApi } from '../api/Button.api';

export const doc: DocPage = {
  slug: 'button',
  title: 'Button',
  toc: true,
  tocTitle: 'Introduction',
  description:
    'A fully accessible and customizable button built with Tailwind CSS.',
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
            'Use for primary actions in a flow, or when introducing the button component for general interaction.',
          component: ButtonBasicDemo,
          code: ButtonBasicDemoCode,
        },
        {
          id: 'variants',
          title: 'Variants',
          description:
            'Choose a variant to communicate emphasis, priority, or the type of action (e.g. primary, secondary, or destructive).',
          component: ButtonVariantsDemo,
          code: ButtonVariantsDemoCode,
        },
        {
          id: 'sizes',
          title: 'Sizes',
          description:
            'Select a size that matches the context—small for dense UIs, medium for defaults, and large for standout actions.',
          component: ButtonSizesDemo,
          code: ButtonSizesDemoCode,
        },
        {
          id: 'icons',
          title: 'Icons',
          description:
            'Add leading or trailing icons to reinforce meaning, provide visual cues, or make actions more recognizable at a glance.',
          component: ButtonIconsDemo,
          code: ButtonIconsDemoCode,
        },
        {
          id: 'button-icons',
          title: 'Button Icons',
          description:
            'Use the icon size for compact, square buttons that contain only an icon, ideal for toolbars, action menus, or quick actions.',
          component: ButtonIconOnlyDemo,
          code: ButtonIconOnlyDemoCode,
        },
        {
          id: 'loading',
          title: 'Loading',
          description:
            'Show a spinner when an action is in progress to give clear feedback and prevent duplicate submissions.',
          component: ButtonLoadingDemo,
          code: ButtonLoadingDemoCode,
        },
      ],
    },
    {
      kind: 'a11y',
      id: 'accessibility',
      title: 'Accessibility',
      description:
        'Key considerations to keep buttons usable with keyboards and assistive technologies, including labeling and loading/disabled states.',
      a11y: buttonA11y,
    },
    {
      kind: 'api',
      id: 'api',
      title: 'API',
      description: 'Props, types, and usage details for the Button component.',
      api: buttonApi,
    },
  ],
};
