export const InputAdornmentsDemoCode = `'use client';

import * as React from 'react';
import { Input } from 'twine-ui';
import { Search, Globe, Phone as PhoneIcon, Filter } from 'lucide-react';

export const InputAdornmentsDemo: React.FC = () => {
  const [scope, setScope] = React.useState<string | undefined>('all');
  const [status, setStatus] = React.useState<string | undefined>('all');

  const [domain, setDomain] = React.useState<string | undefined>('com');
  const domainOptions = [
    { value: 'com', label: '.com' },
    { value: 'org', label: '.org' },
    { value: 'net', label: '.net' },
    { value: 'io', label: '.io' },
    { value: 'solutions', label: '.solutions' },
  ];

  const scopeOptions = [
    { value: 'all', label: 'All' },
    { value: 'name', label: 'Name' },
    { value: 'org', label: 'Organization' },
    { value: 'long', label: 'Very Long Field Label Example' },
  ];

  const statusOptions = [
    { value: 'all', label: 'All' },
    { value: 'open', label: 'Open' },
    { value: 'pending', label: 'Pending' },
    { value: 'closed', label: 'Closed (Archived)' },
  ];

  const [currency, setCurrency] = React.useState<string>('USD');
  const currencyOptions = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'JPY', label: 'JPY' },
  ];
  const currencySymbol =
    currency === 'EUR' ? '€' : currency === 'JPY' ? '¥' : '$';

  const [country, setCountry] = React.useState<string>('us');
  const countryOptions = [
    { value: 'us', label: '+1 (US)' },
    { value: 'uk', label: '+44 (UK)' },
    { value: 'de', label: '+49 (DE)' },
    { value: 'in', label: '+91 (IN) Long Label' },
  ];

  const smartScopeOptionsGeneral = [
    { value: 'title', label: 'Title' },
    { value: 'description', label: 'Description' },
    { value: 'tag', label: 'Tag' },
    { value: 'assignee', label: 'Assignee' },
    { value: 'id', label: 'ID' },
    { value: 'url', label: 'URL' },
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone' },
    { value: 'priority', label: 'Priority' },
    { value: 'status', label: 'Status' },
    { value: 'created', label: 'Created Date' },
    { value: 'updated', label: 'Updated Date' },
  ];

  const [smartScope, setSmartScope] = React.useState<string | undefined>(
    'title'
  );
  const smartOptions = smartScopeOptionsGeneral;

  return (
    <div className="space-y-8">
      {/* 1) Start/End adornments (kept tiny to avoid overlap) */}
      <section className="space-y-2">
        <div className="text-xs text-gray-500">Adornments</div>
        <div className="grid gap-3 md:grid-cols-2">
          <Input
            label="Price (USD)"
            placeholder="0"
            type="number"
            startAdornment={<span className="text-gray-700">$</span>}
            endAdornment={<span className="text-gray-700">.00</span>}
          />
          <Input
            label="Discount"
            placeholder="e.g., 15"
            type="number"
            // short token so it fits the reserved inline-label box
            inlineLabel={{ text: '%', position: 'right' }}
          />
        </div>
      </section>

      {/* 2) Inline add-on (left) + select (right) */}
      <section className="space-y-2">
        <div className="text-xs text-gray-500">Inline add-on + select</div>
        <Input
          label="Website"
          placeholder="your-domain"
          startIcon={<Globe className="h-5 w-5" />}
          inlineAddOn={{ content: 'https://', position: 'left' }}
          inlineSelect={{
            options: domainOptions,
            value: domain,
            onChange: setDomain,
            position: 'right',
            width: 100,
          }}
          fullWidth
        />
      </section>

      {/* 3) Inline select (left) + inline button (default/solid) */}
      <section className="space-y-2">
        <div className="text-xs text-gray-500">
          Inline select (left) + button
        </div>
        <Input
          label="Quick Search"
          placeholder="Type to search…"
          startIcon={<Search className="h-5 w-5" />}
          inlineSelect={{
            options: scopeOptions,
            value: scope,
            onChange: setScope,
            placeholder: 'Field',
            position: 'left',
            width: 90,
          }}
          inlineButton={{
            label: 'Go',
            onClick: () => {},
          }}
          fullWidth
        />
      </section>

      {/* 4) Inline select (left) + outlined inline button (SMART SEARCH) */}
      <section className="space-y-2">
        <div className="text-xs text-gray-500">
          Inline select (left) + outlined button (Smart Search)
        </div>
        <Input
          label="Smart Search"
          placeholder="Find items…"
          inlineSelect={{
            options: smartOptions,
            value: smartScope,
            onChange: setSmartScope,
            placeholder: 'Field',
            position: 'left',
            width: 110,
          }}
          inlineButton={{
            label: 'Filter',
            onClick: () => {},
            variant: 'outlined',
          }}
          fullWidth
        />
      </section>

      {/* 5) Inline select (right) */}
      <section className="space-y-2">
        <div className="text-xs text-gray-500">Inline select (right)</div>
        <Input
          label="Filter by status"
          placeholder="Start typing…"
          startIcon={<Filter className="h-5 w-5" />}
          inlineSelect={{
            options: statusOptions,
            value: status,
            onChange: setStatus,
            placeholder: 'Status',
            position: 'right',
            width: 100,
          }}
          fullWidth
        />
      </section>

      {/* Advanced 1: Currency + price */}
      <section className="space-y-2">
        <div className="text-xs text-gray-500">Advanced: Currency & price</div>
        <Input
          label="Amount"
          placeholder="0"
          type="number"
          startAdornment={
            <span className="text-gray-700">{currencySymbol}</span>
          }
          endAdornment={<span className="text-gray-700">.00</span>}
          inlineSelect={{
            options: currencyOptions,
            value: currency,
            onChange: setCurrency,
            position: 'left',
            width: 84,
          }}
          fullWidth
        />
      </section>

      {/* Advanced 2: Phone with country code */}
      <section className="space-y-2">
        <div className="text-xs text-gray-500">
          Advanced: Phone with country code
        </div>
        <Input
          label="Phone Number"
          placeholder="555 123 4567"
          startIcon={<PhoneIcon className="h-5 w-5" />}
          inlineSelect={{
            options: countryOptions,
            value: country,
            onChange: setCountry,
            position: 'left',
            width: 100,
          }}
          fullWidth
        />
      </section>
    </div>
  );
};

export default InputAdornmentsDemo;
`;
