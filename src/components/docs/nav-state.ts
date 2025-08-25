'use client';

import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { navigationData } from '@/lib/navigation';

// default = all sections open
const ALL_SECTION_IDS = navigationData.map((s) => s.id);

export const openSectionIdsAtom = atomWithStorage<string[]>(
  'docs.openSectionIds.v1',
  ALL_SECTION_IDS
);

// Helpers
export const isSectionOpenAtom = atom(
  (get) => new Set(get(openSectionIdsAtom))
);

export const toggleSectionIdAtom = atom(
  null,
  (get, set, { id, open }: { id: string; open: boolean }) => {
    const curr = new Set(get(openSectionIdsAtom));
    if (open) curr.add(id);
    else curr.delete(id);
    set(openSectionIdsAtom, Array.from(curr));
  }
);
