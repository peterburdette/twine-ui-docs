export const CardMediaCoverDemoCode = `'use client';

import * as React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardActions,
  CardMedia,
  Button,
} from 'twine-ui';

export const CardMediaCoverDemo: React.FC = () => {
  return (
    <div className="max-w-sm">
      <Card
        variant="elevated"
        elevation={2}
        radius="xl"
        padding="md"
        interactive
      >
        <CardMedia
          component="img"
          src="https://picsum.photos/seed/card-cover/960/540"
          alt="Cover image"
          disablePadding
          fit="cover"
        />

        <CardHeader>
          <CardTitle>Summer collection</CardTitle>
          <CardDescription>Handpicked looks for warmer days</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-gray-700">
            Explore breathable fabrics, muted palettes, and versatile layers
            designed for everyday wear.
          </p>
        </CardContent>

        <CardActions justify="between">
          <Button variant="ghost">Preview</Button>
          <Button>Shop now</Button>
        </CardActions>
      </Card>
    </div>
  );
};
`;
