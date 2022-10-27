export type Predicate<T> = (value: T) => boolean;

export type Falsy = false | 0 | '' | null | undefined;

export const alwaysTrue = () => true;

export const alwaysFalse = () => false;

export const isTruthy = <T>(value: T | Falsy): value is Exclude<T, Falsy> =>
  !!value;

export const isFalsy = (value: unknown): value is Falsy => !value;

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
