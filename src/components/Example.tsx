import { useMemo, useState } from 'react';
import { ReactNode } from 'react';
import Collapse from './layout/Collapse';

type Props = {
  summary: ReactNode;
  children: ReactNode;
};

export default function Example({ children }: Props) {
  const [open, setOpen] = useState(false);

  const title = useMemo(
    () => `Example (click to ${open ? 'close' : 'open'})`,
    [open]
  );

  return (
    <Collapse title={title} onToggle={setOpen}>
      {children}
    </Collapse>
  );
}
