export const DatePickerMinMaxDisabledDemoCode = `'use client';

import * as React from 'react';
import { DatePicker } from 'twine-ui';

export function DatePickerMinMaxDisabledDemo() {
  const [value, setValue] = React.useState<Date | undefined>(undefined);

  // Current month boundaries
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const monthStart = React.useMemo(
    () => new Date(year, month, 1),
    [year, month]
  );
  const monthEnd = React.useMemo(
    () => new Date(year, month + 1, 0),
    [year, month]
  );

  // Disable the 5th and 10th of the current month
  const disabledDates = React.useMemo(
    () => [new Date(year, month, 5), new Date(year, month, 10)],
    [year, month]
  );

  const monthLabel = today.toLocaleString(undefined, {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="flex flex-col gap-2">
      <DatePicker
        value={value}
        onChange={setValue}
        placeholder="Select Date"
        label={\`Limited to \${monthLabel}\`}
        minDate={monthStart}
        maxDate={monthEnd}
        disabledDates={disabledDates}
        enableQuickActions
      />
      <p className="text-xs text-gray-500">
        Disabled: 5th &amp; 10th of {monthLabel}
      </p>
    </div>
  );
}
`;
