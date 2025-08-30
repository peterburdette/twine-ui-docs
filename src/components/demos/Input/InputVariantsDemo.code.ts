export const InputVariantsDemoCode = `'use client';

import * as React from 'react';
import { Input } from 'twine-ui';

export const InputVariantsDemo: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3 md:gap-8">
      {/* Standard */}
      <div className="grid gap-3">
        <Input
          label="Default"
          placeholder="Default variant"
          variant="default"
        />
        <Input
          label="Underline"
          placeholder="Underline variant"
          variant="underline"
        />
        <Input
          label="Filled"
          placeholder="Filled variant"
          variant="filled"
        />
        <Input
          label="Outlined"
          placeholder="Outlined variant"
          variant="outlined"
        />
        <Input
          label="Ghost"
          placeholder="Ghost variant"
          variant="ghost"
        />
        <Input
          label="Floating"
          placeholder=" "
          variant="floating"
        />
        <Input
          label="Inset"
          placeholder=" "
          variant="inset"
        />
      </div>

      {/* Error states */}
      <div className="grid gap-3">
        <Input
          label="Default (error)"
          placeholder="Default variant"
          variant="default"
          error="This field is required."
        />
        <Input
          label="Underline (error)"
          placeholder="Underline variant"
          variant="underline"
          error="Invalid entry."
        />
        <Input
          label="Filled (error)"
          placeholder="Filled variant"
          variant="filled"
          error="Please provide a value."
        />
        <Input
          label="Outlined (error)"
          placeholder="Outlined variant"
          variant="outlined"
          error="Something went wrong."
        />
        <Input
          label="Ghost (error)"
          placeholder="Ghost variant"
          variant="ghost"
          error="Not available."
        />
        <Input
          label="Floating (error)"
          placeholder=" "
          variant="floating"
          error="Enter a value."
        />
        <Input
          label="Inset (error)"
          placeholder=" "
          variant="inset"
          error="Enter a value."
        />
      </div>

      {/* Disabled states */}
      <div className="grid gap-3">
        <Input
          label="Default (disabled)"
          placeholder="Default variant"
          variant="default"
          disabled
        />
        <Input
          label="Underline (disabled)"
          placeholder="Underline variant"
          variant="underline"
          disabled
        />
        <Input
          label="Filled (disabled)"
          placeholder="Filled variant"
          variant="filled"
          disabled
        />
        <Input
          label="Outlined (disabled)"
          placeholder="Outlined variant"
          variant="outlined"
          disabled
        />
        <Input
          label="Ghost (disabled)"
          placeholder="Ghost variant"
          variant="ghost"
          disabled
        />
        <Input
          label="Floating (disabled)"
          placeholder=" "
          variant="floating"
          disabled
        />
        <Input
          label="Inset (disabled)"
          placeholder=" "
          variant="inset"
          disabled
        />
      </div>
    </div>
  );
};
`;
