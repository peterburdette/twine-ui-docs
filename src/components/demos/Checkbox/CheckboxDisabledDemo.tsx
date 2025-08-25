'use client';

import * as React from 'react';
import { Checkbox, FormControlLabel } from 'twine-ui';

export const CheckboxDisabledDemo: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <FormControlLabel
        label="Disabled (unchecked)"
        disabled
      >
        <Checkbox disabled />
      </FormControlLabel>
      <FormControlLabel
        label="Disabled (checked)"
        disabled
      >
        <Checkbox
          disabled
          defaultChecked
        />
      </FormControlLabel>
    </div>
  );
};
