'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { useDocs } from '@/components/docs/docs-provider';

type TocItem = { id: string; title: string; level: 1 | 2 | 3 };

const HEADER_OFFSET = 80;

export function TableOfContents() {
  const { activeSection, setActiveSection } = useDocs();
  const [tocItems, setTocItems] = React.useState<TocItem[]>([]);
  const lockUntilRef = React.useRef<number>(0);

  // Keep URL hash in sync & notify listeners (desktop/mobile nav)
  const setHash = React.useCallback((id: string | null) => {
    const nextHash = id ? `#${id}` : '';
    if (window.location.hash !== nextHash) {
      history.replaceState(null, '', nextHash || '/');
      // Important: replaceState doesn't fire "hashchange"
      window.dispatchEvent(new Event('hashchange'));
    }
  }, []);

  React.useEffect(() => {
    const collect = () => {
      const nodes = Array.from(
        document.querySelectorAll('h1[id], h2[id], h3[id]')
      ) as HTMLHeadingElement[];

      const items: TocItem[] = nodes.map((h) => ({
        id: h.id,
        title: (h.dataset.tocTitle || h.textContent || '').trim(),
        level: h.tagName === 'H1' ? 1 : h.tagName === 'H2' ? 2 : 3,
      }));

      setTocItems(items);

      // Initial highlight: hash target or first heading
      const hash = decodeURIComponent(window.location.hash.replace(/^#/, ''));
      const initialId =
        hash && items.some((i) => i.id === hash) ? hash : items[0]?.id;
      if (initialId) {
        setActiveSection(initialId);
        // keep URL & sidebars in sync on first load too
        setHash(initialId);
      }
    };

    collect();
    const mo = new MutationObserver(() => queueMicrotask(collect));
    mo.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    return () => mo.disconnect();
  }, [setActiveSection, setHash]);

  // Compute which heading is active based on scroll position
  React.useEffect(() => {
    if (!tocItems.length) return;

    let raf = 0;
    const getTop = (el: Element) =>
      el.getBoundingClientRect().top + window.scrollY;

    const onScroll = () => {
      if (performance.now() < lockUntilRef.current) return; // ignore during manual scroll lock
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY + HEADER_OFFSET + 1;
        let currentId = tocItems[0]?.id;
        for (const item of tocItems) {
          const el = document.getElementById(item.id);
          if (!el) continue;
          const top = getTop(el);
          if (top <= y) currentId = item.id;
          else break;
        }
        if (currentId && currentId !== activeSection) {
          setActiveSection(currentId);
        }
      });
    };

    onScroll(); // in case we loaded mid-page
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [tocItems, activeSection, setActiveSection]);

  // Whenever activeSection changes (from scroll), sync the URL + notify navs
  React.useEffect(() => {
    if (!activeSection) return;
    setHash(activeSection);
  }, [activeSection, setHash]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Lock highlighting briefly so tiny sections don't get preempted
    lockUntilRef.current = performance.now() + 500;

    requestAnimationFrame(() => {
      const top =
        el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveSection(id);
      setHash(id); // keep URL + sidebars in sync

      setTimeout(() => {
        lockUntilRef.current = 0;
      }, 600);
    });
  };

  if (!tocItems.length) {
    return <div className="w-64 shrink-0 hidden xl:block" />;
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
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(item.id);
                  }}
                  className={cn(
                    'block py-1.5 text-sm transition-colors cursor-pointer',
                    item.level === 1
                      ? 'pl-0'
                      : item.level === 2
                      ? 'pl-4'
                      : 'pl-8',
                    activeSection === item.id
                      ? 'text-blue-600 font-medium border-l-2 border-blue-600 bg-blue-50 pl-3'
                      : 'text-gray-500 hover:text-gray-900'
                  )}
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
