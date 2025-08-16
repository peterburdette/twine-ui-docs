'use client';

import { ChevronRight, X } from 'lucide-react';
import { Dialog } from 'twine-ui';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { navigationData } from '@/lib/navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MobileNavDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNavDrawer({ open, onClose }: MobileNavDrawerProps) {
  const pathname = usePathname();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableBackdropClick={false}
      disableEscapeKeyDown={false}
      className="!items-start !justify-start !p-0"
      backdropClassName="!items-start !justify-start"
    >
      <div
        className={`
          fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto px-2 py-4">
          {navigationData.map((section, index) => (
            <Collapsible
              key={section.title}
              defaultOpen={index < 3}
            >
              <div className="mb-4">
                <CollapsibleTrigger className="group/trigger flex w-full items-center justify-between py-2 text-sm font-medium hover:bg-gray-100 rounded-md px-2">
                  {section.title}
                  <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]/trigger:rotate-90" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-2 space-y-1">
                    {section.items.map((item) => {
                      const isActive = (() => {
                        if (item.href.startsWith('/#')) {
                          return (
                            pathname === '/' &&
                            typeof window !== 'undefined' &&
                            window.location.hash === item.href.substring(1)
                          );
                        }
                        if (
                          item.href.startsWith('/') &&
                          !item.href.includes('#')
                        ) {
                          return pathname === item.href;
                        }
                        if (item.href === '/') {
                          return (
                            pathname === '/' &&
                            (typeof window === 'undefined' ||
                              !window.location.hash)
                          );
                        }
                        return false;
                      })();

                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className={cn(
                            'flex items-center gap-3 py-2 px-2 text-sm transition-colors rounded-md',
                            isActive
                              ? 'bg-blue-50 text-blue-600 font-medium border-l-2 border-blue-600 pl-2'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          )}
                          onClick={onClose} // Close drawer when navigation item is clicked
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </Dialog>
  );
}
