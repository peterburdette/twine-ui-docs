export const SelectSizesDemoCode = `
'use client';

import * as React from 'react';
import { Select } from 'twine-ui';

const opts = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
];

export const SelectSizesDemo = () => {
  const [xs, setXs] = React.useState<string | undefined>();
  const [md, setMd] = React.useState<string | undefined>();
  const [lg, setLg] = React.useState<string | undefined>();

  return (
    <div className="grid gap-3 sm:max-w-md">
      <Select label="Small" size="sm" options={opts} value={xs} onChange={setXs} placeholder="Select…" />
      <Select label="Medium" size="md" options={opts} value={md} onChange={setMd} placeholder="Select…" />
      <Select label="Large" size="lg" options={opts} value={lg} onChange={setLg} placeholder="Select…" />
    </div>
  );
};
`;
