export const SelectFullWidthDemoCode = `'use client';

import * as React from 'react';
import { Select } from 'twine-ui';

export const SelectFullWidthDemo: React.FC = () => {
  const [value, setValue] = React.useState<string | undefined>(undefined);
  const options = [
    { value: 'alpha', label: 'Alpha' },
    { value: 'beta', label: 'Beta' },
    { value: 'gamma', label: 'Gamma' },
  ];

  return (
    <div className="space-y-2 w-full max-w-md">
      <div className="text-xs text-gray-500">Full width (fills container)</div>
      <Select
        label="Project"
        placeholder="Choose a project"
        options={options}
        value={value}
        onChange={setValue}
        fullWidth
      />
    </div>
  );
};

`;
