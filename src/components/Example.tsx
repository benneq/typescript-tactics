import type { ReactNode } from 'react';
import Collapse from './layout/Collapse';

type Props = {
  summary: ReactNode;
  children: ReactNode;
};

export default function Example({ children }: Props) {
  return (
    <Collapse title={(open) => `Example (click to ${open ? 'close' : 'open'})`}>
      {children}
    </Collapse>
  );
}
