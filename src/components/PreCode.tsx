import type { ReactNode } from 'react';

import styles from './PreCode.module.css';

type Props = {
  children?: ReactNode;
  className?: string;
};

export default function Code({ children, className }: Props) {
  return <pre className={className + ' ' + styles.root}>{children}</pre>;
}
