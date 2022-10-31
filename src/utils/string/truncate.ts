import { splice } from './splice';

/**
 * Truncates the string to the given maxLength (incl. suffix length).
 *
 * When separator is provided, it will look for the closest separator to truncate to
 *
 * @example
 * truncate("12345", 3) => "123"
 * truncate("12345", 6, '...') => "123..."
 * truncate("12 34 56", 4, '...', ' ') => "1..."
 * truncate("12 34 56", 10, '...', ' ') => "12 34..."
 *
 * @param str
 * @param maxLength
 * @param suffix
 * @param separator
 * @returns
 */
export const truncate = (
  str: string,
  maxLength: number,
  suffix = '',
  separator = ''
): string => {
  if (maxLength < suffix.length) {
    suffix = splice(suffix, maxLength - suffix.length);
  }

  maxLength = maxLength - suffix.length;

  const lastSeparatorIndex = str.slice(0, maxLength + 1).lastIndexOf(separator);

  const startIndex =
    separator && lastSeparatorIndex > 0 ? lastSeparatorIndex : maxLength;

  return splice(str, startIndex, str.length, suffix);
};
