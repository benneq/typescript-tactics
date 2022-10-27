export const callIfDefined = <TArgs extends unknown[], T>(
  fn: undefined | ((...args: TArgs) => T),
  ...args: TArgs
): T | undefined => {
  return fn && fn(...args);
};
