'use client';

import { ChevronRight } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { navigationData } from '@/lib/navigation';
import { useDocs } from '@/components/docs/docs-provider';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function DocsSidebar() {
  const pathname = usePathname();
  const { currentPage } = useDocs();
  const [isOpen, setIsOpen] = useState(false);

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Navigation - starts immediately */}
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
                            ? 'bg-blue-50 text-blue-600 font-medium border-l-2 pl-2'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        )}
                        onClick={() => setIsOpen(false)}
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
  );

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Fixed Sidebar */}
      <aside
        className={cn(
          'fixed top-14 left-0 bottom-0 w-64 bg-white border-r border-gray-200 z-30 transition-transform duration-200 ease-in-out',
          'lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
