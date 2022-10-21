import { ReactNode } from 'react';
import { isString } from './types';

export type ReactKeyboardEventHTMLInputElement =
  React.KeyboardEvent<HTMLInputElement> & {
    target: HTMLInputElement;
  };

export const join = (
  nodes: ReactNode[],
  separator: string | ((index: number) => ReactNode)
): ReactNode[][] => {
  return nodes.map((node, i) => [
    i > 0 && (isString(separator) ? separator : separator(i)),
    node,
  ]);
};
