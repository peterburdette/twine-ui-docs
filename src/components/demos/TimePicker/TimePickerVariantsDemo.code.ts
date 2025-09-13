export const TimePickerVariantsDemoCode = `'use client';
import * as React from 'react';
import { TimePicker } from 'twine-ui';

const variants = [
  'default',
  'filled',
  'outlined',
  'ghost',
  'underline',
  'floating',
  'inset',
] as const;

const VARIANT_LABELS: Record<(typeof variants)[number], string> = {
  default: 'Default',
  filled: 'Filled',
  outlined: 'Outlined',
  ghost: 'Ghost',
  underline: 'Underline',
  floating: 'Event Date (Floating)',
  inset: 'Event Date (Inset)',
};

export const TimePickerVariantsDemo: React.FC = () => {
  const [value, setValue] = React.useState<Record<string, Date | undefined>>(
    {}
  );

  return (
    <div className="grid grid-cols-1 gap-6 max-w-md">
      {variants.map((v) => (
        <div
          key={v}
          className="space-y-2"
        >
          <TimePicker
            value={value[v]}
            onChange={(d) => setValue((s) => ({ ...s, [v]: d }))}
            placeholder="Select date"
            variant={v}
            label={VARIANT_LABELS[v]}
          />
        </div>
      ))}
    </div>
  );
};
`;
