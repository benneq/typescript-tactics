import { KeyboardEvent, ReactNode } from 'react';
import { isString } from './types';

export type ReactKeyboardEventHTMLInputElement =
  KeyboardEvent<HTMLInputElement> & {
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

  const x = objA;

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (let i = 0; i < keysA.length; i++) {
    const currentKey = keysA[i]!;
    if (
      !(currentKey in objB) ||
      !Object.is(objA[currentKey], objB[currentKey])
    ) {
      return false;
    }
  }

  return true;
};
