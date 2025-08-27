export const ButtonVariantsDemoCode = `import * as React from 'react';
import { Button } from 'twine-ui';

export const ButtonVariantsDemo: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
      <Button variant="link">Link</Button>
      <Button variant="unstyled">Unstyled</Button>
    </div>
  );
};
`;
