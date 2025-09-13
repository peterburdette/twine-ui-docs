'use client';

/**
 * Navigation (desktop & mobile) with compile-time safety:
 *
 * - Real docs pages are registered in `@/content/index.ts` (the "registry").
 *   We import `DocSlug` (the union of registry keys) and provide a `doc(...)`
 *   helper that only accepts those slugs. If a nav item references a page that
 *   isn't in the registry, TypeScript will error at build time.
 *
 * - Home page sections use `anchor(...)` (`/` or `/#id`) and are not validated
 *   against the registry (they point to headings on the landing page).
 *
 * - Temporary or non-doc routes can use `route(...)` until you add them to the
 *   registry. Once you do, switch to `doc(...)` to gain type safety.
 *
 * - Each section now has a **stable `id`**. Persist open/closed state by
 *   `id` (not by `title`) so renaming a section title doesn’t lose the state.
 *
 * This file is the **single source of truth** for the visual nav structure
 * (groups, titles, icons, urls). Sidebars/drawers should render from this data.
 */

import type { ElementType } from 'react';
import type { DocSlug } from '@/content'; // keys of the lazy docs registry

import {
  Hand,
  Package,
  Palette,
  Layout,
  MousePointer,
  Type,
  Grid as GridIcon,
  Calendar,
  Clock,
  Table,
  SquareCheck,
  SquareChevronDown,
  CircleDot,
  CreditCard as CardIcon,
  Square as ModalIcon,
  Code,
  CalendarClock,
  CalendarRange,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                                  URL types                                 */
/* -------------------------------------------------------------------------- */

/** A strongly-typed href to a doc page: always `/${slug}` (e.g., "/radio"). */
type DocHref<S extends DocSlug = DocSlug> = `/${S}`;

/** Anchors on the home page: "/" or "/#installation", etc. */
type AnchorHref = '/' | `/#${string}`;

/** Generic route href for non-doc pages (WIP/marketing/etc.). */
type RouteHref = `/${string}`;

/* -------------------------------------------------------------------------- */
/*                                Nav item types                              */
/* -------------------------------------------------------------------------- */

/** Base fields shared by all nav items. */
type BaseItem = {
  /** Text shown in the sidebar/drawer. */
  title: string;
  /** Icon component from lucide-react (or any ElementType). */
  icon: ElementType;
};

/** A nav item that points to a registered doc page (compile-time safe). */
export type DocNavItem<S extends DocSlug = DocSlug> = BaseItem & {
  kind: 'doc';
  slug: S;
  href: DocHref<S>;
};

/** A nav item that links to a heading on the home page (Overview). */
export type AnchorNavItem = BaseItem & {
  kind: 'anchor';
  href: AnchorHref;
};

/** A nav item that links to an arbitrary route (non-doc). */
export type RouteNavItem = BaseItem & {
  kind: 'route';
  href: RouteHref;
};

/** The union used by renderers (sidebars/drawers). */
export type NavigationItem = DocNavItem | AnchorNavItem | RouteNavItem;

/**
 * A visual section in the nav (collapsible group).
 * `id` is a stable identifier used for persistence (don’t change casually).
 */
export interface NavigationSection {
  id: string; // ← stable ID for persistence (e.g., "getting-started")
  title: string;
  items: NavigationItem[];
}

/* -------------------------------------------------------------------------- */
/*                                Item helpers                                */
/* -------------------------------------------------------------------------- */

/**
 * Create a docs item tied to the registry. If you mistype the slug or forget
 * to add it to the registry, TypeScript will error here.
 *
 * @example doc('Data Grid', 'datagrid', Table)
 */
const doc = <S extends DocSlug>(
  title: string,
  slug: S,
  icon: ElementType
): DocNavItem<S> => ({
  kind: 'doc',
  title,
  slug,
  href: `/${slug}` as DocHref<S>,
  icon,
});

/**
 * Create a home-page anchor item ("/" or "/#section-id").
 *
 * @example anchor('Installation', '/#installation', Package)
 */
const anchor = (
  title: string,
  href: AnchorHref,
  icon: ElementType
): AnchorNavItem => ({
  kind: 'anchor',
  title,
  href,
  icon,
});

/**
 * Create a generic route item (non-doc). Use sparingly; prefer `doc(...)`
 * whenever the page is (or becomes) part of the docs registry.
 *
 * @example route('Button', '/button', MousePointer)
 */
const route = (
  title: string,
  href: RouteHref,
  icon: ElementType
): RouteNavItem => ({
  kind: 'route',
  title,
  href,
  icon,
});

/* -------------------------------------------------------------------------- */
/*                              Navigation structure                          */
/* -------------------------------------------------------------------------- */

/**
 * Keep this list in a stable order for good UX. When you add a new docs page:
 *   1) register it in `@/content/index.ts` (updates `DocSlug`)
 *   2) change the corresponding `route(...)` here to `doc(...)`
 * TypeScript will then protect you from broken slugs.
 *
 * NOTE: Section `id`s are used for persistence; treat them as stable keys.
 */
export const navigationData: NavigationSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    items: [
      // The Overview (home) page sections — ensure these heading IDs exist:
      // introduction, installation, usage, components, customization
      anchor('Introduction', '/', Hand),
      anchor('Installation', '/#installation', Package),
      anchor('Quick Start', '/#quick-start', Code),
      anchor('Components', '/#components', Layout),
      anchor('Customization', '/#customization', Palette),
    ],
  },

  {
    id: 'layout',
    title: 'Layout Components',
    items: [
      // These are non-doc routes for now; swap to doc('Container','container',Layout) when ready
      route('Container', '/container', Layout),
      route('Grid System', '/grid', GridIcon),
      route('Flexbox Utilities', '/flexbox', Layout),
    ],
  },

  {
    id: 'form',
    title: 'Form Components',
    items: [
      doc('Button', 'button', MousePointer),
      doc('Input', 'input', Type),
      doc('Checkbox', 'checkbox', SquareCheck),
      doc('Radio', 'radio', CircleDot),
      doc('Select', 'select', SquareChevronDown),
    ],
  },

  {
    id: 'date-time',
    title: 'Date & Time Components',
    items: [
      doc('Date Picker', 'date-picker', Calendar),
      doc('Time Picker', 'time-picker', Clock),
      doc('Date Time Picker', 'date-time-picker', CalendarClock),
      route('Range Picker', '/range-picker', CalendarRange),
    ],
  },

  {
    id: 'data',
    title: 'Data Components',
    items: [
      doc('Data Grid', 'datagrid', Table),
      doc('Card', 'card', CardIcon),
      route('Modal', '/modal', ModalIcon),
    ],
  },
];

