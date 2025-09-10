export const DateTimePicker24hDemoCode = `'use client';

import * as React from 'react';
import { DateTimePicker } from 'twine-ui';

export const DateTimePicker24hDemo: React.FC = () => {
  const [value, setValue] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col gap-2">
      <DateTimePicker
        value={value}
        onChange={setValue}
        showTime
        timeFormat="24"
        dateFormat="MMM dd, yyyy HH:mm"
      />
    </div>
  );
};

`;
