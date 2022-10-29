import { done } from '../generator/done';
import { pipe } from '../function';
import { map } from '../iterable/map';
import { takeWhile } from '../iterable/takeWhile';
import { numberSequenceGenerator } from '../number/numberSequenceGenerator';

/**
 * A Generator function that will iterate over a range of characters
 *
 * Only the first character of the provided string will be used.
 *
 * @example
 * characterSequenceGenerator(uppercaseAsciiLetterRange) => ['A','B',...,'Z']
 * characterSequenceGenerator(uppercaseAsciiLetterRange, 'D', -1) => ['D','C','B','A']
 * characterSequenceGenerator([67, 69], '', 1) => ['C','D','E']
 *
 * @param value
 * @returns a Generator that steps through the characters
 */
export const characterSequenceGenerator = (
  [rangeStart, rangeEnd]: [number, number],
  value = '',
  stepSize = 1
): Generator<string, void, unknown> => {
  if (!stepSize) {
    return done;
  }

  const charCode = value.length
    ? value.charCodeAt(0)
    : stepSize < 0
    ? rangeEnd
    : rangeStart;

  return pipe(
    takeWhile<number>((value) => value >= rangeStart && value <= rangeEnd),
    map(String.fromCharCode)
  )(numberSequenceGenerator(charCode, stepSize));
};
