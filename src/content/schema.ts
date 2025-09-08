import type { ComponentType } from 'react';
import type { ApiSpec } from './api/types';
import type { A11ySpec } from './a11y/types';

export type DocPreview = {
  /** Default single preview */
  kind?: 'preview';
  id: string;
  title: string;
  description?: string;
  component: ComponentType;
  code?: string;
};

export type DocPreviewGroup = {
  /** Group of previews rendered under one subheading */
  kind: 'group';
  id: string; // anchor for the group (e.g., "media")
  title: string; // subheading inside the section
  description?: string;
  layout?: 'stack' | 'grid' | 'cols';
  examples: DocPreview[]; // the examples in this group
};

export type DocPreviewItem = DocPreview | DocPreviewGroup;

type BaseSection = {
  id: string; // anchor for TOC
  title: string; // H2 text
  description?: string;
};

export type UsageSection = BaseSection & {
  kind: 'usage';
  /** Allow single previews or grouped previews */
  previews: DocPreviewItem[];
};

export type ApiSection = BaseSection & {
  kind: 'api';
  api: ApiSpec;
};

export type A11ySection = BaseSection & {
  kind: 'a11y';
  a11y: A11ySpec;
};

export type MarkdownSection = BaseSection & {
  kind: 'markdown';
  markdown: string;
};

export type DocSection =
  | UsageSection
  | ApiSection
  | A11ySection
  | MarkdownSection;

export interface DocPage {
  slug: string;
  title: string;
  description?: string;
  category: string;
  toc: boolean;
  tocTitle?: string;
  sections: DocSection[];
}
