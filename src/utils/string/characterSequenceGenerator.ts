import { done } from '../generator/done';
import { pipe } from '../function';
import { map } from '../iterable/map';
import { takeWhile } from '../iterable/takeWhile';
import { numberSequenceGenerator } from '../number/numberSequenceGenerator';

export const characterSequenceGenerator = (
  [rangeStart, rangeEnd]: [number, number],
  value = '',
  stepSize = 1
): Generator<string, void, unknown> => {
  if (!stepSize) {
    return done;
  }

  let charCode = value.charCodeAt(0);

  if (isNaN(charCode)) {
    charCode = stepSize < 0 ? rangeEnd : rangeStart;
  }

  return pipe(
    takeWhile<number>((value) => value >= rangeStart && value <= rangeEnd),
    map(String.fromCharCode)
  )(numberSequenceGenerator(charCode, stepSize));
};
