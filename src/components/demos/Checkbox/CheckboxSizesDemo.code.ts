export const CheckboxSizesDemoCode = `import * as React from 'react';
import { Checkbox, FormControlLabel } from 'twine-ui';

export const CheckboxSizesDemo: React.FC = () => {
  return (
    <div className="flex items-center gap-6">
      <FormControlLabel label="Small">
        <Checkbox size="sm" />
      </FormControlLabel>
      <FormControlLabel label="Medium">
        <Checkbox size="md" />
      </FormControlLabel>
      <FormControlLabel label="Large">
        <Checkbox size="lg" />
      </FormControlLabel>
    </div>
  );
};
`;
