import { ReactNode, useCallback } from 'react';
import Collapse from './layout/Collapse';

type Props = {
  summary: ReactNode;
  children: ReactNode;
};

export default function Example({ children }: Props) {
  const title = useCallback((open: boolean) => {
    return `Example (click to ${open ? 'close' : 'open'})`;
  }, []);

  return <Collapse title={title}>{children}</Collapse>;
}
