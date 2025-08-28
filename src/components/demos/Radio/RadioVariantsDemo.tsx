'use client';

import * as React from 'react';
import { Radio, RadioGroup, FormControlLabel } from 'twine-ui';

export const RadioVariantsDemo: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-8 sm:max-w-2xl">
      {/* Column A: Standard */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Standard</p>
        <RadioGroup
          defaultValue="default-a"
          className="grid gap-2 rounded-md border p-3"
        >
          <FormControlLabel label="Default">
            <Radio
              value="default-a"
              variant="default"
            />
          </FormControlLabel>
          <FormControlLabel label="Success">
            <Radio
              value="success-a"
              variant="success"
            />
          </FormControlLabel>
          <FormControlLabel label="Warning">
            <Radio
              value="warning-a"
              variant="warning"
            />
          </FormControlLabel>
          <FormControlLabel label="Error">
            <Radio
              value="error-a"
              variant="error"
            />
          </FormControlLabel>
        </RadioGroup>
      </div>

      {/* Column B: With focus ring */}
      <div className="space-y-2">
        <p className="text-sm font-medium">With focus ring</p>
        <RadioGroup
          defaultValue="default-b"
          className="grid gap-2 rounded-md border p-3"
        >
          <FormControlLabel label="Default">
            <Radio
              value="default-b"
              variant="default"
              showFocusRing
            />
          </FormControlLabel>
          <FormControlLabel label="Success">
            <Radio
              value="success-b"
              variant="success"
              showFocusRing
            />
          </FormControlLabel>
          <FormControlLabel label="Warning">
            <Radio
              value="warning-b"
              variant="warning"
              showFocusRing
            />
          </FormControlLabel>
          <FormControlLabel label="Error">
            <Radio
              value="error-b"
              variant="error"
              showFocusRing
            />
          </FormControlLabel>
        </RadioGroup>
        <p className="text-xs text-muted-foreground">
          Tab to a radio and use arrow keys to see the focus ring in action.
        </p>
      </div>
    </div>
  );
};
