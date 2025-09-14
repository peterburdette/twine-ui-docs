import { A11ySpec } from './types';

export const buttonA11y: A11ySpec = {
  component: 'Button',
  items: [
    {
      label: 'Built-in semantics & keyboard',
      text: 'Renders a native <button> so role="button" and default keyboard behavior are provided by the browser (Enter/Space activate; Tab moves focus).',
    },
    {
      label: 'Disabled & loading states',
      text: 'Applies the HTML disabled attribute (removes from tab order and blocks events) and mirrors with aria-disabled; sets aria-busy while loading so assistive tech announces a pending action. The spinner is aria-hidden and the text label stays in the accessibility name.',
    },
    {
      label: 'Icon handling',
      text: 'startIcon/endIcon are decorative by default and marked aria-hidden; their size scales with the button size to maintain touch targets and visual alignment.',
    },
    {
      label: 'Icon-only buttons',
      text: 'When there is no visible text (e.g., size="icon"), provide an accessible name via aria-label or title so screen readers can announce the action.',
    },
    {
      label: 'Focus visibility',
      text: 'The optional showFocusRing prop adds a clear outline that meets WCAG 2.1 AA focus visibility; focus ring color is variant-aware.',
    },
    {
      label: 'Forms & type behavior',
      text: 'Defaults to type="button" to avoid accidental form submission; set type="submit" when the button should submit a form.',
    },
    {
      label: 'Visual variants & radius',
      text: 'Variant, size, and radius (including "none"/"full" or custom lengths) are visual only and do not change semantics. Ensure color contrast remains ≥ 4.5:1 for text.',
    },
  ],
  notes: [
    'Do not rely on aria-disabled alone to block interaction—use the disabled attribute for true disabling.',
    'Avoid putting interactive elements inside the button’s icon slots; icons are aria-hidden and should not receive focus.',
    'If an action navigates to a new page, prefer an <a> element or a router link with correct semantics instead of a button.',
    'For destructive actions, pair a clear label with the “destructive” variant to convey importance to all users, not just via color.',
  ],
};
