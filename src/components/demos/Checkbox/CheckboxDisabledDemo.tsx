'use client';

import * as React from 'react';
import { Checkbox, FormControlLabel } from 'twine-ui';

export const CheckboxDisabledDemo: React.FC = () => {
  const [tri] = React.useState<{
    checked: boolean;
    indeterminate: boolean;
  }>({
    checked: false,
    indeterminate: true,
  });

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

      <FormControlLabel
        label="Disabled (intermediate)"
        disabled
      >
        <Checkbox
          checked={tri.checked}
          indeterminate={tri.indeterminate}
          disabled
        />
      </FormControlLabel>
    </div>
  );
};
