import { Range } from './_types';

export const length = (range: Range): number => {
  return Math.abs(range[1] - range[0]);
};
