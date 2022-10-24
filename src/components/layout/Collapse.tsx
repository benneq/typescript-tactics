import Chevron from 'components/icon/Chevron';
import { ChangeEvent, ReactNode } from 'react';
import { callIfDefined } from 'utils/function';
import { Callback } from 'utils/types';

type Props = {
  title: ReactNode;
  open?: boolean;
  onToggle?: Callback<[boolean]>;
  children: ReactNode;
};

const Collapse = ({ title, open, onToggle, children }: Props) => {
  const handleToggle = (e: ChangeEvent<HTMLDetailsElement>) => {
    callIfDefined(onToggle, e.target.open);
  };

  return (
    <details open={open} className="group shadow" onToggle={handleToggle}>
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
