'use client';

import * as React from 'react';
import { Input } from 'twine-ui';

export const InputDemo = () => {
  const [value, setValue] = React.useState('');

  return (
    <div className="space-y-4 max-w-md">
      <Input
        type="text"
        placeholder="Type something..."
        value={value}
        helperText="testing"
        onChange={(e) => setValue(e.target.value)}
      />
      {value && (
        <p className="text-sm text-gray-600">
          You typed:{' '}
          <span className="font-mono bg-gray-100 px-1 rounded">{value}</span>
        </p>
      )}
    </div>
  );
};
