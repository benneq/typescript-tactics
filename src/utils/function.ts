import { Callback } from './types';

export const isFunction = <T, TArgs extends unknown[] = []>(
  value: unknown
): value is (...args: TArgs) => T => {
  return typeof value === 'function';
};

export type Identity = <T>(value: T) => T;

export const identity: Identity = (value) => {
  return value;
};

export const callIfDefined = <TArgs extends unknown[], T>(
  fn: undefined | ((...args: TArgs) => T),
  ...args: TArgs
): T | undefined => {
  return fn && fn(...args);
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const empty: Callback = () => {};
