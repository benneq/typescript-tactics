import { KeyboardEvent, ReactNode } from 'react';
import { isString } from './string';
import { Provider } from './types';

export type ReactKeyboardEventHTMLInputElement =
  KeyboardEvent<HTMLInputElement> & {
    target: HTMLInputElement;
  };

export const join = (
  nodes: ReactNode[],
  separator: string | Provider<ReactNode, [number]>
): [ReactNode, ReactNode][] => {
  return nodes.map((node, i) => [
    i > 0 && (isString(separator) ? separator : separator(i)),
    node,
  ]);
};

const hasProperties = (
  obj: unknown
): obj is Record<string, unknown> & Array<unknown> => {
  return typeof obj === 'object' && obj !== null;
};

export const shallowEquals = (objA: unknown, objB: unknown): boolean => {
  if (Object.is(objA, objB)) {
    return true;
  }

  if (!hasProperties(objA) || !hasProperties(objB)) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (const currentKey of keysA) {
    if (
      !(currentKey in objB) ||
      !Object.is(objA[currentKey], objB[currentKey])
    ) {
      return false;
    }
  }

  return true;
};
