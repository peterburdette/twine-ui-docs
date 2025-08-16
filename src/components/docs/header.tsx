'use client';

import { Github, ExternalLink, Menu } from 'lucide-react';
import Link from 'next/link';
import { MobileNavDrawer } from '@/components/docs/mobile-nav-drawer';
import { useState } from 'react';

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="flex h-full items-center px-4 lg:px-6">
          {/* Mobile menu button - only visible on mobile */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md mr-2"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open navigation menu</span>
          </button>

          {/* Logo - left aligned */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <span className="text-sm font-bold">T</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold">TwineUI</h1>
              <p className="text-sm text-gray-500">Component Library</p>
            </div>
          </Link>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-100 hover:text-gray-900 h-9 px-3"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-100 hover:text-gray-900 h-9 px-3"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Documentation</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNavDrawer
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </>
  );
}
