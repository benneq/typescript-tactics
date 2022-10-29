import { Predicate } from '../predicate/_types';
import { Range } from './_types';
import { equal as arrayEqual } from '../array';

export const equal = (rangeA: Range): Predicate<[Range]> => {
  return arrayEqual(rangeA);
};
