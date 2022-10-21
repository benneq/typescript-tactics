import type { ReactNode } from 'react';

type Props = {
  summary: ReactNode;
  children: ReactNode;
};

export default function Example({
  summary = 'Example (click to open)',
  children,
}: Props) {
  return (
    <details className="group">
      <summary className="cursor-pointer list-none">{summary}</summary>
      <div className="opacity-0 transition-opacity duration-300 group-open:opacity-100">
        {children}
      </div>
    </details>
  );
}
