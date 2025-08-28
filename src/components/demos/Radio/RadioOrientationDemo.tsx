'use client';

import * as React from 'react';
import { Radio, RadioGroup, FormControlLabel } from 'twine-ui';

export const RadioOrientationDemo: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-6 max-w-full">
      {/* Horizontal group */}
      <div className="space-y-2 min-w-0">
        <p
          id="radio-orient-h"
          className="text-sm font-medium"
        >
          Horizontal
        </p>
        <RadioGroup
          aria-labelledby="radio-orient-h"
          name="orientation-horizontal"
          defaultValue="a"
          orientation="horizontal"
          className="gap-3 rounded-md border p-3 w-full"
        >
          <FormControlLabel label="Option A">
            <Radio value="a" />
          </FormControlLabel>
          <FormControlLabel label="Option B">
            <Radio value="b" />
          </FormControlLabel>
          <FormControlLabel label="Option C">
            <Radio value="c" />
          </FormControlLabel>
        </RadioGroup>
      </div>

      {/* Vertical group */}
      <div className="space-y-2 min-w-0">
        <p
          id="radio-orient-v"
          className="text-sm font-medium"
        >
          Vertical
        </p>
        <RadioGroup
          aria-labelledby="radio-orient-v"
          name="orientation-vertical"
          defaultValue="1"
          orientation="vertical"
          className="gap-2 rounded-md border p-3 w-full"
        >
          <FormControlLabel label="Option 1">
            <Radio value="1" />
          </FormControlLabel>
          <FormControlLabel label="Option 2">
            <Radio value="2" />
          </FormControlLabel>
          <FormControlLabel label="Option 3">
            <Radio value="3" />
          </FormControlLabel>
        </RadioGroup>
      </div>
    </div>
  );
};
