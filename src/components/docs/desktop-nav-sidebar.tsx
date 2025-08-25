'use client';

import * as React from 'react';
import { useAtom } from 'jotai';
import { usePathname } from 'next/navigation';
import { navigationData } from '@/lib/navigation';
import { NavSections } from '@/components/docs/nav-sections';
import {
  useHash,
  makeIsItemActive,
  scrollToId,
  splitHref,
} from '@/components/docs/nav-utils';
import {
  openSectionIdsAtom,
  toggleSectionIdAtom,
} from '@/components/docs/nav-state';

const DesktopNavSidebar = () => {
  const pathname = usePathname();
  const hash = useHash();

  // Jotai state
  const [openIds] = useAtom(openSectionIdsAtom);
  const [, toggleSectionId] = useAtom(toggleSectionIdAtom);

  // Map IDs -> indices because NavSections currently expects indices
  const idToIndex = React.useMemo(
    () => new Map(navigationData.map((s, i) => [s.id, i] as const)),
    []
  );
  const openSections = React.useMemo(() => {
    const s = new Set<number>();
    openIds.forEach((id) => {
      const i = idToIndex.get(id);
      if (i !== undefined) s.add(i);
    });
    return s;
  }, [openIds, idToIndex]);

  const onToggleSection = (index: number, nextOpen: boolean) => {
    const id = navigationData[index].id;
    toggleSectionId({ id, open: nextOpen });
  };

  const isItemActive = React.useMemo(
    () => makeIsItemActive(pathname, hash),
    [pathname, hash]
  );

  const onItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const { path: targetPath, hash: targetHash } = splitHref(href);

    // Same-page anchor (home sections)
    if (targetPath === pathname && targetHash) {
      e.preventDefault();
      scrollToId(targetHash.slice(1)); // pass id without "#"
      history.replaceState(null, '', targetHash);
      window.dispatchEvent(new Event('hashchange'));
      return;
    }

    // Clicking "Introduction" ("/") when already on "/#something"
    if (targetPath === pathname && pathname === '/' && !targetHash) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', '/');
      window.dispatchEvent(new Event('hashchange'));
    }
  };

  return (
    <aside className="fixed left-0 top-14 z-40 hidden lg:block h-[calc(100vh-3.5rem)] w-64 overflow-y-auto border-r bg-white">
      <div className="p-4">
        <NavSections
          sections={navigationData}
          openSections={openSections}
          onToggleSection={onToggleSection}
          isItemActive={isItemActive}
          onItemClick={onItemClick}
          denseHeader={false}
        />
      </div>
    </aside>
  );
};

export default DesktopNavSidebar;
