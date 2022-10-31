import { identity } from '../func';
import { flatMap } from './flatMap';

/**
 * Concatenates the provided Iterables
 *
 * @example
 * concat([]) => []
 * concat([[1,2]]) => [1,2]
 * concat([[1,2],[3,4]]) => [1,2,3,4]
 */
export const concat: <T>(
  iterable: Iterable<Iterable<T>>
) => Generator<T, void, unknown> = flatMap(identity);
