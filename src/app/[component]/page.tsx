import { DocsLayout } from '@/components/docs/docs-layout';
import { ComponentContent } from '@/components/docs/component-content';
import { getComponentData } from '@/lib/docs-content';
import { notFound } from 'next/navigation';

interface ComponentPageProps {
  params: Promise<{
    component: string;
  }>;
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { component } = await params;
  const componentData = getComponentData(component);

  if (!componentData) {
    notFound();
  }

  return (
    <DocsLayout currentPage={component}>
      <ComponentContent data={componentData} />
    </DocsLayout>
  );
}

export async function generateStaticParams() {
  const components = [
    'button',
    'input',
    'card',
    'modal',
    'select',
    'datagrid',
    'datepicker',
    'timepicker',
    'container',
    'grid',
    'flexbox',
  ];

  return components.map((component) => ({
    component: component,
  }));
}
