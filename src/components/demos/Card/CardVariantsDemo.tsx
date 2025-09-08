'use client';

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from 'twine-ui';

export const CardVariantsDemo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
      {/* Surface (flat) */}
      <Card
        variant="surface"
        elevation={0}
        padding="md"
        className="h-full"
      >
        <CardHeader>
          <CardTitle className="text-base">Surface</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          Flat surface with border for subtle separation.
        </CardContent>
      </Card>

      {/* Elevated (default) */}
      <Card
        variant="elevated"
        elevation={2}
        padding="md"
        className="h-full"
      >
        <CardHeader>
          <CardTitle className="text-base">Elevated (default)</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          Shadowed surface for added prominence.
        </CardContent>
      </Card>

      {/* Tones (surface) */}
      <Card
        variant="surface"
        tone="info"
        padding="md"
        className="h-full"
      >
        <CardHeader>
          <CardTitle className="text-base">Info</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          Tinted surface indicating information.
        </CardContent>
      </Card>

      <Card
        variant="surface"
        tone="success"
        padding="md"
        className="h-full"
      >
        <CardHeader>
          <CardTitle className="text-base">Success</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          Tinted surface indicating success.
        </CardContent>
      </Card>

      <Card
        variant="surface"
        tone="warning"
        padding="md"
        className="h-full"
      >
        <CardHeader>
          <CardTitle className="text-base">Warning</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          Tinted surface indicating caution.
        </CardContent>
      </Card>

      <Card
        variant="surface"
        tone="danger"
        padding="md"
        className="h-full"
      >
        <CardHeader>
          <CardTitle className="text-base">Danger</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          Tinted surface indicating an error.
        </CardContent>
      </Card>
    </div>
  );
};
