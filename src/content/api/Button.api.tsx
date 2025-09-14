import { ApiSpec } from './types';

export const buttonApi: ApiSpec = {
  component: 'Button',
  props: [
    {
      name: 'variant',
      type: `'default' | 'outlined' | 'ghost' | 'destructive' | 'secondary' | 'link' | 'success' | 'warning' | 'info' | 'unstyled'`,
      default: `'default'`,
      description:
        'Controls the visual style of the button. Variants communicate intent such as primary actions, secondary actions, warnings, or destructive actions.',
    },
    {
      name: 'size',
      type: `'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon'`,
      default: `'md'`,
      description:
        'Defines the size of the button. Text sizes (xs–xl) adjust padding and font size; `icon` renders a square icon-only button. Icon and spinner sizes scale automatically with the chosen size.',
    },
    {
      name: 'radius',
      type: `'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | number | string`,
      default: `'md'`,
      description:
        'Corner radius. Use Tailwind-like tokens for common shapes or pass a custom CSS length (e.g., 10, "12px", "1rem", "50%") for full control. `full` creates a pill/circle where appropriate.',
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      default: 'false',
      description:
        'Expands the button to take up the full width of its container.',
    },
    {
      name: 'loading',
      type: 'boolean',
      default: 'false',
      description:
        'Shows a spinner (aria-hidden) and disables interaction while true. Also sets `aria-busy` for assistive technologies.',
    },
    {
      name: 'startIcon',
      type: 'React.ReactNode',
      description:
        'Optional icon before the label. Icons are decorative by default (aria-hidden) and automatically sized to match the button size.',
    },
    {
      name: 'endIcon',
      type: 'React.ReactNode',
      description:
        'Optional icon after the label. Icons are decorative by default (aria-hidden) and automatically sized to match the button size.',
    },
    {
      name: 'showFocusRing',
      type: 'boolean',
      default: 'false',
      description:
        'Adds a visible focus ring that meets WCAG 2.1 AA when the button is focused.',
    },
    {
      name: 'asChild',
      type: 'boolean',
      default: 'false',
      description:
        'Render styles on a child element instead of a native <button>. Useful for integrating with routing or custom components.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description:
        'Disables the button, preventing interaction. Automatically true when `loading` is set.',
    },
    {
      name: 'type',
      type: `'button' | 'submit' | 'reset'`,
      default: `'button'`,
      description:
        'Specifies the button behavior in forms, matching the native `type` attribute.',
    },
    {
      name: 'className',
      type: 'string',
      description:
        'Appended to the computed class list for styling overrides or utilities.',
    },
    {
      name: 'onClick',
      type: '(e: React.MouseEvent<HTMLButtonElement>) => void',
      description:
        'Fired when the button is clicked, matching the native button click event.',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      description:
        'The button label or content. For icon-only usage (`size="icon"`), provide an accessible name via `aria-label`.',
    },
  ],
  notes: [
    'Button extends React.ButtonHTMLAttributes<HTMLButtonElement>, so all native button attributes are supported.',
    'The component forwards its ref to the underlying <button> element.',
    'When `loading` is true, the spinner is rendered and `aria-busy="true"` is applied automatically.',
  ],
};
