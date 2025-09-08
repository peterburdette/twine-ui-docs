'use client';

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
  Tooltip,
} from 'twine-ui';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Heart,
  Download,
  Shuffle,
  Repeat,
} from 'lucide-react';

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

export const CardMediaVideoAudioDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [current, setCurrent] = React.useState(0);
  const duration = 214;

  React.useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1 > duration ? 0 : c + 1));
    }, 1000);
    return () => clearInterval(id);
  }, [isPlaying]);

  const pct = Math.min(100, Math.max(0, (current / duration) * 100));

  return (
    <div className="grid gap-6 sm:grid-cols-2 max-w-5xl">
      {/* Video demo */}
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
              Demonstrates video media with a poster image, constrained to a
              fixed aspect ratio.
            </p>
          </CardContent>
          <CardActions justify="between">
            <Button variant="ghost">Details</Button>
            <Button>Download</Button>
          </CardActions>
        </Card>
      </div>

      {/* Audio-style “Now Playing” demo */}
      <div className="max-w-md">
        <Card
          variant="elevated"
          elevation={2}
          radius="xl"
          padding="md"
        >
          {/* Cover image with gradient overlay */}
          <div className="relative">
            <CardMedia
              component="img"
              src="https://picsum.photos/seed/now-playing-cover/960/540"
              alt="Album cover"
              ratio="16:9"
              rounded="top"
              disablePadding
              fit="cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute left-3 top-3">
              <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-gray-900 shadow">
                Live Session
              </span>
            </div>
          </div>

          <CardHeader>
            <CardTitle className="truncate">Chromatic Echoes</CardTitle>
            <CardDescription className="truncate">
              Nova &amp; The Frequencies
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            {/* Progress + time */}
            <div
              aria-label="Playback progress"
              className="space-y-1.5"
            >
              <div className="relative h-2 rounded-full bg-gray-200">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-gray-900"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>{formatTime(current)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </CardContent>

          <CardActions
            justify="between"
            divider="top"
          >
            {/* Left utility actions */}
            <div className="flex items-center gap-1.5">
              <Tooltip content="Shuffle">
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label="Shuffle"
                >
                  <Shuffle className="h-4 w-4" />
                </Button>
              </Tooltip>
              <Tooltip content="Repeat">
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label="Repeat"
                >
                  <Repeat className="h-4 w-4" />
                </Button>
              </Tooltip>
            </div>

            {/* Transport controls */}
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outlined"
                aria-label="Previous"
              >
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                aria-label={isPlaying ? 'Pause' : 'Play'}
                onClick={() => setIsPlaying((p) => !p)}
                className="h-9 w-9 rounded-full"
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
              <Button
                size="icon"
                variant="outlined"
                aria-label="Next"
              >
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>

            {/* Right utility actions */}
            <div className="flex items-center gap-1.5">
              <Tooltip content="Favorite">
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label="Favorite"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </Tooltip>
              <Tooltip content="Download">
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label="Download"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </Tooltip>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
