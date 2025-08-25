'use client';

import * as React from 'react';
import { Radio, RadioGroup, FormControlLabel } from 'twine-ui';

export const RadioGroupVerticalDemo: React.FC = () => {
  const [value, setValue] = React.useState('light');

  return (
    <RadioGroup
      name="theme"
      value={value}
      onChange={setValue}
      orientation="vertical"
    >
      <FormControlLabel label="Light">
        <Radio value="light" />
      </FormControlLabel>
      <FormControlLabel label="Dark">
        <Radio value="dark" />
      </FormControlLabel>
      <FormControlLabel label="System">
        <Radio value="system" />
      </FormControlLabel>
    </RadioGroup>
  );
};
