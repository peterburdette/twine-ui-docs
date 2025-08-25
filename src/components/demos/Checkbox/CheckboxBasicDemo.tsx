'use client';

import * as React from 'react';
import { Checkbox } from 'twine-ui';

export const CheckboxBasicDemo: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox disabled />
      <Checkbox
        defaultChecked
        disabled
      />
    </div>
  );
};
