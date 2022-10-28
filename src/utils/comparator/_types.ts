/**
 * A Comparator returns a `number` based on the comparison result of the two given values.
 *
 * | return value | sort order           |
 * | :------------| :------------------- |
 * | > 0          | valueA after valueB  |
 * | < 0          | valueA before valueB |
 * | === 0        | keep original order  |
 */
export type Comparator<T> = (valueA: T, valueB: T) => number;