/** Union of section IDs (useful for typing persisted state, etc.). */
export type NavigationSectionId = (typeof navigationData)[number]['id'];

/* -------------------------------------------------------------------------- */
/*                             Integration guidelines                         */
/* -------------------------------------------------------------------------- */

/**
 * Rendering tips (desktop & mobile sidebars):
 * - Use `navigationData` as the single source of truth for groups & items.
 * - For same-page anchors ("/#id"), intercept clicks and smooth-scroll with an
 *   offset equal to your fixed header height. Example used elsewhere:
 *
 *   const HEADER_OFFSET = 80;
 *   const scrollToId = (id: string) => {
 *     const el = document.getElementById(id);
 *     if (!el) return;
 *     requestAnimationFrame(() => {
 *       const top = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
 *       window.scrollTo({ top, behavior: 'smooth' });
 *     });
 *   };
 *
 * - Persist collapsible open/closed state by **section `id`** (not title) so
 *   renames don’t reset user preferences. Consider versioning your storage key:
 *   e.g., 'docs.sidebar.openSections.v2'.
 *
 * Maintenance:
 * - Changing a registry key (slug) will cause TS errors here for any `doc(...)`
 *   items that reference the old slug — fix by updating those calls.
 * - Replace `route(...)` with `doc(...)` as pages graduate into the registry.
 * - Treat section `id`s as stable keys; only change them with a migration.
 */
