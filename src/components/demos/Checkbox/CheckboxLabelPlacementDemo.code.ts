export const CheckboxLabelPlacementDemoCode = `import * as React from 'react';
import { Checkbox, FormControlLabel } from 'twine-ui';

export const CheckboxLabelPlacementDemo: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <FormControlLabel
        label="Top"
        labelPlacement="top"
      >
        <Checkbox name="placement" value="top" />
      </FormControlLabel>

      <FormControlLabel
        label="Start (Left)"
        labelPlacement="start"
      >
        <Checkbox name="placement" value="start" />
      </FormControlLabel>

      <FormControlLabel
        label="End (Right)"
        labelPlacement="end"
        >
        <Checkbox name="placement" value="end" defaultChecked />
      </FormControlLabel>
        
      <FormControlLabel
        label="Bottom"
        labelPlacement="bottom"
      >
        <Checkbox name="placement" value="bottom" />
      </FormControlLabel>
    </div>
  );
};
`;
