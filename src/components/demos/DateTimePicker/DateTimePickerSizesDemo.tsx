'use client';

import * as React from 'react';
import { DateTimePicker } from 'twine-ui';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
const SIZE_LABELS: Record<(typeof sizes)[number], string> = {
  xs: 'Extra Small',
  sm: 'Small',
  md: 'Medium',
  lg: 'Large',
  xl: 'Extra Large',
};

export const DateTimePickerSizesDemo = () => {
  const [values, setValues] = React.useState<Record<string, Date | undefined>>(
    {}
  );

  return (
    <div className="grid gap-3 sm:max-w-lg">
      {sizes.map((s) => (
        <DateTimePicker
          key={s}
          value={values[s]}
          onChange={(d) => setValues((v) => ({ ...v, [s]: d }))}
          placeholder="Select date"
          inputSize={s}
          label={SIZE_LABELS[s]}
        />
      ))}
    </div>
  );
};
