import { isArray } from '../array';
import { isFloat } from '../number/isFloat';

export const isRange = (value: unknown): value is Range => {
  return isArray(value) && isFloat(value[0]) && isFloat(value[1]);
};
