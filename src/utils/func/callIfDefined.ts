import { empty } from './empty';
import { Provider } from './_types';

/**
 * Calls the provided Function with the given arguments if the function is defined
 *
 * @example
 * callIfDefined(undefined) => undefined
 * callIfDefined(y => x + 1, 2) => 3
 *
 * @param fn
 * @param args
 * @returns the result of the provided Function or undefined
 */
export const callIfDefined: {
  (fn: undefined, ...args: unknown[]): undefined;
  <TArgs extends unknown[], T>(fn: Provider<T, TArgs>, ...args: TArgs): T;
} = <TArgs extends unknown[], T>(
  fn: Provider<T | void, TArgs> = empty,
  ...args: TArgs
): T | void => {
  return fn(...args);
};
