'use client';

import type * as React from 'react';
import { DocsProvider } from '@/components/docs/docs-provider';
import { DocsSidebar } from '@/components/docs/docs-sidebar';
import { TableOfContents } from '@/components/docs/table-of-contents';
import { Footer } from '@/components/docs/footer';
import { Header } from '@/components/docs/header';

interface DocsLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export function DocsLayout({ children, currentPage }: DocsLayoutProps) {
  return (
    <DocsProvider currentPage={currentPage}>
      {/* Fixed Header spanning full width */}
      <Header />

      <div className="flex pt-14 min-h-screen">
        {/* Fixed Sidebar - only on desktop */}
        <DocsSidebar />

        {/* Content area - takes remaining space after sidebar */}
        <div className="flex-1 lg:ml-64 flex min-w-0">
          {/* Main content - centered in available space */}
          <div className="flex-1 flex justify-center px-4 sm:px-6 lg:px-8 min-w-0">
            <main className="w-full max-w-4xl min-w-0">
              {children}
              <Footer />
            </main>
          </div>

          {/* Fixed Table of Contents - only on xl screens */}
          <TableOfContents />
        </div>
      </div>
    </DocsProvider>
  );
}
