'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, Package, Zap, Palette, Code } from 'lucide-react';
import Link from 'next/link';

export function OverviewContent() {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const installCommand = 'npm install @your-org/twine-ui';

  return (
    <div className="py-6 space-y-12">
      {/* Header */}
      <section
        id="introduction"
        className="scroll-mt-32 space-y-6"
      >
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Twine UI Components
            </h1>
            <Badge variant="secondary">v1.0.0</Badge>
          </div>
          <p className="text-lg sm:text-xl text-gray-600">
            A comprehensive collection of beautiful, accessible, and
            customizable components built with Tailwind CSS. Perfect for
            building modern web applications with consistent design patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <Package className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">50+ Components</h3>
              </div>
              <p className="text-sm text-gray-500">
                Comprehensive library of UI components for all your needs
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">
                  TypeScript Ready
                </h3>
              </div>
              <p className="text-sm text-gray-500">
                Full TypeScript support with comprehensive type definitions
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">
                  Fully Customizable
                </h3>
              </div>
              <p className="text-sm text-gray-500">
                Easy to customize with Tailwind CSS utility classes
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <Code className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Accessible</h3>
              </div>
              <p className="text-sm text-gray-500">
                Built with accessibility in mind, following WAI-ARIA guidelines
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Installation */}
      <section
        id="installation"
        className="scroll-mt-32 space-y-4"
      >
        <h2 className="text-xl sm:text-2xl font-semibold border-b border-gray-200 pb-2 text-gray-900">
          Installation
        </h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            Install the component library using your preferred package manager:
          </p>
          <div className="relative">
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm border">
              <code className="text-gray-800">{installCommand}</code>
            </pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2"
              onClick={() => copyToClipboard(installCommand, 'install')}
            >
              {copiedCode === 'install' ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section
        id="usage"
        className="scroll-mt-32 space-y-4"
      >
        <h2 className="text-xl sm:text-2xl font-semibold border-b border-gray-200 pb-2 text-gray-900">
          Quick Start
        </h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            Import and use components in your React application:
          </p>
          <div className="relative">
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm border">
              <code className="text-gray-800">{`import { Button, Card, Input } from '@your-org/twine-ui'

function App() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Welcome</h2>
      <Input placeholder="Enter your name" className="mb-4" />
      <Button>Get Started</Button>
    </Card>
  )
}`}</code>
            </pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2"
              onClick={() =>
                copyToClipboard(
                  `import { Button, Card, Input } from '@your-org/twine-ui'

function App() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Welcome</h2>
      <Input placeholder="Enter your name" className="mb-4" />
      <Button>Get Started</Button>
    </Card>
  )
}`,
                  'usage'
                )
              }
            >
              {copiedCode === 'usage' ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Components Preview */}
      <section
        id="components"
        className="scroll-mt-32 space-y-4"
      >
        <h2 className="text-xl sm:text-2xl font-semibold border-b border-gray-200 pb-2 text-gray-900">
          Popular Components
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Button</CardTitle>
              <CardDescription>
                Versatile button component with multiple variants
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Button size="sm">Primary</Button>
                <Button
                  variant="outline"
                  size="sm"
                >
                  Outline
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                >
                  Ghost
                </Button>
              </div>
              <Link href="/button">
                <Button
                  variant="link"
                  className="p-0"
                >
                  View Documentation →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Grid</CardTitle>
              <CardDescription>
                Powerful table component with sorting and filtering
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border border-gray-200 rounded-md p-2 mb-4 text-sm overflow-x-auto bg-white">
                <div className="grid grid-cols-3 gap-2 font-medium mb-1 min-w-[200px] text-gray-900">
                  <span>Name</span>
                  <span>Email</span>
                  <span>Role</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-gray-500 text-xs min-w-[200px]">
                  <span>John Doe</span>
                  <span>john@...</span>
                  <span>Admin</span>
                </div>
              </div>
              <Link href="/datagrid">
                <Button
                  variant="link"
                  className="p-0"
                >
                  View Documentation →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Date Picker</CardTitle>
              <CardDescription>
                Elegant date selection component
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border border-gray-200 rounded-md p-2 mb-4 text-sm bg-white text-gray-600">
                📅 Select a date...
              </div>
              <Link href="/datepicker">
                <Button
                  variant="link"
                  className="p-0"
                >
                  View Documentation →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Customization */}
      <section
        id="customization"
        className="scroll-mt-32 space-y-4"
      >
        <h2 className="text-xl sm:text-2xl font-semibold border-b border-gray-200 pb-2 text-gray-900">
          Customization
        </h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            All components are built with Tailwind CSS and can be easily
            customized using utility classes or by modifying the default theme.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Theme Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm border">
                  <code className="text-gray-800">{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
