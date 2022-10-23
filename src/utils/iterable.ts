export const isIterable = <T>(value: unknown): value is Iterable<T> => {
  return typeof (value as Iterable<T>)[Symbol.iterator] === 'function';
};

export const toIterable = <T>(value: T | Iterable<T>): Iterable<T> => {
  return isIterable(value) ? value : [value];
};
