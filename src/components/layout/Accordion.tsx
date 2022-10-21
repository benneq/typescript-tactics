import React, { useState } from 'react';
import { useCallback } from 'react';
import { ReactNode } from 'react';
import { ValueOrProvider } from 'utils/types';
import Collapse from './Collapse';

type Props = {
  open?: number;
  children: Array<{
    title: ValueOrProvider<ReactNode>;
    content: ReactNode;
  }>;
};

const Accordion = ({ open, children }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | undefined>(open);

  const handleToggle = useCallback(
    (i: number) => (value: boolean) => {
      if (value) {
        setOpenIndex(i);
      } else if (openIndex === i) {
        setOpenIndex(undefined);
      }
    },
    []
  );

  const isOpen = (i: number | undefined): boolean => {
    return openIndex === i;
  };

  return (
    <div>
      {children.map((child, i) => (
        <Collapse
          key={i}
          title={child.title}
          open={isOpen(i)}
          onToggle={handleToggle(i)}
        >
          {child.content}
        </Collapse>
      ))}
    </div>
  );
};

export default Accordion;
