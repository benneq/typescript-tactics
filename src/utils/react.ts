import { KeyboardEvent, ReactNode } from 'react';
import {
  ValueOrProvider,
  valueOrProviderResult,
} from './object/valueOrProvider';

export type ReactKeyboardEventHTMLInputElement =
  KeyboardEvent<HTMLInputElement> & {
    target: HTMLInputElement;
  };

export const join = (
  nodes: ReactNode[],
  separator: ValueOrProvider<ReactNode, [number]>
): [ReactNode, ReactNode][] => {
  return nodes.map((node, i) => [
    i > 0 && valueOrProviderResult(separator, i),
    node,
  ]);
};
