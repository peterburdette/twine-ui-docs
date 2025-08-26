import { notFound } from 'next/navigation';
import DocsLayout from '@/components/docs/docs-layout';
import ComponentPreview from '@/components/docs/component-preview';
import { getDoc, registry, type DocSlug } from '@/content';

type PageProps = { params: { component: string } };

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
        {doc.sections?.map((section) => (
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

            {section.content}

            {section.previews?.map((p) => (
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
          </section>
        ))}
      </DocsLayout>
    );
  } catch {
    return notFound();
  }
};

export default Page;

// Prebuild static routes for all registered docs
export const dynamicParams = false;
export async function generateStaticParams() {
  return (Object.keys(registry) as DocSlug[]).map((slug) => ({
    component: slug,
  }));
}

// Per-page <head> metadata from the doc
export async function generateMetadata({ params }: PageProps) {
  const slug = params.component as DocSlug;
  try {
    const doc = await getDoc(slug);
    return {
      title: `Twine UI - ${doc.title}`,
      description: doc.description,
    };
  } catch {
    return { title: 'Not found' };
  }
}
