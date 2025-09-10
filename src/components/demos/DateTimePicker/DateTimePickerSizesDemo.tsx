'use client';

import * as React from 'react';
import { DateTimePicker } from 'twine-ui';

export const DateTimePickerSizesDemo: React.FC = () => {
  const sizes: Array<'xs' | 'sm' | 'md' | 'lg' | 'xl'> = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
  ];

  const [values, setValues] = React.useState<Record<string, Date | undefined>>(
    {}
  );

  return (
    <div className="flex flex-col gap-3">
      {sizes.map((size) => (
        <div
          key={size}
          className="flex items-center gap-3"
        >
          <span className="w-28 shrink-0 text-sm text-gray-600 uppercase">
            {size}
          </span>
          <DateTimePicker
            value={values[size]}
            onChange={(d) => setValues((prev) => ({ ...prev, [size]: d }))}
            placeholder="Select date & time"
            showTime
            timeFormat="12"
            dateFormat="MMM dd, yyyy h:mm a"
            inputSize={size}
            variant="outlined"
          />
        </div>
      ))}
    </div>
  );
};
