'use client';

import * as React from 'react';
import { Checkbox, FormControlLabel } from 'twine-ui';

export const CheckboxControlledDemo: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex items-center gap-4">
      <FormControlLabel label={checked ? 'Enabled' : 'Disabled'}>
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </FormControlLabel>
      <span className="text-sm text-gray-500">
        State: <strong>{String(checked)}</strong>
      </span>
    </div>
  );
};
