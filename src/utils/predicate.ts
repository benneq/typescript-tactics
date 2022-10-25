export type Predicate<T> = (value: T) => boolean;

export const alwaysTrue = () => true;

export const alwaysFalse = () => false;

export const not = <T>(predicate: Predicate<T>): Predicate<T> => {
  return (value: T) => !predicate(value);
};

export const and =
  <T>(...predicates: Predicate<T>[]): Predicate<T> =>
  (value) => {
    return predicates.every((predicate) => predicate(value));
  };

export const or =
  <T>(...predicates: Predicate<T>[]): Predicate<T> =>
  (value) => {
    return predicates.some((predicate) => predicate(value));
  };
