import { pipe } from '../function';
import { map } from '../iterable/map';
import { takeWhile } from '../iterable/takeWhile';
import { step } from '../number/step';

export function letterGenerator(
  charCodeRange: [number, number],
  value = '',
  stepSize = 1
): Generator<string, void, unknown> {
  let charCode = value.charCodeAt(0);

  if (isNaN(charCode)) {
    charCode = stepSize < 0 ? charCodeRange[1] : charCodeRange[0];
  }

  return pipe(
    takeWhile(
      (value: number) => value >= charCodeRange[0] && value <= charCodeRange[1]
    ),
    map(String.fromCharCode)
  )(step(charCode, stepSize));
}
