import { ButtonDemo } from '../demos/Button';
import { CardDemo } from '../demos/Card';
import { BasicDataGridDemo } from '../demos/DataGrid/BasicDataGridDemo';
import { AdvancedDataGridDemo } from '../demos/DataGrid/AdvancedDataGridDemo';
import { InputDemo } from '../demos/Input';

// Registry of all preview components - removed DialogDemo to prevent import errors
export const previewComponents = {
  ButtonDemo,
  InputDemo,
  BasicDataGridDemo,
  AdvancedDataGridDemo,
  CardDemo,
} as const;

export type PreviewComponentName = keyof typeof previewComponents;
