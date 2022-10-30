/**
 *
 * @example
 * compactWhitespace('abc') => 'acb'
 * compactWhitespace('  a  b  ') => ' a b '
 *
 * @param str
 * @returns
 */
export const compactWhitespace = (str: string) => {
  return str.replace(/\s+/g, ' ');
};
