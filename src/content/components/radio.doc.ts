import type { DocPage } from '../schema';
import { RadioDemo } from '@/components/demos/Radio';

export const doc: DocPage = {
  slug: 'radio',
  title: 'Radio',
  description: 'Accessible radio inputs with grouping and labels.',
  category: 'Forms',
  toc: true,
  previews: [
    { id: 'basic', title: 'Basic', component: RadioDemo },
    // { id: 'controlled', title: 'Controlled Group', component: GroupControlled },
  ],
};
