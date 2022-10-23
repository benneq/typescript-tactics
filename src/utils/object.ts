export const isNotUndefined = <T>(value: T): value is Exclude<T, undefined> => {
  return value !== undefined;
};

/* eslint-disable @typescript-eslint/ban-types */
export const defaultIfUndefined = <T>(
  value: T | undefined,
  defaultValue: T & {}
): T => {
  return isNotUndefined(value) ? value : defaultValue;
};

export const isNotNull = <T>(value: T): value is Exclude<T, null> => {
  return value !== null;
};

/* eslint-disable @typescript-eslint/ban-types */
export const defaultIfNull = <T>(value: T | null, defaultValue: T & {}): T => {
  return isNotNull(value) ? value : defaultValue;
};
