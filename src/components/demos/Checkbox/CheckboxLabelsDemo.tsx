'use client';

import * as React from 'react';
import { Checkbox, FormControlLabel } from 'twine-ui';

export const CheckboxLabelsDemo: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <FormControlLabel label="Email notifications">
        <Checkbox
          name="prefs"
          value="email"
        />
      </FormControlLabel>
      <FormControlLabel label="SMS alerts">
        <Checkbox
          name="prefs"
          value="sms"
        />
      </FormControlLabel>
      <FormControlLabel label="Product updates">
        <Checkbox
          name="prefs"
          value="updates"
          defaultChecked
        />
      </FormControlLabel>
    </div>
  );
};
