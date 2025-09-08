export const CardMediaLeftRightDemoCode = `'use client';

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

export const CardMediaLeftRightDemo: React.FC = () => {
  return (
    <div className="max-w-2xl space-y-6">
      <Card
        variant="elevated"
        elevation={2}
        radius="xl"
        padding="md"
        orientation="horizontal"
        className="items-stretch"
      >
        <div className="w-48 shrink-0 self-stretch overflow-hidden rounded-l-[var(--card-radius)]">
          <CardMedia
            component="img"
            src="https://picsum.photos/seed/left-media/800/800"
            alt="Left media"
            ratio="auto"
            disablePadding
            fit="cover"
            className="h-full [&>div]:h-full [&>div>img]:h-full [&>div>video]:h-full [&>div>iframe]:h-full"
            rounded="none"
          />
        </div>

        <div className="flex-1">
          <CardHeader>
            <CardTitle>Left-aligned media</CardTitle>
            <CardDescription>Rounded to match the card</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700">
              In horizontal layouts, side media can span the card height. Use{' '}
              <code>ratio="auto"</code> and stretch the wrapper.
            </p>
          </CardContent>
          <CardActions
            justify="end"
            spacing="sm"
          >
            <Button variant="ghost">Preview</Button>
            <Button>Continue</Button>
          </CardActions>
        </div>
      </Card>

      <Card
        variant="elevated"
        elevation={2}
        radius="xl"
        padding="md"
        orientation="horizontal"
        className="items-stretch"
      >
        <div className="flex-1">
          <CardHeader>
            <CardTitle>Right-aligned media</CardTitle>
            <CardDescription>Symmetric counterpart</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700">
              Mirror the layout by placing media on the right and using the same
              stretch technique.
            </p>
          </CardContent>
          <CardActions
            justify="start"
            spacing="sm"
          >
            <Button variant="ghost">Preview</Button>
            <Button>Continue</Button>
          </CardActions>
        </div>

        <div className="w-48 shrink-0 self-stretch overflow-hidden rounded-r-[var(--card-radius)]">
          <CardMedia
            component="img"
            src="https://picsum.photos/seed/right-media/800/800"
            alt="Right media"
            ratio="auto"
            disablePadding
            fit="cover"
            className="h-full [&>div]:h-full [&>div>img]:h-full [&>div>video]:h-full [&>div>iframe]:h-full"
            rounded="none"
          />
        </div>
      </Card>
    </div>
  );
};
`;
