'use client';

import * as React from 'react';
import { DatePicker } from 'twine-ui';

type DateRange = { start?: Date; end?: Date };

export const DatePickerRangeMultiDemo: React.FC = () => {
  const [range, setRange] = React.useState<DateRange>({});
  return (
    <div className="max-w-xl">
      <DatePicker
        value={range}
        onChange={setRange}
        enableMultiInputRange
      />
    </div>
  );
};
