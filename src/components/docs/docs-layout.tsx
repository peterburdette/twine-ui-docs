'use client';

import type * as React from 'react';
import { DocsProvider } from '@/components/docs/docs-provider';
import DesktopNavSidebar from '@/components/docs/desktop-nav-sidebar';
import { TableOfContents } from '@/components/docs/table-of-contents';
import { Footer } from '@/components/docs/footer';
import { Header } from '@/components/docs/header';

type DocsLayoutProps = {
  children: React.ReactNode;
  currentPage?: string;
  title?: string;
  description?: string;
};

const DocsLayout = ({
  children,
  currentPage,
  title,
  description,
}: DocsLayoutProps) => {
  return (
    <DocsProvider currentPage={currentPage}>
      {/* Fixed Header spanning full width */}
      <Header />

      <div className="flex pt-14 min-h-screen">
        {/* Fixed Sidebar - only on desktop */}
        <DesktopNavSidebar />

        {/* Content area - takes remaining space after sidebar */}
        <div className="flex-1 lg:ml-64 flex min-w-0">
          {/* Main content - centered in available space */}
          <div className="flex-1 flex justify-center px-4 sm:px-6 lg:px-8 min-w-0">
            <main className="w-full max-w-none py-6 space-y-12 min-w-0">
              {(title || description) && (
                <header className="space-y-4">
                  {title && (
                    <h1
                      id="overview"
                      className="text-3xl sm:text-4xl font-bold text-gray-900 scroll-mt-32"
                    >
                      {title}
                    </h1>
                  )}
                  {description && (
                    <p className="text-md sm:text-md text-gray-600">
                      {description}
                    </p>
                  )}
                </header>
              )}
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
};

export default DocsLayout;
