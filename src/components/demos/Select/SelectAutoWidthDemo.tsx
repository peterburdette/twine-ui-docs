'use client';

import * as React from 'react';
import { Select } from 'twine-ui';

export const SelectAutoWidthDemo: React.FC = () => {
  const [value, setValue] = React.useState<string | undefined>(undefined);
  const options = [
    { value: 'id', label: 'ID' },
    { value: 'dashboard', label: 'Dashboard' },
    { value: 'analytics', label: 'Advanced Analytics Reports' },
  ];

  return (
    <div className="space-y-2">
      <div className="text-xs text-gray-500">
        Auto width (shrinks to content)
      </div>
      <Select
        label="Project"
        placeholder="Choose"
        options={options}
        value={value}
        onChange={setValue}
        autoWidth
      />
    </div>
  );
};

export default SelectAutoWidthDemo;
