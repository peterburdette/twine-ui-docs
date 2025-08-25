'use client';

import * as React from 'react';
import { Radio, FormControlLabel } from 'twine-ui';

export const RadioDisabledRequiredDemo: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <FormControlLabel
        label="Disabled option"
        disabled
      >
        <Radio
          name="state"
          value="disabled"
          disabled
        />
      </FormControlLabel>
      <FormControlLabel
        label="Required example"
        required
      >
        <Radio
          name="state"
          value="required"
          required
        />
      </FormControlLabel>
    </div>
  );
};
