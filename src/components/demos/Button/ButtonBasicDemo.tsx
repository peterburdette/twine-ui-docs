'use client';

import * as React from 'react';
import { Button } from 'twine-ui';

export const ButtonBasicDemo: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
};
