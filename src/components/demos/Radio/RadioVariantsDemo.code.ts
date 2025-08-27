export const RadioVariantsDemoCode = `import * as React from 'react';
import { Radio } from 'twine-ui';

export const RadioVariantsDemo = () => {
  return (
    <div className="grid gap-4 sm:max-w-md">
      <fieldset className="grid gap-2 rounded-md border p-3">
        <legend className="text-sm font-medium">Default</legend>
        <label className="flex items-center gap-2">
          <Radio name="v-default" value="a" variant="default" defaultChecked />
          <span>Default A</span>
        </label>
        <label className="flex items-center gap-2">
          <Radio name="v-default" value="b" variant="default" />
          <span>Default B</span>
        </label>
      </fieldset>

      <fieldset className="grid gap-2 rounded-md border p-3">
        <legend className="text-sm font-medium">Success</legend>
        <label className="flex items-center gap-2">
          <Radio name="v-success" value="a" variant="success" defaultChecked />
          <span>Success A</span>
        </label>
        <label className="flex items-center gap-2">
          <Radio name="v-success" value="b" variant="success" />
          <span>Success B</span>
        </label>
      </fieldset>

      <fieldset className="grid gap-2 rounded-md border p-3">
        <legend className="text-sm font-medium">Warning</legend>
        <label className="flex items-center gap-2">
          <Radio name="v-warning" value="a" variant="warning" defaultChecked />
          <span>Warning A</span>
        </label>
        <label className="flex items-center gap-2">
          <Radio name="v-warning" value="b" variant="warning" />
          <span>Warning B</span>
        </label>
      </fieldset>

      <fieldset className="grid gap-2 rounded-md border p-3">
        <legend className="text-sm font-medium">Error</legend>
        <label className="flex items-center gap-2">
          <Radio name="v-error" value="a" variant="error" defaultChecked />
          <span>Error A</span>
        </label>
        <label className="flex items-center gap-2">
          <Radio name="v-error" value="b" variant="error" />
          <span>Error B</span>
        </label>
      </fieldset>
    </div>
  );
};
`;
