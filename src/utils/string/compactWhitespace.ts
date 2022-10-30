import { atLeastOnce } from '../regexp/atLeastOnce';
import { whitespaceRegExp } from './whitespaceRegExp';
import { global } from '../regexp/global';

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
  return str.replace(global(atLeastOnce(whitespaceRegExp)), ' ');
};
