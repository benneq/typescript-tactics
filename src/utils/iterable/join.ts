import { pipe } from '../function';
import {
  ValueOrProvider,
  valueOrProviderResult,
} from '../object/valueOrProvider';
import { flatMap } from './flatMap';
import { skip } from './skip';

export const join =
  <T>(separator: ValueOrProvider<T, [number]>) =>
  (iterable: Iterable<T>): Generator<T, void, unknown> => {
    let i = 0;
    return pipe(
      flatMap((value: T) => [valueOrProviderResult(separator, i++), value]),
      skip<T>(1)
    )(iterable);
  };
