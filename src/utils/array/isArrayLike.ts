export const isArrayLike = <T>(value: unknown): value is ArrayLike<T> => {
  return 'length' in Object(value);
};
