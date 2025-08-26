import type { ComponentType } from 'react';

export type Preview = {
  id: string;
  title: string;
  description?: string;
  component: ComponentType;
  code?: string;
};

export type DocPage = {
  slug: string;
  title: string;
  description?: string;
  category?: string;
  toc?: boolean;
  tocTitle?: string;
  previews: Preview[];
  seo?: {
    keywords?: string[];
  };
};
