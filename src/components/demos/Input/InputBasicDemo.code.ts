export const InputBasicDemoCode = `'use client';

import * as React from 'react';
import { Input } from 'twine-ui';

export const InputBasicDemo: React.FC = () => {
  return (
    <div className="grid gap-3 sm:max-w-md">
      <Input placeholder="Type something..." />
    </div>
  );
};
`;
