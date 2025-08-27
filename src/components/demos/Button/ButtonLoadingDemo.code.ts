export const ButtonLoadingDemoCode = `'use client';

import * as React from 'react';
import { Button } from 'twine-ui';
import { Plus, ArrowRight } from 'lucide-react';

export const ButtonLoadingDemo: React.FC = () => {
  const [loading, setLoading] = React.useState<Record<string, boolean>>({});
  const delay = 1200; // fixed demo delay

  const trigger = (key: string) => {
    setLoading((s) => ({ ...s, [key]: true }));
    window.setTimeout(() => {
      setLoading((s) => ({ ...s, [key]: false }));
    }, delay);
  };

  const triggerAll = () => {
    (
      [
        'disabledLoading',
        'standardLoading',
        'startIconLoading',
        'endIconLoading',
      ] as const
    ).forEach((k, i) => setTimeout(() => trigger(k), i * 200));
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex items-center gap-3">
        <div className="w-56 text-sm text-gray-600">Trigger All</div>
        <Button onClick={triggerAll}>Trigger All</Button>
      </div>

      {/* 1) Disabled + loading (needs external trigger since it's disabled) */}
      <div className="flex items-center gap-3">
        <div className="w-56 text-sm text-gray-600">Disabled + loading</div>
        <Button
          disabled
          loading={!!loading['disabledLoading']}
        >
          {loading['disabledLoading'] ? 'Processing…' : 'Disabled'}
        </Button>
      </div>

      {/* 2) Standard loading (click the button itself) */}
      <div className="flex items-center gap-3">
        <div className="w-56 text-sm text-gray-600">Standard loading</div>
        <Button
          loading={!!loading['standardLoading']}
          onClick={() => trigger('standardLoading')}
        >
          {loading['standardLoading'] ? 'Loading…' : 'Submit'}
        </Button>
      </div>

      {/* 3) Start icon (click the button itself) */}
      <div className="flex items-center gap-3">
        <div className="w-56 text-sm text-gray-600">Start icon</div>
        <Button
          startIcon={<Plus size={16} />}
          loading={!!loading['startIconLoading']}
          onClick={() => trigger('startIconLoading')}
        >
          {loading['startIconLoading'] ? 'Creating…' : 'New Item'}
        </Button>
      </div>

      {/* 4) End icon (click the button itself) */}
      <div className="flex items-center gap-3">
        <div className="w-56 text-sm text-gray-600">End icon</div>
        <Button
          endIcon={<ArrowRight size={16} />}
          loading={!!loading['endIconLoading']}
          onClick={() => trigger('endIconLoading')}
        >
          {loading['endIconLoading'] ? 'Continuing…' : 'Continue'}
        </Button>
      </div>
    </div>
  );
};
`;
