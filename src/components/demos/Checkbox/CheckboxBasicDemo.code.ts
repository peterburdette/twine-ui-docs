export const CheckboxBasicDemoCode = `import { Checkbox } from 'twine-ui';

export const CheckboxBasicDemo = () => {
  return (
    <div className="flex items-center gap-4">
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox disabled />
      <Checkbox defaultChecked disabled />
    </div>
  );
};
`;
