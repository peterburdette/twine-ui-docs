export const TimePickerSecondsStepDemoCode = `'use client';

import * as React from 'react';
import { TimePicker } from 'twine-ui';

export const TimePickerSecondsStepDemo: React.FC = () => {
  const [value, setValue] = React.useState<Date | undefined>();
  return (
    <div className="flex flex-col gap-2">
      <TimePicker
        value={value}
        onChange={setValue}
        timeFormat="24"
        showSeconds
        minuteStep={5}
        secondStep={15}
        displayFormat="HH:mm:ss"
        placeholder="HH:mm:ss"
      />
    </div>
  );
};
`;
