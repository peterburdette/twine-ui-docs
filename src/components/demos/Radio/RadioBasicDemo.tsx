'use client';

import * as React from 'react';
import { Radio } from 'twine-ui';

export const RadioBasicDemo: React.FC = () => {
  const name = 'notifications-basic';
  const labelId = `${name}-label`;

  return (
    <div className="space-y-2 sm:max-w-md">
      <p
        id={labelId}
        className="text-sm font-medium"
      >
        Notifications
      </p>

      <div
        role="radiogroup"
        aria-labelledby={labelId}
        className="grid gap-2 rounded-md border p-3"
      >
        <label
          htmlFor={`${name}-all`}
          className="flex cursor-pointer items-center gap-2"
        >
          <Radio
            id={`${name}-all`}
            name={name}
            value="all"
            defaultChecked
          />
          <span>All activity</span>
        </label>

        <label
          htmlFor={`${name}-mentions`}
          className="flex cursor-pointer items-center gap-2"
        >
          <Radio
            id={`${name}-mentions`}
            name={name}
            value="mentions"
          />
          <span>Mentions only</span>
        </label>

        <label
          htmlFor={`${name}-none`}
          className="flex cursor-pointer items-center gap-2"
        >
          <Radio
            id={`${name}-none`}
            name={name}
            value="none"
          />
          <span>None</span>
        </label>

        <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
          <Radio
            id={`${name}-disabled`}
            name={`${name}-disabled`}
            disabled
          />
          <label
            htmlFor={`${name}-disabled`}
            className="cursor-not-allowed"
          >
            Disabled example
          </label>
        </div>
      </div>
    </div>
  );
};
