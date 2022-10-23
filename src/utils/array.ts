import { isSet } from './set';

export const toArray = <T>(value: T | T[] | Set<T>): T[] => {
  return Array.isArray(value)
    ? value
    : isSet(value)
    ? Array.from(value)
    : [value];
};
