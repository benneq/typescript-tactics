import { direction } from './direction';
import { Range } from './_types';

export const shift = (range: Range, stepSize: number): Range => {
  const diff = direction(range) * stepSize;
  return [range[0] + diff, range[1] + diff];
};
