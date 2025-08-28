export const RadioLabelDemoCode = `'use client';

import * as React from 'react';
import { Radio, RadioGroup, FormControlLabel } from 'twine-ui';

export const RadioLabelDemo: React.FC = () => {
  const groupId = 'notifications-label-label';

  return (
    <div className="space-y-2 sm:max-w-md">
      <RadioGroup
        aria-labelledby={groupId}
        name="labels-demo"
        defaultValue="all"
        className="grid gap-2 rounded-md border p-3"
      >
        <FormControlLabel label="All activity">
          <Radio value="all" />
        </FormControlLabel>

        <FormControlLabel label="Mentions only">
          <Radio value="mentions" />
        </FormControlLabel>

        <FormControlLabel
          label="None"
          disabled
          className="text-muted-foreground"
        >
          <Radio
            value="none"
            disabled
          />
        </FormControlLabel>
      </RadioGroup>
    </div>
  );
};
`;
