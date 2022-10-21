export type Callback<TArgs extends unknown[] = never[]> = (
  ...args: TArgs
) => void;

export type ValueOrProvider<T, TArgs extends unknown[] = never[]> =
  | T
  | ((...args: TArgs) => T);

export const valueOrProviderResult = <T, TArgs extends unknown[] = never[]>(
  value: ValueOrProvider<T, TArgs>,
  ...args: TArgs
): T => {
  if (value instanceof Function) {
    return value(...args);
  } else {
    return value;
  }
};
