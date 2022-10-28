import { Comparator } from './_types';

export const booleanNaturalOrder: Comparator<boolean> = (a, b) => {
  return a === b ? 0 : a ? 1 : -1;
};
