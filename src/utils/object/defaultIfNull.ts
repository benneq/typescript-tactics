import { defaultIf } from './defaultIf';
import { isNull } from './isNull';

/**
 * If the provided value is `null` the defaultValue will be returned
 *
 * @example
 * defaultIfNull(0)(null) => 0
 * defaultIfNull(0)(2) => 2
 * defaultIfNull(() => 3)(null) => 3
 */
export const defaultIfNull = defaultIf(isNull);
