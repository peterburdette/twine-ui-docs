export const TimePickerBasicDemoCode = `'use client';

import * as React from 'react';
import { TimePicker } from 'twine-ui';

export const TimePickerBasicDemo: React.FC = () => {
  const [value, setValue] = React.useState<Date | undefined>();
  return (
    <div className="flex flex-col gap-2">
      <TimePicker
        value={value}
        onChange={setValue}
        placeholder="Select time"
        timeFormat="12"
      />
    </div>
  );
};
`;
