'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';

export const CardDemo = () => {
  const [liked, setLiked] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Interactive Card</h3>
        <button
          onClick={() => setLiked(!liked)}
          className={`text-xl transition-colors ${
            liked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
          }`}
        >
          {liked ? '❤️' : '🤍'}
        </button>
      </div>
      <p className="text-gray-600 mb-4">
        This is a sample card component with interactive elements. Click the
        heart to like it!
      </p>
      <div className="flex gap-2">
        <Button size="sm">Action</Button>
        <Button
          variant="outline"
          size="sm"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};
