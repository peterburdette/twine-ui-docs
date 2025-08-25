'use client';

import * as React from 'react';
import { Button } from 'twine-ui';

export const ButtonSizesDemo: React.FC = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button
        size="icon"
        aria-label="Icon-only"
      >
        ★
      </Button>
    </div>
  );
};
