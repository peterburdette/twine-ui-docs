import { ApiSpec } from '@/components/docs/apiContent';
import type { ComponentType } from 'react';

export interface DocPreview {
  id: string;
  title: string;
  description?: string;
  component: ComponentType;
  code?: string;
}

export interface DocSection {
  id: string; // used for the h2 id / TOC anchor
  title: string; // the h2 text (e.g., "Usage")
  description?: string;
  previews?: DocPreview[]; // optional list of previews under this section
  content?: React.ReactNode; // optional arbitrary content under the h2
  api?: ApiSpec;
}

export interface DocPage {
  slug: string;
  title: string;
  description?: string;
  category: string;
  toc: boolean;
  tocTitle?: string;
  sections?: DocSection[];
}
