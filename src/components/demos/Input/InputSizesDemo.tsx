'use client';

import * as React from 'react';
import { Input } from 'twine-ui';

export const InputSizesDemo: React.FC = () => {
  return (
    <div className="grid gap-3 sm:max-w-lg">
      <div className="flex flex-col gap-2">
        <Input
          label="Extra small"
          inputSize="xs"
          placeholder="xs"
        />
        <Input
          label="Small"
          inputSize="sm"
          placeholder="sm"
        />
        <Input
          label="Medium"
          inputSize="md"
          placeholder="md"
        />
        <Input
          label="Large"
          inputSize="lg"
          placeholder="lg"
        />
        <Input
          label="Extra large"
          inputSize="xl"
          placeholder="xl"
        />
      </div>
    </div>
  );
};
