export const TimePickerControlledDemoCode = `'use client';

import * as React from 'react';
import { Button, TimePicker } from 'twine-ui';

export const TimePickerControlledDemo: React.FC = () => {
  const [value, setValue] = React.useState<Date | undefined>();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Button
          variant="ghost"
          onClick={() => setOpen(false)}
        >
          Close
        </Button>
        <Button
          variant="secondary"
          onClick={() => setOpen((o) => !o)}
        >
          Toggle
        </Button>
      </div>
      <TimePicker
        value={value}
        onChange={setValue}
        open={open}
        onOpenChange={setOpen}
        placeholder="Pick a time"
      />
    </div>
  );
};
`;
