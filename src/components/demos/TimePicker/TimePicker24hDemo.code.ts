export const TimePicker24hDemoCode = `'use client';

import * as React from 'react';
import { TimePicker } from 'twine-ui';

export const TimePicker24hDemo: React.FC = () => {
  const [value, setValue] = React.useState<Date | undefined>();
  return (
    <div className="flex flex-col gap-2">
      <TimePicker
        value={value}
        onChange={setValue}
        timeFormat="24"
        displayFormat="HH:mm"
        placeholder="Select time (24h)"
      />
    </div>
  );
};
`;
