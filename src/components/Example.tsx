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
    <details>
      <summary className="list-none">{summary}</summary>
      {children}
    </details>
  );
}
