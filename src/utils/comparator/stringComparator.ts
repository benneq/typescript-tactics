import { Comparator } from './_types';

/**
 *
 *
 *
 * @param locales
 * @param options
 * @returns
 */
export const stringComparator = (
  locales?: string | string[],
  options?: Intl.CollatorOptions
): Comparator<string> => {
  return (a, b) => a.localeCompare(b, locales, options);
};
