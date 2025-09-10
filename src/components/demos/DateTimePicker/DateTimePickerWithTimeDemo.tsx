'use client';

import * as React from 'react';
import { DateTimePicker } from 'twine-ui';

export const DateTimePickerWithTimeDemo: React.FC = () => {
  const [value, setValue] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col gap-2">
      <DateTimePicker
        value={value}
        onChange={setValue}
        showTime
        timeFormat="12"
        dateFormat="MMM dd, yyyy h:mm a"
        placeholder="Select date & time"
      />
    </div>
  );
};
