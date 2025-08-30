'use client';

import * as React from 'react';
import { Select } from 'twine-ui';

export const SelectFixedTriggerWidthDemo = () => {
  const [value, setValue] = React.useState<string | undefined>('short');

  const options = [
    { value: 'short', label: 'Short' },
    { value: 'medium', label: 'Medium length label' },
    {
      value: 'very-long',
      label: 'A very, very, very long label that will truncate in the trigger',
    },
  ];

  return (
    <div className="space-y-2">
      <div className="text-xs text-gray-500">
        Trigger fixed at 120px; caret-safe truncation
      </div>
      <Select
        label="Compact Trigger"
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose…"
        fixedTriggerWidth={120}
        truncateTriggerLabel
        showFocusRing
        helperText="The menu still grows to fit the longest option; the trigger stays 120px."
      />
    </div>
  );
};
