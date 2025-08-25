'use client';

import * as React from 'react';
import { Radio, FormControlLabel } from 'twine-ui';

export const RadioSizesDemo: React.FC = () => {
  return (
    <div className="flex items-center gap-6">
      <FormControlLabel label="Small">
        <Radio
          name="size-demo"
          value="sm"
          size="sm"
        />
      </FormControlLabel>
      <FormControlLabel label="Medium">
        <Radio
          name="size-demo"
          value="md"
          size="md"
        />
      </FormControlLabel>
      <FormControlLabel label="Large">
        <Radio
          name="size-demo"
          value="lg"
          size="lg"
        />
      </FormControlLabel>
    </div>
  );
};
