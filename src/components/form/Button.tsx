import { ButtonHTMLAttributes, ReactNode } from 'react';
import { callIfDefined } from 'utils/func/callIfDefined';
import { Callback } from 'utils/func/_types';

type Props = {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: Callback;
  children: ReactNode;
};

export default function Button({ type, onClick, children }: Props) {
  const handleClick = () => {
    callIfDefined(onClick);
  };

  return (
    <button type={type} className="rounded border p-1" onClick={handleClick}>
      {children}
    </button>
  );
}
