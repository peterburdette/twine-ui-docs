'use client';

import * as React from 'react';
import { Radio } from 'twine-ui';

export const RadioSizesDemo: React.FC = () => {
  return (
    <div className="grid gap-4 sm:max-w-md">
      {/* Small */}
      <div className="space-y-2">
        <p
          id="size-sm-label"
          className="text-sm font-medium"
        >
          Small
        </p>
        <div
          role="radiogroup"
          aria-labelledby="size-sm-label"
          className="grid gap-2 rounded-md border p-3"
        >
          <label className="flex items-center gap-2">
            <Radio
              name="size-sm"
              value="a"
              size="sm"
              defaultChecked
            />
            <span className="text-sm">Option A</span>
          </label>
          <label className="flex items-center gap-2">
            <Radio
              name="size-sm"
              value="b"
              size="sm"
            />
            <span className="text-sm">Option B</span>
          </label>
        </div>
      </div>

      {/* Medium */}
      <div className="space-y-2">
        <p
          id="size-md-label"
          className="text-sm font-medium"
        >
          Medium
        </p>
        <div
          role="radiogroup"
          aria-labelledby="size-md-label"
          className="grid gap-2 rounded-md border p-3"
        >
          <label className="flex items-center gap-2">
            <Radio
              name="size-md"
              value="a"
              size="md"
              defaultChecked
            />
            <span>Option A</span>
          </label>
          <label className="flex items-center gap-2">
            <Radio
              name="size-md"
              value="b"
              size="md"
            />
            <span>Option B</span>
          </label>
        </div>
      </div>

      {/* Large */}
      <div className="space-y-2">
        <p
          id="size-lg-label"
          className="text-sm font-medium"
        >
          Large
        </p>
        <div
          role="radiogroup"
          aria-labelledby="size-lg-label"
          className="grid gap-2 rounded-md border p-3"
        >
          <label className="flex items-center gap-2">
            <Radio
              name="size-lg"
              value="a"
              size="lg"
              defaultChecked
            />
            <span className="text-base">Option A</span>
          </label>
          <label className="flex items-center gap-2">
            <Radio
              name="size-lg"
              value="b"
              size="lg"
            />
            <span className="text-base">Option B</span>
          </label>
        </div>
      </div>
    </div>
  );
};
