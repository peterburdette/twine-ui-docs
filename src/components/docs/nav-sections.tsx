'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { NavigationSection } from '@/lib/navigation';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronRight } from 'lucide-react';

type Props = {
  sections: NavigationSection[];
  openSections: Set<number>;
  onToggleSection: (index: number, nextOpen: boolean) => void;
  isItemActive: (href: string) => boolean;
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  denseHeader?: boolean; // tweak padding for mobile vs desktop
  className?: string;
};

export const NavSections: React.FC<Props> = ({
  sections,
  openSections,
  onToggleSection,
  isItemActive,
  onItemClick,
  denseHeader,
  className,
}) => {
  return (
    <nav className={cn('space-y-4', className)}>
      {sections.map((section, index) => (
        <Collapsible
          key={section.title}
          open={openSections.has(index)}
          onOpenChange={(next) => onToggleSection(index, next)}
        >
          <div className="mb-1">
            <CollapsibleTrigger
              className={cn(
                'group/trigger flex w-full items-center justify-between rounded-md',
                denseHeader
                  ? 'py-2 px-2 text-sm font-medium hover:bg-gray-100'
                  : 'py-2 px-2 text-xs font-semibold uppercase tracking-wide text-gray-600 hover:bg-gray-100'
              )}
            >
              {section.title}
              <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]/trigger:rotate-90" />
            </CollapsibleTrigger>

            <CollapsibleContent>
              <ul className="mt-2 space-y-1">
                {section.items.map((item) => {
                  const active = isItemActive(item.href);
                  const Icon = item.icon;
                  return (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        prefetch
                        onClick={(e) => onItemClick?.(e, item.href)}
                        className={cn(
                          'flex items-center gap-3 py-1.5 px-2 text-sm rounded-md transition-colors',
                          active
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </CollapsibleContent>
          </div>
        </Collapsible>
      ))}
    </nav>
  );
};
