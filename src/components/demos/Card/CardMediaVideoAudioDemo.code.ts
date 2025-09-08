export const CardMediaVideoAudioDemoCode = `'use client';

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

export const CardMediaVideoDemo: React.FC = () => {
  return (
    <div className="max-w-sm">
      <Card
        variant="elevated"
        elevation={2}
        radius="xl"
        padding="md"
      >
        <CardMedia
          component="video"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          poster="https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE"
          controls
          ratio="16:9"
          rounded="top"
          disablePadding
          fit="cover"
        />
        <CardHeader>
          <CardTitle>Motion study</CardTitle>
          <CardDescription>Short 16:9 clip with controls</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-700">
            Demonstrates video media with a poster image, constrained to a fixed
            aspect ratio.
          </p>
        </CardContent>
        <CardActions justify="between">
          <Button variant="ghost">Details</Button>
          <Button>Download</Button>
        </CardActions>
      </Card>
    </div>
  );
};
`;
