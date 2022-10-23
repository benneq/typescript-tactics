export const isFunction = <T, TArgs extends unknown[] = []>(
  value: unknown
): value is (...args: TArgs) => T => {
  return typeof value === 'function';
};

export const identity = <T>(arg: T): T => {
  return arg;
};

export const callIfDefined = <TArgs extends unknown[], T>(
  fn: undefined | ((...args: TArgs) => T),
  ...args: TArgs
): T | undefined => {
  return fn && fn(...args);
};
