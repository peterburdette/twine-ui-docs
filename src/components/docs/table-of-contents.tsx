'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { useDocs } from '@/components/docs/docs-provider';
import { getComponentData } from '@/lib/docs-content';

const defaultTocItems = [
  { id: 'introduction', title: 'Introduction', level: 1 },
  { id: 'installation', title: 'Installation', level: 1 },
  { id: 'usage', title: 'Usage', level: 1 },
  { id: 'components', title: 'Components', level: 1 },
  { id: 'customization', title: 'Customization', level: 1 },
];

export function TableOfContents() {
  const { activeSection, setActiveSection, currentPage } = useDocs();

  // Get TOC items based on current page
  const tocItems = React.useMemo(() => {
    if (currentPage) {
      const componentData = getComponentData(currentPage);
      return componentData?.tableOfContents || [];
    }
    return defaultTocItems;
  }, [currentPage]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -35% 0%',
        threshold: 0.1,
      }
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [setActiveSection, tocItems]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  if (tocItems.length === 0) {
    return <div className="w-64 shrink-0 hidden xl:block"></div>; // Maintain spacing even when no TOC
  }

  return (
    <aside className="w-64 shrink-0 hidden xl:block">
      <div className="fixed top-14 right-0 bottom-0 w-64 border-l border-gray-200 bg-white z-20">
        <div className="h-full overflow-y-auto">
          <div className="pl-6 pr-4 py-6 space-y-2">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              On this page
            </h4>
            <nav className="space-y-1">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    'block py-1.5 text-sm transition-colors hover:text-gray-900 cursor-pointer',
                    item.level === 1 ? 'pl-0' : 'pl-4',
                    activeSection === item.id
                      ? 'text-blue-600 font-medium border-l-2 border-blue-600 bg-blue-50 pl-3'
                      : 'text-gray-500 hover:text-gray-900'
                  )}
                  onClick={(e) => handleClick(e, item.id)}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
}
