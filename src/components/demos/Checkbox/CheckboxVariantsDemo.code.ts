export const CheckboxVariantsDemoCode = `import * as React from 'react';
import { Checkbox, FormControlLabel } from 'twine-ui';

export const CheckboxVariantsDemo: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* With focus ring */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          With focus ring
        </h3>
        <div className="flex flex-wrap items-center gap-6">
          <FormControlLabel label="Default">
            <Checkbox
              variant="default"
              showFocusRing
              defaultChecked
            />
          </FormControlLabel>

          <FormControlLabel label="Success">
            <Checkbox
              variant="success"
              showFocusRing
              defaultChecked
            />
          </FormControlLabel>

          <FormControlLabel label="Warning">
            <Checkbox
              variant="warning"
              showFocusRing
              defaultChecked
            />
          </FormControlLabel>

          <FormControlLabel label="Error">
            <Checkbox
              variant="error"
              showFocusRing
              defaultChecked
            />
          </FormControlLabel>
        </div>
      </div>

      {/* Without focus ring */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Without focus ring
        </h3>
        <div className="flex flex-wrap items-center gap-6">
          <FormControlLabel label="Default">
            <Checkbox
              variant="default"
              defaultChecked
            />
          </FormControlLabel>

          <FormControlLabel label="Success">
            <Checkbox
              variant="success"
              defaultChecked
            />
          </FormControlLabel>

          <FormControlLabel label="Warning">
            <Checkbox
              variant="warning"
              defaultChecked
            />
          </FormControlLabel>

          <FormControlLabel label="Error">
            <Checkbox
              variant="error"
              defaultChecked
            />
          </FormControlLabel>
        </div>
      </div>
    </div>
  );
};
`;
