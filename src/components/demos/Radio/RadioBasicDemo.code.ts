export const RadioBasicDemoCode = `'use client';

import * as React from 'react';
import { Radio, RadioGroup } from 'twine-ui';

export const RadioBasicDemo: React.FC = () => {
  const groupId = 'notifications-basic-label';

  return (
    <div className="space-y-2">
      <RadioGroup
        aria-labelledby={groupId}
        name="no-label-demo"
        defaultValue="demo 1"
        orientation="horizontal"
        className="inline-flex flex-row items-center gap-4"
      >
        <Radio
          value="demo 1"
          aria-label="Demo 1"
          title="Demo 1"
        />
        <Radio
          value="demo 2"
          aria-label="Demo 2"
          title="Demo 2"
        />
        <Radio
          value="demo 3"
          disabled
          aria-label="Demo 3"
          title="Demo 3"
        />
      </RadioGroup>
    </div>
  );
};
`;
