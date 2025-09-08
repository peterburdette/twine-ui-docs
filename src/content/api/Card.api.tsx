import { ApiSpec } from './types';

export const cardApi: ApiSpec = {
  component: 'Card',
  description:
    'Root surface component. Controls variant, tone, density, padding, rounding, orientation, and interactivity. Provides context for nested Card subcomponents.',
  props: [
    {
      name: 'as',
      type: 'React.ElementType',
      description:
        'Polymorphic root element to render, e.g. "div", "a", "button", or a custom component.',
    },
    {
      name: 'href',
      type: 'string',
      description:
        'When provided (and `as` is not set), the card renders as an anchor and becomes clickable.',
    },
    {
      name: 'target',
      type: 'string',
      description:
        'Target attribute for link cards (e.g. "_blank"). Only used when `href` is set.',
    },
    {
      name: 'rel',
      type: 'string',
      description:
        'Rel attribute for link cards (e.g. "noopener noreferrer"). Recommended when using `target="_blank"`.',
    },
    {
      name: 'variant',
      type: `'elevated' | 'outlined' | 'soft' | 'plain'`,
      default: `'elevated'`,
      description:
        'Visual style of the surface. "elevated" adds a subtle shadow, "outlined" draws a border, "soft" uses a tinted background, and "plain" is transparent.',
    },
    {
      name: 'tone',
      type: `'default' | 'info' | 'success' | 'warning' | 'danger'`,
      default: `'default'`,
      description:
        'Color intent for the surface and border (where applicable). Useful for conveying status or emphasis.',
    },
    {
      name: 'density',
      type: `'compact' | 'standard' | 'comfortable'`,
      default: `'standard'`,
      description:
        'Typographic density for the card. Affects base text sizing used across the card and its slots.',
    },
    {
      name: 'orientation',
      type: `'vertical' | 'horizontal'`,
      default: `'vertical'`,
      description:
        'Layout direction for the root container. "horizontal" places children side-by-side; "vertical" stacks them.',
    },
    {
      name: 'padding',
      type: `'none' | 'sm' | 'md' | 'lg'`,
      default: `'md'`,
      description:
        'Default inner padding scale provided via context to header/content/footer/sections. The root itself does not add padding.',
    },
    {
      name: 'rounded',
      type: `'sm' | 'md' | 'lg' | 'xl' | '2xl'`,
      default: `'lg'`,
      description:
        'Corner radius of the card surface. Maps to Tailwind rounding utilities.',
    },
    {
      name: 'interactive',
      type: 'boolean',
      default: 'false',
      description:
        'Forces interactive affordances (hover elevation and focus ring). This is automatically enabled when `href` or `onClick` is provided.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description:
        'Visually disables the card and prevents interaction (reduced opacity and pointer events disabled).',
    },
    {
      name: 'shadowOnHover',
      type: 'boolean',
      default: 'true',
      description:
        'When interactive, apply a stronger shadow on hover for emphasis.',
    },
    {
      name: 'border',
      type: 'boolean',
      default: 'true',
      description:
        'Adds the generic border utility on the root. Primarily useful with `variant="plain"`; other variants already include a border.',
    },
    {
      name: 'onClick',
      type: '(e: React.MouseEvent) => void',
      description:
        'Click handler for interactive cards. If provided and `as` is not set, the card renders as a "button".',
    },
    {
      name: 'className',
      type: 'string',
      description:
        'Additional class names to merge with the computed classes for custom styling.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Inline styles to apply to the root element.',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      description:
        'Card content. Typically composed of CardHeader, CardContent, CardActions, CardMedia, etc.',
    },
  ],
  notes: [
    'If you supply `href`, the card behaves as a link; if you supply `onClick` (and not `as`), it behaves as a button.',
    'Use `rel="noopener noreferrer"` with `target="_blank"` for security.',
    '`padding` flows through context to child slots; set per-slot padding via those components if desired.',
  ],
};
