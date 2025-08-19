export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

export interface ComponentData {
  title: string;
  description: string;
  version: string;
  tableOfContents: TableOfContentsItem[];
  installCommand?: string;
  examples: {
    basic: {
      code: string;
      previewComponent?: string; // Just store the component name as string
    };
    advanced?: {
      code: string;
      previewComponent?: string;
    };
    variants?: {
      code: string;
      previewComponent?: string;
    }[];
  };
  apiReference?: {
    props: {
      name: string;
      type: string;
      default: string;
      description: string;
    }[];
  };
}

const buttonData: ComponentData = {
  title: 'Button Component',
  description:
    'A versatile button component with multiple variants, sizes, and states built with Tailwind CSS.',
  version: 'v1.0.0',
  tableOfContents: [
    { id: 'overview', title: 'Overview', level: 1 },
    { id: 'installation', title: 'Installation', level: 1 },
    { id: 'basic-usage', title: 'Basic Usage', level: 1 },
    { id: 'variants', title: 'Variants', level: 2 },
    { id: 'sizes', title: 'Sizes', level: 2 },
    { id: 'colors', title: 'Colors', level: 2 },
    { id: 'api-reference', title: 'API Reference', level: 1 },
    { id: 'props', title: 'Props', level: 2 },
    { id: 'examples', title: 'Examples', level: 1 },
    { id: 'accessibility', title: 'Accessibility', level: 1 },
  ],
  installCommand: 'npm install @your-org/twine-ui',
  examples: {
    basic: {
      code: `<button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
  Click me
</button>`,
      previewComponent: 'ButtonDemo',
    },
  },
  apiReference: {
    props: [
      {
        name: 'variant',
        type: 'string',
        default: '"default"',
        description: 'The visual style variant',
      },
      {
        name: 'size',
        type: 'string',
        default: '"default"',
        description: 'The size of the button',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the button is disabled',
      },
    ],
  },
};

const inputData: ComponentData = {
  title: 'Input Component',
  description:
    'A flexible input component with validation states and various types built with Tailwind CSS.',
  version: 'v1.0.0',
  tableOfContents: [
    { id: 'overview', title: 'Overview', level: 1 },
    { id: 'installation', title: 'Installation', level: 1 },
    { id: 'basic-usage', title: 'Basic Usage', level: 1 },
    { id: 'types', title: 'Input Types', level: 2 },
    { id: 'validation', title: 'Validation States', level: 2 },
    { id: 'api-reference', title: 'API Reference', level: 1 },
    { id: 'accessibility', title: 'Accessibility', level: 1 },
  ],
  installCommand: 'npm install @your-org/twine-ui',
  examples: {
    basic: {
      code: `
      <Input
        type="text"
        placeholder="Type something..."
      />
      `,
      previewComponent: 'InputDemo',
    },
  },

  apiReference: {
    props: [
      {
        name: 'type',
        type: 'string',
        default: '"text"',
        description: 'The input type (text, email, password, etc.)',
      },
      {
        name: 'placeholder',
        type: 'string',
        default: '""',
        description: 'Placeholder text for the input',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the input is disabled',
      },
    ],
  },
};

const selectData: ComponentData = {
  title: 'Select Component',
  description:
    'A flexible select component with validation states and various types built with Tailwind CSS.',
  version: 'v1.0.0',
  tableOfContents: [
    { id: 'overview', title: 'Overview', level: 1 },
    { id: 'installation', title: 'Installation', level: 1 },
    { id: 'basic-usage', title: 'Basic Usage', level: 1 },
    { id: 'types', title: 'Input Types', level: 2 },
    { id: 'validation', title: 'Validation States', level: 2 },
    { id: 'api-reference', title: 'API Reference', level: 1 },
    { id: 'accessibility', title: 'Accessibility', level: 1 },
  ],
  installCommand: 'npm install @your-org/twine-ui',
  examples: {
    basic: {
      code: `
      <Select
        label="Countries"
        options={[
          { value: 'Algeria', label: 'Algeria' },
          { value: 'England', label: 'England' },
          { value: 'United States', label: 'United States' },
        ]}
      />
      `,
      previewComponent: 'SelectDemo',
    },
  },
};

