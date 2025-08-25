'use client';

import * as React from 'react';
import { Button } from 'twine-ui';

export const ButtonVariantsDemo: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="space-y-2">
        <div className="text-sm font-medium text-gray-600">Solid</div>
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium text-gray-600">Outline & Ghost</div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
    </div>
  );
};
