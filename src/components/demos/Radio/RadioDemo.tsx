'use client';

import * as React from 'react';
import { Radio } from 'twine-ui';

export const RadioDemo = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-10">
        <Radio
          name="small"
          value="small"
          size="sm"
        />
        <Radio
          name="medium"
          value="medium"
          size="md"
        />
        <Radio
          name="large"
          value="large"
          size="lg"
        />
      </div>
    </div>
  );
};
