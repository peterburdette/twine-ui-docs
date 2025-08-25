'use client';

import * as React from 'react';
import { Button } from 'twine-ui';

export const ButtonGroupDemo: React.FC = () => {
  return (
    <div className="inline-flex rounded-md shadow-sm overflow-hidden">
      <Button className="rounded-none first:rounded-l-md last:rounded-r-md">
        Left
      </Button>
      <Button
        variant="secondary"
        className="rounded-none first:rounded-l-md last:rounded-r-md"
      >
        Middle
      </Button>
      <Button
        variant="outline"
        className="rounded-none first:rounded-l-md last:rounded-r-md"
      >
        Right
      </Button>
    </div>
  );
};
