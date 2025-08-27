export const RadioBasicDemoCode = `import * as React from 'react';
import { Radio } from 'twine-ui';

export const RadioBasicDemo = () => {
  const group = 'notifications-basic';
  return (
    <fieldset className="grid gap-2 rounded-md border p-3 sm:max-w-md">
      <legend className="text-sm font-medium">Notifications</legend>

      <div className="flex items-center gap-2">
        <Radio id={\`\${group}-all\`} name={group} value="all" defaultChecked />
        <label htmlFor={\`\${group}-all\`} className="cursor-pointer">All activity</label>
      </div>

      <div className="flex items-center gap-2">
        <Radio id={\`\${group}-mentions\`} name={group} value="mentions" />
        <label htmlFor={\`\${group}-mentions\`} className="cursor-pointer">Mentions only</label>
      </div>

      <div className="flex items-center gap-2">
        <Radio id={\`\${group}-none\`} name={group} value="none" />
        <label htmlFor={\`\${group}-none\`} className="cursor-pointer">None</label>
      </div>

      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
        <Radio id={\`\${group}-disabled\`} name={\`\${group}-disabled\`} disabled />
        <label htmlFor={\`\${group}-disabled\`} className="cursor-not-allowed">Disabled example</label>
      </div>
    </fieldset>
  );
};
`;
