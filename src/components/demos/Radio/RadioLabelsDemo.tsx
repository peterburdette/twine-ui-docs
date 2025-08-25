'use client';

import * as React from 'react';
import { Radio, FormControlLabel } from 'twine-ui';

export const RadioLabelsDemo: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <FormControlLabel
        label="Email"
        labelPlacement="end"
      >
        <Radio
          name="contact"
          value="email"
        />
      </FormControlLabel>
      <FormControlLabel
        label="SMS"
        labelPlacement="end"
      >
        <Radio
          name="contact"
          value="sms"
        />
      </FormControlLabel>
      <FormControlLabel
        label="Push"
        labelPlacement="end"
      >
        <Radio
          name="contact"
          value="push"
        />
      </FormControlLabel>
    </div>
  );
};
