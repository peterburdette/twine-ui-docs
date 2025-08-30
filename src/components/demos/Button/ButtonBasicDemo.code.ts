export const ButtonBasicDemoCode = `import * as React from 'react';
import { Button } from 'twine-ui';

export const ButtonBasicDemo: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
};
`;
