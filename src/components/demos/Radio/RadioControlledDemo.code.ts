export const RadioControlledDemoCode = `'use client';

import * as React from 'react';
import { Radio, RadioGroup, FormControlLabel } from 'twine-ui';

export const RadioControlledDemo: React.FC = () => {
  const groupId = 'plans-controlled-label';
  const [value, setValue] = React.useState('starter');

  return (
    <div className="space-y-2 sm:max-w-md">
      <p id={groupId} className="text-sm font-medium">
        Choose a plan
      </p>

      <RadioGroup
        aria-labelledby={groupId}
        value={value}
        onChange={setValue}
        className="grid gap-2 rounded-md border p-3"
      >
        <FormControlLabel label="Starter">
          <Radio value="starter" />
        </FormControlLabel>
        <FormControlLabel label="Pro">
          <Radio value="pro" />
        </FormControlLabel>
        <FormControlLabel label="Enterprise">
          <Radio value="enterprise" />
        </FormControlLabel>
      </RadioGroup>

      <p className="text-sm text-muted-foreground">
        Selected: <span className="font-medium">{value}</span>
      </p>
    </div>
  );
};
`;