const checkboxData: ComponentData = {
  title: 'Checkbox Component',
  description:
    'A flexible checkbox component with validation states and various types built with Tailwind CSS.',
  version: 'v1.0.0',
  tableOfContents: [
    { id: 'overview', title: 'Overview', level: 1 },
    { id: 'installation', title: 'Installation', level: 1 },
    { id: 'basic-usage', title: 'Basic Usage', level: 1 },
    { id: 'types', title: 'Input Types', level: 2 },
    { id: 'validation', title: 'Validation States', level: 2 },
    { id: 'api-reference', title: 'API Reference', level: 1 },
    { id: 'accessibility', title: 'Accessibility', level: 1 },
  ],
  installCommand: 'npm install @your-org/twine-ui',
  examples: {
    basic: {
      code: `
      <Checkbox />
      `,
      previewComponent: 'CheckboxDemo',
    },
  },
};

const radioData: ComponentData = {
  title: 'Radio Component',
  description:
    'A flexible radio component with validation states and various types built with Tailwind CSS.',
  version: 'v1.0.0',
  tableOfContents: [
    { id: 'overview', title: 'Overview', level: 1 },
    { id: 'installation', title: 'Installation', level: 1 },
    { id: 'basic-usage', title: 'Basic Usage', level: 1 },
    { id: 'types', title: 'Input Types', level: 2 },
    { id: 'validation', title: 'Validation States', level: 2 },
    { id: 'api-reference', title: 'API Reference', level: 1 },
    { id: 'accessibility', title: 'Accessibility', level: 1 },
  ],
  installCommand: 'npm install @your-org/twine-ui',
  examples: {
    basic: {
      code: `
      <Radio />
      `,
      previewComponent: 'RadioDemo',
    },
  },
};

const datagridData: ComponentData = {
  title: 'Data Grid Component',
  description:
    'A powerful data grid component with sorting, filtering, and pagination built with Tailwind CSS.',
  version: 'v1.0.0',
  tableOfContents: [
    { id: 'overview', title: 'Overview', level: 1 },
    { id: 'installation', title: 'Installation', level: 1 },
    { id: 'basic-usage', title: 'Basic Usage', level: 1 },
    { id: 'advanced-usage', title: 'Advanced Usage', level: 1 },
    { id: 'columns', title: 'Column Configuration', level: 2 },
    { id: 'sorting', title: 'Sorting', level: 2 },
    { id: 'filtering', title: 'Filtering', level: 2 },
    { id: 'pagination', title: 'Pagination', level: 2 },
    { id: 'api-reference', title: 'API Reference', level: 1 },
    { id: 'accessibility', title: 'Accessibility', level: 1 },
  ],
  installCommand: 'npm install @your-org/twine-ui',
  examples: {
    basic: {
      code: `
        <DataGrid
          rows={data}
          columns={columns}
        />
      `,
      previewComponent: 'BasicDataGridDemo',
    },
    advanced: {
      code: `
      <DataGrid
        enableColumnReorder
        rows={data}
        columns={columns}
      />
      `,
      previewComponent: 'AdvancedDataGridDemo',
    },
  },
};

const componentDataMap: Record<string, ComponentData> = {
  button: buttonData,
  input: inputData,
  checkbox: checkboxData,
  select: selectData,
  radio: radioData,
  datagrid: datagridData,
  card: {
    title: 'Card Component',
    description:
      'A flexible card component for displaying content with optional headers and footers.',
    version: 'v1.0.0',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 1 },
      { id: 'installation', title: 'Installation', level: 1 },
      { id: 'basic-usage', title: 'Basic Usage', level: 1 },
      { id: 'api-reference', title: 'API Reference', level: 1 },
    ],
    examples: {
      basic: {
        code: `<div className="bg-white rounded-lg shadow-md p-6 border">
  <h3 className="text-lg font-semibold mb-2">Card Title</h3>
  <p className="text-gray-600">This is a sample card component with some content.</p>
</div>`,
        previewComponent: 'CardDemo',
      },
    },
  },
};

export function getComponentData(component: string): ComponentData | null {
  return componentDataMap[component] || null;
}

export function getAllComponents(): string[] {
  return Object.keys(componentDataMap);
}
