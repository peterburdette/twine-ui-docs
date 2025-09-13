'use client';

import * as React from 'react';
import { TimePicker } from 'twine-ui';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
const SIZE_LABELS: Record<(typeof sizes)[number], string> = {
  xs: 'Extra Small',
  sm: 'Small',
  md: 'Medium',
  lg: 'Large',
  xl: 'Extra Large',
};

export const TimePickerSizesDemo: React.FC = () => {
  const [value, setValue] = React.useState<Record<string, Date | undefined>>(
    {}
  );

  return (
    <div className="grid gap-3 sm:max-w-lg">
      {sizes.map((s) => (
        <TimePicker
          key={s}
          value={value[s]}
          onChange={(d) => setValue((v) => ({ ...v, [s]: d }))}
          placeholder="Select date"
          inputSize={s}
          label={SIZE_LABELS[s]}
        />
      ))}
    </div>
  );
};
