import { flipDirection } from './flipDirection';
import { isAscending } from './isAscending';
import { Range } from './_types';

export const toAscending = (range: Range): Range => {
  return isAscending(range) ? range : flipDirection(range);
};
