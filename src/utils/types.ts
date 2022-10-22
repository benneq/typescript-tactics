export type Callback<TArgs extends readonly unknown[] = []> = (
  ...args: TArgs
) => void;

export type ValueOrProvider<T, TArgs extends unknown[] = []> =
  | T
  | ((...args: TArgs) => T);

export const valueOrProviderResult = <T, TArgs extends unknown[] = []>(
  value: ValueOrProvider<T, TArgs>,
  ...args: TArgs
): T => {
  if (value instanceof Function) {
    return value(...args);
  } else {
    return value;
  }
};

export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};
