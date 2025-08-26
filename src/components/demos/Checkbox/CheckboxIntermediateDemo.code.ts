export const CheckboxIntermediateDemoCode = `import * as React from 'react';
import { Checkbox, FormControlLabel } from 'twine-ui';

export const CheckboxIntermediateDemo: React.FC = () => {
  const [checkedItems, setCheckedItems] = React.useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const allChecked = checkedItems.every(Boolean);
  const noneChecked = checkedItems.every((item) => !item);
  const parentChecked = allChecked;
  const parentIndeterminate = !allChecked && !noneChecked;

  const toggleParent = () => {
    const newValue = !allChecked;
    setCheckedItems([newValue, newValue, newValue]);
  };

  const toggleChild = (index: number) => {
    const newItems = [...checkedItems];
    newItems[index] = !newItems[index];
    setCheckedItems(newItems);
  };

  return (
    <div className="flex flex-col gap-3">
      <FormControlLabel label="Select All">
        <Checkbox
          checked={parentChecked}
          indeterminate={parentIndeterminate}
          onChange={toggleParent}
        />
      </FormControlLabel>

      <FormControlLabel label="Option A">
        <Checkbox
          checked={checkedItems[0]}
          onChange={() => toggleChild(0)}
        />
      </FormControlLabel>

      <FormControlLabel label="Option B">
        <Checkbox
          checked={checkedItems[1]}
          onChange={() => toggleChild(1)}
        />
      </FormControlLabel>

      <FormControlLabel label="Option C">
        <Checkbox
          checked={checkedItems[2]}
          onChange={() => toggleChild(2)}
        />
      </FormControlLabel>
    </div>
  );
};
`;
