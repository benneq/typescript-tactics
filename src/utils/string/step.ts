import { splice } from './splice';
import { numberSequenceGenerator } from '../number/numberSequenceGenerator';
import { toArray } from '../iterable/toArray';
import { isIndex } from '../array';

export function* step(
  value: string,
  characterIterable: Iterable<string>,
  stepSize = 1
): Generator<string, void, unknown> {
  const characters = toArray(characterIterable);

  while (true) {
    if (!value && stepSize < 0) {
      return;
    }

    const startIndex = value ? characters.indexOf(value.at(-1) as string) : 0;

    for (const index of numberSequenceGenerator(startIndex, stepSize)) {
      if (!isIndex(characters)(index)) {
        break;
      }

      value = splice(value, -1, 1, characters[index]);
      yield value;
    }

    if (stepSize > 0) {
      value = splice(
        value,
        -1,
        1,
        (characters.at(0) as string) + characters.at(0)
      );
    } else {
      value = splice(value, -1, 1, '');
    }
  }
}
