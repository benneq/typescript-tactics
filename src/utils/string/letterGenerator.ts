import { pipe } from '../function';
import { map } from '../iterable/map';
import { takeWhile } from '../iterable/takeWhile';
import { step } from '../number/step';

export const letterGenerator = (
  [rangeStart, rangeEnd]: [number, number],
  value = '',
  stepSize = 1
): Generator<string, void, unknown> => {
  let charCode = value.charCodeAt(0);

  if (isNaN(charCode)) {
    charCode = stepSize < 0 ? rangeEnd : rangeStart;
  }

  return pipe(
    takeWhile<number>((value) => value >= rangeStart && value <= rangeEnd),
    map(String.fromCharCode)
  )(step(charCode, stepSize));
};
