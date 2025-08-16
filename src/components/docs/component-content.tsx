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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Check } from 'lucide-react';
import { ComponentPreview } from '@/components/docs/component-preview';
import type { ComponentData } from '@/lib/docs-content';

interface ComponentContentProps {
  data: ComponentData;
}

export function ComponentContent({ data }: ComponentContentProps) {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="w-full lg:max-w-6xl py-6 space-y-12">
      {/* Header */}
      <section
        id="overview"
        className="scroll-mt-32 space-y-4"
      >
        <div className="flex items-center gap-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {data.title}
          </h1>
          <Badge variant="secondary">{data.version}</Badge>
        </div>
        <p className="text-lg sm:text-xl text-gray-600">{data.description}</p>
      </section>

      {/* Installation */}
      {data.installCommand && (
        <section
          id="installation"
          className="scroll-mt-32 space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-semibold border-b border-gray-200 pb-2 text-gray-900">
            Installation
          </h2>
          <div className="relative">
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm border">
              <code className="text-gray-800">{data.installCommand}</code>
            </pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2"
              onClick={() => copyToClipboard(data.installCommand!, 'install')}
            >
              {copiedCode === 'install' ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </section>
      )}

      {/* Basic Usage */}
      <section
        id="basic-usage"
        className="scroll-mt-32 space-y-4"
      >
        <h2 className="text-xl sm:text-2xl font-semibold border-b border-gray-200 pb-2 text-gray-900">
          Basic Usage
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>
              Default {data.title.replace(' Component', '')}
            </CardTitle>
            <CardDescription>The most basic implementation</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              defaultValue="preview"
              className="w-full"
            >
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent
                value="preview"
                className="mt-4"
              >
                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                  <ComponentPreview
                    componentName={data.examples.basic.previewComponent}
                  />
                </div>
              </TabsContent>
              <TabsContent
                value="code"
                className="mt-4"
              >
                <div className="relative">
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm border">
                    <code className="text-gray-800">
                      {data.examples.basic.code}
                    </code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      copyToClipboard(data.examples.basic.code, 'basic')
                    }
                  >
                    {copiedCode === 'basic' ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* Advanced Usage */}
      {data.examples.advanced && (
        <section
          id="advanced-usage"
          className="scroll-mt-32 space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-semibold border-b border-gray-200 pb-2 text-gray-900">
            Advanced Usage
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>
                Advanced {data.title.replace(' Component', '')}
              </CardTitle>
              <CardDescription>
                The most advanced implementation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs
                defaultValue="preview"
                className="w-full"
              >
                <TabsList>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="preview"
                  className="mt-4"
                >
                  <div className="border border-gray-200 rounded-lg p-6 bg-white">
                    <ComponentPreview
                      componentName={data.examples.advanced.previewComponent}
                    />
                  </div>
                </TabsContent>
                <TabsContent
                  value="code"
                  className="mt-4"
                >
                  <div className="relative">
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm border">
                      <code className="text-gray-800">
                        {data.examples.advanced.code}
                      </code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() =>
                        data.examples.advanced &&
                        copyToClipboard(data.examples.advanced.code, 'advanced')
                      }
                    >
                      {copiedCode === 'advanced' ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>
      )}

      {/* API Reference */}
      {data.apiReference && (
        <section
          id="api-reference"
          className="scroll-mt-32 space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-semibold border-b border-gray-200 pb-2 text-gray-900">
            API Reference
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Component Props</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-2 font-semibold text-gray-900">
                        Prop
                      </th>
                      <th className="text-left p-2 font-semibold text-gray-900">
                        Type
                      </th>
                      <th className="text-left p-2 font-semibold text-gray-900">
                        Default
                      </th>
                      <th className="text-left p-2 font-semibold text-gray-900">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.apiReference.props.map((prop) => (
                      <tr
                        key={prop.name}
                        className="border-b border-gray-100"
                      >
                        <td className="p-2 font-mono text-sm text-gray-800">
                          {prop.name}
                        </td>
                        <td className="p-2 text-sm text-gray-600">
                          {prop.type}
                        </td>
                        <td className="p-2 text-sm text-gray-600">
                          {prop.default}
                        </td>
                        <td className="p-2 text-sm text-gray-600">
                          {prop.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Accessibility */}
      <section
        id="accessibility"
        className="scroll-mt-32 space-y-4"
      >
        <h2 className="text-xl sm:text-2xl font-semibold border-b border-gray-200 pb-2 text-gray-900">
          Accessibility
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Component follows WAI-ARIA guidelines</li>
              <li>• Keyboard navigation is fully supported</li>
              <li>• Screen reader compatible with proper ARIA labels</li>
              <li>• Focus management is handled appropriately</li>
              <li>• Color contrast meets WCAG AA standards</li>
              <li>• Focus management is handled appropriately</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
