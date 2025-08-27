'use client';

import * as React from 'react';
import { Radio } from 'twine-ui';

export const RadioControlledDemo: React.FC = () => {
  const name = 'plan-controlled';
  const labelId = `${name}-label`;
  const [value, setValue] = React.useState('starter');

  const options = [
    { id: 'starter', label: 'Starter' },
    { id: 'pro', label: 'Pro' },
    { id: 'enterprise', label: 'Enterprise' },
  ];

  return (
    <div className="space-y-2 sm:max-w-md">
      <p
        id={labelId}
        className="text-sm font-medium"
      >
        Choose a plan
      </p>

      <div
        role="radiogroup"
        aria-labelledby={labelId}
        className="grid gap-2 rounded-md border p-3"
      >
        {options.map((opt) => (
          <label
            key={opt.id}
            htmlFor={`${name}-${opt.id}`}
            className="flex cursor-pointer items-center gap-2"
          >
            <Radio
              id={`${name}-${opt.id}`}
              name={name}
              value={opt.id}
              checked={value === opt.id}
              onChange={() => setValue(opt.id)}
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        Selected: <span className="font-medium">{value}</span>
      </p>
    </div>
  );
};
