'use client';

import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export type CodeBlockProps = {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
};

const CodeBlock: React.FC<CodeBlockProps> = React.memo(
  ({ code, language = 'tsx', showLineNumbers = false }) => {
    return (
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: 0,
          background: 'transparent',
          padding: '1rem',
        }}
        showLineNumbers={showLineNumbers}
      >
        {code}
      </SyntaxHighlighter>
    );
  }
);
CodeBlock.displayName = 'CodeBlock';

export default CodeBlock;
