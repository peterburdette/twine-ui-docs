'use client';

import * as React from 'react';
import { Button } from 'twine-ui';

export const ButtonDisabledLoadingDemo: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  const handleClick = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled>Disabled</Button>

      <Button
        onClick={handleClick}
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? (
          <span className="inline-flex items-center">
            <span
              className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-transparent"
              aria-hidden="true"
            />
            Loading…
          </span>
        ) : (
          'Load Data'
        )}
      </Button>
    </div>
  );
};
