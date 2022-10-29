import { flipDirection } from './flipDirection';
import { isDescending } from './isDescending';
import { Range } from './_types';

export const toDescending = (range: Range): Range => {
  return isDescending(range) ? range : flipDirection(range);
};
