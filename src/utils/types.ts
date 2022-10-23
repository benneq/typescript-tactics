export type Callback<TArgs extends readonly unknown[] = []> = (
  ...args: TArgs
) => void;

export type Predicate<T> = (value: T) => boolean;

export type Provider<T, TArgs extends unknown[] = []> = (...args: TArgs) => T;

export type ValueOrProvider<T, TArgs extends unknown[] = []> =
  | T
  | Provider<T, TArgs>;

export const valueOrProviderResult = <T, TArgs extends unknown[] = []>(
  value: ValueOrProvider<T, TArgs>,
  ...args: TArgs
): T => {
  if (isFunction(value)) {
    return value(...args);
  } else {
    return value;
  }
};

export const isFunction = <T, TArgs extends unknown[] = []>(
  value: unknown
): value is (...args: TArgs) => T => {
  return typeof value === 'function';
};

export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};
