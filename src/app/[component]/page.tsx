import { notFound } from 'next/navigation';
import * as React from 'react';
import DocsLayout from '@/components/docs/docs-layout';
import ComponentPreview from '@/components/docs/component-preview';
import { getDoc, registry, type DocSlug } from '@/content';
import type { DocSection, DocPreview, DocPreviewGroup } from '@/content/schema';
import { ApiContent } from '@/components/docs/apiContent';
import A11yContent from '@/components/docs/a11yContent';
import Markdown from 'react-syntax-highlighter/dist/esm/languages/hljs/markdown';

type PageParams = { component: string };
type PageProps = { params: Promise<PageParams> };

/** Type guard for grouped preview blocks */
function isPreviewGroup(p: DocPreview | DocPreviewGroup): p is DocPreviewGroup {
  return p?.kind === 'group' || 'examples' in p;
}

function renderSection(section: DocSection) {
  return (
    <section
      key={section.id}
      className="space-y-6"
    >
      <h2
        id={section.id}
        className="text-2xl font-semibold scroll-mt-32"
      >
        {section.title}
      </h2>

      {section.description ? (
        <p className="text-gray-600">{section.description}</p>
      ) : null}

      {section.kind === 'usage' &&
        section.previews.map((p) =>
          isPreviewGroup(p) ? (
            <div
              key={p.id}
              className="space-y-3"
            >
              {/* Group heading should appear in ToC */}
              <h3
                id={p.id}
                className="text-xl font-semibold scroll-mt-32"
              >
                {p.title}
              </h3>

              {p.description ? (
                <p className="text-gray-600">{p.description}</p>
              ) : null}

              {/* Stack grouped examples; example titles hidden */}
              <div className="space-y-6">
                {p.examples.map((ex) => (
                  <ComponentPreview
                    key={ex.id}
                    id={ex.id}
                    title={ex.title}
                    description={ex.description}
                    code={ex.code}
                    showTitle={false}
                  >
                    <ex.component />
                  </ComponentPreview>
                ))}
              </div>
            </div>
          ) : (
            <ComponentPreview
              key={p.id}
              id={p.id}
              title={p.title}
              description={p.description}
              code={p.code}
            >
              <p.component />
            </ComponentPreview>
          )
        )}

      {section.kind === 'api' && <ApiContent api={section.api} />}

      {section.kind === 'a11y' && <A11yContent a11y={section.a11y} />}

      {section.kind === 'markdown' && <Markdown source={section.markdown} />}
    </section>
  );
}

const Page = async ({ params }: PageProps) => {
  const { component } = await params;
  const slug = component as DocSlug;

  try {
    const doc = await getDoc(slug);

    return (
      <DocsLayout
        title={doc.title}
        description={doc.description}
        tocTitle={doc.tocTitle}
      >
        {doc.sections.map(renderSection)}
      </DocsLayout>
    );
  } catch {
    return notFound();
  }
};

export default Page;

export const dynamicParams = false;

export async function generateStaticParams() {
  return (Object.keys(registry) as DocSlug[]).map((component) => ({
    component,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}) {
  try {
    const { component } = await params;
    const doc = await getDoc(component as DocSlug);
    return { title: `Twine UI - ${doc.title}`, description: doc.description };
  } catch {
    return { title: 'Not found' };
  }
}
