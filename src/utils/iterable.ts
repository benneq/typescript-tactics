export const isIterable = <T>(value: unknown): value is Iterable<T> => {
  return Symbol.iterator in (value as Iterable<unknown>);
};

export const toIterable = <T>(value: T | Iterable<T>): Iterable<T> => {
  return isIterable(value) ? value : [value];
};
