import Chevron from 'components/icon/Chevron';
import { ChangeEvent, useMemo, ReactNode } from 'react';
import { valueOrProviderResult, ValueOrProvider } from 'utils/types';

type Props = {
  title: ValueOrProvider<ReactNode>;
  open?: boolean;
  onToggle?: (open: boolean) => void;
  children: ReactNode;
};

const Collapse = ({ title, open, onToggle, children }: Props) => {
  const theTitle = useMemo(() => valueOrProviderResult(title), [title]);

  const handleToggle = (e: ChangeEvent<HTMLDetailsElement>) => {
    onToggle && onToggle(e.target.open);
  };

  return (
    <details open={open} className="group shadow" onToggle={handleToggle}>
      <summary className="relative cursor-pointer list-none bg-slate-50">
        {theTitle}
        <Chevron className="absolute top-0 right-0 h-6 w-6 rotate-0 transition-all group-open:rotate-180" />
      </summary>
      <div className="opacity-0 transition-opacity duration-700 group-open:opacity-100">
        {children}
      </div>
    </details>
  );
};

export default Collapse;
