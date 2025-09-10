export const DateTimePickerMinMaxDisabledDemoCode = `'use client';

import * as React from 'react';
import { DateTimePicker } from 'twine-ui';

export const DateTimePickerMinMaxDisabledDemo: React.FC = () => {
  const [value, setValue] = React.useState<Date | undefined>();
  const today = new Date();
  const min = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const max = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  // Disable weekends as an example
  const disabled: Date[] = [];
  for (let i = 0; i <= 30; i++) {
    const d = new Date(min);
    d.setDate(min.getDate() + i);
    const isWeekend = d.getDay() === 0 || d.getDay() === 6;
    if (isWeekend) disabled.push(d);
  }

  return (
    <div className="flex flex-col gap-2">
      <DateTimePicker
        value={value}
        onChange={setValue}
        showTime={false}
        minDate={min}
        maxDate={max}
        disabledDates={disabled}
        placeholder="Select a weekday within 30 days"
      />
    </div>
  );
};
`;
