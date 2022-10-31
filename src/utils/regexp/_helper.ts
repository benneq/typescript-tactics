import { reduce } from '../iterable/reduce';

/**
 *
 * @example
 * mergeFlags(/a/, 'g') => /a/g
 * mergeFlags(/a/u, 'ug') => /a/ug
 *
 * @param regexp
 * @param flags
 * @returns
 */
export const mergeFlags = (regexp: RegExp, flags: string) => {
  return reduce(
    (acc, flag: string) => (acc.includes(flag) ? acc : acc + flag),
    regexp.flags
  )(flags);
};
