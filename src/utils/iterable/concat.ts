import { identity } from '../function/identity';
import { flatMap } from './flatMap';

type Concat = <T>(
  iterable: Iterable<Iterable<T>>
) => Generator<T, void, unknown>;

/**
 * Concatenates the provided Iterables
 *
 * @example
 * concat([[1,2],[3,4]]) => [1,2,3,4]
 */
export const concat: Concat = flatMap(identity);
