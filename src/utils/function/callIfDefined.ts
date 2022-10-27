/**
 * Calls the provided Function with the given arguments if the function is defined
 *
 * @param fn
 * @param args
 * @returns the result of the provided Function or undefined
 */
export const callIfDefined = <TArgs extends unknown[], T>(
  fn: undefined | ((...args: TArgs) => T),
  ...args: TArgs
): T | undefined => {
  return fn && fn(...args);
};
