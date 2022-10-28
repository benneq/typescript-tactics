import { mod } from '../number/mod';

export const normalizeIndex = (array: unknown[], index: number): number => {
  return mod(index, array.length);
};
