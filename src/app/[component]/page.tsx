import { notFound } from 'next/navigation';
import DocsLayout from '@/components/docs/docs-layout';
import ComponentPreview from '@/components/docs/component-preview';
import { getDoc, registry, type DocSlug } from '@/content';
import type { DocSection } from '@/content/schema';
import { ApiContent } from '@/components/docs/apiContent';
import A11yContent from '@/components/docs/a11yContent';
import Markdown from 'react-syntax-highlighter/dist/esm/languages/hljs/markdown';

type PageProps = { params: { component: string } };

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
        <p className="text-muted-foreground">{section.description}</p>
      ) : null}

      {section.kind === 'usage' &&
        section.previews.map((p) => (
          <ComponentPreview
            key={p.id}
            id={p.id}
            title={p.title}
            description={p.description}
            code={p.code}
          >
            <p.component />
          </ComponentPreview>
        ))}

      {section.kind === 'api' && <ApiContent api={section.api} />}

      {section.kind === 'a11y' && <A11yContent a11y={section.a11y} />}

      {section.kind === 'markdown' && <Markdown source={section.markdown} />}
    </section>
  );
}

const Page = async ({ params }: PageProps) => {
  const slug = params.component as DocSlug;
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

export async function generateMetadata({ params }: PageProps) {
  try {
    const doc = await getDoc(params.component as DocSlug);
    return { title: `Twine UI - ${doc.title}`, description: doc.description };
  } catch {
    return { title: 'Not found' };
  }
}
