import Chevron from 'components/icon/Chevron';
import { ReactNode } from 'react';

type Props = {
  title: ReactNode;
  children: ReactNode;
};

const Collapse = ({ title, children }: Props) => {
  return (
    <details open className="group shadow">
      <summary className="relative cursor-pointer list-none bg-slate-50">
        {title}
        <Chevron className="absolute top-0 right-0 h-6 w-6 rotate-0 transition-all group-open:rotate-180" />
      </summary>
      <div className="opacity-0 transition-opacity duration-700 group-open:opacity-100">
        {children}
      </div>
    </details>
  );
};

export default Collapse;
