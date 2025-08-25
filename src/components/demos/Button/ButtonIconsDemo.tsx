'use client';

import * as React from 'react';
import { Button } from 'twine-ui';
import { Plus, Save, Trash2, ArrowRight } from 'lucide-react';

export const ButtonIconsDemo: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>
        <Plus className="mr-2 h-4 w-4" />
        New
      </Button>

      <Button variant="secondary">
        <Save className="mr-2 h-4 w-4" />
        Save
      </Button>

      <Button variant="destructive">
        <Trash2 className="mr-2 h-4 w-4" />
        Delete
      </Button>

      <Button variant="ghost">
        Continue
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};
