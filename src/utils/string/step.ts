import { splice } from './splice';
import { step as numberStep } from '../number/step';
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

    const startIndex = value ? characters.indexOf(value.at(-1)!) : 0;

    for (const index of numberStep(startIndex, stepSize)) {
      if (!isIndex(characters)(index)) {
        break;
      }

      value = splice(value, -1, 1, characters[index]);
      yield value;
    }

    if (stepSize > 0) {
      value = splice(value, -1, 1, characters.at(0)! + characters.at(0));
    } else {
      value = splice(value, -1, 1, '');
    }
  }
}
