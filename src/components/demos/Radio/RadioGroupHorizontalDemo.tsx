'use client';

import * as React from 'react';
import { Radio, RadioGroup, FormControlLabel } from 'twine-ui';

export const RadioGroupHorizontalDemo: React.FC = () => {
  const [value, setValue] = React.useState('xs');

  return (
    <RadioGroup
      name="size"
      value={value}
      onChange={setValue}
      orientation="horizontal"
    >
      <FormControlLabel label="XS">
        <Radio value="xs" />
      </FormControlLabel>
      <FormControlLabel label="S">
        <Radio value="s" />
      </FormControlLabel>
      <FormControlLabel label="M">
        <Radio value="m" />
      </FormControlLabel>
    </RadioGroup>
  );
};
