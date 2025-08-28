export const RadioGroupErrorDemoCode = `'use client';

import * as React from 'react';
import { Radio, RadioGroup, FormControlLabel, Button } from 'twine-ui';

export const RadioGroupErrorDemo: React.FC = () => {
  const groupId = 'contact-pref-label';

  const [value, setValue] = React.useState<string>('');
  const showError = value === '';

  const reset = () => setValue('');

  return (
    <div className="space-y-3 w-56 max-w-md">
      <div className="flex items-center justify-between">
        <p
          id={groupId}
          className="text-sm font-medium"
        >
          Preferences
        </p>
        <Button
          size="sm"
          onClick={reset}
          aria-describedby={groupId}
        >
          Reset
        </Button>
      </div>

      <RadioGroup
        aria-labelledby={groupId}
        value={value}
        onChange={setValue}
        required
        error={showError}
        className="grid gap-2 rounded-md border p-3 w-full"
      >
        <FormControlLabel label="Email">
          <Radio value="email" />
        </FormControlLabel>
        <FormControlLabel label="SMS">
          <Radio value="sms" />
        </FormControlLabel>
        <FormControlLabel label="Phone Call">
          <Radio value="phone" />
        </FormControlLabel>
      </RadioGroup>

      <div
        className="min-h-[20px]"
        aria-live="polite"
        aria-atomic="true"
      >
        {showError ? (
          <p className="text-sm text-red-600">
            Please choose a contact method.
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">
            Selected: <span className="font-medium">{value}</span>
          </p>
        )}
      </div>
    </div>
  );
};
`;
