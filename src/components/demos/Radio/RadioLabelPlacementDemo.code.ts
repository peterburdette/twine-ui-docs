export const RadioLabelPlacementDemoCode = `'use client';

import * as React from 'react';
import { Radio, RadioGroup, FormControlLabel } from 'twine-ui';

export const RadioLabelPlacementDemo: React.FC = () => {
  const groupId = 'label-placement-group';
  const [value, setValue] = React.useState('end');

  return (
    <div className="space-y-2 sm:max-w-md">
      <p
        id={groupId}
        className="text-sm font-medium"
      >
        Label placement
      </p>

      <RadioGroup
        aria-labelledby={groupId}
        value={value}
        onChange={setValue}
        className="grid gap-3 rounded-md border p-3"
      >
        <FormControlLabel
          label="Top"
          labelPlacement="top"
          onClick={() => setValue('top')}
        >
          <Radio value="top" />
        </FormControlLabel>

        <FormControlLabel
          label="Start (Left)"
          labelPlacement="start"
          onClick={() => setValue('start')}
        >
          <Radio value="start" />
        </FormControlLabel>

        <FormControlLabel
          label="End (Right)"
          labelPlacement="end"
          onClick={() => setValue('end')}
        >
          <Radio value="end" />
        </FormControlLabel>

        <FormControlLabel
          label="Bottom"
          labelPlacement="bottom"
          onClick={() => setValue('bottom')}
        >
          <Radio value="bottom" />
        </FormControlLabel>
      </RadioGroup>
    </div>
  );
};
`;
