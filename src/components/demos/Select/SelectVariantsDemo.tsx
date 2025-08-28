// SelectVariantsDemo.tsx
'use client';

import * as React from 'react';
import { Select } from 'twine-ui';

const options = [
  { value: 'alpha', label: 'Alpha' },
  { value: 'beta', label: 'Beta' },
  { value: 'gamma', label: 'Gamma' },
  { value: 'delta', label: 'Delta' },
  { value: 'epsilon', label: 'Epsilon' },
  { value: 'zeta', label: 'Zeta' },
  { value: 'eta', label: 'Eta' },
  { value: 'theta', label: 'Theta' },
  { value: 'iota', label: 'Iota' },
  { value: 'kappa', label: 'Kappa' },
  { value: 'lambda', label: 'Lambda' },
  { value: 'mu', label: 'Mu' },
  { value: 'nu', label: 'Nu' },
  { value: 'xi', label: 'Xi' },
  { value: 'omicron', label: 'Omicron' },
  { value: 'pi', label: 'Pi' },
  { value: 'rho', label: 'Rho' },
  { value: 'sigma', label: 'Sigma' },
  { value: 'tau', label: 'Tau' },
  { value: 'upsilon', label: 'Upsilon' },
  { value: 'phi', label: 'Phi' },
  { value: 'chi', label: 'Chi' },
  { value: 'psi', label: 'Psi' },
  { value: 'omega', label: 'Omega' },
];

export const SelectVariantsDemo: React.FC = () => {
  // Standard column
  const [vDefault, setVDefault] = React.useState<string | undefined>();
  const [vFilled, setVFilled] = React.useState<string | undefined>();
  const [vOutlined, setVOutlined] = React.useState<string | undefined>();
  const [vGhost, setVGhost] = React.useState<string | undefined>();
  const [vUnderline, setVUnderline] = React.useState<string | undefined>();

  // Focus ring column
  const [ringDefault, setRingDefault] = React.useState<string | undefined>();
  const [ringFilled, setRingFilled] = React.useState<string | undefined>();
  const [ringOutlined, setRingOutlined] = React.useState<string | undefined>();
  const [ringGhost, setRingGhost] = React.useState<string | undefined>();
  const [ringUnderline, setRingUnderline] = React.useState<
    string | undefined
  >();

  // Error states column
  const [errDefault, setErrDefault] = React.useState<string | undefined>();
  const [errFilled, setErrFilled] = React.useState<string | undefined>();
  const [errOutlined, setErrOutlined] = React.useState<string | undefined>();
  const [errGhost, setErrGhost] = React.useState<string | undefined>();
  const [errUnderline, setErrUnderline] = React.useState<string | undefined>();

  return (
    <div className="grid gap-6 md:grid-cols-3 md:gap-8 sm:max-w-5xl">
      {/* Column 1: Standard */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Standard</p>
        <div className="grid gap-3 rounded-md p-3">
          <Select
            label="Default"
            variant="default"
            options={options}
            value={vDefault}
            onChange={setVDefault}
          />
          <Select
            label="Filled"
            variant="filled"
            options={options}
            value={vFilled}
            onChange={setVFilled}
          />
          <Select
            label="Outlined"
            variant="outlined"
            options={options}
            value={vOutlined}
            onChange={setVOutlined}
          />
          <Select
            label="Ghost"
            variant="ghost"
            options={options}
            value={vGhost}
            onChange={setVGhost}
          />
          <Select
            label="Underline"
            variant="underline"
            options={options}
            value={vUnderline}
            onChange={setVUnderline}
          />
        </div>
      </div>

      {/* Column 2: With focus ring */}
      <div className="space-y-2">
        <p className="text-sm font-medium">With focus ring</p>
        <div className="grid gap-3 rounded-md p-3">
          <Select
            label="Default"
            variant="default"
            showFocusRing
            options={options}
            value={ringDefault}
            onChange={setRingDefault}
          />
          <Select
            label="Filled"
            variant="filled"
            showFocusRing
            options={options}
            value={ringFilled}
            onChange={setRingFilled}
          />
          <Select
            label="Outlined"
            variant="outlined"
            showFocusRing
            options={options}
            value={ringOutlined}
            onChange={setRingOutlined}
          />
          <Select
            label="Ghost"
            variant="ghost"
            showFocusRing
            options={options}
            value={ringGhost}
            onChange={setRingGhost}
          />
          <Select
            label="Underline"
            variant="underline"
            showFocusRing
            options={options}
            value={ringUnderline}
            onChange={setRingUnderline}
          />
        </div>
        <p className="text-xs text-muted-foreground">
          Tab to a field to see the focus ring treatment.
        </p>
      </div>

      {/* Column 3: Error states */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Error states</p>
        <div className="grid gap-3 rounded-md p-3">
          <Select
            label="Default (error)"
            variant="default"
            options={options}
            value={errDefault}
            onChange={setErrDefault}
            error="This selection is not allowed."
          />
          <Select
            label="Filled (error)"
            variant="filled"
            options={options}
            value={errFilled}
            onChange={setErrFilled}
            error="Please choose a different option."
          />
          <Select
            label="Outlined (error)"
            variant="outlined"
            options={options}
            value={errOutlined}
            onChange={setErrOutlined}
            error="Something went wrong."
          />
          <Select
            label="Ghost (error)"
            variant="ghost"
            options={options}
            value={errGhost}
            onChange={setErrGhost}
            error="Invalid selection."
          />
          <Select
            label="Underline (error)"
            variant="underline"
            options={options}
            value={errUnderline}
            onChange={setErrUnderline}
            error="Please make a valid choice."
          />
        </div>
        <p className="text-xs text-muted-foreground">
          Error examples show border and message styles driven by the{' '}
          <code>error</code> prop.
        </p>
      </div>
    </div>
  );
};
