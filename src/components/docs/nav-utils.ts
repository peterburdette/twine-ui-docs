'use client';

import * as React from 'react';

export const HEADER_OFFSET = 80;
const INTRO_ANCHOR = '#introduction';

/** Track window.location.hash (with the leading "#", or "" if none) */
export const useHash = () => {
  const [hash, setHash] = React.useState<string>('');
  React.useEffect(() => {
    const update = () => setHash(window.location.hash || '');
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  return hash;
};

/** Parse a local href like "/", "/#id", "/path", "/path#id" */
export function parseLocalHref(href: string): { path: string; hashId: string } {
  // Assume internal links that start with "/". If not, treat as is.
  if (!href.startsWith('/')) return { path: href, hashId: '' };

  const hashIdx = href.indexOf('#');
  if (hashIdx === -1) {
    return { path: href || '/', hashId: '' };
  }
  const path = href.slice(0, hashIdx) || '/';
  const hashId = href.slice(hashIdx + 1); // no leading "#"
  return { path, hashId };
}

export const splitHref = (href: string) => {
  // Works for "/", "/datagrid", "/#installation"
  const hashIndex = href.indexOf('#');
  if (hashIndex === -1) {
    return { path: href || '/', hash: '' };
  }
  const path = href.slice(0, hashIndex) || '/';
  const hash = href.slice(hashIndex); // includes leading "#"
  return { path, hash };
};

/** Decide if a nav item is active, without using new URL(...) */
export const makeIsItemActive =
  (pathname: string, hash: string) =>
  (href: string): boolean => {
    const { path: targetPath, hash: targetHash } = splitHref(href);

    // Home anchors (/#id) — active when on "/" AND hash matches
    if (targetPath === '/' && targetHash) {
      return pathname === '/' && hash === targetHash;
    }

    // Home root ("/") — active when on "/" AND either:
    //  - no hash, or
    //  - specifically the introduction hash (so "/" lights up for "#introduction")
    if (targetPath === '/' && !targetHash) {
      return pathname === '/' && (!hash || hash === INTRO_ANCHOR);
    }

    // Other plain routes (e.g. "/datagrid")
    if (targetPath !== '/' && !targetHash) {
      return pathname === targetPath;
    }

    return false;
  };

/** Smooth-scroll to an in-page heading, accounting for the fixed header */
export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  requestAnimationFrame(() => {
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  });
};
