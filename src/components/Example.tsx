import type { ReactNode } from 'react';
import Collapse from './layout/Collapse';

type Props = {
  summary: ReactNode;
  children: ReactNode;
};

export default function Example({
  summary = 'Example (click to open)',
  children,
}: Props) {
  return <Collapse title={summary}>{children}</Collapse>;
}
