import type { DocPage } from './schema';

export const registry = {
  radio: () => import('./components/radio.doc').then((m) => m.doc as DocPage),
  // checkbox: () => import('./components/checkbox.doc').then((m) => m.doc as DocPage),
  // button:   () => import('./components/button.doc').then((m) => m.doc as DocPage),
  datagrid: () =>
    import('./components/datagrid.doc').then((m) => m.doc as DocPage),
} as const;

export type DocSlug = keyof typeof registry;

export const getDoc = async (slug: DocSlug) => registry[slug]();

export const getAllDocs = async () =>
  Promise.all(Object.values(registry).map((load) => load()));
