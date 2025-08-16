'use client';

import * as React from 'react';
import {
  previewComponents,
  type PreviewComponentName,
} from '@/components/docs/preview-registry';

interface ComponentPreviewProps {
  componentName?: string;
}

export function ComponentPreview({ componentName }: ComponentPreviewProps) {
  if (!componentName || !(componentName in previewComponents)) {
    return (
      <div className="flex items-center justify-center min-h-[100px] text-gray-500">
        No preview available
      </div>
    );
  }

  const PreviewComponent =
    previewComponents[componentName as PreviewComponentName];

  return (
    <div className="flex items-center justify-center min-h-[100px]">
      <PreviewComponent />
    </div>
  );
}
