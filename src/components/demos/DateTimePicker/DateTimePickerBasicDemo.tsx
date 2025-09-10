'use client';

import * as React from 'react';
import { DateTimePicker } from 'twine-ui';

export const DateTimePickerBasicDemo: React.FC = () => {
  const [value, setValue] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col gap-2">
      <DateTimePicker
        value={value}
        onChange={setValue}
        showTime={false}
        placeholder="Pick a date"
      />
    </div>
  );
};
