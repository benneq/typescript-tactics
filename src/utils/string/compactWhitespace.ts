import { whitespaceRegExp } from '../regexp/whitespaceRegExp';
import { global } from '../regexp/global';
import { times } from '../regexp/times';

/**
 *
 * @example
 * compactWhitespace('abc') => 'acb'
 * compactWhitespace('  a  b  ') => ' a b '
 *
 * @param str
 * @returns
 */
export const compactWhitespace = (str: string): string => {
  return str.replace(global(times(whitespaceRegExp, 2)), ' ');
};
