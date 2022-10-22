import { toggle, useSingleSelection } from 'hooks/useSingleSelection';
import { ReactNode } from 'react';
import Collapse from './Collapse';

type Props = {
  open?: number;
  children: Array<{
    title: ReactNode;
    content: ReactNode;
  }>;
};

const Accordion = ({ open, children }: Props) => {
  const [openIndex, setOpenIndex] = useSingleSelection(open, undefined);

  const handleToggle = (i: number) => () => {
    setOpenIndex(toggle(i));
  };

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
