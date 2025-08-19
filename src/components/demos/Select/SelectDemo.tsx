'use client';

import * as React from 'react';
import { Select } from 'twine-ui';

export const SelectDemo = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Select
          label="Countries"
          options={[
            { value: 'Algeria', label: 'Algeria' },
            { value: 'England', label: 'England' },
            { value: 'United States', label: 'United States' },
          ]}
        />
      </div>
    </div>
  );
};
