'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';

export const ButtonDemo = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => setCount(count + 1)}>Primary ({count})</Button>
        <Button
          variant="outline"
          onClick={() => setCount(count + 1)}
        >
          Outline ({count})
        </Button>
        <Button
          variant="ghost"
          onClick={() => setCount(count + 1)}
        >
          Ghost ({count})
        </Button>
        <Button
          variant="destructive"
          onClick={() => setCount(count + 1)}
        >
          Destructive ({count})
        </Button>
      </div>
      <p className="text-sm text-gray-500">
        Click any button to increment the counter!
      </p>
    </div>
  );
};
