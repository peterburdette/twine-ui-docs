import {
  Package,
  Palette,
  Layout,
  MousePointer,
  Type,
  Grid,
  Calendar,
  Clock,
  Table,
} from 'lucide-react';

export interface NavigationItem {
  title: string;
  href: string;
  icon: React.ElementType;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export const navigationData: NavigationSection[] = [
  {
    title: 'Getting Started',
    items: [{ title: 'Introduction', href: '/', icon: Package }],
  },
  {
    title: 'Layout Components',
    items: [
      { title: 'Container', href: '/container', icon: Layout },
      { title: 'Grid System', href: '/grid', icon: Grid },
      { title: 'Flexbox Utilities', href: '/flexbox', icon: Layout },
    ],
  },
  {
    title: 'Form Components',
    items: [
      { title: 'Button', href: '/button', icon: MousePointer },
      { title: 'Input', href: '/input', icon: Type },
      { title: 'Select', href: '/select', icon: MousePointer },
      { title: 'Date Picker', href: '/datepicker', icon: Calendar },
      { title: 'Time Picker', href: '/timepicker', icon: Clock },
    ],
  },
  {
    title: 'Data Components',
    items: [
      { title: 'Data Grid', href: '/datagrid', icon: Table },
      { title: 'Card', href: '/card', icon: Layout },
      { title: 'Modal', href: '/modal', icon: Layout },
    ],
  },
  {
    title: 'Design Tokens',
    items: [
      { title: 'Colors', href: '/#colors', icon: Palette },
      { title: 'Typography', href: '/#typography', icon: Type },
      { title: 'Spacing', href: '/#spacing', icon: Layout },
      { title: 'Shadows', href: '/#shadows', icon: Palette },
    ],
  },
];
