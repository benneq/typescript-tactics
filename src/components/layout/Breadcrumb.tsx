import Chevron from 'components/icon/Chevron';
import { ReactNode } from 'react';
import { join } from 'utils/react';

type Props = {
  children: ReactNode[];
};

const Breadcrumb = ({ children }: Props) => {
  return (
    <ol className="inline">
      {join(children, (index) => (
        <Chevron key={index} className="inline h-6 w-6 -rotate-90" />
      )).map((child, i) => (
        <li className="inline" key={i}>
          {child}
        </li>
      ))}
    </ol>
  );
};

export default Breadcrumb;
