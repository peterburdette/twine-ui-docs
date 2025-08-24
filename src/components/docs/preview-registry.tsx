import { ButtonDemo } from '../demos/Button';
import { CardDemo } from '../demos/Card';
import { BasicDataGridDemo } from '../demos/DataGrid/BasicDataGridDemo';
import { AdvancedDataGridDemo } from '../demos/DataGrid/AdvancedDataGridDemo';
import { InputDemo } from '../demos/Input';
import { SelectDemo } from '../demos/Select';
import { CheckboxDemo } from '../demos/Checkbox';
import { RadioDemo } from '../demos/Radio';

// Registry of all preview components
export const previewComponents = {
  ButtonDemo,
  InputDemo,
  SelectDemo,
  CheckboxDemo,
  RadioDemo,
  BasicDataGridDemo,
  AdvancedDataGridDemo,
  CardDemo,
} as const;

export type PreviewComponentName = keyof typeof previewComponents;
