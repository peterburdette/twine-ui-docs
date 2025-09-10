export const DateTimePickerQuickActionsOffDemoCode = `'use client';

import * as React from 'react';
import { DateTimePicker } from 'twine-ui';

export const DateTimePickerQuickActionsOffDemo: React.FC = () => {
  const [value, setValue] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col gap-2">
      <DateTimePicker
        value={value}
        onChange={setValue}
        showTime
        enableQuickActions={false}
        placeholder="No quick actions"
      />
    </div>
  );
};

`;
