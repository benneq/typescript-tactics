export type Comparator<T> = (valueA: T, valueB: T) => number;

export const numberNaturalOrder: Comparator<number> = (a, b) => a - b;

export const reverse = <T>(comparator: Comparator<T>): Comparator<T> => {
  return (a: T, b: T) => comparator(a, b) * -1;
};
