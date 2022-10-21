import { writeText } from 'utils/clipboard';
import { useState } from 'react';
import { useRef } from 'react';
import { ReactNode } from 'react';
import Copy from './icon/Copy';

import styles from './PreCode.module.css';

type Props = {
  children?: ReactNode;
  className?: string;
};

export default function Code({ children, className }: Props) {
  const [show, setShow] = useState(false);
  const content = useRef<HTMLPreElement>(null);

  const handleCopyClick = () => {
    const text = content.current?.textContent;
    if (text) {
      writeText(text);
    }
  };

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <pre className={`${className} ${styles['root']}`} ref={content}>
        {children}
      </pre>

      <div
        className={`absolute top-0 right-0 p-2 transition-opacity ${
          show ? 'opacity-100' : 'opacity-20'
        }`}
      >
        <button onClick={handleCopyClick} className="h-8 w-8">
          <Copy className="text-white" />
        </button>
      </div>
    </div>
  );
}
