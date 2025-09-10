export const DateTimePickerControlledDemoCode = `'use client';

import * as React from 'react';
import { Button, DateTimePicker } from 'twine-ui';

export const DateTimePickerControlledDemo: React.FC = () => {
  const [value, setValue] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Button
          variant="outlined"
          onClick={() => setOpen(false)}
        >
          Close
        </Button>
        <Button
          variant="ghost"
          onClick={() => setOpen((o) => !o)}
        >
          Toggle
        </Button>
      </div>
      <DateTimePicker
        value={value}
        onChange={setValue}
        showTime
        dateFormat="MMM dd, yyyy h:mm a"
        open={open}
        onOpenChange={setOpen}
        placeholder="Controlled popover"
      />
    </div>
  );
};
`;
