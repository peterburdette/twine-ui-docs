'use client';

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from 'twine-ui';

export const CardBasicDemo: React.FC = () => {
  return (
    <div className="max-w-sm">
      <Card
        variant="elevated"
        elevation={1}
        radius="xl"
        padding="md"
      >
        <CardHeader>
          <CardTitle>Project Aurora</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-gray-700">
            A flexible surface for grouping content and actions. Use for
            summaries, settings, and simple forms.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
