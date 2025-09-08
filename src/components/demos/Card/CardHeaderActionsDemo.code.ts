export const CardHeaderActionsDemoCode = `'use client';

import * as React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardActions,
  Button,
  Tooltip,
} from 'twine-ui';
import { Star, Share2, MoreHorizontal } from 'lucide-react';

export const CardHeaderActionsDemo: React.FC = () => {
  return (
    <div className="max-w-lg">
      <Card
        variant="elevated"
        elevation={2}
        radius="xl"
        padding="md"
      >
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <CardTitle>Analytics report</CardTitle>
              <CardDescription>Export and share results</CardDescription>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <Tooltip
                placement="bottom"
                content="Favorite"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label="Favorite"
                >
                  <Star className="h-4 w-4" />
                </Button>
              </Tooltip>
              <Tooltip
                placement="bottom"
                content="Share"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label="Share"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </Tooltip>
              <Tooltip
                placement="bottom"
                content="More"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label="More options"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </Tooltip>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-gray-700">
            Summaries for the last 30 days. Modify filters below and save when
            you’re ready.
          </p>
        </CardContent>

        <CardActions
          divider="top"
          justify="end"
          spacing="sm"
        >
          <Button variant="ghost">Cancel</Button>
          <Button>Save changes</Button>
        </CardActions>
      </Card>
    </div>
  );
};
`;
