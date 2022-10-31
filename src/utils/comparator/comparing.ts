import { Mapper } from 'utils/func/_types';
import { Comparator } from './_types';

/**
 * Creates a Comparator using the provided Mapper
 *
 * @example
 * comparatorFor(person => person.age)({age: 1}, {age: 2}) => -1
 * comparatorFor(person => person.name, stringNaturalOrder)({name: "a"}, {name: ""}) => 1
 *
 * @param mapper
 * @param comparator
 * @returns a Comparator
 */
export const comparing = <T, R>(
  mapper: Mapper<T, R>,
  comparator: Comparator<R>
): Comparator<T> => {
  return (a, b) => comparator(mapper(a), mapper(b));
};
