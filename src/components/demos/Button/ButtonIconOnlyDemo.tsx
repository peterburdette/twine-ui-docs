import * as React from 'react';
import { Button } from 'twine-ui';
import { Eye, Plus, Search, Settings } from 'lucide-react';

export const ButtonIconOnlyDemo: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        size="icon"
        aria-label="Plus"
      >
        <Plus size={16} />
      </Button>
      <Button
        size="icon"
        variant="secondary"
        aria-label="Search"
      >
        <Search size={16} />
      </Button>
      <Button
        size="icon"
        variant="outlined"
        aria-label="Close"
      >
        <Eye size={16} />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        aria-label="Settings"
      >
        <Settings size={16} />
      </Button>
    </div>
  );
};
