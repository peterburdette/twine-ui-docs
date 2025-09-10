'use client';

import * as React from 'react';
import { DatePicker } from 'twine-ui';

export const DatePickerBasicDemo = () => {
  const [value, setValue] = React.useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-2">
      <DatePicker
        value={value}
        onChange={setValue}
        placeholder="Select a date"
      />
    </div>
  );
};
