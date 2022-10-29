import { normalizeIndex } from '../array/normalizeIndex';

/**
 * Works like splice for Array
 *
 * @example
 * splice("aaa", "b") => "baa"
 * splice("aaa", "bbb", 1) => "abbb"
 * splice("aaa", "b", 0, 2) => "ba"
 *
 * @param str
 * @param replacement
 * @param startIndex
 * @param endIndex
 * @return the new String
 */
export const splice = (
  str: string,
  start = 0,
  deleteCount: number = str.length - start,
  replacement = ''
) => {
  start = normalizeIndex(str, start);
  deleteCount = deleteCount < 0 ? 0 : deleteCount;
  return str.slice(0, start) + replacement + str.slice(start + deleteCount);
};
