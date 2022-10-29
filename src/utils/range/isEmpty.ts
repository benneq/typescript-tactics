import { Predicate } from '../predicate/_types';
import { Range } from './_types';

export const isEmpty: Predicate<[Range]> = (range) => {
  return range[0] === range[1];
};
