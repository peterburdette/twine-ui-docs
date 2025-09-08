import type { DocPage } from '../schema';
import {
  CardBasicDemo,
  CardHeaderActionsDemo,
  CardMediaCoverDemo,
  CardMediaVideoAudioDemo,
  CardMediaLeftRightDemo,
  CardSelectableDemo,
  CardVariantsDemo,
} from '@/components/demos/Card';

import {
  CardBasicDemoCode,
  CardHeaderActionsDemoCode,
  CardMediaCoverDemoCode,
  CardMediaVideoAudioDemoCode,
  CardMediaLeftRightDemoCode,
  CardSelectableDemoCode,
  CardVariantsDemoCode,
} from '@/components/demos/Card/';
import { cardApi } from '../api/Card.api';
import { cardA11y } from '../a11y/Card.a11y';

export const doc: DocPage = {
  slug: 'card',
  title: 'Card',
  toc: true,
  tocTitle: 'Introduction',
  description:
    'A flexible surface for grouping content and actions — supports variants, density, media, sections, and interactive states.',
  category: 'Surfaces',
  sections: [
    {
      kind: 'usage',
      id: 'usage',
      title: 'Usage',
      previews: [
        {
          id: 'basic',
          title: 'Basic',
          description:
            'Title, subtitle, content, and actions — the everyday card.',
          component: CardBasicDemo,
          code: CardBasicDemoCode,
        },
        {
          id: 'header-actions',
          title: 'Header & Actions',
          description:
            'Add actions to the header and footer for quick affordances.',
          component: CardHeaderActionsDemo,
          code: CardHeaderActionsDemoCode,
        },
        {
          kind: 'group',
          id: 'media',
          title: 'Media',
          description:
            'Combine media with content — cover images, avatars, and fixed aspect ratios.',
          examples: [
            {
              id: 'media-cover',
              title: 'Cover Image',
              description: '',
              component: CardMediaCoverDemo,
              code: CardMediaCoverDemoCode,
            },
            {
              id: 'media-video-audio',
              title: 'Video + Audio',
              description:
                'Embed video and build an in-card audio player — combine media, progress, and transport actions within a single card.',
              component: CardMediaVideoAudioDemo,
              code: CardMediaVideoAudioDemoCode,
            },
            {
              id: 'media-side-full-height',
              title: 'Side Media (Full Height)',
              description:
                'Create horizontal cards with left/right media columns that stretch to the card’s full height and honor rounded corners — ideal for product tiles and list items.',
              component: CardMediaLeftRightDemo,
              code: CardMediaLeftRightDemoCode,
            },
          ],
        },
        {
          id: 'selectable',
          title: 'Selectable Cards',
          description:
            'Use cards as choices with clear selection, focus, and disabled states.',
          component: CardSelectableDemo,
          code: CardSelectableDemoCode,
        },
        {
          id: 'variants',
          title: 'Variants & Colors',
          description:
            'Outlined, elevated, soft, and ghost — with color accents.',
          component: CardVariantsDemo,
          code: CardVariantsDemoCode,
        },
      ],
    },
    {
      kind: 'a11y',
      id: 'accessibility',
      title: 'Accessibility',
      description:
        'Key considerations for keyboard use, labeling, and mixed state announcements.',
      a11y: cardA11y,
    },
    {
      kind: 'api',
      id: 'api',
      title: 'API',
      description: 'Props and slots for Card and its subcomponents.',
      api: cardApi,
    },
  ],
};
