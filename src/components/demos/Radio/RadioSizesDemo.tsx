'use client';

import * as React from 'react';
import { Radio, RadioGroup, FormControlLabel } from 'twine-ui';

export const RadioSizesDemo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-full">
      {/* Small */}
      <div className="space-y-2 min-w-0">
        <p
          id="size-sm-label"
          className="text-sm font-medium"
        >
          Small
        </p>
        <RadioGroup
          aria-labelledby="size-sm-label"
          name="sizes-sm" // ensure one shared name
          defaultValue="a"
          size="sm"
          className="grid gap-2 rounded-md border p-3 w-full"
        >
          <FormControlLabel
            label="Option A"
            size="sm"
          >
            <Radio
              value="a"
              size="sm"
            />
          </FormControlLabel>
          <FormControlLabel
            label="Option B"
            size="sm"
          >
            <Radio
              value="b"
              size="sm"
            />
          </FormControlLabel>
          <FormControlLabel
            label="Option C"
            size="sm"
          >
            <Radio
              value="c"
              size="sm"
            />
          </FormControlLabel>
        </RadioGroup>
      </div>

      {/* Medium */}
      <div className="space-y-2 min-w-0">
        <p
          id="size-md-label"
          className="text-sm font-medium"
        >
          Medium
        </p>
        <RadioGroup
          aria-labelledby="size-md-label"
          name="sizes-md" // ensure one shared name
          defaultValue="a"
          size="md"
          className="grid gap-2 rounded-md border p-3 w-full"
        >
          <FormControlLabel
            label="Option A"
            size="md"
          >
            <Radio
              value="a"
              size="md"
            />
          </FormControlLabel>
          <FormControlLabel
            label="Option B"
            size="md"
          >
            <Radio
              value="b"
              size="md"
            />
          </FormControlLabel>
          <FormControlLabel
            label="Option C"
            size="md"
          >
            <Radio
              value="c"
              size="md"
            />
          </FormControlLabel>
        </RadioGroup>
      </div>

      {/* Large */}
      <div className="space-y-2 min-w-0">
        <p
          id="size-lg-label"
          className="text-sm font-medium"
        >
          Large
        </p>
        <RadioGroup
          aria-labelledby="size-lg-label"
          name="sizes-lg" // ensure one shared name
          defaultValue="a"
          size="lg"
          className="grid gap-2 rounded-md border p-3 w-full"
        >
          <FormControlLabel
            label="Option A"
            size="lg"
          >
            <Radio
              value="a"
              size="lg"
            />
          </FormControlLabel>
          <FormControlLabel
            label="Option B"
            size="lg"
          >
            <Radio
              value="b"
              size="lg"
            />
          </FormControlLabel>
          <FormControlLabel
            label="Option C"
            size="lg"
          >
            <Radio
              value="c"
              size="lg"
            />
          </FormControlLabel>
        </RadioGroup>
      </div>
    </div>
  );
};
