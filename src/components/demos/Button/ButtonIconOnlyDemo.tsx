import * as React from 'react';
import { Button } from 'twine-ui';
import { Eye, Plus, Search, Settings } from 'lucide-react';

export const ButtonIconOnlyDemo: React.FC = () => {
  const variants = [
    { variant: 'default' as const, aria: 'Plus', Icon: Plus },
    { variant: 'secondary' as const, aria: 'Search', Icon: Search },
    { variant: 'outlined' as const, aria: 'Preview', Icon: Eye },
    { variant: 'ghost' as const, aria: 'Settings', Icon: Settings },
  ];

  const rows = [
    { label: 'Standard corners', props: {} },
    { label: 'Fully rounded (circular)', props: { radius: 'full' as const } },
    { label: 'Square corners (no radius)', props: { radius: 'none' as const } },
  ];

  return (
    <div className="flex flex-col gap-3">
      {rows.map(({ label, props }) => (
        <div
          key={label}
          className="flex flex-wrap items-center gap-2"
        >
          {variants.map(({ variant, aria, Icon }) => (
            <Button
              key={`${label}-${variant}`}
              size="icon"
              variant={variant}
              aria-label={aria}
              {...props}
            >
              <Icon size={16} />
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};
