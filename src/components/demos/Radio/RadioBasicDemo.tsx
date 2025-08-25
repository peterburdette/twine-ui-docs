'use client';

import * as React from 'react';
import { Radio } from 'twine-ui';

export const RadioBasicDemo: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <Radio
        name="basic"
        value="a"
      />
      <Radio
        name="basic"
        value="b"
      />
      <Radio
        name="basic"
        value="c"
      />
    </div>
  );
};
