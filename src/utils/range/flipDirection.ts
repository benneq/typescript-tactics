import { direction } from './direction';
import { Range } from './_types';

export const flipDirection = (range: Range): Range => {
  const diff = direction(range);
  return [range[1] - diff, range[0] - diff];
};
