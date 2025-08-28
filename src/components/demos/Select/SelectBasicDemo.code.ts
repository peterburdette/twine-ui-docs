export const SelectBasicDemoCode = `
import * as React from 'react';
import { Select } from 'twine-ui';

export const SelectBasicDemo = () => {
  const [val, setVal] = React.useState<string | undefined>(undefined);

  return (
    <div className="grid gap-3 sm:max-w-sm">
      <Select
        label="Project"
        placeholder="Choose a project"
        options={[
          { value: 'alpha', label: 'Alpha' },
          { value: 'beta', label: 'Beta' },
          { value: 'gamma', label: 'Gamma' },
        ]}
        value={val}
        onChange={setVal}
        helperText="Pick the workspace to continue."
      />
    </div>
  );
};
`;
