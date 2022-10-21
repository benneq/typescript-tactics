import { ReactNode } from 'react';
import { Callback } from 'utils/types';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  onClick?: Callback;
  children: ReactNode;
};

export default function Button({ type, onClick, children }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick();
  };

  return (
    <button type={type} className="rounded border p-1" onClick={handleClick}>
      {children}
    </button>
  );
}
