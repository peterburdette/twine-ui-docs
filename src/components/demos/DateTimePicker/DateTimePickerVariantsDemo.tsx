'use client';

import * as React from 'react';
import { DateTimePicker } from 'twine-ui';

export const DateTimePickerVariantsDemo: React.FC = () => {
  const variants: Array<
    | 'default'
    | 'filled'
    | 'outlined'
    | 'ghost'
    | 'underline'
    | 'floating'
    | 'inset'
  > = [
    'default',
    'filled',
    'outlined',
    'ghost',
    'underline',
    'floating',
    'inset',
  ];

  const [values, setValues] = React.useState<Record<string, Date | undefined>>(
    {}
  );

  return (
    <div className="flex flex-col gap-3">
      {variants.map((variant) => (
        <div
          key={variant}
          className="flex items-center gap-3"
        >
          <span className="w-28 shrink-0 text-sm text-gray-600 capitalize">
            {variant}
          </span>
          <DateTimePicker
            value={values[variant]}
            onChange={(d) => setValues((prev) => ({ ...prev, [variant]: d }))}
            placeholder="Select date & time"
            showTime
            timeFormat="12"
            dateFormat="MMM dd, yyyy h:mm a"
            variant={variant}
            inputSize="md"
          />
        </div>
      ))}
    </div>
  );
};
