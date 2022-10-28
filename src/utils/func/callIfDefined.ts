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
  <TArgs extends unknown[], T>(fn: Provider<T, TArgs>, ...args: TArgs): T;
  <TArgs extends unknown[], T>(
    fn: undefined | Provider<T, TArgs>,
    ...args: unknown[]
  ): undefined | T;
} = <TArgs extends unknown[], T>(
  fn?: Provider<T, TArgs>,
  ...args: TArgs
): T | undefined => {
  return fn && fn(...args);
};
