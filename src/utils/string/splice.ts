import { mod } from '../number/mod';

/**
 * Works like splice for Array
 *
 * @example
 * splice("aaa", "b") => "baa"
 * splice("aaa", "bbb", 1) => "abbb"
 * splice("aaa", "b", 0, 2) => "ba"
 *
 * @param str
 * @param start
 * @param deleteCount
 * @param replacement
 * @return the new String
 */
export const splice =
  (start = 0, deleteCount?: number, replacement = '') =>
  (str: string): string => {
    start = start < 0 ? mod(start, str.length) : start;
    deleteCount = Math.max(deleteCount ?? str.length - start, 0);
    return str.slice(0, start) + replacement + str.slice(start + deleteCount);
  };
