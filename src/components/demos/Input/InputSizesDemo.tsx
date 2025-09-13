'use client';

import { Clock } from 'lucide-react';
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
          endIcon={<Clock />}
        />
        <Input
          label="Small"
          inputSize="sm"
          placeholder="sm"
          endIcon={<Clock />}
        />
        <Input
          label="Medium"
          inputSize="md"
          placeholder="md"
          endIcon={<Clock />}
        />
        <Input
          label="Large"
          inputSize="lg"
          placeholder="lg"
          endIcon={<Clock />}
        />
        <Input
          label="Extra large"
          inputSize="xl"
          placeholder="xl"
          endIcon={<Clock />}
        />
      </div>
    </div>
  );
};
