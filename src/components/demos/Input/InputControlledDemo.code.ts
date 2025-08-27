export const InputControlledDemoCode = `'use client';

import * as React from 'react';
import { Input } from 'twine-ui';

export const InputControlledDemo: React.FC = () => {
  const [value, setValue] = React.useState('');
  const max = 40;

  return (
    <div className="grid gap-3 sm:max-w-md">
      <Input
        label="Controlled Field"
        placeholder="Type something…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText={\`\${value.length}/\${max} characters\`}
        maxLength={max}
      />
    </div>
  );
};
`;
