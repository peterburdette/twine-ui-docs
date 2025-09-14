'use client';

import * as React from 'react';
import { Button } from 'twine-ui';

export const ButtonSizesDemo: React.FC = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
  const sizeLabel: Record<(typeof sizes)[number], string> = {
    xs: 'Extra small',
    sm: 'Small',
    md: 'Medium',
    lg: 'Large',
    xl: 'Extra large',
  };

  const sections: Array<{
    label: string;
    props?: React.ComponentProps<typeof Button>;
  }> = [
    { label: 'Default' },
    { label: 'Secondary', props: { variant: 'secondary' } },
    { label: 'Outlined', props: { variant: 'outlined' } },
    { label: 'Ghost', props: { variant: 'ghost' } },
  ];

  return (
    <div className="flex flex-col gap-3">
      {sections.map(({ label, props }) => (
        <div
          key={label}
          className="flex flex-wrap items-center gap-2"
        >
          {sizes.map((size) => (
            <Button
              key={`${label}-${size}`}
              size={size}
              {...props}
            >
              {sizeLabel[size]}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};
