import { ApiSpec } from './types';

export const buttonApi: ApiSpec = {
  component: 'Button',
  props: [
    {
      name: 'variant',
      type: `'default' | 'outlined' | 'ghost' | 'destructive' | 'secondary' | 'link' | 'success' | 'warning' | 'info' | 'subtle' | 'unstyled'`,
      default: `'default'`,
      description:
        'Controls the visual style of the button. Variants communicate intent such as primary actions, secondary actions, warnings, or destructive actions.',
    },
    {
      name: 'size',
      type: `'sm' | 'md' | 'lg' | 'icon'`,
      default: `'md'`,
      description:
        'Defines the size of the button. `sm`, `md`, and `lg` control padding and font size, while `icon` produces a compact square button for icon-only usage.',
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
        'Displays a spinner inside the button and disables interaction while true.',
    },
    {
      name: 'startIcon',
      type: 'React.ReactNode',
      description:
        'An optional icon displayed before the button label. Replaced by a spinner when `loading` is true.',
    },
    {
      name: 'endIcon',
      type: 'React.ReactNode',
      description:
        'An optional icon displayed after the button label. Replaced by a spinner when `loading` is true.',
    },
    {
      name: 'showFocusRing',
      type: 'boolean',
      default: 'false',
      description:
        'Adds a visible focus ring that meets WCAG contrast requirements when the button is focused.',
    },
    {
      name: 'asChild',
      type: 'boolean',
      default: 'false',
      description:
        'Renders the button styles on a child element instead of a native <button>. Useful for integrating with routing or other custom components.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description:
        'Disables the button, preventing all interaction. Automatically true when `loading` is set.',
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
        'Appended to the computed class list for styling overrides or custom utilities.',
    },
    {
      name: 'onClick',
      type: '(e: React.MouseEvent<HTMLButtonElement>) => void',
      description:
        'Handler fired when the button is clicked, matching the native button click event.',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      description:
        'The button label or content. Required unless using the `icon` size, in which case an `aria-label` should be provided.',
    },
  ],
  //   notes: [
  //     'Button extends React.ButtonHTMLAttributes<HTMLButtonElement>, so all native button attributes are supported.',
  //     'The component forwards its ref to the underlying <button> element.',
  //     'When `loading` is true, the spinner is rendered and `aria-busy="true"` is applied automatically.',
  //   ],
};
