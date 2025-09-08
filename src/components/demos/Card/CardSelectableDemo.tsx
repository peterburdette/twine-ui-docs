'use client';

import * as React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardActions,
  Button,
} from 'twine-ui';

type Plan = {
  id: 'basic' | 'pro' | 'team';
  name: string;
  blurb: string;
  price: string;
};

const PLANS: Plan[] = [
  { id: 'basic', name: 'Basic', blurb: 'For personal projects', price: '$0' },
  { id: 'pro', name: 'Pro', blurb: 'Growing teams & startups', price: '$19' },
  {
    id: 'team',
    name: 'Team',
    blurb: 'Advanced collaboration tools',
    price: '$49',
  },
];

export const CardSelectableDemo: React.FC = () => {
  const [selectedId, setSelectedId] = React.useState<Plan['id']>('pro');

  return (
    <div className="grid gap-4 sm:grid-cols-3 max-w-5xl">
      {PLANS.map((p) => {
        const isSelected = p.id === selectedId;

        return (
          <Card
            key={p.id}
            as="div"
            interactive
            onClick={() => setSelectedId(p.id)}
            elevation={isSelected ? 3 : 1}
            radius="xl"
            padding="md"
            className={[
              isSelected
                ? 'ring-2 ring-blue-500 border-blue-300'
                : 'hover:border-gray-300',
            ].join(' ')}
          >
            <div className="flex h-full flex-col">
              <CardHeader className="items-center text-center">
                <CardTitle className="text-base">{p.name}</CardTitle>
                <CardDescription>{p.blurb}</CardDescription>
              </CardHeader>

              <CardContent className="text-center">
                <div className="text-2xl font-semibold">{p.price}</div>
              </CardContent>

              <CardActions
                justify="center"
                spacing="sm"
                className="mt-auto"
              >
                <Button
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Details
                </Button>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId(p.id);
                  }}
                >
                  {isSelected ? 'Selected' : 'Choose'}
                </Button>
              </CardActions>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
