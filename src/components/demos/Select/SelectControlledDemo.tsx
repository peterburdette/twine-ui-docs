'use client';

import * as React from 'react';
import { Select } from 'twine-ui';

export const SelectControlledDemo: React.FC = () => {
  const [env, setEnv] = React.useState('staging');
  const error =
    env === 'prod' ? 'Production is locked for deploys right now.' : undefined;

  return (
    <div className="grid gap-3 sm:max-w-sm">
      <Select
        label="Environment"
        value={env}
        onChange={setEnv}
        options={[
          { value: 'dev', label: 'Development' },
          { value: 'staging', label: 'Staging' },
          { value: 'prod', label: 'Production', disabled: false },
        ]}
        helperText={!error ? 'Select a target environment.' : undefined}
        error={error}
      />
      <p className="text-sm text-muted-foreground">
        Selected: <span className="font-medium">{env}</span>
      </p>
    </div>
  );
};
