import { identity } from '../function';
import { flatMap } from './flatMap';

type Concat = <T>(
  iterable: Iterable<Iterable<T>>
) => Generator<T, void, unknown>;

/**
 * Concatenates the provided Iterables
 */
export const concat: Concat = flatMap(identity);
