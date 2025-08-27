export const RadioSizesDemoCode = `import * as React from 'react';
import { Radio } from 'twine-ui';

export const RadioSizesDemo = () => {
  return (
    <div className="grid gap-4 sm:max-w-md">
      <fieldset className="grid gap-2 rounded-md border p-3">
        <legend className="text-sm font-medium">Small</legend>
        <label className="flex items-center gap-2">
          <Radio name="size-sm" value="a" size="sm" defaultChecked />
          <span className="text-sm">Option A</span>
        </label>
        <label className="flex items-center gap-2">
          <Radio name="size-sm" value="b" size="sm" />
          <span className="text-sm">Option B</span>
        </label>
      </fieldset>

      <fieldset className="grid gap-2 rounded-md border p-3">
        <legend className="text-sm font-medium">Medium</legend>
        <label className="flex items-center gap-2">
          <Radio name="size-md" value="a" size="md" defaultChecked />
          <span>Option A</span>
        </label>
        <label className="flex items-center gap-2">
          <Radio name="size-md" value="b" size="md" />
          <span>Option B</span>
        </label>
      </fieldset>

      <fieldset className="grid gap-2 rounded-md border p-3">
        <legend className="text-sm font-medium">Large</legend>
        <label className="flex items-center gap-2">
          <Radio name="size-lg" value="a" size="lg" defaultChecked />
          <span className="text-base">Option A</span>
        </label>
        <label className="flex items-center gap-2">
          <Radio name="size-lg" value="b" size="lg" />
          <span className="text-base">Option B</span>
        </label>
      </fieldset>
    </div>
  );
};
`;
