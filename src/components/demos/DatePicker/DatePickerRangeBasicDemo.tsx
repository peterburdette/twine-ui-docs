'use client';

import * as React from 'react';
import { DatePicker } from 'twine-ui';

type DateRange = { start?: Date; end?: Date };

export const DatePickerRangeBasicDemo: React.FC = () => {
  const [range, setRange] = React.useState<DateRange>({});
  return (
    <div className="max-w-sm">
      <DatePicker
        value={range}
        onChange={setRange}
        enableRange
        placeholder="Select date range"
      />
    </div>
  );
};
