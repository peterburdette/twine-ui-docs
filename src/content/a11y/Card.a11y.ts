// content/a11y/Card.a11y.ts
import { A11ySpec } from './types';

export const cardA11y: A11ySpec = {
  component: 'Card',
  items: [
    {
      label: 'Semantic container by default',
      text: 'Renders as a neutral region (e.g., <div>). Avoid adding ARIA roles unless needed. When a card stands on its own (e.g., a news piece or product), consider <article> or <section> with aria-labelledby pointing to the card title.',
    },
    {
      label: 'Headings & names',
      text: 'Use <CardTitle> to provide a clear heading. If the card is a landmark (article/section), connect it with aria-labelledby to the title. Keep heading levels consistent with the page outline (e.g., h3 beneath an h2).',
    },
    {
      label: 'Interactive cards use native elements',
      text: 'Clickable cards render as <a> when href is provided or <button> when onClick is provided, ensuring keyboard activation (Enter/Space) and correct semantics without extra roles.',
    },
    {
      label: 'No nested interactive controls',
      text: 'Avoid placing buttons/links inside a button-like card. If the card itself is clickable but also contains controls, render the card as a non-button element (e.g., as="div") and manage click handlers, or stop propagation from inner controls.',
    },
    {
      label: 'Focus visibility & order',
      text: 'Interactive cards show a visible focus ring (focus-visible). Preserve outlines and ensure the primary interactive surface is focusable exactly once in the tab order.',
    },
    {
      label: 'Disabled states',
      text: 'For native <button>, use disabled. For non-native interactive wrappers (e.g., as="div" with onClick), mirror the state with aria-disabled="true" and remove from tab order (tabIndex={-1}). Prevent pointer/keyboard activation while disabled.',
    },
    {
      label: 'Selectable cards pattern',
      text: 'For single-choice selections, use a radiogroup with visually-hidden <input type="radio"> per card and a visible card UI. For multi-select, use checkboxes. Alternatively, use aria-pressed on a toggle <button> for independent on/off states.',
    },
    {
      label: 'Images & media',
      text: 'Provide alt text for informative images; use empty alt="" for decorative imagery. For video, prefer controls; do not autoplay audio. Include captions/subtitles via <track kind="captions"> when possible. Give iframes a descriptive title.',
    },
    {
      label: 'Aspect ratio wrappers',
      text: 'Aspect-ratio boxes should not hide content from assistive tech. The media element (img/video/iframe) remains in the document flow and accessible, while the wrapper handles layout only.',
    },
    {
      label: 'Color & contrast',
      text: 'Text and essential UI (borders, focus rings) must meet WCAG 2.1 contrast guidelines. Status tones (info/success/warning/danger) should maintain sufficient contrast for text and controls.',
    },
    {
      label: 'Motion & hover effects',
      text: 'Respect user motion preferences. Keep hover/press shadows subtle and use prefers-reduced-motion to reduce or remove transitions for users who opt out of animation.',
    },
    {
      label: 'Error/help associations',
      text: 'When a card contains form controls, associate helper or error text using aria-describedby/aria-errormessage on the relevant control—not the card container—so announcements are precise.',
    },
  ],
  notes: [
    'If a card represents a navigational link to details, prefer <a href> over click handlers for correct semantics and expected browser behavior.',
    'When making entire cards clickable, ensure the accessible name includes the card’s title (e.g., the linked heading).',
    'If overflow clipping is used for rounded corners, ensure inner focusable elements still show a visible focus indicator (use ring offsets or focus styles on the inner control).',
    'Keep reading order logical: place media before or after text in DOM to match visual order; don’t rely solely on CSS for reordering.',
  ],
};
