'use client';

import * as React from 'react';
import { Select } from 'twine-ui';

export const SelectBasicDemo: React.FC = () => {
  const [val, setVal] = React.useState<string | undefined>(undefined);

  return (
    <div className="grid gap-3 sm:max-w-sm">
      <Select
        label="Project"
        placeholder="Select..."
        options={[
          { value: 'alpha', label: 'Alpha' },
          { value: 'beta', label: 'Beta' },
          { value: 'gamma', label: 'Gamma' },
        ]}
        value={val}
        onChange={setVal}
      />
    </div>
  );
};
