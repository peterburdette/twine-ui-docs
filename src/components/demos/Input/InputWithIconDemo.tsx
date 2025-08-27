'use client';

import * as React from 'react';
import { Input } from 'twine-ui';
import {
  Search,
  X,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';

export const InputWithIconDemo: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const isValidEmail = email.includes('@');

  const [pwdVisible, setPwdVisible] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  return (
    <div className="grid gap-3 sm:max-w-xl">
      {/* 1) Start icon */}
      <Input
        label="Search"
        placeholder="Find something…"
        startIcon={<Search className="h-5 w-5" />}
      />

      {/* 2) End icon */}
      <Input
        label="Filter"
        placeholder="With trailing icon"
        endIcon={<X className="h-5 w-5" />}
      />

      {/* 3) Start + end icons */}
      <Input
        label="Email (decorative)"
        placeholder="you@example.com"
        startIcon={<Mail className="h-5 w-5" />}
        endIcon={<CheckCircle2 className="h-5 w-5 text-emerald-500" />}
      />

      {/* 4) Dynamic validation icon */}
      <Input
        label="Email (dynamic)"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        endIcon={
          email.length === 0 ? null : isValidEmail ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          ) : (
            <AlertCircle className="h-5 w-5 text-amber-500" />
          )
        }
        error={email && !isValidEmail ? 'Enter a valid email.' : undefined}
      />

      {/* 5) Password with Show/Hide inline button */}
      <Input
        label="Password"
        type={pwdVisible ? 'text' : 'password'}
        placeholder="••••••••"
        endIcon={<Lock className="h-5 w-5" />}
        inlineButton={{
          label: pwdVisible ? 'Hide' : 'Show',
          icon: pwdVisible ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          ),
          onClick: () => setPwdVisible((v) => !v),
          variant: 'ghost',
        }}
      />

      {/* 6) Loading state as an icon */}
      <Input
        label="Lookup"
        placeholder="Focus to simulate lookup…"
        onFocus={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 1200);
        }}
        endIcon={
          loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Search className="h-5 w-5" />
          )
        }
      />
    </div>
  );
};
