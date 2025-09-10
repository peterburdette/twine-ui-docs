export const DateTimePickerAdapterDemoCode = `'use client';

import * as React from 'react';
import { DateTimePicker, luxonAdapter } from 'twine-ui';

export const DateTimePickerAdapterDemo: React.FC = () => {
  const [value, setValue] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col gap-2">
      <DateTimePicker
        value={value}
        onChange={setValue}
        showTime
        timeFormat="24"
        dateAdapter={luxonAdapter}
        dateFormat="ccc, LLL dd yyyy HH:mm"
        placeholder="Luxon adapter"
      />
    </div>
  );
};

`;
