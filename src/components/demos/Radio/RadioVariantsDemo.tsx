'use client';

import * as React from 'react';
import { Radio, FormControlLabel } from 'twine-ui';

export const RadioVariantsDemo: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <FormControlLabel label="Default">
        <Radio
          name="v"
          value="default"
          variant="default"
          showFocusRing
        />
      </FormControlLabel>
      <FormControlLabel label="Success">
        <Radio
          name="v"
          value="success"
          variant="success"
          showFocusRing
        />
      </FormControlLabel>
      <FormControlLabel label="Warning">
        <Radio
          name="v"
          value="warning"
          variant="warning"
          showFocusRing
        />
      </FormControlLabel>
      <FormControlLabel label="Error">
        <Radio
          name="v"
          value="error"
          variant="error"
          showFocusRing
        />
      </FormControlLabel>
    </div>
  );
};
