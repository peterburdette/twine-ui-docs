'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, X } from 'lucide-react';
import { Dialog } from 'twine-ui';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { navigationData } from '@/lib/navigation';
import { cn } from '@/lib/utils';

import { splitHref, scrollToId, useHash } from '@/components/docs/nav-utils';

import { useAtom } from 'jotai';
import {
  openSectionIdsAtom,
  toggleSectionIdAtom,
} from '@/components/docs/nav-state';
import { useDocs } from '@/components/docs/docs-provider';

interface MobileNavDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNavDrawer({ open, onClose }: MobileNavDrawerProps) {
  const pathname = usePathname();
  const hash = useHash();
  const { activeSection } = useDocs();

  // Jotai: read/set open sections (IDs)
  const [openIds] = useAtom(openSectionIdsAtom);
  const [, toggleSectionId] = useAtom(toggleSectionIdAtom);

  // Fast lookup for open state
  const openIdSet = React.useMemo(() => new Set(openIds), [openIds]);

  // Active link logic (no URL())
  const isItemActive = React.useMemo(() => {
    return (href: string) => {
      const { path: targetPath, hash: targetHash } = splitHref(href);
      const currentHash = hash || (activeSection ? `#${activeSection}` : '');

      // Home anchors (/#id)
      if (targetPath === '/' && targetHash) {
        return pathname === '/' && currentHash === targetHash;
      }
      // Home root ("/") — only when no hash
      if (targetPath === '/' && !targetHash) {
        return pathname === '/' && !currentHash;
      }
      // Other plain routes (e.g. "/datagrid")
      if (targetPath !== '/' && !targetHash) {
        return pathname === targetPath;
      }
      return false;
    };
  }, [pathname, hash, activeSection]);

  // Smooth scroll for same-page anchors, then close drawer
  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    const { path: targetPath, hash: targetHash } = splitHref(href);

    if (targetPath === pathname && targetHash) {
      e.preventDefault();
      scrollToId(targetHash.slice(1)); // strip "#"
      history.replaceState(null, '', targetHash);
      window.dispatchEvent(new Event('hashchange'));
      onClose();
      return;
    }

    if (targetPath === pathname && pathname === '/' && !targetHash) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', '/');
      window.dispatchEvent(new Event('hashchange'));
      onClose();
      return;
    }

    onClose();
  };

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
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Twine UI</h2>
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
          {navigationData.map((section) => (
            <Collapsible
              key={section.id} // requires section.id in nav data
              open={openIdSet.has(section.id)}
              onOpenChange={(next) =>
                toggleSectionId({ id: section.id, open: next })
              }
            >
              <div>
                <CollapsibleTrigger className="group/trigger flex w-full items-center justify-between py-2 text-sm font-medium hover:bg-gray-100 rounded-md px-2">
                  {section.title}
                  <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]/trigger:rotate-90" />
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div className="mt-2 space-y-1">
                    {section.items.map((item) => {
                      const active = isItemActive(item.href);
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={(e) => handleItemClick(e, item.href)}
                          className={cn(
                            'flex items-center gap-3 py-2 px-2 text-sm transition-colors rounded-md',
                            active
                              ? 'bg-blue-50 text-blue-600 font-medium pl-2'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          )}
                        >
                          <Icon className="h-4 w-4" />
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
