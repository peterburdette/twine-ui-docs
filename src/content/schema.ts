// content/schema.ts
import type { ComponentType } from 'react';
import type { ApiSpec } from './api/types';
import type { A11ySpec } from './a11y/types';

export type DocPreview = {
  id: string;
  title: string;
  description?: string;
  component: ComponentType;
  code?: string;
};

type BaseSection = {
  id: string; // anchor for TOC
  title: string; // H2 text
  description?: string;
};

export type UsageSection = BaseSection & {
  kind: 'usage';
  previews: DocPreview[];
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
  // store markdown (or even mdx source) as data
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
