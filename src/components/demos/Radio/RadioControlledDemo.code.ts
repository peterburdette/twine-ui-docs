export const RadioControlledDemoCode = `'use client';

import * as React from 'react';
import { Radio } from 'twine-ui';

export const RadioControlledDemo = () => {
  const name = 'plan-controlled';
  const [value, setValue] = React.useState('starter');

  return (
    <fieldset className="grid gap-2 rounded-md border p-3 sm:max-w-md">
      <legend className="text-sm font-medium">Choose a plan</legend>

      {[
        { id: 'starter', label: 'Starter' },
        { id: 'pro', label: 'Pro' },
        { id: 'enterprise', label: 'Enterprise' },
      ].map((opt) => (
        <label key={opt.id} htmlFor={\`\${name}-\${opt.id}\`} className="flex cursor-pointer items-center gap-2">
          <Radio
            id={\`\${name}-\${opt.id}\`}
            name={name}
            value={opt.id}
            checked={value === opt.id}
            onChange={() => setValue(opt.id)}
          />
          <span>{opt.label}</span>
        </label>
      ))}

      <p className="mt-1 text-sm text-muted-foreground">
        Selected: <span className="font-medium">{value}</span>
      </p>
    </fieldset>
  );
};
`;
