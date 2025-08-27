'use client';

import * as React from 'react';
import { Radio } from 'twine-ui';

export const RadioVariantsDemo: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-8 sm:max-w-2xl">
      {/* Column A: Standard (no explicit ring) */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Standard</p>
        <div className="grid gap-2 rounded-md border p-3">
          <label className="flex items-center gap-2">
            <Radio
              name="v-default-a"
              value="a"
              variant="default"
              defaultChecked
            />
            <span>Default</span>
          </label>
          <label className="flex items-center gap-2">
            <Radio
              name="v-success-a"
              value="a"
              variant="success"
            />
            <span>Success</span>
          </label>
          <label className="flex items-center gap-2">
            <Radio
              name="v-warning-a"
              value="a"
              variant="warning"
            />
            <span>Warning</span>
          </label>
          <label className="flex items-center gap-2">
            <Radio
              name="v-error-a"
              value="a"
              variant="error"
            />
            <span>Error</span>
          </label>
        </div>
      </div>

      {/* Column B: With focus ring */}
      <div className="space-y-2">
        <p className="text-sm font-medium">With focus ring</p>
        <div className="grid gap-2 rounded-md border p-3">
          <label className="flex items-center gap-2">
            <Radio
              name="v-default-b"
              value="b"
              variant="default"
              showFocusRing
              defaultChecked
            />
            <span>Default</span>
          </label>
          <label className="flex items-center gap-2">
            <Radio
              name="v-success-b"
              value="b"
              variant="success"
              showFocusRing
            />
            <span>Success</span>
          </label>
          <label className="flex items-center gap-2">
            <Radio
              name="v-warning-b"
              value="b"
              variant="warning"
              showFocusRing
            />
            <span>Warning</span>
          </label>
          <label className="flex items-center gap-2">
            <Radio
              name="v-error-b"
              value="b"
              variant="error"
              showFocusRing
            />
            <span>Error</span>
          </label>
        </div>
        <p className="text-xs text-muted-foreground">
          Tab to a radio and use arrow keys to see the focus ring in action.
        </p>
      </div>
    </div>
  );
};
