import { Predicate } from '../predicate/_types';
import { direction } from './direction';
import { Range } from './_types';

export const isAscending: Predicate<[Range]> = (range) => {
  return direction(range) === 1;
};
