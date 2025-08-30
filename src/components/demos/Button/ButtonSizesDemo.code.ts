export const ButtonSizesDemoCode = `import * as React from 'react';
import { Button } from 'twine-ui';

export const ButtonSizesDemo: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      {/* Default */}
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      {/* Secondary */}
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="secondary" size="sm">Small</Button>
        <Button variant="secondary" size="md">Medium</Button>
        <Button variant="secondary" size="lg">Large</Button>
      </div>

      {/* Outlined */}
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="outlined" size="sm">Small</Button>
        <Button variant="outlined" size="md">Medium</Button>
        <Button variant="outlined" size="lg">Large</Button>
      </div>

      {/* Ghost */}
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="ghost" size="sm">Small</Button>
        <Button variant="ghost" size="md">Medium</Button>
        <Button variant="ghost" size="lg">Large</Button>
      </div>
    </div>
  );
};
`;
